import { lazy, Suspense } from "react";
import { useStyles } from "tss";
import { Props } from "../../Props";

const PvalDesktop = lazy(() => import("./PvalDesktop"));
const PvalMobile = lazy(() => import("./PvalMobile"));

export function Gili(props: Props) {
    const { isMobile } = useStyles();

    return <Suspense>{isMobile ? <PvalMobile {...props} /> : <PvalDesktop {...props} />}</Suspense>;
}
