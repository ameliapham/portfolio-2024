import { tss } from "tss";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page3 } from "./Page3";
import { Page4 } from "./Page4";
import { Props } from "../../Props"

export default function ZenMobile(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();

    return (
        <>
            <div className={cx(classes.root, className)}>
                <Page1 />
                <Page2 />
                <Page3 />
                <Page4 />
            </div>
        </>
    );
}

const useStyles = tss.withName({ ZenMobile }).create(({ theme }) => {
    return {
        root: {
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(4),
        },
    };
});
