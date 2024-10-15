import { GlobalStyles } from "tss-react";
import { Header } from "App/Header";
import { tss } from "tss-react/mui";
import { Home } from "pages/Home";
import { Contact } from "pages/Contact";
import { About } from "pages/About";
import { Project } from "pages/Project";
import { usePageId } from "hooks/usePageId";

export function App() {
    const { pageId: pageId } = usePageId();

    const { cx, classes, theme } = useStyles();

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

            <Header className={classes.header} />

            <main className={classes.main}>
                {(() => {
                    switch (pageId) {
                        case "home":
                            return <Home className={classes.page} />;
                        case "about":
                            return <About className={classes.page} />;
                        case "projects":
                            return <Project className={classes.page} />;
                        case "contact":
                            return <Contact className={cx(classes.page, classes.contact)} />;
                    }
                })()}
            </main>
        </>
    );
}

const useStyles = tss.withName({ App }).create(({ theme }) => ({
    header: {
        position: "absolute",
        top: 0,
        zIndex: 1000,
        height: theme.spacing(8),
        padding: `0 ${theme.spacing(10)}`
    },
    main: {
        flex: 1
    },
    page: {
        display: "flex"
    },
    contact: {
        justifyContent: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    }
}));
