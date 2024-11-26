import { tss } from "tss";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page3 } from "./Page3";
import { assert } from "tsafe/assert";
import { routes } from "routes";
import { ProgressComponent } from "shared/ProgressComponent";
import { Props } from "../../Props"

export default function FamedDesktop(props: Props) {
    const { className, route } = props;
    const { cx, classes } = useStyles();

    return (
        <>
            <div className={cx(classes.root, className)}>
                <div className={classes.content}>
                    {(() => {
                        switch (route.params.detailsIndex) {
                            case 0:
                                return <Page1 />;
                            case 1:
                                return <Page2 />;
                            case 2:
                                return <Page3 />;
                            default:
                                assert(false);
                        }
                    })()}
                </div>
                <ProgressComponent
                    className={classes.navComponent}
                    previousLink={
                        route.params.detailsIndex === 0
                            ? undefined
                            : routes[route.name]({
                                  ...route.params,
                                  detailsIndex: route.params.detailsIndex - 1
                              }).link
                    }
                    nextLink={
                        route.params.detailsIndex === 2
                            ? undefined
                            : routes[route.name]({
                                  ...route.params,
                                  detailsIndex: route.params.detailsIndex + 1
                              }).link
                    }
                    processPercentage={(route.params.detailsIndex / 2) * 100}
                />
            </div>
        </>
    );
}

const useStyles = tss.withName({ FamedDesktop }).create(() => {
    return {
        root: {
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column"
        },
        content: {
            flex: 2,
            padding: "0 10%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        navComponent: {}
    };
});
