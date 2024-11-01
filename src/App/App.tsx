import { Header } from "App/Header";
import { Suspense } from "react";
import { tss, GlobalStyles } from "tss";
import { useRoute, RouteProvider } from "routes";
import { pages, pageIds } from "pages";
import { ThemeProvider } from "theme";
import { FixedScrollProvider } from "utils/fixed-scroll";

export function App() {
    return (
        <RouteProvider>
            <FixedScrollProvider>
                <ThemeProvider>
                    <AppContextualized />
                </ThemeProvider>
            </FixedScrollProvider>
        </RouteProvider>
    );
}

function AppContextualized() {
    const { classes, theme } = useStyles();
    const route = useRoute();

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
                    }
                }}
            />
            <div className={classes.root}>
                <Header className={classes.header} pageId={route.name} />
                <main className={classes.main}>
                    <Suspense fallback={<p>Loading...</p>}>
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
                </main>
            </div>
        </>
    );
}

const useStyles = tss.withName({ App }).create(({ headerHeight }) => ({
    root: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    header: {
        height: headerHeight,
    },
    main: {
        flex: 1,
    },
    page: {
        height: "100%"
    }
}));
