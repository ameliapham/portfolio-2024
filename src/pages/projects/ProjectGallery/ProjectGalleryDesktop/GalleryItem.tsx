import { keyframes } from "tss-react";
import { tss } from "tss-react/mui";
import { Project } from "pages/projects/projectsData";
import { SeeMoreButton } from "shared/SeeMoreButton";
import Typography from "@mui/material/Typography";

type Props = {
    className?: string;
    project: Project;
    position: number;
    onClick?: () => void;
};

export function GalleryItem(props: Props) {
    const { className, project: itemData, position, onClick } = props;
    const { cx, classes } = useStyles({ position });

    return (
        <div
            className={cx(classes.root, className)}
            style={{ backgroundImage: `url(${itemData.imageUrl})` }}
        >
            <div className={classes.content} onClick={onClick}>
                <Typography variant="body1" className={classes.year}>
                    {itemData.year}
                </Typography>
                <Typography variant="h2" className={classes.name}>
                    {itemData.name}
                </Typography>
                <Typography variant="body1" className={classes.des}>
                    {itemData.description}
                </Typography>
                <SeeMoreButton onClick={onClick} className={classes.seeMoreButton}>
                    See More
                </SeeMoreButton>
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
    .withName({ GalleryItem })
    .withParams<{ position: number }>()
    .withNestedSelectors<"content" | "seeMoreButton">()
    .create(({ classes, position, theme }) => {
        const sideLength = "200px";
        const left = "58%";

        return {
            root: {
                width: sideLength,
                height: `calc(${sideLength} * 1)`,
                position: "absolute",
                top: "80%",
                transform: "translate(0, -50%)",
                borderRadius: "10px",
                backgroundPosition: "50% 50%",
                backgroundSize: "cover",
                display: "inline-block",
                transition: "0.5s",
                ...(() => {
                    const oneAndTwo = {
                        top: 0,
                        left: 0,
                        transform: "translate(0, 0)",
                        borderRadius: 0,
                        width: "100%",
                        height: "100%"
                    } as const;

                    switch (position) {
                        case 1:
                            return oneAndTwo;
                        case 2:
                            return {
                                ...oneAndTwo,
                                [`& .${classes.content}`]: {
                                    display: "block"
                                }
                            };
                        case 3:
                            return {
                                left: left
                            };
                        case 4:
                            return {
                                left: `calc(${left} + 240px)`
                            };
                        case 5:
                            return {
                                left: `calc(${left} + 480px)`
                            };
                        case 6:
                            return {
                                left: `calc(${left} + 720px)`
                            };
                        default:
                            return {
                                left: `calc(${left} + 960px)`,
                                opacity: 0
                            };
                    }
                })()
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
                        //width: theme.spacing(3)
                    }
                }
            },
            seeMoreButton: {},

            name: {
                fontSize: "40px",
                textTransform: "uppercase",
                fontWeight: "bold",
                opacity: 0,
                animation: `${animate} 0.6s ease-in-out 0s 1 forwards`
            },
            des: {
                marginTop: "10px",
                marginBottom: "20px",
                opacity: 0,
                animation: `${animate} 0.6s ease-in-out 0.3s 1 forwards`
            },
            year: {
                opacity: 0,
                animation: `${animate} 0.6s ease-in-out 0.2s 1 forwards`
            }
        };
    });
