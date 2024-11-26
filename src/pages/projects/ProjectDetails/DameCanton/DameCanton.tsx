import { lazy, Suspense } from "react";
import { useStyles } from "tss";
import { Props } from "../../Props";

const DameCantonDesktop = lazy(() => import("./DameCantonDesktop"));
const DameCantonMobile = lazy(() => import("./DameCantonMobile"));

export function DameCanton(props: Props) {
    const { isMobile } = useStyles();

    return (
        <Suspense>
            {isMobile ? <DameCantonMobile {...props} /> : <DameCantonDesktop {...props} />}
        </Suspense>
    )
}