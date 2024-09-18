import { keyframes } from "tss-react";
import { tss } from "tss-react/mui";
import { ItemData } from "data/projectData";
import { SeeMoreButton } from "shared/SeeMoreButton";
import Typography from "@mui/material/Typography";

type Props = {
    className?: string;
    itemData: ItemData;
    position: number;
    onClick?: () => void;
};

export function Item(props: Props) {
    const { className, itemData, position, onClick } = props;
    const { cx, classes } = useStyles({ position });

    return (
        <div className={cx(classes.root, className)} style={{ backgroundImage: `url(${itemData.img})` }}>
            <div className={classes.content}>
                <Typography variant="body1" className={classes.year}>
                    {itemData.year}
                </Typography>
                <Typography variant="h2" className={classes.name}>
                    {itemData.name}
                </Typography>
                <Typography variant="body1" className={classes.des}>
                    {itemData.des}
                </Typography>
                <SeeMoreButton onClick={onClick}>See More</SeeMoreButton>
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
        filter: "blur(10px)"
    },
    to: {
        opacity: 1,
        filter: "blur(0)"
    }
});

const useStyles = tss
    .withName({ Item })
    .withParams<{ position: number }>()
    .withNestedSelectors<"content">()
    .create(({ classes, position, theme }) => {
        const sideLength = "200px";
        const left = "58%";

        return {
            root: {
                width: sideLength,
                height: `calc(${sideLength} * 1.2)`,
                position: "absolute",
                top: "75%",
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
                transform: "translate(0, -50%)",
                width: "30%",
                textAlign: "left",
                color: theme.palette.text.primary,
                display: "none",
                padding: theme.spacing(5),
                borderRadius: "10px",
                backdropFilter: "brightness(70%)",
                opacity: 0,
                animation: `${animateContent} 1s ease-in-out 0s 1 forwards`,

                "& button": {
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
            year: {
                opacity: 0,
                animation: `${animate} 1s ease-in-out 0.2s 1 forwards`
            }
        };
    });
