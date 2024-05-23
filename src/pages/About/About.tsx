import { useState, useRef, useEffect } from 'react';
import { tss } from 'tss-react/mui';
import Typography from '@mui/material/Typography';
import { PhotoFrame } from './PhotoFrame';
import { SeeMoreButton } from 'shared/SeeMoreButton';
import { BackgroundBeams } from 'shared/BackgroundBeams';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

type Props = {
    className?: string;
};

export function About(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();

    const [showObject2, setShowObject2] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        const content = contentRef.current;
        if (content) {
            const scrollPosition = content.scrollTop;
            const threshold = 300;

            if (scrollPosition > threshold) {
                setShowObject2(true);
            } else {
                setShowObject2(false);
            }
        }
    };

    const propagateScroll = (e: any) => {
        const content = contentRef.current;
        if (content) {
            content.scrollTop += e.deltaY;
        }
    };

    useEffect(() => {
        document.addEventListener('wheel', propagateScroll);
        return () => {
            document.removeEventListener('wheel', propagateScroll);
        };
    }, []);

    return (
        <div className={cx(classes.root, className)}>
            <PhotoFrame className={classes.frameZone} />
            <div className={classes.content} onScroll={handleScroll} ref={contentRef}>
                <div className={cx(classes.object1, { [classes.hidden]: showObject2 })}>
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

                <div className={cx(classes.object2, { [classes.visible]: showObject2 })}>
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
                                Web Development
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body1">
                                HTML - CSS - JavaScript - React - Redux - NodeJS - Express - MongoDB - SQL - RESTful API - GraphQL
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
                                Brand Systems - Design Systems - Visual Identities - Interaction Design - Visual Design - Motion Design
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
            <BackgroundBeams />
        </div>
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
            "overflow": "hidden", // Ensure the root container does not scroll
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
            "overflowY": "auto",
            // Hide scrollbar for webkit browsers
            "&::-webkit-scrollbar": {
                "display": "none",
            },
            // Hide scrollbar for IE, Edge, and Firefox
            "&": {
                "msOverflowStyle": "none",
                "scrollbarWidth": "none",
            },
        },
        "object1": {
            "display": "flex",
            "flexDirection": "column",
            "gap": "20px",
            "padding": "20px",
            "height": "100%",
            "transition": "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
            "transform": "translateY(0)",
        },
        "object2": {
            "display": "flex",
            "flexDirection": "column",
            "gap": "20px",
            "padding": "20px",
            "height": "100%",
            "transition": "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
            "opacity": 0,
            "transform": "translateY(-20px)",
        },
        "hidden": {
            "opacity": 0,
            "transform": "translateY(20px)",
        },
        "visible": {
            "opacity": 1,
            "transform": "translateY(0)",
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
