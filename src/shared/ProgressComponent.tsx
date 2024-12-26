import { tss } from "tss";
import { LinearProgress } from "@mui/material";
import { alpha } from "@mui/material";
import { SeeMoreButton } from "./SeeMoreButton";
import { useScrollNavigation } from "utils/useScrollNavigation";
import { useKeyboardNavigation } from "utils/useKeyboardNavigation";
import type { Route } from "routes";

type Props = {
    className?: string;
    previousRoute: Route | undefined;
    nextRoute: Route | undefined;
    backRoute: Route | undefined;
    processPercentage: number;
};

export function ProgressComponent(props: Props) {
    const { className, previousRoute, nextRoute, backRoute, processPercentage } = props;
    const { cx, classes } = useStyles();

    const nextOrBackRoute = nextRoute ?? backRoute;

    useScrollNavigation(direction => {
        switch (direction) {
            case "up":
                previousRoute?.push();
                break;
            case "down":
                nextOrBackRoute?.push();
                break;
        }
    });

    useKeyboardNavigation(key => {
        switch(key){
            case "ArrowLeft":
            case "ArrowUp":
                previousRoute?.push();
                break;
            case "ArrowRight":
            case "ArrowDown":
                nextOrBackRoute?.push();
                break;
            case "Escape":
                backRoute?.push();
                break;
        }
    });

    return (
        <div className={cx(classes.root, className)}>
            <div className={classes.buttons}>
                <SeeMoreButton
                    className={classes.text}
                    hyphenPosition="left"
                    widthLinePx={10}
                    translateLinePx={5}
                    disabled={previousRoute === undefined}
                    {...previousRoute?.link}
                >
                    <h2>{"<"}</h2>
                </SeeMoreButton>
                <SeeMoreButton
                    className={classes.text}
                    hyphenPosition="right"
                    widthLinePx={10}
                    translateLinePx={5}
                    disabled={nextOrBackRoute === undefined}
                    {...nextOrBackRoute?.link}
                >
                    <h2> {">"} </h2>
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
            justifyContent: "center",
            backgroundColor: alpha(theme.palette.background.default, 0.8),
            borderTop: `1px solid ${alpha(theme.palette.text.primary, 0.2)}`
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
                width: "50%"
            },
            [theme.breakpoints.only("tablet")]: {
                width: "70%"
            },
            [theme.breakpoints.only("mobile")]: {
                width: "100%"
            }
        },
        buttons: {
            display: "flex",
            gap: "20px"
        },
        text: {
            fontSize: "20px",
            color: alpha(theme.palette.text.primary, 0.6)
        }
    };
});
