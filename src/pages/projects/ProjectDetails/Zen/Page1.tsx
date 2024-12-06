import { tss } from "tss";
import Typography from "@mui/material/Typography";
import { SeeMoreButton } from "shared/SeeMoreButton";
import { keyframes } from "tss-react";
import { getProjectByNameId } from "../../projectsData";

type Props = {
    className?: string;
    onClick?: () => void;
};

const project = getProjectByNameId({
    projectId: "zen"
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
                    <Typography variant="body1">
                        Zen Gourmet is the website for an upcoming Vietnamese restaurant in Mannheim. The
                        site was designed entirely from scratch, encompassing the selection of the color
                        palette, logo and icon creation, promotional imagery developed with AI
                        assistance, and a custom UI design with FIgma. The development was subsequently
                        executed using React and TypeScript.
                    </Typography>
                    <div className={classes.buttons}>
                        <SeeMoreButton
                            href={project.linkOnline}
                            target="_blank"
                            rel="noopener"
                        >
                            View it online
                        </SeeMoreButton>
                        <SeeMoreButton
                            href={project.linkFigma}
                            target="_blank"
                            rel="noopener"
                        >
                            Prototype Figma
                        </SeeMoreButton>
                    </div>

                </div>
                <div className={classes.column2}>
                    <Typography variant="body1" style={{ textTransform: "uppercase" }}>
                        My role
                    </Typography>
                    <Typography variant="body1">
                        - UI & UX design <br />
                        - Logo design <br />
                        - Graphics design <br />
                        - Front-end development <br />- Technical development
                    </Typography>
                </div>
                <div className={classes.column3}>
                    <Typography variant="body1" style={{ textTransform: "uppercase" }}>
                        Credits
                    </Typography>
                    <Typography variant="body1">
                        - ZenAsia Restaurant <br />- Conception & Development of website : Amélia Pham
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

const useStyles = tss.withName({ name: "ZenPage1" }).create(({ theme }) => {
    return {
        root: {
            color: theme.palette.text.primary,
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(2),
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
            gap: theme.spacing(10),
            opacity: 0,
            animation: `${animate} 0.6s ease-in-out 0.2s 1 forwards`,

            [theme.breakpoints.down("laptop")]: {
                flexDirection: "column",
                gap: theme.spacing(4)
            },
            [theme.breakpoints.only("laptop")]: {
                gap: theme.spacing(4)
            },
        },
        buttons: {
            display: "flex",
            flexDirection: "column"
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
            gap: theme.spacing(2),

            [theme.breakpoints.only("tablet")]: {
                display: "none"
            },
        },
        column3: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(2)
        }
    };
});
