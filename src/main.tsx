import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ThemeProvider } from "./theme";
import { PageIdProvider } from "hooks/usePageId";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <PageIdProvider defaultPageId="home">
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </PageIdProvider>
);
