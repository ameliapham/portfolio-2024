import ReactDOM from "react-dom/client";
import { App } from "./App";
import { PageIdProvider } from "hooks/usePageId";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <PageIdProvider defaultPageId="home">
        <App />
    </PageIdProvider>
);
