import { tss } from "tss";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page3 } from "./Page3";
import { Page4 } from "./Page4";
import type { PageRoute } from "../../route";
import { assert } from "tsafe/assert";
import { routes } from "routes";
import { NavComponent } from "shared/NavComponent";

type Props = {
    className?: string;
    route: PageRoute;
};

export function Zen(props: Props) {
    const { className, route } = props;
    const { cx, classes } = useStyles();
    return (
        <>
            <div className={cx(classes.root, className)}>
                {(() => {
                    switch (route.params.detailsIndex) {
                        case 0:
                            return <Page1 />;
                        case 1:
                            return <Page2 />;
                        case 2:
                            return <Page3 />;
                        case 3:
                            return <Page4 />;
                        default:
                            assert(false);
                    }
                })()}
            </div>
        </>
    );
}

const useStyles = tss.withName({ Zen }).create(() => {
    return {
        root: {
            height: "100%",
            width: "100%"
        }
    };
});
