import { useMemo } from "react";
import { rotateArrayRight } from "utils/rotateArray";
import { routes } from "routes";
import { tss, keyframes } from "tss";
import { projects, projectIds, detailImagesByProjectId } from "../projectsData";
import { SeeMoreButton } from "shared/SeeMoreButton";
import Typography from "@mui/material/Typography";
import { SplashScreen } from "shared/SplashScreen";
import { ProgressComponent } from "shared/ProgressComponent";
import { useDownloadAssets } from "utils/useDownloadAssets";
import { useDelayOnlyOnce } from "utils/useDelayOnlyOnce";
import type { Link } from "type-route";
import type { Props } from "../Props";
import { assert, is } from "tsafe/assert";
import { useScrollNavigation } from "utils/useScrollNavigation";
import { waitForThrottleFactory } from "utils/waitForThrottle";
import { getNextProjectId } from "../projectsData";
import { getPreviousProjectId } from "../projectsData"

const projectAssetUrls = projects.map(project => project.imageUrl);

const allDetailImagesUrls = Object.values(detailImagesByProjectId)
    .map(detailImages => Object.values(detailImages))
    .flat();

export default function ProjectGalleryDesktop(props: Props) {
    const { className, route } = props;

    const { cx, classes, css } = useStyles();

    const rotatedProjects = useMemo(() => {
        let rotatedProjects = [...projects];

        while (rotatedProjects[1].id !== route.params.projectId) {
            rotatedProjects = rotateArrayRight(rotatedProjects);
        }

        return rotatedProjects;
    }, [route.params.projectId]);

    const { isDownloadingAssets } = useDownloadAssets({
        urls: projectAssetUrls
    });

    useDownloadAssets({
        urls: allDetailImagesUrls
    });

    const { isDelayed } = useDelayOnlyOnce();

    const previousLink = (() => {

        const previousRoute = routes[route.name]({
            ...route.params,
            projectId: getPreviousProjectId(route.params.projectId)
        });

        return {
            href: previousRoute.link.href,
            onClick: async (event?: React.MouseEvent | undefined) => {
                event?.preventDefault();

                await waitForThrottle_animation();

                assert(is<HTMLElement | undefined>(event?.target));

                const contentElement = document.querySelector(`.${classes.content}`);

                assert(contentElement !== null);
                assert(is<HTMLElement>(contentElement));

                contentElement.style.display = "none";

                const items = document.querySelectorAll(`.${classes.item}`);
                document.querySelector(`.${classes.slide}`)!.prepend(items[items.length - 1]);

                setTimeout(() => {
                    previousRoute.push();
                }, ANIMATION_DURATION_MS);
            }
        };
    })();

    const nextRoute =
            routes[route.name]({
                  ...route.params,
                  projectId : getNextProjectId(route.params.projectId)
              })
            ;

    useScrollNavigation(async direction => {
        switch (direction) {
            case "up":
                previousLink.onClick();
                break;
            case "down":
                nextRoute.push();
                break;
        }
    });

    if (isDownloadingAssets || isDelayed) {
        return (
            <div
                className={css({
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                })}
            >
                <SplashScreen className={css({ width: "50%" })} />
            </div>
        );
    }

    return (
        <>
            {/* 
            NOTE: This block is an optimization so that the browser have the image in cache
            in full size so that the transition from small to big can be smooth 
            */}
            <div style={{ position: "absolute", width: "100%", height: "100%", zIndex: -1000 }}>
                {rotatedProjects.map(({ imageUrl }) => {
                    return (
                        <img
                            style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                objectFit: "cover"
                            }}
                            key={imageUrl}
                            src={imageUrl}
                        />
                    );
                })}
            </div>
            <div className={cx(classes.root, className)}>
                <div className={classes.slide}>
                    {rotatedProjects.map(({ id, imageUrl, description, name, year }, i) => (
                        <Item
                            key={name}
                            className={classes.item}
                            backgroundImage={imageUrl}
                            link={
                                i === 0 || i === 1
                                    ? undefined
                                    : routes[route.name]({
                                          ...route.params,
                                          projectId: id
                                      }).link
                            }
                        >
                            {(() => {
                                if (i !== 1) {
                                    return null;
                                }
                                return (
                                    <a
                                        className={classes.content}
                                        {...routes[route.name]({
                                            ...route.params,
                                            isGalleryVisible: false
                                        }).link}
                                    >
                                        <Typography variant="body1" className={classes.year}>
                                            {year}
                                        </Typography>
                                        <Typography variant="h2" className={classes.name}>
                                            {name}
                                        </Typography>
                                        <Typography variant="body1" className={classes.description}>
                                            {description}
                                        </Typography>
                                        <SeeMoreButton className={classes.seeMoreButton}>
                                            See More
                                        </SeeMoreButton>
                                    </a>
                                );
                            })()}
                        </Item>
                    ))}
                </div>

                <ProgressComponent
                    className={classes.navComponent}
                    previousLink={previousLink}
                    nextLink={nextRoute.link}
                    processPercentage={
                        (projectIds.indexOf(route.params.projectId) / (projectIds.length - 1)) * 100
                    }
                />
            </div>
        </>
    );
}

