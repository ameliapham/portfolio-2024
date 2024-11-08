import { tss } from "tss";
import { LinearProgress } from "@mui/material";
import { alpha } from "@mui/material";
import { SeeMoreButton } from "./SeeMoreButton";
import type { Link } from "type-route";

type Props = {
    className?: string;
    progressPercentage: number;
    previousLink: Link | undefined;
    nextLink: Link | undefined;
};

export function NavComponent(props: Props) {
    const { className, progressPercentage, previousLink, nextLink } = props;
    const { cx, classes } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
            <div className={classes.buttons}>
                <SeeMoreButton
                    disabled={previousLink === undefined}
                    translatePx={20}
                    {...previousLink}
                >
                    Previous
                </SeeMoreButton>
                <SeeMoreButton
                    hyphenPosition="right"
                    translatePx={20}
                    disabled={nextLink === undefined}
                    {...nextLink}
                >
                    Next
                </SeeMoreButton>
            </div>
            <LinearProgress
                className={classes.progressBar}
                classes={{
                    bar: classes.progressBar_bar,
                }}
                variant="determinate"
                value={progressPercentage}
            />
        </div>
    );
}

const useStyles = tss.withName({ NavComponent }).create(({ theme }) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "30px"
    },
    progressBar: {
        width: "30%",
        zIndex: 2,
        borderRadius: "5px",
        backgroundColor: alpha(theme.palette.text.primary, 0.2)
    },
    progressBar_bar: {
        background: "linear-gradient(to right, transparent, #6366f1, #0ea5e9)"
    },
    buttons: {
        display: "flex",
        gap: "20px"
    }
}));
