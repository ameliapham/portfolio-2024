import { tss, keyframes } from "tss";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { PhotoFrame } from "./PhotoFrame";
import { SeeMoreButton } from "shared/SeeMoreButton";
import { useDomRect } from "powerhooks/useDomRect";
import { routes } from "routes";
import { PageRoute } from "./route";
import { aboutDetailsIds } from "./aboutDetailsIds";
import { ProgressComponent } from "shared/ProgressComponent";
import { SplashScreen } from "shared/SplashScreen";
import { useDownloadAssets } from "utils/useDownloadAssets";
import avatarUrl from "assets/avatarAnime.jpg";

type Props = {
    className?: string;
    route: PageRoute;
};

export default function Page(props: Props) {
    const { className, route } = props;

    const {
        ref: rootRef,
        domRect: { width: rootWidth }
    } = useDomRect();

    const { cx, classes, css } = useStyles({ rootWidth });

    const { isDownloadingAssets } = useDownloadAssets({
        urls: [avatarUrl]
    });

    if (isDownloadingAssets) {
        return (
            <div
                className={css({
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                })}
            >
                <SplashScreen className={css({ width: "50%" })} />
            </div>
        );
    }

    return (
        <div ref={rootRef} className={cx(classes.root, className)}>
            <div className={classes.container}>
                <PhotoFrame className={classes.frameZone} avatarUrl={avatarUrl} />
                <div className={classes.texts}>
                    {(() => {
                        switch (route.params.aboutDetailsId) {
                            case "cv":
                                return <Cv />;
                            case "skills":
                                return <Skills />;
                        }
                    })()}
                </div>
            </div>

            <ProgressComponent
                className={classes.navComponent}
                previousLink={
                    aboutDetailsIds.indexOf(route.params.aboutDetailsId) > 0
                        ? routes[route.name]({
                            ...route.params,
                            aboutDetailsId:
                                aboutDetailsIds[
                                aboutDetailsIds.indexOf(route.params.aboutDetailsId) - 1
                                ]
                        }).link
                        : undefined
                }
                nextLink={
                    aboutDetailsIds.indexOf(route.params.aboutDetailsId) < aboutDetailsIds.length - 1
                        ? routes[route.name]({
                            ...route.params,
                            aboutDetailsId:
                                aboutDetailsIds[
                                aboutDetailsIds.indexOf(route.params.aboutDetailsId) + 1
                                ]
                        }).link
                        : undefined
                }
                processPercentage={
                    (aboutDetailsIds.indexOf(route.params.aboutDetailsId) /
                        (aboutDetailsIds.length - 1)) *
                    100
                }
            />
        </div>
    );
}

function Cv() {
    return (
        <>
            <Typography variant="h2">Amélia Pham</Typography>

            <Typography variant="body1">
                I am Huong PHAM, also known as Amélia PHAM.
                <br />
                <br />
                As a UI/UX Designer, Web Designer, and Front-End Developer, my expertise spans a wide
                range of activities in the design field, including user research, the creation of
                interactive prototypes, web design and development, as well as user testing.
            </Typography>

            <SeeMoreButton>Download CV</SeeMoreButton>
        </>
    );
}

function Skills() {
    const { classes } = useStyles({ rootWidth: 0 });

    return (
        <>
            <Typography variant="h2">What I can do</Typography>

            <Accordion className={classes.accordion}>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon className={classes.icons} />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography variant="button">Frontend Development</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        HTML - CSS - JavaScript - React - TypeScript - Tailwind CSS - MUI - Framer Motion
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion className={classes.accordion}>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon className={classes.icons} />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography variant="button">UI/UX Design</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        Brand Systems - Design Systems - Visual Identities - Interaction Design - Visual
                        Design - Motion Design - Prototyping - User Testing
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    );
}

const useStyles = tss
    .withName({ Page })
    .withParams<{ rootWidth: number }>()
    .create(({ theme, rootWidth, headerHeight }) => {
        return {
            root: {
                paddingBottom: `${theme.spacing(4)}`,
                display: "flex",
                flexDirection: "column",
                animation: `${keyframes`
                    0% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                    `} 400ms`
            },
            container: {
                flex: 1,
                display: "flex",
                padding: `0 ${0.1 * rootWidth}px 0 ${0.15 * rootWidth}px`,
                alignItems: "center",
                flexDirection: "row",
                gap: "5vw",

                [theme.breakpoints.down("laptop")]: {
                    flexDirection: "column",
                    gap: "80px",
                    padding: `${headerHeight} ${0.1 * rootWidth}px`
                }
            },
            frameZone: {
                height: 0.3 * rootWidth,
                width: 0.25 * rootWidth,
            },
            texts: {
                flex: 1,
                color: theme.palette.text.primary,
                display: "flex",
                flexDirection: "column",
                gap: "20px",

                // Hide scrollbar for webkit browsers
                "&::-webkit-scrollbar": {
                    display: "none"
                },
                // Hide scrollbar for IE, Edge, and Firefox
                "&": {
                    msOverflowStyle: "none",
                    scrollbarWidth: "none"
                }
            },
            accordion: {
                backgroundColor: "transparent",
                borderBottom: `1px solid ${alpha(theme.palette.text.primary, 0.2)}`,
                borderRadius: "none"
            },
            icons: {
                color: theme.palette.text.primary
            },
            navComponent: {},
        };
    });
