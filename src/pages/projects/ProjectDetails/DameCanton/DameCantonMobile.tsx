import { tss } from "tss";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page3 } from "./Page3";
import { Page4 } from "./Page4";
import { Page5 } from "./Page5";
import { Page6 } from "./Page6";
import { Page7 } from "./Page7";
import { Page8 } from "./Page8";
import { Page9 } from "./Page9";
import { Page10 } from "./Page10";
import { PageVideo } from "./PageVideo";
import { Props } from "../../Props";

export default function DameCantonMobile(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();
    return (
        <>
            <div className={cx(classes.root, className)}>
                <Page1 />
                <Page2 />
                <Page3 />
                <Page4 />
                <Page5 />
                <Page6 />
                <Page7 />
                <Page8 />
                <Page9 />
                <Page10 />
                <PageVideo />
            </div>
        </>
    );
}

const useStyles = tss.withName({ DameCantonMobile }).create(({ theme }) => {
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
