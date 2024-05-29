import { tss } from "tss-react/mui";
import { ItemData } from "data/projectData"
import Typography from "@mui/material/Typography";

type Props = {
    className?: string;
    itemData: ItemData;
    onHover?: () => void;
    onClick?: () => void;
};

export function BoxItem(props: Props) {

    const { className, itemData, onClick } = props;
    const { cx, classes } = useStyles();

    return (
        <div
            className={classes.root}
            onClick={onClick}
        >
            <div className={cx(classes.box, className)}></div>
            <div className={classes.text}>
                <Typography variant="h5">
                    {itemData.name}
                </Typography>
                <Typography variant="caption">
                    {itemData.year}
                </Typography>
            </div>

        </div>

    )
}

const useStyles = tss
    .create(({ theme }) => {

        const sideLength = "200px";
        const diagonalLength = Math.sqrt(2) * parseInt(sideLength);

        const left = "30%";

        return {
            "root": {
                "boxSizing": "border-box",
                "position": "absolute",
                "top": "60%",
                "display": "flex",
                "flexDirection": "column",
                "gap": "20px",
                "transition": "0.5s",

                "&:nth-of-type(1)": {
                    "left": left,
                },

                "&:nth-of-type(2)": {
                    "left": `calc(${left} + 240px)`,
                },


                "&:nth-of-type(3)": {
                    "left": `calc(${left} + 480px)`,
                },

                "&:nth-of-type(4)": {
                    "left": `calc(${left} + 720px)`,
                },

                "&:nth-of-type(5)": {
                    "left": `calc(${left} + 960px)`,
                },

                "&:nth-of-type(n + 6)": {
                    "left": `calc(${left} + 1200px)`,
                    "opacity": 0,
                },


            },
            "box": {
                "width": sideLength,
                "height": sideLength,
                "background": "transparent",
                "border": "1px solid grey",
                "borderRadius": "10px",
                "position": "relative",
                "overflow": "hidden",
                "cursor": "pointer",

                "&::before, &::after": {
                    "content": "''",
                    "position": "absolute",
                    "backgroundColor": "grey",
                },

                "&::before": {
                    "width": diagonalLength,
                    "height": "1px",
                    "top": 0,
                    "left": 0,
                    "transform": "rotate(45deg)",
                    "transformOrigin": "top left"
                },

                "&::after": {
                    "width": "1px",
                    "height": diagonalLength,
                    "top": 0,
                    "right": 0,
                    "transform": "rotate(45deg)",
                    "transformOrigin": "top right"
                },
            },
            "text": {
                "color": theme.palette.text.primary,
                "textTransform": "uppercase",
            },
        }
    });