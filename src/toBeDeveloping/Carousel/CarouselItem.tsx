import { tss } from "tss-react/mui";
import { ItemData } from "pages/Project/projectData";
import Typography from "@mui/material/Typography";

type Props = {
    className?: string;
    itemData: ItemData;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClick: () => void;
    selected?: boolean;
};

export function CarouselItem(props: Props) {
    const { className, itemData, onClick, onMouseEnter, onMouseLeave, selected } = props;
    const { cx, classes } = useStyles({ itemData });

    return (
        <div
            className={cx(classes.root, { [classes.selected]: selected })}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className={cx(classes.box, className, { [classes.selectedBox]: selected })}></div>
            <div className={classes.text}>
                <Typography variant="h5">{itemData.name}</Typography>
                <Typography variant="caption">{itemData.year}</Typography>
            </div>
        </div>
    );
}

const useStyles = tss
    .withName({ BoxItem: CarouselItem })
    .withParams<{ itemData: ItemData }>()
    .withNestedSelectors<"box">()
    .create(({ theme, itemData, classes }) => {
        const sideLength = "200px";
        const diagonalLength = Math.sqrt(2) * parseInt(sideLength);

        const left = "30%";

        return {
            root: {
                boxSizing: "border-box",
                position: "absolute",
                top: "60%",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                transition: "0.5s",

                "&:nth-of-type(1)": {
                    left: left
                },
                "&:nth-of-type(2)": {
                    left: `calc(${left} + 240px)`
                },
                "&:nth-of-type(3)": {
                    left: `calc(${left} + 480px)`
                },
                "&:nth-of-type(4)": {
                    left: `calc(${left} + 720px)`
                },
                "&:nth-of-type(5)": {
                    left: `calc(${left} + 960px)`
                },
                "&:nth-of-type(n + 6)": {
                    left: `calc(${left} + 1200px)`,
                    opacity: 0
                },

                "&:hover": {
                    top: "55%"
                },

                [`&:hover .${classes.box}`]: {
                    transition: "1s ease",
                    backgroundImage: `url(${itemData.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                },

                [`&:hover .${classes.box}::before, &:hover .${classes.box}::after`]: {
                    transition: "0.2s",
                    width: "0",
                    height: "0"
                }
            },
            box: {
                width: sideLength,
                height: sideLength,
                border: "1px solid grey",
                borderRadius: "10px",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                transition: "background 0.5s ease",

                "&::before, &::after": {
                    content: "''",
                    position: "absolute",
                    backgroundColor: "grey"
                },

                "&::before": {
                    width: diagonalLength,
                    height: "1px",
                    top: 0,
                    left: 0,
                    transform: "rotate(45deg)",
                    transformOrigin: "top left",
                    transition: "0.5s"
                },

                "&::after": {
                    width: "1px",
                    height: diagonalLength,
                    top: 0,
                    right: 0,
                    transform: "rotate(45deg)",
                    transformOrigin: "top right",
                    transition: "0.5s"
                }
            },
            selectedBox: {
                backgroundImage: `url(${itemData.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            },
            text: {
                color: theme.palette.text.primary,
                textTransform: "uppercase"
            },

            selected: {
                display: "none"
            }
        };
    });
