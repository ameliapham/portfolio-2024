import { useMemo } from "react";
import { projects, projectIds, type Project } from "./projects";
import { useEnableFixedScrollBySections } from "utils/fixed-scroll";
import type { PageRoute } from "./route";
import { routes } from "routes";
import { tss } from "tss";
import { GalleryItem } from "./GalleryItem";

type Props = {
    className?: string;
    route: PageRoute;
    onSeeProjectDetails: () => void;
};

export function ProjectGallery(props: Props) {
    const { className, route, onSeeProjectDetails } = props;

    const rotatedProjects = useMemo(() => {

        function rotateToTheRight(projects: Project[]): Project[] {
            const [lastItem, ...otherItemsReversed] = [...projects].reverse();
            return [lastItem, ...otherItemsReversed.reverse()];
        }

        let rotatedProjects = [...projects];

        // eslint-disable-next-line no-constant-condition
        while (true) {
            if (rotatedProjects[1].id === route.params.projectId) {
                break;
            }
            rotatedProjects = rotateToTheRight(rotatedProjects);
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

    const { cx, classes } = useStyles();

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