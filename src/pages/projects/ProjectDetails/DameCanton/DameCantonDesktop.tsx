import { tss } from "tss";
import { Page1 } from "./Page1";
import { PageVideo } from "./PageVideo";
import { routes } from "routes";
import { ProgressComponent } from "shared/ProgressComponent";
import { assert } from "tsafe/assert";
import { Props } from "../../Props";
import { useScrollNavigation } from "utils/useScrollNavigation";

export default function DameCantonDesktop(props: Props) {
    const { className, route } = props;
    const { cx, classes } = useStyles();

    const previousRoute =
        route.params.detailsIndex === 0
            ? undefined
            : routes[route.name]({
                  ...route.params,
                  detailsIndex: route.params.detailsIndex - 1
              });

    const nextRoute =
        route.params.detailsIndex === 1
            ? undefined
            : routes[route.name]({
                  ...route.params,
                  detailsIndex: route.params.detailsIndex + 1
              });

    useScrollNavigation(direction => {
        switch (direction) {
            case "up":
                previousRoute?.push();
                break;
            case "down":
                nextRoute?.push();
                break;
        }
    });

    return (
        <div className={cx(classes.root, className)}>
            <div className={classes.content}>
                {(() => {
                    switch (route.params.detailsIndex) {
                        case 0:
                            return <Page1 />;
                        case 1:
                            return <PageVideo />;
                        default:
                            assert(false);
                    }
                })()}
            </div>

            <ProgressComponent
                previousLink={previousRoute?.link}
                nextLink={nextRoute?.link}
                processPercentage={(route.params.detailsIndex / 1) * 100}
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
