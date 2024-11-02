import { useMemo } from "react";
import { projects, projectIds } from "./projects";
import { useEnableFixedScrollBySections } from "utils/fixed-scroll";
import type { PageRoute } from "./route";
import { routes } from "routes";
import { tss } from "tss";
import { GalleryItem } from "./GalleryItem";
import { rotateArrayRight } from "utils/rotateArray";

type Props = {
    className?: string;
    route: PageRoute;
    onSeeProjectDetails: () => void;
};

export function ProjectGallery(props: Props) {
    const { className, route, onSeeProjectDetails } = props;

    const { cx, classes } = useStyles();

    const rotatedProjects = useMemo(() => {

        let rotatedProjects = [...projects];

        while (rotatedProjects[1].id !== route.params.projectId) {
            rotatedProjects = rotateArrayRight(rotatedProjects);
        }

        return rotatedProjects;

    }, [route.params.projectId]);


    useEnableFixedScrollBySections({
        sectionCount: projectIds.length,
        initialSectionIndex: projectIds.indexOf(route.params.projectId),
        onSectionChange: sectionIndex => {
            routes[route.name]({
                ...route.params,
                projectId: projectIds[sectionIndex]
            }).replace();
        }
    });

    return (
        <div className={cx(classes.root, className)}>
            <div>
                {rotatedProjects.map((itemData, i) => (
                    <GalleryItem
                        key={itemData.id}
                        position={i + 1}
                        itemData={itemData}
                        onClick={onSeeProjectDetails}
                    />
                ))}
            </div>
        </div>
    );
}

const useStyles = tss.withName({ ProjectGallery }).create(()=> ({
    root: {
        //border: "1px solid red",
    }
}));