import { tss } from "tss-react/mui";
//import { ProjectId, projectIds } from "./projectIds";
//import { ProjectGallery } from "./ProjectGallery";
//import { ProjectDetails } from "./ProjectDetails";
//import { useState } from "react";
import { lazy, Suspense } from "react";
import type { PageRoute } from "./route";//

const ProjectGallery = lazy(() => import("./ProjectGallery"));
const ProjectDetails = lazy(() => import("./ProjectDetails"));

type Props = {
    className?: string;
    route: PageRoute;
};

export default function Page(props: Props) {
    const { className, route } = props;
    const { cx, classes } = useStyles();

    //const [isGalleryVisible, setGalleryVisible] = useState(true);
    //const [projectId, setProjectId] = useState<ProjectId>(projectIds[0]);

    return (
        <div className={cx(classes.root, className)}>
            {
                <Suspense fallback={<p>Loading...</p>}>
                    {route.params.gallery ? (
                        <ProjectGallery className={classes.gallery} route={route} />
                    ) : (
                        <ProjectDetails className={classes.details} route={route} />
                    )}
                </Suspense>
            }

            {/*isGalleryVisible ? (
                <ProjectGallery
                    className={classes.gallery}
                    projectId={projectId}
                    onChangeProjectId={setProjectId}
                    onSeeProjectDetails={() => setGalleryVisible(false)}
                />
            ) : (
                <ProjectDetails
                    className={classes.details}
                    projectId={projectId}
                    onBackToGallery={() => setGalleryVisible(true)}
                />
            )*/}
        </div>
    );
}

const useStyles = tss.withName("Project").create({
    root: {
        height: "100%",
        width: "100%",
        border: "1px solid red",
        overflow: "hidden",
        position: "relative"
    },
    gallery: {
        height: "100%"
    },
    details: {
        height: "100%",
        width: "100%",
        border: "5px solid green"
    }
});
