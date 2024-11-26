import { lazy, Suspense } from "react";
import { useStyles } from "tss";
import { Props } from "../../Props";

const ProjectGalleryDesktop = lazy(() => import("./IsoDesktop"));
const ProjectGalleryMobile = lazy(() => import("./IsoMobile"));

export function Iso(props: Props) {
    const { isMobile } = useStyles();

    return (
        <Suspense>
            {isMobile ? <ProjectGalleryMobile {...props} /> : <ProjectGalleryDesktop {...props} />}
        </Suspense>
    )
}