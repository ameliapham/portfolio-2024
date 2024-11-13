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

export function NavComponent(props: Props) {
    const { className, previousLink, nextLink, processPercentage } = props;
    const { cx, classes } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
            <div className={classes.buttons}>
                <SeeMoreButton
                    hyphenPosition="left"
                    disabled={previousLink === undefined}
                    {...previousLink}
                >
                    Previous
                </SeeMoreButton>
                <SeeMoreButton
                    hyphenPosition="right"
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
    )
}

const useStyles = tss
    .withName({ NavComponent })
    .create(({ theme }) => {
        return {
            root: {
                border: "1px solid #f5f5f5",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: `${theme.spacing(2)}`,
            },
            progressBar: {
                width: "30%",
                zIndex: 2,
                borderRadius: "5px",
                backgroundColor: alpha(theme.palette.text.primary, 0.2),
                height: `${theme.spacing(0.2)}`,

                "& .MuiLinearProgress-bar": {
                    background: "linear-gradient(to right, transparent, #6366f1, #0ea5e9)"
                }
            },
            buttons: {
                display: "flex",
                gap: "20px"
            },
        };
    });
