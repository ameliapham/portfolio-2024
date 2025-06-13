import { tss } from "tss";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page3 } from "./Page3";
import { Page4 } from "./Page4";
import { Page5 } from "./Page5";
import { assert } from "tsafe/assert";
import { routes } from "routes";
import { ProgressComponent } from "shared/ProgressComponent";
import { Props } from "../../Props";

export default function ZenDesktop(props: Props) {
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
                            case 3:
                                return <Page4 />;
                            case 4:
                                return <Page5 />;
                            default:
                                assert(false);
                        }
                    })()}
                </div>
                <ProgressComponent
                    previousRoute={
                        route.params.detailsIndex === 0
                            ? undefined
                            : routes[route.name]({
                                  ...route.params,
                                  detailsIndex: route.params.detailsIndex - 1
                              })
                    }
                    nextRoute={
                        route.params.detailsIndex === 4
                            ? undefined
                            : routes[route.name]({
                                  ...route.params,
                                  detailsIndex: route.params.detailsIndex + 1
                              })
                    }
                    backRoute={routes.projects({
                        ...route.params,
                        isGalleryVisible: true,
                        detailsIndex: undefined
                    })}
                    processPercentage={(route.params.detailsIndex / 4) * 100}
                />
            </div>
        </>
    );
}

const useStyles = tss.withName({ ZenDesktop }).create(() => {
    return {
        root: {
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column"
        },
        content: {
            flex: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    };
});
