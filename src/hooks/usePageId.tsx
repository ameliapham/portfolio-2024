import { createContext, useContext, useState } from "react";
import { assert } from "tsafe/assert";

type PageId = "home" | "about" | "projects" | "contact";

type ContextValue =
    | {
          pageId: PageId;
          setPageId: (pageId: PageId) => void;
      }
    | undefined;

const context = createContext<ContextValue>(undefined);

type PageIdProviderProps = {
    defaultPageId: PageId;
    children: React.ReactNode;
};

export function PageIdProvider(props: PageIdProviderProps) {
    const { children, defaultPageId: defaultPageId } = props;

    const [pageId, setPageId] = useState(defaultPageId);

    return (
        <context.Provider value={{ pageId: pageId, setPageId: setPageId }}>{children}</context.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePageId() {
    const contextValue = useContext(context);

    assert(
        contextValue !== undefined,
        "This hook must be called in a descendant of SelectedPageProvider"
    );

    const { pageId: pageId, setPageId: setPageId } = contextValue;

    return { pageId: pageId, setPageId: setPageId };
}
