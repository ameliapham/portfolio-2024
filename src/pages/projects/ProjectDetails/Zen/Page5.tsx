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

export function Page5(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();

    if (!project) {
        return <Typography variant="body1">Project not found</Typography>;
    }

    return (
        <div className={cx(classes.root, className)}>
            <Typography variant="body1" className={classes.content}>
            That's just a glimpse — from concept to interface. If you're curious to see more, feel free to explore the live version, browse the Figma prototype, or just reach out. I'd be happy to share more!
            </Typography>
            <div className={classes.buttons}>
                <SeeMoreButton href={project.linkOnline} target="_blank" rel="noopener" className={classes.button1}>
                    View it online
                </SeeMoreButton>
                <SeeMoreButton href={project.linkFigma} target="_blank" rel="noopener" className={classes.button2}>
                    Prototype Figma
                </SeeMoreButton>
            </div>
        </div>
    );
}

const animateIn = keyframes({
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


const useStyles = tss.withName({ name: "ZenPage5" }).create(({ theme }) => {
    return {
        root: {
            color: theme.palette.text.primary,
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(2),
        },
        content: {
            opacity: 0,
            animation: `${animateIn} 0.5s ease-in-out 0s 1 forwards`,
        },
        buttons: {
            display: "flex",
            flexDirection: "column",
        },
        button1: {
            opacity: 0,
            animation: `${animateIn} 0.5s ease-in-out 0.2s 1 forwards`
        },
        button2: {
            opacity: 0,
            animation: `${animateIn} 0.6s ease-in-out 0.2s 1 forwards`,
        }
    };
});
