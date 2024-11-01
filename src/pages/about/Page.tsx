import { tss } from "tss-react/mui";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { PhotoFrame } from "./PhotoFrame";
import { SeeMoreButton } from "shared/SeeMoreButton";
import { BackgroundBeams } from "shared/BackgroundBeams";
import { useEnableFixedScrollBySections } from "utils/fixed-scroll";
import { aboutDetailsIds} from "./aboutDetailsIds";
import { routes } from "routes";
import { useDomRect } from "powerhooks/useDomRect";
import LinearProgress from "@mui/material/LinearProgress";

import { PageRoute } from "./route";

type Props = {
    className?: string;
    route: PageRoute;
};

export default function Page(props: Props) {
    const { className, route } = props;

    const { ref: rootRef, domRect: { width: rootWidth }} = useDomRect();

    const { cx, classes, css } = useStyles({ rootWidth});

    const { currentScrollPercentage } = useEnableFixedScrollBySections({
        sectionCount: aboutDetailsIds.length,
        //initialSectionIndex: aboutDetailsIds.indexOf(route.params.aboutDetailsId),
        initialSectionIndex: aboutDetailsIds.indexOf(route.params.aboutDetailsId),
        onSectionChange: sectionIndex => {

            routes[route.name]({
                ...route.params,
                aboutDetailsId: aboutDetailsIds[sectionIndex]
            }).replace();
        }
    });

    return (
        <>
            <div ref={rootRef} className={cx(classes.root, className)}>
                <PhotoFrame className={classes.frameZone} />

                <div className={classes.content}>
                    {(() => {
                        switch (route.params.aboutDetailsId) {
                            case "cv":
                                return <Cv />;
                            case "skills":
                                return <Skills />;
                        }
                    })()}
                </div>
                <LinearProgress 
                classes={{
                    bar: css({
                        transition: "none",
                    })
                }}
                className={classes.progressBar} variant="determinate" value={currentScrollPercentage} />
            </div>
            <BackgroundBeams className={classes.backgroundBeams} />
        </>
    );
}

function Cv() {
    return (
        <>
            <Typography variant="h3">Amélia Pham</Typography>

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
            <Typography variant="h3">What I can do</Typography>

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
    .create(({ theme, rootWidth }) => {
        return {
            root: {
                alignContent: "center",
                gap: "5vw",
                zIndex: 1,
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                padding: `0 10vw 0 15vw`,
                position: "relative"
            },
            backgroundBeams: {
                position: "absolute",
                height: "100%",
                width: "100%",
                overflow: "hidden"
            },
            frameZone: {
                height: 0.35 * rootWidth,
                width: 0.25 * rootWidth
            },
            content: {
                flex: 1,
                color: theme.palette.text.primary,
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                //overflowY: "scroll",
                //scrollSnapType: "y mandatory",

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
            progressBar: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: 2
            }
        };
    });
