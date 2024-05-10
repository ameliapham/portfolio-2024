import { GlobalStyles } from "tss-react";
import { Header } from "shared/Header"
import { useStyles } from "tss-react/mui";




export function App() {

  const { theme } = useStyles();

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

      <Header />

    </>
  )
}