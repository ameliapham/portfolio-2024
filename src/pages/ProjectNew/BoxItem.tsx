import { tss } from "tss-react/mui";
import { ItemData } from "./ItemData"
import Typography from "@mui/material/Typography";

type Props = {
    className?: string;
    itemData: ItemData;
    onHover?: () => void;
    onClick?: () => void;
};

export function BoxItem(props: Props) {

    const { className, itemData } = props;
    const { cx, classes } = useStyles();

    return (
        <div className={classes.root}>
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

        return {
            "root": {
                "display": "flex",
                "flexDirection": "column",
                "gap": "20px",
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
                }
            },
            "text": {
                "color": theme.palette.text.primary,
                "textTransform": "uppercase",
            },
        }
    });