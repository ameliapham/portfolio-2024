import { lazy, Suspense } from "react";
import { useStyles } from "tss";
import { Props } from "../../Props";

const IsoDesktop = lazy(() => import("./BadgeurDesktop"));
const IsoMobile = lazy(() => import("./BadgeurMobile"));

export function Badgeur(props: Props) {
    const { isMobile } = useStyles();

    return (
        <Suspense>
            {isMobile ? <IsoMobile {...props} /> : <IsoDesktop {...props} />}
        </Suspense>
    )
}