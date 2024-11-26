import { lazy, Suspense } from "react";
import { useStyles } from "tss";
import { Props } from "../../Props";

const IsoDesktop = lazy(() => import("./IsoDesktop"));
const IsoMobile = lazy(() => import("./IsoMobile"));

export function Iso(props: Props) {
    const { isMobile } = useStyles();

    return (
        <Suspense>
            {isMobile ? <IsoMobile {...props} /> : <IsoDesktop {...props} />}
        </Suspense>
    )
}