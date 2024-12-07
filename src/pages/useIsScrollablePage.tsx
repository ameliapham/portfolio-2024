import { PageId } from "./index";
import { useStyles } from "tss";

export function useIsScrollablePage(params: { pageId: PageId }): boolean {
    const { pageId } = params;
    const { isMobile } = useStyles();

    switch (pageId) {
        case "about":
            return isMobile;
        case "contact":
            return false;
        case "home":
            return false;
        case "projects":
            return isMobile;
        case "page404":
            return false;
    }
}
