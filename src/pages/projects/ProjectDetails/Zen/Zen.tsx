import { lazy, Suspense } from "react";
import { useStyles } from "tss";
import { Props } from "../../Props";

const ProjectGalleryDesktop = lazy(() => import("./ZenDesktop"));
const ProjectGalleryMobile = lazy(() => import("./ZenMobile"));

export function Zen(props: Props) {
    const { isMobile } = useStyles();

    return (
        <Suspense>
            {isMobile ? <ProjectGalleryMobile {...props} /> : <ProjectGalleryDesktop {...props} />}
        </Suspense>
    )
}