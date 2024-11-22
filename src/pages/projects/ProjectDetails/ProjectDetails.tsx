import { tss } from "tss";
import { SeeMoreButton } from "shared/SeeMoreButton";
import { projects, type Project } from "../projectsData";
import { PageRoute } from "../route";
import { routes } from "routes";

import { Zen } from "./Zen";
import { Gmeta } from "./Gmeta";
import { Badgeur } from "./Badgeur";
import { Iso } from "./Iso";
import { DameCanton } from "./DameCanton";
import { Famed } from "./Famed";

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
                        isGalleryVisible: true,
                        detailsIndex: undefined
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
                        case "badgeur":
                            return <Badgeur route={route} />;
                        case "dame":
                            return <DameCanton route={route} />;
                        case "gmeta":
                            return <Gmeta route={route} />;
                        case "iso":
                            return <Iso route={route} />;
                        case "famed":
                            return <Famed route={route} />;
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
                padding: `${headerHeight} ${theme.spacing(10)} ${theme.spacing(4)} ${theme.spacing(10)}`,
                position: "relative",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden"
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
                transition: "opacity 0.5s"
            },
            content: {
                flex: 1
            }
        };
    });
