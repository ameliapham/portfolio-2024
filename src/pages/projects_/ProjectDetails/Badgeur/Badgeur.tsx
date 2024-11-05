import { tss } from "tss-react/mui";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page3 } from "./Page3";
import { Page4 } from "./Page4";
import { Page5 } from "./Page5";

type Props = {
    className?: string;
    detailsIndex: number;
};

export function Badgeur(props: Props) {
    const { className, detailsIndex } = props;
    const { cx, classes } = useStyles();
    return (
        <>
            <div className={cx(classes.root, className)}>
                {(() => {
                    switch (detailsIndex % 5) {
                        case 0:
                            return <Page1 />;
                        case 1:
                            return <Page2 />;
                        case 2:
                            return <Page3 />;
                        case 3:
                            return <Page4 />;
                        case 4:
                            return <Page5 />;
                    }
                })()}
            </div>
        </>
    );
}

const useStyles = tss.withName({ Badgeur }).create(() => {
    return {
        root: {
            height: "100%",
            width: "100%"
        }
    };
});
