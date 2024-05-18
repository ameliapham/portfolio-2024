import { GlobalStyles } from "tss-react";
import { Header } from "App/Header"
import { tss } from "tss-react/mui";
import { Home } from "pages/Home"; 
// import { Project } from "pages/ProjectNew";
// import { Contact } from "pages/Contact";
// import { About } from "pages/About";



export function App() {

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
        <Home />
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
