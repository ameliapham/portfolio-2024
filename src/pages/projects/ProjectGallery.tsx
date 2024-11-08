import { useMemo } from "react";
import { projects } from "./projectsData";
import type { PageRoute } from "./route";
import { rotateArrayRight } from "utils/rotateArray";
import { routes } from "routes";
import { tss, keyframes } from "tss";
import { alpha, LinearProgress } from "@mui/material";
import { NextButton, PreviousButton } from "shared/NavButton";
import { projectIds } from "./projectsData";
import { SeeMoreButton } from "shared/SeeMoreButton";
import Typography from "@mui/material/Typography";
import { useDelay } from "utils/useDelay";
import { SplashScreen } from "shared/SplashScreen";

type Props = {
    className?: string;
    onSeeProjectDetails: () => void;
    route: PageRoute;
};

export function ProjectGallery(props: Props) {
    const { className, route, onSeeProjectDetails } = props;

    const { cx, classes, css } = useStyles();

    const rotatedProjects = useMemo(() => {
        let rotatedProjects = [...projects];

        while (rotatedProjects[1].id !== route.params.projectId) {
            rotatedProjects = rotateArrayRight(rotatedProjects);
        }

        return rotatedProjects;
    }, [route.params.projectId]);

    const { isDelayed } = useDelay(5_000);

    if (isDelayed) {
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
                {rotatedProjects.map(({ id, imageUrl, description, name, year }) => (
                    <div
                        key={name}
                        className={classes.item}
                        data-project-id={id}
                        style={{
                            backgroundImage: `url(${imageUrl})`
                        }}
                    >
                        <div className={classes.content} onClick={onSeeProjectDetails}>
                            <Typography variant="body1" className={classes.year}>
                                {year}
                            </Typography>
                            <Typography variant="h2" className={classes.name}>
                                {name}
                            </Typography>
                            <Typography variant="body1" className={classes.description}>
                                {description}
                            </Typography>
                            <SeeMoreButton onClick={onSeeProjectDetails} className={classes.seeMoreButton}>
                                See More
                            </SeeMoreButton>
                        </div>
                    </div>
                ))}
            </div>
            <div className={classes.progressNavBar}>
                <div className={classes.buttons}>
                    <PreviousButton
                        //disabled={projectIds.indexOf(route.params.projectId) === 0}
                        {...routes[route.name]({
                            ...route.params,
                            projectId: projectIds[projectIds.indexOf(route.params.projectId) - 1]
                        }).link}
                    >
                        Previous
                    </PreviousButton>
                    <NextButton
                        //disabled={projectIds.indexOf(route.params.projectId) === projectIds.length - 1}
                        {...routes[route.name]({
                            ...route.params,
                            projectId: projectIds[projectIds.indexOf(route.params.projectId) + 1]
                        }).link}
                    >
                        Next
                    </NextButton>
                </div>
                <LinearProgress
                    className={classes.progressBar}
                    variant="determinate"
                    value={(() => {
                        const totalProjects = projectIds.length;
                        const currentProjectIndex = projectIds.indexOf(route.params.projectId);
                        if (currentProjectIndex === -1) return 0;
                        return ((currentProjectIndex + 1) / totalProjects) * 100; 
                    })()}
                />
            </div>
        </div>
    );
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
    .withNestedSelectors<"content" | "seeMoreButton">()
    .create(({ classes, theme }) => {
        const sideLength = "200px";
        const left = "58%";

        return {
            root: {
                background: "#f5f5f5",
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
            slide: {
            },
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
                },

                [`&:nth-child(2) .${classes.content}`]: {
                    display: "block"
                },
            },
            content: {
                position: "absolute",
                top: "50%",
                left: theme.spacing(10),
                width: "40%",
                textAlign: "left",
                color: theme.palette.text.primary,
                display: "none",
                padding: theme.spacing(5),
                borderRadius: "10px",
                backdropFilter: "brightness(60%) blur(0px)",
                opacity: 0,
                animation: `${animateContent} 0.5s ease-in-out 0s 1 forwards`,
                cursor: "pointer",
                transition: "all 0.4s ease",

                "& button": {
                    opacity: 0,
                    animation: `${animate} 0.6s ease-in-out 0.6s 1 forwards`
                },

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
            progressNavBar: {
                width: "100%",
                border: "1px solid #f5f5f5",
                position: "absolute",
                left: "50%",
                bottom: 0,
                transform: "translate(-50%, 0)",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: "30px",
            },
            progressBar: {
                width: "30%",
                zIndex: 2,
                borderRadius: "5px",
                backgroundColor: alpha(theme.palette.text.primary, 0.2),

                "& .MuiLinearProgress-bar": {
                    background: "linear-gradient(to right, transparent, #6366f1, #0ea5e9)"
                }
            },
            buttons: {
                display: "flex",
                gap: "20px"
            },
        }
    });