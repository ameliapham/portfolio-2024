import { GlobalStyles } from "tss-react";
import { Header } from "App/Header"
import { tss } from "tss-react/mui";
import { Home } from "pages/Home";
// import { ItemSlider } from "shared/ItemSlider";
import { Contact } from "pages/Contact";
import { About } from "pages/About";
import { Project } from "pages/Project";
import { useSelectedPage } from "hooks/useSelectedPage";



export function App() {

  const { selectedPage } = useSelectedPage();
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
              return <Project />
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
  .create(() => ({
    "header": {
      "position": "absolute",
      "top": 0,
      "zIndex": 1000,
    },
  }));
