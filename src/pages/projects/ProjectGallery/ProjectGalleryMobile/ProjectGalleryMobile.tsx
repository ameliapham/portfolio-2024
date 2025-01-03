import type { Props } from "../../Props";
import { tss } from "tss";
import Typography from "@mui/material/Typography";
import { routes } from "routes";
import { projects, detailImagesByProjectId } from "../../projectsData";
import { ProjectFrame } from "./ProjectFrame";
import { useDownloadAssets } from "utils/useDownloadAssets";
import { useDelayOnlyOnce } from "utils/useDelayOnlyOnce";
import { SplashScreen } from "shared/SplashScreen";

const projectAssetUrls = projects.map(project => project.imageUrl);

const allDetailImagesUrls = Object.values(detailImagesByProjectId)
    .map(detailImages => Object.values(detailImages))
    .flat();

export default function ProjectGalleryMobile(props: Props) {
    const { className, route } = props;

    const { cx, classes, css } = useStyles();

    const { isDownloadingAssets } = useDownloadAssets({
        urls: projectAssetUrls
    });

    useDownloadAssets({
        urls: allDetailImagesUrls
    });

    const { isDelayed } = useDelayOnlyOnce();

    if (isDownloadingAssets || isDelayed) {
        return (
            <div
                className={css({
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                })}
            >
                <SplashScreen className={css({ width: "50%" })} />
            </div>
        );
    }

    return (
        <div className={cx(classes.root, className)}>
            {projects.map(project => (
                <ProjectFrame
                    key={project.id}
                    className={classes.item}
                    imageUrl={project.imageUrl}
                    link={
                        routes[route.name]({
                            ...route.params,
                            projectId: project.id,
                            isGalleryVisible: false
                        }).link
                    }
                >
                    <Typography variant="h2" className={classes.name}>
                        {project.name}
                    </Typography>
                    <Typography variant="body2">{project.year}</Typography>
                </ProjectFrame>
            ))}
        </div>
    );
}

const useStyles = tss.withName({ ProjectGalleryMobile }).create(({ theme, headerHeight }) => ({
    root: {
        color: theme.palette.text.primary,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(6),
        padding: `calc(${headerHeight} + ${theme.spacing(6)}) ${theme.spacing(6)}`
    },
    item: {
        height: "300px",
        cursor: "pointer",
        color: "inherit"
    },
    name: {
        textTransform: "uppercase",
        fontWeight: "bold"
    }
}));
