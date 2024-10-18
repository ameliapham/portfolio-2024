import { tss } from "tss-react/mui";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import pZen from "assets/p-zen.webp"

type Props = {
    className?: string;
    detailsIndex: number;
};

export function Zen(props: Props) {
    const { className, detailsIndex } = props;
    const { cx, classes } = useStyles();
    return (
        <div className={cx(classes.root, className)}>
            {(() => {
                switch (detailsIndex % 3) {
                    case 0:
                        return <Page1 />;
                    case 1:
                        return <Page2 />;
                    case 2:
                        return <Page1 />;
                }
            })()}
            <div className={classes.background} />
        </div>
    );
}

const useStyles = tss.create(() => {
    return {
        root: {
            
        },
        background: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            filter: "blur(30px)",
            opacity: 0.5,
            background: `url(${pZen}) center center/cover`,
        },
    };
});
