import { GlobalStyles } from "tss-react";
import { Header } from "App/Header";
import { Suspense } from "react";
import { tss } from "tss";
import { useRoute, RouteProvider } from "routes";
import { pages, pageIds } from "pages";
import { ThemeProvider } from "theme";

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

    const { classes, theme } = useStyles({
        isScrollablePage: (() => {
            switch (route.name) {
                case "home":
                    return false;
                case "contact":
                    return false;
                case "projects":
                    return false;
                case "about":
                    return false;
                default:
                    return true;
            }
        })()
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
                    html: {
                        ":root": {
                            colorScheme: theme.palette.mode
                        }
                    }
                }}
            />
            <div className={classes.root}>
                <Header
                    className={classes.header}
                    pageId={route.name}
                />
                <main className={classes.main}>
                    <Suspense fallback={<p>Loading...</p>}>
                        {(() => {
                            for (const pageId of pageIds) {
                                const page = pages[pageId as "home"];

                                if (page.routeGroup.has(route)) {
                                    return (
                                        <page.LazyComponent
                                            className={classes.page}
                                            route={route}
                                        />
                                    );
                                }
                            }

                            return <pages.page404.LazyComponent />;
                        })()}
                    </Suspense>
                </main>
            </div>
        </>
    );
}

const useStyles = tss
    .withName({ App })
    .withParams<{ isScrollablePage: boolean }>()
    .create(({ headerHeight, isScrollablePage }) => ({
        root: isScrollablePage
            ? {}
            : {
                height: "100vh",
                display: "flex",
                flexDirection: "column"
            },
        header: isScrollablePage
            ? {
                height: headerHeight,
                position: "fixed",
                top: 0,
                width: "100%"
            }
            : {
                height: headerHeight
            },
        main: isScrollablePage
            ? {
                marginTop: headerHeight
            }
            : {
                flex: 1,
                display: "flex",
                justifyContent: "center",
                overflow: "hidden"
            },
        page: isScrollablePage
            ? {}
            : {
                height: "100%"
            }
    }));
