import { tss, keyframes } from "tss";
import { PhotoFrame } from "./PhotoFrame";
import { useDomRect } from "powerhooks/useDomRect";
import { routes } from "routes";
import { PageRoute } from "./route";
import { aboutDetailsIds } from "./aboutDetailsIds";
import { ProgressComponent } from "shared/ProgressComponent";
import { SplashScreen } from "shared/SplashScreen";
import { useDownloadAssets } from "utils/useDownloadAssets";
import avatarUrl from "assets/avatarAnime.jpg";
import { Skills } from "./Skills";
import { Cv } from "./Cv";

type Props = {
    className?: string;
    route: PageRoute;
};

export default function PageDesktop(props: Props) {
    const { className, route } = props;

    const {
        ref: rootRef,
        domRect: { width: rootWidth }
    } = useDomRect();

    const { cx, classes, css } = useStyles({ rootWidth });

    const { isDownloadingAssets } = useDownloadAssets({
        urls: [avatarUrl]
    });

    if (isDownloadingAssets) {
        return (
            <div
                className={css({
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                })}
            >
                <SplashScreen className={css({ width: "50%" })} />
            </div>
        );
    }

    return (
        <div ref={rootRef} className={cx(classes.root, className)}>
            <div className={classes.container}>
                <PhotoFrame className={classes.frameZone} avatarUrl={avatarUrl} />
                <div className={classes.texts}>
                    {(() => {
                        switch (route.params.aboutDetailsId) {
                            case "cv":
                                return <Cv />;
                            case "skills":
                                return <Skills />;
                        }
                    })()}
                </div>
            </div>

            <ProgressComponent
                className={classes.navComponent}
                previousLink={
                    aboutDetailsIds.indexOf(route.params.aboutDetailsId) > 0
                        ? routes[route.name]({
                            ...route.params,
                            aboutDetailsId:
                                aboutDetailsIds[
                                aboutDetailsIds.indexOf(route.params.aboutDetailsId) - 1
                                ]
                        }).link
                        : undefined
                }
                nextLink={
                    aboutDetailsIds.indexOf(route.params.aboutDetailsId) < aboutDetailsIds.length - 1
                        ? routes[route.name]({
                            ...route.params,
                            aboutDetailsId:
                                aboutDetailsIds[
                                aboutDetailsIds.indexOf(route.params.aboutDetailsId) + 1
                                ]
                        }).link
                        : undefined
                }
                processPercentage={
                    (aboutDetailsIds.indexOf(route.params.aboutDetailsId) /
                        (aboutDetailsIds.length - 1)) *
                    100
                }
            />
        </div>
    );
}


const useStyles = tss
    .withName({ PageDesktop })
    .withParams<{ rootWidth: number }>()
    .create(({ theme, rootWidth }) => {
        return {
            root: {
                paddingBottom: `${theme.spacing(4)}`,
                display: "flex",
                flexDirection: "column",
                animation: `${keyframes`
                    0% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                    `} 400ms`
            },
            container: {
                flex: 1,
                display: "flex",
                padding: `0 ${0.1 * rootWidth}px 0 ${0.15 * rootWidth}px`,
                alignItems: "center",
                flexDirection: "row",
                gap: "5vw",
            },
            frameZone: {
                height: 0.3 * rootWidth,
                width: 0.25 * rootWidth,
            },
            texts: {
                flex: 1,
                color: theme.palette.text.primary,
                display: "flex",
                flexDirection: "column",
                gap: "20px",

                // Hide scrollbar for webkit browsers
                "&::-webkit-scrollbar": {
                    display: "none"
                },
                // Hide scrollbar for IE, Edge, and Firefox
                "&": {
                    msOverflowStyle: "none",
                    scrollbarWidth: "none"
                }
            },
            navComponent: {},
        };
    });
