import { tss } from "tss";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Props } from "../../Props";

export default function Gmeta(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();
    return (
        <>
            <div className={cx(classes.root, className)}>
                <Page1 />
                <Page2 />
            </div>
        </>
    );
}

const useStyles = tss.withName({ Gmeta }).create(({ theme }) => {
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