function Item(props: {
    className?: string;
    backgroundImage: string;
    link: Link | undefined;
    children: React.ReactNode;
}) {
    const { className, backgroundImage, link, children } = props;

    const styles = { backgroundImage: `url(${backgroundImage})` };

    if (link === undefined) {
        return (
            <a className={className} style={styles}>
                {children}
            </a>
        );
    } else {
        return (
            <a className={className} style={styles} {...link}>
                {children}
            </a>
        );
    }
}

const animate = keyframes({
    from: {
        opacity: 0,
        transform: "translate(0, 100px)",
        filter: "blur(33px)"
    },
    to: {
        opacity: 1,
        transform: "translate(0)",
        filter: "blur(0)"
    }
});

const animateContent = keyframes({
    from: {
        opacity: 0,
        filter: "blur(10px)"
    },
    to: {
        opacity: 1,
        filter: "blur(0)"
    }
});

const ANIMATION_DURATION_MS = 500;

const { waitForThrottle: waitForThrottle_animation } = waitForThrottleFactory({
    delay: ANIMATION_DURATION_MS
});

const useStyles = tss
    .withName({ ProjectGalleryDesktop })
    .withNestedSelectors<"seeMoreButton">()
    .create(({ classes, theme }) => {
        const sideLength = "200px";
        const left = "58%";

        return {
            root: {
                position: "relative",
                overflow: "hidden",
                animation: `${keyframes`
                    0% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                    `} 1s`
            },
            slide: {},
            item: {
                width: sideLength,
                height: `calc(${sideLength} * 1)`,
                position: "absolute",
                top: "70%",
                transform: "translate(0, -50%)",
                borderRadius: "10px",
                backgroundPosition: "50% 50%",
                backgroundSize: "cover",
                display: "inline-block",
                transition: "0.5s",

                "&:nth-child(1), &:nth-child(2)": {
                    top: 0,
                    left: 0,
                    transform: "translate(0, 0)",
                    borderRadius: 0,
                    width: "100%",
                    height: "100%",

                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backdropFilter: "brightness(70%)",
                        zIndex: -1
                    }
                },

                "&:nth-child(3)": {
                    left: left
                },
                "&:nth-child(4)": {
                    left: `calc(${left} + 240px)`
                },
                "&:nth-child(5)": {
                    left: `calc(${left} + 480px)`
                },
                "&:nth-child(6)": {
                    left: `calc(${left} + 720px)`
                },
                "&:nth-child(n + 7)": {
                    left: `calc(${left} + 960px)`,
                    opacity: 0
                }
            },
            content: {
                display: "block",
                position: "absolute",
                top: "50%",
                left: theme.spacing(10),
                transform: "translate(0, -50%)",
                width: "40%",
                textAlign: "left",
                color: theme.palette.text.primary,
                padding: theme.spacing(5),
                borderRadius: "10px",
                backdropFilter: "brightness(60%) blur(0px)",
                opacity: 0,
                animation: `${animateContent} 0.3s ease-in-out 0.3s 1 forwards`,
                cursor: "pointer",
                transition: "all 0.4s ease",
                textDecoration: "none",

                "&:hover": {
                    backdropFilter: "brightness(30%)",
                    top: `calc(50% - 2px)`,
                    transition: "all 0.5s ease"
                },

                [`&:hover .${classes.seeMoreButton}`]: {
                    "&::before": {
                        right: "0",
                        transform: "translateX(50px)",
                        width: theme.spacing(3)
                    },
                    "& span": {
                        transform: "translateX(20px)",
                        transition: "all 0.4s ease"
                    }
                },

                [theme.breakpoints.down("laptop")]: {
                    width: "80%",
                    left: theme.spacing(10),
                    top: "35%",

                    "&:hover": {
                        top: `calc(35% - 2px)`
                    }
                },

                [theme.breakpoints.only("mobile")]: {
                    display: "none"
                }
            },
            seeMoreButton: {
                opacity: 0,
                animation: `${animate} 0.6s ease-in-out 0.6s 1 forwards`
            },
            name: {
                textTransform: "uppercase",
                fontWeight: "bold",
                opacity: 0,
                animation: `${animate} 0.6s ease-in-out 0s 1 forwards`
            },
            description: {
                marginTop: "10px",
                marginBottom: "20px",
                opacity: 0,
                animation: `${animate} 0.6s ease-in-out 0.3s 1 forwards`
            },
            year: {
                opacity: 0,
                animation: `${animate} 0.6s ease-in-out 0.2s 1 forwards`
            },
            navComponent: {
                width: "100%",
                position: "absolute",
                bottom: 0,
                padding: `0 ${theme.spacing(10)} ${theme.spacing(4)} ${theme.spacing(10)}`
            }
        };
    });
