import { lazy, Suspense } from "react";
import { useStyles } from "tss";
import { Props } from "../../Props";

const ZenDesktop = lazy(() => import("./ZenDesktop"));
const ZenMobile = lazy(() => import("./ZenMobile"));

export function Zen(props: Props) {
    const { isMobile } = useStyles();

    return (
        <Suspense>
            {isMobile ? <ZenMobile {...props} /> : <ZenDesktop {...props} />}
        </Suspense>
    )
}