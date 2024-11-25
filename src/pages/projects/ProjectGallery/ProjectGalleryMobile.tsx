import type { Props } from "./Props";
import { tss } from "tss";
import Typography from "@mui/material/Typography";
import { routes } from "routes";
import { projects } from "../projectsData";


export default function ProjectGalleryMobile(props: Props) {
    const { className } = props;

    const { cx, classes, css } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
            {projects.map((project) => (
                <a
                    key={project.id}
                    className={css(classes.item, { backgroundImage: `url(${project.imageUrl})` })}
                    {...routes.projects({
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
                </a>
            ))}
        </div>
    );
}

const useStyles = tss
    .withName({ ProjectGalleryMobile })
    .create(({ theme, headerHeight }) => ({
        root: {
            color: theme.palette.text.primary,
            border: "1px solid red",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(6),
            padding: `calc(${headerHeight} + 50px) ${theme.spacing(6)}`,

        },
        item: {
            height: "300px",
            backgroundSize: "cover",
            borderRadius: theme.spacing(1),
            border: `1px solid ${theme.palette.divider}`,
            textDecoration: "none",
            cursor: "pointer",
            color: "inherit",
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            padding: theme.spacing(4),
            transition: "transform 0.2s",

            "&:hover": {
                transform: "translate(5px, -5px)",
                transition: "transform 0.2s",
            },
        },
        name: {
            textTransform: "uppercase",
            fontWeight: "bold",
        },

    }));