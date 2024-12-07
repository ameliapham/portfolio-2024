import { tss, keyframes } from "tss";
import { PhotoFrame } from "./PhotoFrame";
import { useDomRect } from "powerhooks/useDomRect";
import { PageRoute } from "./route";
import { SplashScreen } from "shared/SplashScreen";
import { useDownloadAssets } from "utils/useDownloadAssets";
import avatarUrl from "assets/avatars/avatar.webp";
import { Skills } from "./Skills";
import { Cv } from "./Cv";

type Props = {
    className?: string;
    route: PageRoute;
};

export default function PageMobile(props: Props) {
    const { className } = props;

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
            <PhotoFrame className={classes.frameZone} avatarUrl={avatarUrl} />
            <div className={classes.texts}>
                <Cv />
                <Skills />
            </div>
        </div>
    );
}

const useStyles = tss
    .withName({ PageMobile })
    .withParams<{ rootWidth: number }>()
    .create(({ theme, rootWidth, headerHeight }) => {
        return {
            root: {
                paddingBottom: `${theme.spacing(4)}`,
                display: "flex",
                flexDirection: "column",
                padding: `calc(${headerHeight} + ${theme.spacing(6)}) ${0.1 * rootWidth}px`,
                alignItems: "center",
                gap: theme.spacing(10),
                animation: `${keyframes`
                    0% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                    `} 400ms`
            },
            frameZone: {
                height: 0.3 * rootWidth,
                width: 0.25 * rootWidth
            },
            texts: {
                flex: 1,
                color: theme.palette.text.primary,
                display: "flex",
                flexDirection: "column",
                gap: "20px"
            }
        };
    });
