import { tss } from "tss";
import { SeeMoreButton } from "shared/SeeMoreButton";
import { projects, type Project } from "../projectsData";
import { PageRoute } from "../route";
import { routes } from "routes";

import { Zen } from "./Zen";
//import { Gmeta } from "./Gmeta";
//import { Badgeur } from "./Badgeur";
//import { Iso } from "./Iso";
//import { DameCanton } from "./DameCanton";

export type Props = {
    className?: string;
    route: PageRoute;
};

export function ProjectDetails(props: Props) {
    const { className, route } = props;
    const { cx, classes } = useStyles({ projectId: route.params.projectId });

    return (
        <div className={cx(classes.root, className)}>
            <div className={classes.background} />
            <div>
                <SeeMoreButton 
                    className={classes.buttonBack} 
                    {...routes[route.name]({
                        ...route.params,
                        projectId: undefined,
                        isGalleryVisible: true
                    }).link}
                >
                    Back
                </SeeMoreButton>
            </div>
            <div className={classes.content}>
                {(() => {
                    switch (route.params.projectId) {
                        case "zen":
                            return <Zen route={route} />;
                        /*
                        case "gmeta":
                            return <Gmeta detailsIndex={detailsIndex} />;
                        case "badgeur":
                            return <Badgeur detailsIndex={detailsIndex} />;
                        case "iso":
                            return <Iso detailsIndex={detailsIndex} />;
                        case "dame":
                            return <DameCanton detailsIndex={detailsIndex} />;
                        */
                    }
                })()}
            </div>
        </div>
    );
}

const useStyles = tss
    .withName({ ProjectDetails })
    .withParams<{ projectId: Project["id"] }>()
    .create(({ theme, projectId, headerHeight }) => {
        const project = projects.find(project => project.id === projectId);
        const backgroundImage = project ? `url(${project.backgroundUrl})` : "none";
        //assert(project !== undefined);

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
        };
    });
