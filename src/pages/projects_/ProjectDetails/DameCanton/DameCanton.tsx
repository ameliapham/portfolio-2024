import { tss } from "tss-react/mui";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";

type Props = {
    className?: string;
    detailsIndex: number;
};

export function DameCanton(props: Props) {
    const { className, detailsIndex } = props;
    const { cx, classes } = useStyles();
    return (
        <>
            <div className={cx(classes.root, className)}>
                {(() => {
                    switch (detailsIndex % 2) {
                        case 0:
                            return <Page1 />;
                        case 1:
                            return <Page2 />;
                    }
                })()}
            </div>
        </>
    );
}

const useStyles = tss.withName({ DameCanton }).create(() => {
    return {
        root: {
            height: "100%",
            width: "100%"
        }
    };
});
