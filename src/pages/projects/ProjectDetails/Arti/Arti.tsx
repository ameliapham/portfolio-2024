import { lazy, Suspense } from "react";
import { useStyles } from "tss";
import { Props } from "../../Props";

const ArtiDesktop = lazy(() => import("./ArtiDesktop"));
const ArtiMobile = lazy(() => import("./ArtiMobile"));

export function Arti(props: Props) {
    const { isMobile } = useStyles();

    return <Suspense>{isMobile ? <ArtiMobile {...props} /> : <ArtiDesktop {...props} />}</Suspense>;
}
