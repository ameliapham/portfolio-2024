import { GlobalStyles } from "tss-react";
import { Header } from "App/Header";
import { tss } from "tss-react/mui";
import { Home } from "pages/Home";
import { Contact } from "pages/Contact";
import { About } from "pages/About";
import { Project } from "pages/Project";
import { useSelectedPage } from "hooks/useSelectedPage";
import { useState } from "react";
import { Contain } from "pages/Project/Contain";

import { Zen } from "pages/Project/pages/zen/Zen";
import p24zen from "assets/p-zen.webp";

export function App() {
    const { selectedPage } = useSelectedPage();

    const [isGalleryVisible, setIsGalleryVisible] = useState(true);
    const [pageId, setPageId] = useState<
        "zen" | "dame" | "gmeta" | "iso" | "arti" | "gili" | "famed" | "badgeur"
    >("zen");

    const { classes, theme } = useStyles();

    return (
        <>
            <GlobalStyles
                styles={{
                    "*": {
                        margin: 0,
                        padding: 0
                    },
                    "html, body": {
                        backgroundColor: theme.palette.background.default
                    }
                }}
            />

            <Header className={classes.header} />

            <main>
                {(() => {
                    switch (selectedPage) {
                        case "home":
                            return <Home />;
                        case "about":
                            return <About />;
                        case "projects":
                            return (
                                <>
                                    {isGalleryVisible && (
                                        <Project
                                            className={classes.project}
                                            initialPage={pageId}
                                            onPageSelected={pageId => {
                                                setIsGalleryVisible(false);
                                                setPageId(pageId);
                                            }}
                                        />
                                    )}
                                    {(() => {
                                        if (isGalleryVisible) return null;

                                        switch (pageId) {
                                            case undefined:
                                                return null;
                                            case "zen":
                                                return (
                                                    <Contain
                                                        onClick={() => setIsGalleryVisible(true)}
                                                        content={<Zen />}
                                                        background={p24zen}
                                                    />
                                                );
                                            case "gili":
                                                return (
                                                    <Contain
                                                        onClick={() => setIsGalleryVisible(true)}
                                                        content={<Zen />}
                                                        background={p24zen}
                                                    />
                                                );
                                            case "gmeta":
                                                return (
                                                    <>
                                                        <h1>Gmeta</h1>
                                                        <button
                                                            onClick={() => setIsGalleryVisible(true)}
                                                        >
                                                            Back
                                                        </button>
                                                    </>
                                                );
                                            case "badgeur":
                                                return (
                                                    <>
                                                        <h1>Badgeur</h1>
                                                        <button
                                                            onClick={() => setIsGalleryVisible(true)}
                                                        >
                                                            Back
                                                        </button>
                                                    </>
                                                );
                                            case "iso":
                                                return (
                                                    <>
                                                        <h1>Iso</h1>
                                                        <button
                                                            onClick={() => setIsGalleryVisible(true)}
                                                        >
                                                            Back
                                                        </button>
                                                    </>
                                                );
                                        }
                                    })()}
                                </>
                            );
                        case "contact":
                            return <Contact />;
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
        width: "100%",
        padding: `0 ${theme.spacing(10)}`,
    },
    project: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        height: "100%",
        background: theme.palette.background.default,
        overflow: "hidden",
        boxSizing: "border-box"
    }
}));
