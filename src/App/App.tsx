import { GlobalStyles } from "tss-react";
import { Header } from "App/Header"
import { tss } from "tss-react/mui";
import { Home } from "pages/Home";
// import { ItemSlider } from "shared/ItemSlider";
import { Contact } from "pages/Contact";
import { About } from "pages/About";
import { Project } from "pages/Project";
import { useSelectedPage } from "hooks/useSelectedPage";
import { useState } from "react";



export function App() {

  const { selectedPage } = useSelectedPage();

  const [isGalleryVisible, setIsGalleryVisible] = useState(true);
  const [pageId, setPageId] = useState<"zen" | "dame" | "gmeta" | "iso" | "arti" | "gili" | "famed" | "badgeur">("zen");

  const { classes, theme } = useStyles();

  return (
    <>
      <GlobalStyles styles={{
        "*": {
          "margin": 0,
          "padding": 0,
        },
        "html, body": {
          "backgroundColor": theme.palette.background.default,
        }
      }} />

      <Header className={classes.header} />

      <main>
        {(() => {
          switch (selectedPage) {
            case "home":
              return <Home />
            case "about":
              return <About />
            case "projects":
              return (
                isGalleryVisible && <Project className={classes.project} initialPage={pageId} onPageSelected={pageId => {
                  setIsGalleryVisible(false);
                  setPageId(pageId);
                }} />
              )
            case "contact":
              return <Contact />
          }
        })()}
      </main>

    </>
  )
}

const useStyles = tss
  .withName({ App })
  .create(({ theme }) => ({
    "header": {
      "position": "absolute",
      "top": 0,
      "zIndex": 1000,
    },
    "project": {
      "position": "absolute",
      "top": "50%",
      "left": "50%",
      "transform": "translate(-50%, -50%)",
      "width": "100%",
      "height": "100%",
      "background": theme.palette.background.default,
      "overflow": "hidden",
      "boxSizing": "border-box",
    }
  }));
