import type { Props } from "./Props";
import { tss } from "tss";
import Typography from "@mui/material/Typography";
import { routes } from "routes";
import { projects } from "../projectsData";
import { ProjectFrame } from "./ProjectFrame";

export default function ProjectGalleryMobile(props: Props) {
    const { className, route } = props;

    const { cx, classes } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
            {projects.map((project) => (
                <ProjectFrame
                    key={project.id}
                    className={classes.item}
                    imageUrl={project.imageUrl}
                    link={routes[route.name]({
                        ...route.params,
                        projectId: project.id,
                        isGalleryVisible: false
                    }).link}
                >
                    <Typography variant="h2" className={classes.name}>
                        {project.name}
                    </Typography>
                    <Typography variant="body2">
                        {project.year}
                    </Typography>
                </ProjectFrame>
            ))}
        </div>
    );
}

const useStyles = tss
    .withName({ ProjectGalleryMobile })
    .create(({ theme, headerHeight }) => ({
        root: {
            color: theme.palette.text.primary,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(6),
            padding: `calc(${headerHeight} + 50px) ${theme.spacing(6)}`,

        },
        item: {
            height: "300px",
            cursor: "pointer",
            color: "inherit",
        },
        name: {
            textTransform: "uppercase",
            fontWeight: "bold",
        },

    }));