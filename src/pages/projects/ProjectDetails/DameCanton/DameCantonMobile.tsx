import { tss } from "tss";
import { Page1 } from "./Page1";
import { PageVideo } from "./PageVideo";
import { Props } from "../../Props";

export default function DameCantonMobile(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();
    return (
        <>
            <div className={cx(classes.root, className)}>
                <Page1 />
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
