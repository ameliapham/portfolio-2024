import { lazy, Suspense } from "react";
import { useStyles } from "tss";
import { Props } from "../../Props";

const GiliDesktop = lazy(() => import("./GiliDesktop"));
const GiliMobile = lazy(() => import("./GiliMobile"));

export function Gili(props: Props) {
    const { isMobile } = useStyles();

    return <Suspense>{isMobile ? <GiliMobile {...props} /> : <GiliDesktop {...props} />}</Suspense>;
}
