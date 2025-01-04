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
    projectId: "arti"
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
                        Our research focuses on gaining a better understanding of the current state and market for artificial intelligence (AI) in the arts. To achieve this, we conducted a detailed study of existing projects and applications that utilize AI across various artistic disciplines. The goal is to analyze these initiatives to understand how AI is being used in the arts and identify emerging trends. By examining the features and impact of ongoing projects, we aim to provide a comprehensive overview of AI's role in artistic creation. This research highlights the opportunities and challenges of integrating AI into the arts and offers valuable insights for those interested in this evolving field.
                    </Typography>
                    <div className={classes.buttons}>
                        <SeeMoreButton href={project.linkFigma} target="_blank" rel="noopener">
                            Prototype Figma
                        </SeeMoreButton>
                    </div>
                </div>
                <div className={classes.column2}>
                    <Typography variant="body1" style={{ textTransform: "uppercase" }}>
                        Credits
                    </Typography>
                    <Typography variant="body1">
                        - Art Director : Amélia Pham
                    </Typography>
                </div>
                <div className={classes.column3}>
                    <Typography variant="body1" style={{ textTransform: "uppercase" }}>
                        My role
                    </Typography>
                    <Typography variant="body1">
                        - UX & UI Designer <br />
                        - Interaction Design <br />
                        - Visual Design <br />
                        - User Research & Testing
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
            gap: theme.spacing(10),
            opacity: 0,
            animation: `${animate} 0.6s ease-in-out 0.2s 1 forwards`,

            [theme.breakpoints.down("laptop")]: {
                flexDirection: "column",
                gap: theme.spacing(4)
            },
            [theme.breakpoints.only("laptop")]: {
                gap: theme.spacing(4)
            }
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
            gap: theme.spacing(2)
        },
        column3: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(2),

            [theme.breakpoints.only("tablet")]: {
                display: "none"
            }
        }
    };
});
