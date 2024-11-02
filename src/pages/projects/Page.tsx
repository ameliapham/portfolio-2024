import { tss } from "tss";
import { ProjectGallery } from "./ProjectGallery";
import { ProjectDetails } from "./ProjectDetails";
import type { PageRoute} from "./route";
import { routes } from "routes";

export type Props = {
    className?: string;
    route: PageRoute;
};

export default function Page(props: Props) {
    const { className, route } = props;
    const { cx, classes } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
            {route.params.isGalleryVisible ? (
                <ProjectGallery
                    className={classes.gallery}
                    route={route}
                    onSeeProjectDetails={() => {
                        routes[route.name]({
                            ...route.params,
                            isGalleryVisible: false
                        }).push();
                    }}
                />
            ) : (
                <ProjectDetails
                    className={classes.details}
                    projectId={route.params.projectId}
                    onBackToGallery={() => {
                        routes[route.name]({
                            ...route.params,
                            isGalleryVisible: true
                        }).push();
                    }}
                />
            )}
        </div>
    );
}

const useStyles = tss.withName({ Page }).create({
    root: {
        //border: "1px solid red",
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
