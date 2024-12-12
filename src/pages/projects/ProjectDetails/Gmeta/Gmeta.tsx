import { lazy, Suspense } from "react";
import { useStyles } from "tss";
import { Props } from "../../Props";

const GmetaDesktop = lazy(() => import("./GmetaDesktop"));
const GmetaMobile = lazy(() => import("./GmetaMobile"));

export function Gmeta(props: Props) {
    const { isMobile } = useStyles();

    return <Suspense>{isMobile ? <GmetaMobile {...props} /> : <GmetaDesktop {...props} />}</Suspense>;
}
