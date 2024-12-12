import { lazy, Suspense } from "react";
import { useStyles } from "tss";
import { Props } from "../../Props";

const FamedDesktop = lazy(() => import("./FamedDesktop"));
const FamedMobile = lazy(() => import("./FamedMobile"));

export function Famed(props: Props) {
    const { isMobile } = useStyles();

    return <Suspense>{isMobile ? <FamedMobile {...props} /> : <FamedDesktop {...props} />}</Suspense>;
}
