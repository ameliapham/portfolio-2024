import { tss } from "tss";
import { LinearProgress } from "@mui/material";
import { alpha } from "@mui/material";
import { Link } from "type-route";
import { SeeMoreButton } from "./SeeMoreButton";

type Props = {
    className?: string;
    previousLink: Link | undefined;
    nextLink: Link | undefined;
    processPercentage: number;
};

export function ProgressComponent(props: Props) {
    const { className, previousLink, nextLink, processPercentage } = props;
    const { cx, classes } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
            <div className={classes.buttons}>
                <SeeMoreButton
                    hyphenPosition="left"
                    widthLinePx={40}
                    translateLinePx={30}
                    disabled={previousLink === undefined}
                    {...previousLink}
                >
                    Previous
                </SeeMoreButton>
                <SeeMoreButton
                    hyphenPosition="right"
                    widthLinePx={40}
                    translateLinePx={30}
                    disabled={nextLink === undefined}
                    {...nextLink}
                >
                    Next
                </SeeMoreButton>
            </div>
            <LinearProgress
                className={classes.progressBar}
                variant="determinate"
                value={processPercentage}
            />
        </div>
    );
}

const useStyles = tss.withName({ ProgressComponent }).create(({ theme }) => {
    return {
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        },
        progressBar: {
            width: "40%",
            zIndex: 2,
            borderRadius: "5px",
            backgroundColor: alpha(theme.palette.text.primary, 0.2),
            height: `${theme.spacing(0.2)}`,

            "& .MuiLinearProgress-bar": {
                background: "linear-gradient(to right, transparent, #6366f1, #0ea5e9)"
            },

            [theme.breakpoints.only("laptop")]: {
                width: "50%",
            },
            [theme.breakpoints.only("tablet")]: {
                width: "70%",
            },
            [theme.breakpoints.only("mobile")]: {
                width: "100%",
            }
        },
        buttons: {
            display: "flex",
            gap: "20px"
        }
    };
});
