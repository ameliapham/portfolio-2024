import { tss } from "tss";
import ProjectGallery from "./ProjectGallery";
import ProjectDetails from "./ProjectDetails";
import type { PageRoute } from "./route";
import { routes } from "routes";


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
