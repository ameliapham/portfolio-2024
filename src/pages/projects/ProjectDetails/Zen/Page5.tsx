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
            <Typography variant="body1">
                Wanna know more about this project? <br />
            </Typography>
            <div className={classes.buttons}>
                <SeeMoreButton href={project.linkOnline} target="_blank" rel="noopener">
                    View it online
                </SeeMoreButton>
                <SeeMoreButton href={project.linkFigma} target="_blank" rel="noopener">
                    Prototype Figma
                </SeeMoreButton>
            </div>
        </div>
    );
}

const useStyles = tss.withName({ name: "ZenPage5" }).create(({ theme }) => {
    return {
        root: {
            color: theme.palette.text.primary,
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(2)
        },

        buttons: {
            display: "flex",
            flexDirection: "column",
        }
    };
});
