import { GlobalStyles } from "tss-react";
import { Header } from "App/Header";
import { tss } from "tss-react/mui";
import { Home } from "pages/Home";
import { Contact } from "pages/Contact";
import { About } from "pages/About";
import { Project } from "pages/Project";
import { usePageId } from "hooks/usePageId";

export function App() {
    const { pageId } = usePageId();
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
            <div className={classes.root}>
                <Header className={classes.header} />
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
            </div>
        </>
    );
}

const useStyles = tss.withName({ App }).create(({ theme }) => ({
    root: {
        height: "100vh",
        width: "100vw",
        overflow: "hidden"
    },
    header: {
        position: "absolute",
        top: 0,
        zIndex: 1000,
        height: theme.spacing(8),
        padding: `0 ${theme.spacing(10)}`
    },
    page: {
        display: "flex",
        flex: 1
    },
    contact: {
        justifyContent: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    }
}));
