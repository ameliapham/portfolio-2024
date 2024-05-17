import { tss } from "tss-react/mui";
import { BoxItem } from "./BoxItem";
import { initialItems } from "./ItemData";


export function Project() {

    const { classes } = useStyle();

    return (
        <div className={classes.root}>
            <div className={classes.boxZone}>
                {initialItems.map(itemData => <BoxItem key={itemData.name} itemData={itemData} />)}
            </div>


        </div>
    );
}

const useStyle = tss
    .withName({ Project })
    .create(({ theme }) => ({
        "root": {
            "boxSizing": "border-box",
            "position": "relative",
            "display": "flex",
            "height": "100vh",
            "width": "100%",
            "background": theme.palette.background.default,
            "overflow": "hidden",
        },
        "boxZone": {
            "position": "absolute",
            "top": "55%",
            "left": "35%",
            "display": "flex",
            "gap": theme.spacing(2),
            "flexDirection": "row",
        },
    }));