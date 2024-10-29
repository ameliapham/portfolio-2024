import { GlobalStyles } from "tss-react";
import { Header } from "App/Header";
import { Suspense } from "react";
import { tss } from "tss-react/mui";
//import { Home } from "pages/Home";
//import { Contact } from "pages/Contact";
//import { About } from "pages/About";
//import { Project } from "pages/Projects";
//import { usePageId } from "hooks/usePageId";
import { headerHeight } from "App";
import { useRoute, RouteProvider } from "routes";
import { pages, pageIds } from "pages";

export function App() {
    return (
        <RouteProvider>
            <AppContextualized />
        </RouteProvider>
    );
}

export function AppContextualized() {
    //const { pageId } = usePageId();
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

const useStyles = tss.withName({ App }).create(({ theme }) => ({
    root: {
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    header: {
        position: "absolute",
        top: 0,
        zIndex: 1000,
        height: headerHeight,
        padding: `0 ${theme.spacing(10)}`
    },
    main: {
        display: "flex",
        flex: 1,
        overflow: "auto",
        alignItems: "center",
        justifyContent: "center",
    },
    page: {
        display: "flex",
        flex: 1
    }
}));
