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
import { routes } from "routes";
import { ProgressComponent } from "shared/ProgressComponent";
import { assert } from "tsafe/assert";
import { Props } from "../../Props";

export default function DameCantonDesktop(props: Props) {
    const { className, route } = props;
    const { cx, classes } = useStyles();

    return (
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
                        case 5:
                            return <Page6 />;
                        case 6:
                            return <Page7 />;
                        case 7:
                            return <Page8 />;
                        case 8:
                            return <Page9 />;
                        case 9:
                            return <Page10 />;
                        case 10:
                            return <PageVideo />;
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
                    route.params.detailsIndex === 10
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
                processPercentage={(route.params.detailsIndex / 10) * 100}
            />
        </div>
    );
}

const useStyles = tss.withName({ DameCantonDesktop }).create(() => {
    return {
        root: {
            width: "100%",
            height: "100%",
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
