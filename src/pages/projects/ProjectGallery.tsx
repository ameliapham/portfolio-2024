import { useMemo } from "react";
import { projects, projectIds } from "./projects";
import type { PageRoute } from "./route";
import { routes } from "routes";
import { tss, keyframes } from "tss";
import { rotateArrayRight } from "utils/rotateArray";
import Button from "@mui/material/Button";

type Props = {
    className?: string;
    route: PageRoute;
    onSeeProjectDetails: () => void;
};

export function ProjectGallery(props: Props) {
    const { className, route, onSeeProjectDetails } = props;

    const { cx, classes } = useStyles();

    const rotatedProjects = useMemo(() => {
        let rotatedProjects = [...projects];

        while (rotatedProjects[1].id !== route.params.projectId) {
            rotatedProjects = rotateArrayRight(rotatedProjects);
        }

        return rotatedProjects;
    }, [route.params.projectId]);

    return (
        <div className={cx(classes.root, className)}>
            <div className={classes.slide}>
                {rotatedProjects.map(({ id, imageUrl, description, name }) => (
                    <div
                        key={name}
                        className={classes.item}
                        data-project-id={id}
                        style={{
                            backgroundImage: `url(${imageUrl})`,
                        }}
                    >
                        <div className={classes.content}>
                            <div className={classes.name}>{name}</div>
                            <div className={classes.des}>{description}</div>
                            <button onClick={onSeeProjectDetails}>See More</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className={classes.button}>
                    <Button
                        disabled={projectIds.indexOf(route.params.projectId) === 0}
                        {...routes[route.name]({
                            ...route.params,
                            projectId: projectIds[projectIds.indexOf(route.params.projectId) - 1]
                        }).link}
                    >
                        Previous
                    </Button>
                    <Button
                        disabled={projectIds.indexOf(route.params.projectId) === projectIds.length - 1}
                        {...routes[route.name]({
                            ...route.params,
                            projectId: projectIds[projectIds.indexOf(route.params.projectId) + 1]
                        }).link}
                    >
                        Next
                    </Button>
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

const TRANSITION_DURATION_SECONDS = 0.5;

const useStyles = tss
    .withName({ ProjectGallery })
    .withNestedSelectors<"content">()
    .create(({ classes }) => ({
        root: {
            background: "#f5f5f5",
            position: "relative"
        },
        slide: {},
        item: {
            width: "200px",
            height: "300px",
            position: "absolute",
            top: "50%",
            transform: "translate(0, -50%)",
            borderRadius: "20px",
            backgroundPosition: "50% 50%",
            backgroundSize: "cover",
            display: "inline-block",
            transition: `${TRANSITION_DURATION_SECONDS}s`,
            //transition: `${TRANSITION_DURATION_SECONDS}s width, ${TRANSITION_DURATION_SECONDS}s height, ${TRANSITION_DURATION_SECONDS}s top, ${TRANSITION_DURATION_SECONDS}s left`,
            "&:nth-child(1), &:nth-child(2)": {
                top: 0,
                left: 0,
                transform: "translate(0, 0)",
                borderRadius: 0,
                width: "100%",
                height: "100%"
            },
            "&:nth-child(3)": {
                left: "50%"
            },
            "&:nth-child(4)": {
                left: "calc(50% + 220px)"
            },
            "&:nth-child(5)": {
                left: "calc(50% + 440px)"
            },
            "&:nth-child(n + 6)": {
                left: "calc(50% + 660px)",
                opacity: 0,
                //display: "none"
            },

            [`&:nth-child(2) .${classes.content}`]: {
                display: "block"
            }
        },
        content: {
            position: "absolute",
            top: "50%",
            left: "100px",
            width: "300px",
            textAlign: "left",
            color: "#eee",
            transform: "translate(0, -50%)",
            display: "none",
            "& button": {
                padding: "10px 20px",
                border: "none",
                cursor: "pointer",
                opacity: 0,
                animation: `${animate} 1s ease-in-out 0.6s 1 forwards`
            }
        },
        name: {
            fontSize: "40px",
            textTransform: "uppercase",
            fontWeight: "bold",
            opacity: 0,
            animation: `${animate} 1s ease-in-out 1 forwards`
        },
        des: {
            marginTop: "10px",
            marginBottom: "20px",
            opacity: 0,
            animation: `${animate} 1s ease-in-out 0.3s 1 forwards`
        },
        button: {
            width: "100%",
            textAlign: "center",
            position: "absolute",
            bottom: "20px",
            "& button": {
                width: "40px",
                height: "35px",
                borderRadius: "8px",
                cursor: "pointer",
                margin: "0 5px",
                border: "1px solid #000",
                transition: "0.3s",
                "&:hover": {
                    background: "#ababab",
                    color: "#fff"
                }
            }
        }
    }));
