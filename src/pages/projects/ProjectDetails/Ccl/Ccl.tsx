import { lazy, Suspense } from "react";
import { useStyles } from "tss";
import { Props } from "../../Props";

const CclDesktop = lazy(() => import("./CclDesktop"));
const CclMobile = lazy(() => import("./CclMobile"));

export function Ccl(props: Props) {
    const { isMobile } = useStyles();

    return <Suspense>{isMobile ? <CclMobile {...props} /> : <CclDesktop {...props} />}</Suspense>;
}
