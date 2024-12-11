import { GlobalStyles } from "tss-react";
import { NavBar } from "App/NavBar/NavBar";
import { Suspense } from "react";
import { tss } from "tss";
import { useRoute, RouteProvider } from "routes";
import { pages, pageIds, useIsScrollablePage } from "pages";
import { ThemeProvider } from "theme";
import { SplashScreen } from "shared/SplashScreen";

export function App() {
    return (
        <RouteProvider>
            <ThemeProvider>
                <AppContextualized />
            </ThemeProvider>
        </RouteProvider>
    );
}

export function AppContextualized() {
    const route = useRoute();

    const isScrollablePage = useIsScrollablePage({ pageId: route.name || "page404" });

    const { classes, theme, css } = useStyles({
        isScrollablePage
    });

    return (
        <>
            <GlobalStyles
                styles={{
                    "*": {
                        margin: 0,
                        padding: 0,
                        boxSizing: "border-box"
                    },
                    "html, body": {
                        backgroundColor: theme.palette.background.default
                    },
                    "body": isScrollablePage ? { } : {
                        overflow: "hidden",
                        touchAction: "none"
                    },
                    html: {
                        ":root": {
                            colorScheme: theme.palette.mode
                        }
                    }
                }}
            />
            <div className={classes.root}>
                <NavBar className={classes.navbar} pageId={route.name} />
                <Suspense
                    fallback={
                        <div className={classes.page}>
                            <SplashScreen className={css({ width: "50%" })} />
                        </div>
                    }
                >
                    {(() => {
                        for (const pageId of pageIds) {
                            const page = pages[pageId as "home"];

                            if (page.routeGroup.has(route)) {
                                return <page.LazyComponent className={classes.page} route={route} />;
                            }
                        }

                        return <pages.page404.LazyComponent />;
                    })()}
                </Suspense>
            </div>
        </>
    );
}

const useStyles = tss
    .withName({ App })
    .withParams<{ isScrollablePage: boolean }>()
    .create(({ headerHeight, isScrollablePage }) => ({
        root: {
            height: isScrollablePage ? undefined : "100vh"
        },
        navbar: {
            height: headerHeight,
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex: 1000
        },
        page: isScrollablePage
            ? {
                //paddingTop: headerHeight
            }
            : {
                height: "100%",
                overflow: "hidden"
            }
    }));
