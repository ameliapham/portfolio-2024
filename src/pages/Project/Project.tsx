import { tss } from "tss-react/mui";
import { BoxItem } from "./BoxItem";
import { projectData } from "data/projectData"
import { BackgroundBeams } from "shared/BackgroundBeams";


export function Project() {

    const { classes } = useStyle();

    return (
        <div className={classes.root}>
            <div className={classes.boxZone}>
                {projectData.map(itemData => <BoxItem key={itemData.name} itemData={itemData} />)}
            </div>
            <BackgroundBeams />

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
    }))