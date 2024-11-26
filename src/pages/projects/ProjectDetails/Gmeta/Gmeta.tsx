import { lazy, Suspense } from "react";
import { useStyles } from "tss";
import { Props } from "../../Props";

const ProjectGalleryDesktop = lazy(() => import("./GmetaDesktop"));
const ProjectGalleryMobile = lazy(() => import("./GmetaMobile"));

export function Gmeta(props: Props) {
    const { isMobile } = useStyles();

    return (
        <Suspense>
            {isMobile ? <ProjectGalleryMobile {...props} /> : <ProjectGalleryDesktop {...props} />}
        </Suspense>
    )
}