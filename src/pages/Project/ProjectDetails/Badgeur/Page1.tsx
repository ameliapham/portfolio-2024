import { tss } from "tss-react/mui";
import Typography from "@mui/material/Typography";
import { SeeMoreButton } from "shared/SeeMoreButton";
import { keyframes } from "tss-react";
import { projectData } from "pages/Project/projectData";

type Props = {
    className?: string;
    onClick?: () => void;
};

export function Page1(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();

    const gmetaProject = projectData.find(project => project.nameId === "badgeur");

    if (!gmetaProject) {
        return <Typography variant="body1">Project not found</Typography>;
    }

    return (
        <div className={cx(classes.root, className)}>
            <Typography variant="body1" className={classes.year}>
                {gmetaProject.year}
            </Typography>
            <Typography variant="h2" className={classes.name}>
                {gmetaProject.name}
            </Typography>
            <div className={classes.content}>
                <div className={classes.column1}>
                    <Typography variant="body1">
                    The Badgeur project was developed in two distinct phases. <br /><br />
                    The first phase took place during a Bachelor's in Management at IAE Lyon 3, focusing on concept development, technical feasibility, market research, and identifying target customer needs. A physical prototype of the chip was created, and a business growth plan was established, including B2B and B2C partnerships. <br /><br />
                    The second phase occurred during a Master's in Digital Creation and Publishing, where the mobile application was developed, market research was updated to reflect evolving customer needs after two years, and the logo, brand visual identity, and app prototype with a user-friendly UI design were created.
                    </Typography>
                    <SeeMoreButton>View it online</SeeMoreButton>
                </div>
                <div className={classes.column2}>
                    <Typography variant="body1" style={{ textTransform: "uppercase" }}>
                        My role
                    </Typography>
                    <Typography variant="body1">
                        - UX research <br />
                        - Logo & visual identity <br />
                        - UI design <br />
                        - Prototyping <br />
                    </Typography>
                </div>
                <div className={classes.column2}>
                    <Typography variant="body1" style={{ textTransform: "uppercase" }}>
                        Credits
                    </Typography>
                    <Typography variant="body1">
                        Phrase 1: <br />
                        - Technical Development : IAE Lyon 3's team <br />
                        - Academic Supervisor: Prof. MICAELLI Jean-Pierre <br /><br />
                        Phrase 2: <br />
                        - Market research & User testing: Paris 8's team <br />
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

const useStyles = tss.withName({ name: "BadgeurPage1" }).create(({ theme }) => {
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
