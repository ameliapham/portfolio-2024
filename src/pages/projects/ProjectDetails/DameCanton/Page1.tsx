import { tss } from "tss-react/mui";
import Typography from "@mui/material/Typography";
import { keyframes } from "tss-react";
import { getProjectByNameId } from "../../projectsData";

type Props = {
    className?: string;
    onClick?: () => void;
};

const project = getProjectByNameId({
    projectId: "dame"
});

export function Page1(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();

    if (!project) {
        return <Typography variant="body1">Project not found</Typography>;
    }

    return (
        <div className={cx(classes.root, className)}>
            <Typography variant="body1" className={classes.year}>
                {project.year}
            </Typography>
            <Typography variant="h2" className={classes.name}>
                {project.name}
            </Typography>
            <div className={classes.content}>
                <div className={classes.column1}>
                    <Typography variant="body1">{project.description}</Typography>
                </div>
                <div className={classes.column2}>
                    <Typography variant="body1" style={{ textTransform: "uppercase" }}>
                        My role
                    </Typography>
                    <Typography variant="body1">
                        - Artistic Directrice <br />
                        - Graphic design <br />
                        - Sound design <br />
                        - Animation <br />
                        - Video editing <br />
                    </Typography>
                </div>
                <div className={classes.column2}>
                    <Typography variant="body1" style={{ textTransform: "uppercase" }}>
                        Credits
                    </Typography>
                    <Typography variant="body1">
                        - Client : Philippe Holvoet (La Dame de Canton)
                        <br />
                        - Technical Supervisor: Prof. Laure Leroy <br />
                        - Academic Supervisor: Prof. Jean-Marc Lecarpentier <br />
                        - Effect development : Ruben Edery <br />- Scrip development : Ferhan Alic &
                        Shelly Jean
                    </Typography>
                </div>
            </div>
        </div>
    );
}

const animate = keyframes({
    from: {
        opacity: 0,
        transform: "translate(0, 100px)",
        filter: "blur(30px)"
    },
    to: {
        opacity: 1,
        transform: "translate(0)",
        filter: "blur(0)"
    }
});

const useStyles = tss.withName({ name: "DamePage1" }).create(({ theme }) => {
    return {
        root: {
            color: theme.palette.text.primary,
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(2)
        },
        year: {
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.2s 1 forwards`
        },
        name: {
            fontWeight: "bold",
            animation: `${animate} 0.5s ease-in-out 0s 1 forwards`,
            opacity: 0
        },
        content: {
            display: "flex",
            gap: theme.spacing(6),
            opacity: 0,
            animation: `${animate} 0.6s ease-in-out 0.2s 1 forwards`
        },
        column1: {
            flex: 2,
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(2),

            "& button": {
                opacity: 0,
                animation: `${animate} 0.6s ease-in-out 0.4s 1 forwards`
            }
        },
        column2: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(2)
        }
    };
});
