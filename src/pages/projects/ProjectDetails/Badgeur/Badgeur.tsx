import { lazy, Suspense } from "react";
import { useStyles } from "tss";
import { Props } from "../../Props";

const BadgeurDesktop = lazy(() => import("./BadgeurDesktop"));
const BadgeurMobile = lazy(() => import("./BadgeurMobile"));

export function Badgeur(props: Props) {
    const { isMobile } = useStyles();

    return (
        <Suspense>
            {isMobile ? <BadgeurMobile {...props} /> : <BadgeurDesktop {...props} />}
        </Suspense>
    )
}