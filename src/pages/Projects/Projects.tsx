import { tss } from "tss-react/mui";
import { ProjectId, projectIds } from "./projectIds";
import { ProjectGallery } from "./ProjectGallery";
import { ProjectDetails } from "./ProjectDetails";
import { useState } from "react";

export type Props = {
    className?: string;
};

export default function Project(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();

    const [isGalleryVisible, setGalleryVisible] = useState(true);
    const [projectId, setProjectId] = useState<ProjectId>(projectIds[0]);

    return (
        <div className={cx(classes.root, className)}>
            {isGalleryVisible ? (
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
            )}
        </div>
    );
}

const useStyles = tss.withName("Project").create({
    root: {
        height: "100%",
        width: "100%",
        //border: "1px solid red",
        overflow: "hidden",
        position: "relative"
    },
    gallery: {
        height: "100%"
    },
    details: {
        height: "100%",
        width: "100%"
        //border: "5px solid green"
    }
});
