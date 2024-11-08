import { tss } from "tss";
import { useState } from "react";
import { type ProjectId, projectIds } from "../projectsData";
import { useScrollNavigation } from "utils/useScrollNavigation";
import { SeeMoreButton } from "shared/SeeMoreButton";
import { projects } from "../projectsData";
import { NextButton, PreviousButton } from "shared/NavButton";
import { routes } from "routes";
import { alpha, LinearProgress } from "@mui/material";

import { Zen } from "./Zen";
import { Gmeta } from "./Gmeta";
import { Badgeur } from "./Badgeur";
import { Iso } from "./Iso";
import { DameCanton } from "./DameCanton";

export type Props = {
    className?: string;
    projectId: ProjectId;
    onBackToGallery: () => void;
};

export function ProjectDetails(props: Props) {
    const { className, projectId, onBackToGallery } = props;
    const { cx, classes } = useStyles({ projectId });

    const [detailsIndex, setDetailsIndex] = useState(0);

    const incrementDetailsIndex = () => {
        setDetailsIndex(prevIndex => prevIndex + 1);
    };

    const decrementDetailsIndex = () => {
        setDetailsIndex(prevIndex => prevIndex - 1);
    };

    useScrollNavigation(direction => {
        switch (direction) {
            case "up":
                decrementDetailsIndex();
                break;
            case "down":
                incrementDetailsIndex();
                break;
        }
    });

    return (
        <div className={cx(classes.root, className)}>
            <div className={classes.background} />
            <div>
                <SeeMoreButton className={classes.buttonBack} onClick={onBackToGallery}>
                    Back
                </SeeMoreButton>
            </div>
            <div className={classes.content}>
                {(() => {
                    switch (projectId) {
                        case "zen":
                            return <Zen detailsIndex={detailsIndex} />;
                        case "gmeta":
                            return <Gmeta detailsIndex={detailsIndex} />;
                        case "badgeur":
                            return <Badgeur route={} />;
                        case "iso":
                            return <Iso detailsIndex={detailsIndex} />;
                        case "dame":
                            return <DameCanton detailsIndex={detailsIndex} />;
                    }
                })()}
            </div>
            <div className={classes.progressNavBar}>
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
        </div>
    );
}

const useStyles = tss
    .withName({ ProjectDetails })
    .withParams<{ projectId: ProjectId }>()
    .create(({ theme, projectId, headerHeight }) => {
        const project = projects.find(item => item.id === projectId);
        const backgroundImage = project ? `url(${project.backgroundUrl})` : "none";

        return {
            root: {
                padding: `${headerHeight} ${theme.spacing(10)}`,
                position: "relative",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden"
                //border: "5px solid red",
            },
            background: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: backgroundImage,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(15px)",
                margin: "-20px",
                opacity: 0.5,
                transition: "background 0.5s"
            },
            buttonBack: {
                padding: `${theme.spacing(2)} 0`,
                opacity: 0.4,
                transition: "opacity 0.5s",
                ":hover": {
                    opacity: 1,
                    transition: "opacity 0.5s"
                }
            },
            content: {
                flex: 1,
                //order: "5px solid pink",
                padding: "0 10%"
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
