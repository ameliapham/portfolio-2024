import { useMemo } from "react";
import { projects } from "./projectsData";
import type { PageRoute } from "./route";
import { rotateArrayRight } from "utils/rotateArray";
import { routes } from "routes";
import { tss, keyframes } from "tss";
import { projectIds } from "./projectsData";
import { SeeMoreButton } from "shared/SeeMoreButton";
import Typography from "@mui/material/Typography";
import { SplashScreen } from "shared/SplashScreen";
import { NavComponent } from "shared/NavComponent";
import { useDownloadAssets } from "utils/useDownloadAssets";
import { useDelayOnlyOnce } from "utils/useDelayOnlyOnce";
import { detailImagesByProjectId } from "./projectsData";
import type { Link } from "type-route";

type Props = {
    className?: string;
    route: PageRoute;
};

const projectAssetUrls = projects.map(project => project.imageUrl);

const allDetailImagesUrls = Object.values(detailImagesByProjectId)
    .map(detailImages => Object.values(detailImages))
    .flat();

export function ProjectGallery(props: Props) {
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
                                    <SeeMoreButton
                                        className={classes.seeMoreButton}
                                        {...routes[route.name]({
                                            ...route.params,
                                            isGalleryVisible: false
                                        }).link}
                                    >
                                        See More
                                    </SeeMoreButton>
                                </a>
                            );
                        })()}
                    </Item>
                ))}
            </div>

            <NavComponent
                className={classes.navComponent}
                previousLink={
                    projectIds.indexOf(route.params.projectId) > 0
                        ? routes[route.name]({
                              ...route.params,
                              projectId: projectIds[projectIds.indexOf(route.params.projectId) - 1]
                          }).link
                        : undefined
                }
                nextLink={
                    projectIds.indexOf(route.params.projectId) < projectIds.length - 1
                        ? routes[route.name]({
                              ...route.params,
                              projectId: projectIds[projectIds.indexOf(route.params.projectId) + 1]
                          }).link
                        : undefined
                }
                processPercentage={
                    (projectIds.indexOf(route.params.projectId) / (projectIds.length - 1)) * 100
                }
            />
        </div>
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
        transform: "translate(-100px, 0px)",
        filter: "blur(10px)"
    },
    to: {
        opacity: 1,
        transform: "translate(0, -50%)",
        filter: "blur(0)"
    }
});

const useStyles = tss
    .withName({ ProjectGallery })
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
                width: "40%",
                textAlign: "left",
                color: theme.palette.text.primary,
                padding: theme.spacing(5),
                borderRadius: "10px",
                backdropFilter: "brightness(60%) blur(0px)",
                opacity: 0,
                animation: `${animateContent} 0.3s ease-in-out 0.2s 1 forwards`,
                cursor: "pointer",
                transition: "all 0.4s ease",
                textDecoration: "none",

                "&:hover": {
                    backdropFilter: "brightness(30%)",
                    top: `calc(50% - 10px)`,
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
                }
            },
            seeMoreButton: {
                opacity: 0,
                animation: `${animate} 0.6s ease-in-out 0.6s 1 forwards`
            },
            name: {
                fontSize: "40px",
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
