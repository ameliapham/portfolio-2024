import { GlobalStyles } from "tss-react";
import { Header } from "App/Header"
import { tss } from "tss-react/mui";
import { Home } from "pages/Home"; 



export function App() {

  const { classes, theme } = useStyle();

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

const useStyle = tss
  .create(() => ({
    "header": {
      "position": "absolute",
      "top": 0,
      "zIndex": 1000,
    },
  }));
