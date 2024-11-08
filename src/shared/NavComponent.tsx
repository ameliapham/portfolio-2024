import { tss } from "tss";
import { LinearProgress } from "@mui/material";
import { routes } from "routes";
import { alpha } from "@mui/material";
import { Button } from "@mui/material";

type Props = {
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
    disabled?: boolean;
};

export function PreviousButton(props: Props) {
    const { className, onClick, children, disabled } = props;
    const { cx, classes } = useStyles();

    return (
        <Button
            className={cx(classes.previousButton, className)}
            onClick={onClick}
            disabled={disabled}
        >
            <span>{children}</span>
        </Button>
    );
}

export function NextButton(props: Props) {
    const { className, onClick, children, disabled } = props;
    const { cx, classes } = useStyles();

    return (
        <Button
            className={cx(classes.nextButton, className)}
            onClick={onClick}
            disabled={disabled}
        >
            <span>{children}</span>
        </Button>
    );
}

export function NavComponent(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();

    return (
        <div className={cx(classes.progressNavBar, className)}>
            <div className={classes.buttons}>
                <PreviousButton
                    //disabled={projectIds.indexOf(route.params.projectId) === 0}
                    {...routes[route.name]({
                        ...route.params,
                        projectId: projectIds[projectIds.indexOf(route.params.projectId) - 1]
                    }).link}
                >
                    Previous
                </PreviousButton>
                <NextButton
                    //disabled={projectIds.indexOf(route.params.projectId) === projectIds.length - 1}
                    {...routes[route.name]({
                        ...route.params,
                        projectId: projectIds[projectIds.indexOf(route.params.projectId) + 1]
                    }).link}
                >
                    Next
                </NextButton>
            </div>
            <LinearProgress
                className={classes.progressBar}
                variant="determinate"
                value={(() => {
                    const totalProjects = projectIds.length;
                    const currentProjectIndex = projectIds.indexOf(route.params.projectId);
                    if (currentProjectIndex === -1) return 0;
                    return ((currentProjectIndex + 1) / totalProjects) * 100;
                })()}
            />
        </div>
    )
}

const useStyles = tss
    .withName({ NavComponent })
    .create(({ theme }) => {
        return {
            previousButton: {
                position: "relative",
                color: theme.palette.text.primary,
                height: theme.spacing(6),
                padding: 0,
                cursor: "pointer",
                width: "150px",
                textAlign: "left",
        
                "&:hover": {
                    backgroundColor: "transparent"
                },
        
                "&::after": {
                    content: "''",
                    position: "absolute",
                    right: "0",
                    width: theme.spacing(5),
                    height: theme.spacing(0.15),
                    backgroundColor: `${alpha(theme.palette.text.primary, 0.5)}`,
                    transition: "all 0.4s ease"
                },
        
                "&:hover::after": {
                    transform: "translateX(-30px)",
                    width: theme.spacing(3)
                },
        
                span: {
                    transition: "all 0.4s ease",
                    transform: "translateX(-10px)"
                },
        
                "&:hover span": {
                    transform: "translateX(-20px)",
                    transition: "all 0.4s ease"
                }
            },
        
            nextButton: {
                position: "relative",
                color: theme.palette.text.primary,
                height: theme.spacing(6),
                padding: 0,
                cursor: "pointer",
                width: "150px",
                textAlign: "right",
        
                "&:hover": {
                    backgroundColor: "transparent"
                },
        
                "&::before": {
                    content: "''",
                    position: "absolute",
                    left: "0",
                    width: theme.spacing(5),
                    height: theme.spacing(0.15),
                    backgroundColor: `${alpha(theme.palette.text.primary, 0.5)}`,
                    transition: "all 0.4s ease"
                },
        
                "&:hover::before": {
                    transform: "translateX(30px)",
                    width: theme.spacing(3)
                },
        
                span: {
                    transition: "all 0.4s ease",
                    transform: "translateX(0px)"
                },
        
                "&:hover span": {
                    transform: "translateX(5px)",
                    transition: "all 0.4s ease"
                }
            },
            progressNavBar: {
                width: "100%",
                border: "1px solid #f5f5f5",
                position: "absolute",
                left: "50%",
                bottom: 0,
                transform: "translate(-50%, 0)",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: "30px",
            },
            progressBar: {
                width: "30%",
                zIndex: 2,
                borderRadius: "5px",
                backgroundColor: alpha(theme.palette.text.primary, 0.2),

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
