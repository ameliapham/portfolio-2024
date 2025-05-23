import { tss } from "tss";
import { Page1 } from "./Page1";
import { PageVideo } from "./PageVideo";
import { Page2 } from "./Page2";
import { Props } from "../../Props";

export default function IsoMobile(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();
    return (
        <>
            <div className={cx(classes.root, className)}>
                <Page1 />
                <PageVideo />
                <Page2 />
            </div>
        </>
    );
}

const useStyles = tss.withName({ IsoMobile }).create(({ theme }) => {
    return {
        root: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(6)
        }
    };
});
