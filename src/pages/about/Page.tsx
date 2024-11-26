import { lazy, Suspense } from "react";
import { useStyles } from "tss";
import { PageRoute } from "./route";

type Props = {
    className?: string;
    route: PageRoute;
};

const PageDesktop = lazy(() => import("./PageDesktop"));
const PageMobile = lazy(() => import("./PageMobile"));

export default function Page(props: Props) {
    const { isMobile } = useStyles();

    return (
        <Suspense>
            {isMobile ? <PageMobile {...props} /> : <PageDesktop {...props} />}
        </Suspense>
    )
}