import { GlobalStyles } from "tss-react";



export function App() {

  return (
    <>
      <GlobalStyles styles={{
        "html, body": {
          "margin": 0,
          "padding": 0,
        }
      }} />

      <h1>Hello World</h1>

    </>
  )
}