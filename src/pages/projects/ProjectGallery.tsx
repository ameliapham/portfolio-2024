import { useMemo } from "react";
import { projects, projectIds } from "./projects";
import { useEnableFixedScrollBySections } from "utils/fixed-scroll";
import type { PageRoute } from "./route";
import { routes } from "routes";
import { tss } from "tss";
//import { GalleryItem } from "./GalleryItem";
import { rotateArrayRight } from "utils/rotateArray";
import { VanillaCarousel } from "./VanillaCarousel";

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
        <VanillaCarousel
            className={cx(classes.root, className)}
            rotatedProjects={rotatedProjects}
            onPreviousProject={() => {
                const previousProjectIndex = projectIds.indexOf(rotatedProjects[1].id) - 1;
                routes[route.name]({
                    ...route.params,
                    projectId: projectIds[previousProjectIndex]
                }).replace();
            }}
            onNextProject={() => {
                const nextProjectIndex = projectIds.indexOf(rotatedProjects[1].id) + 1;
                routes[route.name]({
                    ...route.params,
                    projectId: projectIds[nextProjectIndex]
                }).replace();
            }}
            onSeeMore={onSeeProjectDetails}
        />
    );
}

const useStyles = tss.withName({ ProjectGallery }).create(() => ({
    root: {
        height: "100%",
    },
}));
