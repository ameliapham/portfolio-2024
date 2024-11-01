import { Header } from "App/Header";
import { Suspense } from "react";
import { tss, GlobalStyles } from "tss";
import { useRoute, RouteProvider } from "routes";
import { pages, pageIds } from "pages";
import { ThemeProvider } from "theme";
import { FixedScrollProvider, useIsFixedScrollEnabled } from "utils/fixed-scroll";

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
    const { isFixedScrollEnabled } = useIsFixedScrollEnabled();

    const { classes, theme } = useStyles({ isFixedScrollEnabled });
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

const useStyles = tss
    .withName({ App })
    .withParams<{
        isFixedScrollEnabled: boolean;
    }>()
    .create(({ headerHeight, isFixedScrollEnabled }) => ({
        root: isFixedScrollEnabled
            ? {
                  height: "100%",
                  display: "flex",
                  flexDirection: "column"
              }
            : {},
        header: isFixedScrollEnabled
            ? {
                  height: headerHeight
              }
            : {
                  height: headerHeight,
                  position: "fixed",
                  top: 0,
                  width: "100%"
              },
        main: isFixedScrollEnabled
            ? {
                  flex: 1
              }
            : {
                  marginTop: headerHeight
              },
        page: isFixedScrollEnabled ? { height: "100%" } : {}
    }));
