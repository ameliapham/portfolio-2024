import { lazy, Suspense } from "react";
import { useStyles } from "tss";
import { Props } from "../Props";

const ProjectGalleryDesktop = lazy(() => import("./ProjectGalleryDesktop"));
const ProjectGalleryMobile = lazy(() => import("./ProjectGalleryMobile"));

export function ProjectGallery(props: Props) {
    const { isMobile } = useStyles();

    return (
        <Suspense>
            {isMobile ? <ProjectGalleryMobile {...props} /> : <ProjectGalleryDesktop {...props} />}
        </Suspense>
    )
}