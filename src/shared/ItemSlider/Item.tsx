import { keyframes } from "tss-react";
import { tss } from "tss-react/mui";
import { type ItemData } from "data/projectData";
import Typography from "@mui/material/Typography";
import { SeeMoreButton } from "./SeeMoreButton";


type ItemProps = {
    className?: string;
    itemData: ItemData;
    onMouseEnter: () => void;
}

export function Item(props: ItemProps) {
    const { className, itemData, onMouseEnter } = props;
    const { cx, classes } = useStyles();

    return (
        <div
            className={cx(classes.item, className)}
            style={({ backgroundImage: `url(${itemData.img})` })}
            onMouseEnter={onMouseEnter}
        >
            <div className={classes.content}>
                <Typography
                    variant="h2"
                    className={classes.name}
                >
                    {itemData.name}
                </Typography>
                <Typography
                    variant="body1"
                    className={classes.des}
                >
                    {itemData.des}
                </Typography>
                <SeeMoreButton>
                    See More
                </SeeMoreButton>
            </div>
        </div >
    );
}

const animate = keyframes({
    "from": {
        "opacity": 0,
        "transform": "translate(0, 100px)",
        "filter": "blur(33px)"
    },
    "to": {
        "opacity": 1,
        "transform": "translate(0)",
        "filter": "blur(0)"
    }
});

const useStyles = tss
    .withName({ Item })
    .withNestedSelectors<"content">()
    .create(({ classes, theme }) => ({
        "item": {
            "boxSizing": "border-box",
            "width": "250px",
            "height": theme.spacing(35),
            "position": "absolute",
            "top": "50%",
            "transform": "translate(0, -50%)",
            "borderRadius": "10px",
            "backgroundPosition": "50% 50%",
            "backgroundSize": "cover",
            "transition": "0.5s",

            "&:nth-of-type(1), &:nth-of-type(2)": {
                "top": 0,
                "left": 0,
                "transform": "translate(0, 0)",
                "borderRadius": 0,
                "width": "100%",
                "height": "100%",
            },

            "&:nth-of-type(3)": {
                "left": "50%",
            },

            "&:nth-of-type(4)": {
                "left": "calc(50% + 280px)",
            },

            "&:nth-of-type(5)": {
                "left": "calc(50% + 560px)",
            },

            "&:nth-of-type(n + 6)": {
                "left": "calc(50% + 840px)",
                "opacity": 0,
            },

            [`&:nth-of-type(2) .${classes.content}`]: {
                "display": "block"
            }

        },
        "content": {
            "position": "absolute",
            "top": "50%",
            "left": theme.spacing(10),
            "width": "300px",
            "textAlign": "left",
            "transform": "translate(0, -50%)",
            "display": "none",
            "color": theme.palette.text.primary,

            "& button": {
                "opacity": 0,
                "animation": `${animate} 1s ease-in-out 0.6s 1 forwards`,
            }
        },
        "name": {
            "opacity": 0,
            "animation": `${animate} 1s ease-in-out 1 forwards`,
        },
        "des": {
            "marginTop": "20px",
            "marginBottom": "20px",
            "opacity": 0,
            "animation": `${animate} 1s ease-in-out 0.3s 1 forwards`,

        }
    }));