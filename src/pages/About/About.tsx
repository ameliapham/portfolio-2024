import { useState } from 'react';
import { tss } from 'tss-react/mui';
import { GlobalStyles, keyframes } from "tss-react";
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

//import { TracingBeam } from 'shared/TracingBeam';
import { PhotoFrame } from './PhotoFrame';
import { SeeMoreButton } from 'shared/SeeMoreButton';
import { BackgroundBeams } from 'shared/BackgroundBeams';
import { useSelectedPage } from "hooks/useSelectedPage";
import { useScrollNavigation } from "hooks/useScrollNavigation";

type Props = {
    className?: string;
};

export function About(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();

    const [sectionIndex, setSectionIndex] = useState<0 | 1>(0);

    const { setSelectedPage } = useSelectedPage();

    useScrollNavigation(direction => {
        switch (direction) {
            case "up":
                setSectionIndex(0);
                break;
            case "down":
                if (sectionIndex === 0) {
                    setSectionIndex(1);
                } else {
                    setSelectedPage("projects");
                }
        }
    });

    return (
        <>
            <GlobalStyles
                styles={{
                    "body": {
                        "overflow": "hidden",
                    },
                }}
            />
            <div className={cx(classes.root, className)}>
                <PhotoFrame className={classes.frameZone} />

                <div className={classes.content}>

                    {(() => {
                        switch (sectionIndex) {
                            case 0: return (
                                <div className={classes.object1}>
                                    <Typography variant="h3">
                                        Amélia Pham
                                    </Typography>

                                    <Typography variant="body1">
                                        Welcome to my portfolio!
                                        <br /><br />
                                        I am Huong PHAM, also known as Amélia PHAM.
                                        <br /><br />
                                        As a UI/UX Designer, Web Designer, and Front-End Developer, my expertise spans a wide range of activities in the design field, including user research, the creation of interactive prototypes, web design and development, as well as user testing. My goal is to transform innovative ideas into rational and functional digital experiences, ensuring a seamless blend of creativity and practicality.
                                    </Typography>

                                    <SeeMoreButton>
                                        Download CV
                                    </SeeMoreButton>
                                </div>
                            );
                            case 1: return (
                                <div className={cx(classes.object2)}>
                                    <Typography variant="h3">
                                        What I can do
                                    </Typography>

                                    <Typography variant="body1">
                                        If you wander what I can do, here is a list of my skills and expertise.
                                    </Typography>

                                    <Accordion className={classes.accordion}>
                                        <AccordionSummary
                                            expandIcon={<ArrowDropDownIcon className={classes.icons} />}
                                            aria-controls="panel2-content"
                                            id="panel2-header"
                                        >
                                            <Typography variant="button">
                                                Frontend Development
                                            </Typography>
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
                                            <Typography variant="button">
                                                UI/UX Design
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography variant="body1">
                                                Brand Systems - Design Systems - Visual Identities - Interaction Design - Visual Design - Motion Design - Prototyping - User Testing
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            );
                        }
                    })()}
                </div>

                <BackgroundBeams />
            </div>
        </>
    );
}

const useStyles = tss
    .withName({ About })
    .create(({ theme }) => ({
        "root": {
            "padding": "20px",
            "height": "100vh",
            "boxSizing": "border-box",
            "position": "relative",
            "overflow": "hidden",
            "animation": `${keyframes`
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
            `} 1000ms`
        },
        "frameZone": {
            "position": "absolute",
            "top": "50%",
            "right": "50%",
            "transform": "translateY(-50%)",
        },
        "content": {
            "position": "absolute",
            "top": "50%",
            "left": "60%",
            "transform": "translateY(-50%) translateX(-20%)",
            "width": "30%",
            "height": "55%",
            "color": theme.palette.text.primary,
            "padding": "20px",
        },
        "object1": {
            "display": "flex",
            "flexDirection": "column",
            "gap": "10px",
            "padding": "20px",
            "height": "100%",
            "position": "relative",
            "animation": `${keyframes`
            0% {
                top: -220px;
            }
            100% {
                top: 0;
            }
            `} 200ms`

        },
        "object2": {
            "display": "flex",
            "flexDirection": "column",
            "gap": "10px",
            "padding": "20px",
            "height": "100%",
            "position": "relative",
            "animation": `${keyframes`
                0% {
                  bottom: -600px;
                }
                100% {
                  bottom: 0;
                }
            `} 200ms`

        },
        "accordion": {
            "backgroundColor": "transparent",
            "borderBottom": `1px solid ${theme.palette.text.primary}`,
            "borderRadius": "none",
        },
        "icons": {
            "color": theme.palette.text.primary,
        },
    }));
