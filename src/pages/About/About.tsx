import { tss } from "tss-react/mui";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useScrollNavigation } from "hooks/useScrollNavigation";
import { PhotoFrame } from "./PhotoFrame";
import { SeeMoreButton } from "shared/SeeMoreButton";
import { BackgroundBeams } from "shared/BackgroundBeams";

type Props = {
    className?: string;
};

export function About(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();
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
                console.log("up");
                break;
            case "down":
                incrementDetailsIndex();
                console.log("down");
                break;
        }
    });

    return (
        <>
            <div className={cx(classes.root, className)}>
                <PhotoFrame className={classes.frameZone} />

                <div className={classes.content}>
                    {(() => {
                        switch (detailsIndex % 2) {
                            case 0:
                                return <Content1 />;
                            case 1:
                                return <Content2 />;
                        }
                    })()}
                </div>

            </div>
            <BackgroundBeams className={classes.backgroundBeams} />
        </>
    );
}

function Content1() {
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

function Content2() {
    const { classes } = useStyles();

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

const useStyles = tss.withName({ About }).create(({ theme }) => {
    return {
        root: {
            alignContent: "center",
            gap: "5vw",
            zIndex: 1,
        },
        backgroundBeams: {
            position: "absolute",
            height: "100%",
            width: "100%",
            overflow: "hidden",
        },
        frameZone: {
            height: "35vw",
            width: "25vw",
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
        }
    }
});
