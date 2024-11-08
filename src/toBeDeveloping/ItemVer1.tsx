import { keyframes } from "tss-react";
import { tss } from "tss-react/mui";
import { type Project } from "pages/projects/projectsData";
import Typography from "@mui/material/Typography";
import { SeeMoreButton } from "shared/SeeMoreButton";

type ItemProps = {
    className?: string;
    project: Project;
    onClick?: (src: string) => void;
};

export function Item(props: ItemProps) {
    const { className, project } = props;
    const { cx, classes } = useStyles();

    return (
        <div
            className={cx(classes.root, className)}
            style={{ backgroundImage: `url(${project.imageUrl})` }}
        >
            <div className={classes.content}>
                <Typography variant="body1" className={classes.year}>
                    {project.year}
                </Typography>
                <Typography variant="h2" className={classes.name}>
                    {project.name}
                </Typography>
                <Typography variant="body1" className={classes.des}>
                    {project.description}
                </Typography>
                <SeeMoreButton onClick={() => {}}>See More</SeeMoreButton>
            </div>
        </div>
    );
}

const animate = keyframes({
    from: {
        opacity: 0,
        transform: "translate(0, 100px)",
        filter: "blur(200px)"
    },
    to: {
        opacity: 1,
        transform: "translate(0)",
        filter: "blur(0)"
    }
});

const useStyles = tss
    .withName({ Item })
    .withNestedSelectors<"content">()
    .create(({ classes, theme }) => {
        const sideLength = "200px";
        const left = "65%";

        return {
            root: {
                boxSizing: "border-box",
                width: sideLength,
                height: `calc(${sideLength} * 1.2)`,
                position: "absolute",
                top: "75%",
                transform: "translate(0, -50%)",
                borderRadius: "10px",
                backgroundPosition: "50% 50%",
                backgroundSize: "cover",
                transition: "0.5s ",
                overflow: "hidden",

                "&:nth-of-type(1), &:nth-of-type(2)": {
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
                        backdropFilter: "brightness(91%)",
                        zIndex: 1
                    }
                },

                "&:nth-of-type(3)": {
                    left: left,
                    zIndex: 2
                },

                "&:nth-of-type(4)": {
                    left: `calc(${left} + 240px)`
                },

                "&:nth-of-type(5)": {
                    left: `calc(${left} + 480px)`
                },

                "&:nth-of-type(6)": {
                    left: `calc(${left} + 720px)`
                },

                "&:nth-of-type(n + 7)": {
                    left: `calc(${left} + 960px)`,
                    opacity: 0
                },

                [`&:nth-of-type(2) .${classes.content}`]: {
                    display: "block"
                }
            },
            content: {
                position: "absolute",
                top: "50%",
                left: theme.spacing(10),
                width: "30%",
                textAlign: "left",
                transform: "translate(0, -50%)",
                display: "none",
                color: theme.palette.text.primary,
                zIndex: 2,
                padding: theme.spacing(5),
                borderRadius: "10px",
                backdropFilter: "brightness(70%)",

                "& button": {
                    opacity: 0,
                    animation: `${animate} 1s ease-in-out 0.6s 1 forwards`
                }
            },
            name: {
                opacity: 0,
                animation: `${animate} 1s ease-in-out 1 forwards`
            },
            year: {
                opacity: 0,
                animation: `${animate} 1s ease-in-out 0.2s 1 forwards`
            },
            des: {
                marginTop: "20px",
                marginBottom: "20px",
                opacity: 0,
                animation: `${animate} 1s ease-in-out 0.3s 1 forwards`
            }
        };
    });
