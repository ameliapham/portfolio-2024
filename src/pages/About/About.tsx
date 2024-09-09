import { tss } from 'tss-react/mui';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { PhotoFrame } from './PhotoFrame';
import { SeeMoreButton } from 'shared/SeeMoreButton';
import { BackgroundBeams } from 'shared/BackgroundBeams';


type Props = {
    className?: string;
};

export function About(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();

   
    return (

        <div className={cx(classes.root, className)}>
            <PhotoFrame className={classes.frameZone} />

            <div  className={classes.content}>
                    <Typography variant="h3">
                        Amélia Pham
                    </Typography>

                    <Typography variant="body1">
                        I am Huong PHAM, also known as Amélia PHAM.
                        <br /><br />
                        As a UI/UX Designer, Web Designer, and Front-End Developer, my expertise spans a wide range of activities in the design field, including user research, the creation of interactive prototypes, web design and development, as well as user testing.
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
                    <SeeMoreButton>
                        Download CV
                    </SeeMoreButton>
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
            "overflow": "hidden",
        },
        "frameZone": {
            "position": "absolute",
            "top": "50%",
            "right": "50%",
            "transform": "translate(-30%,-50%)",
        },
        "content": {
            "position": "absolute",
            "top": "50%",
            "left": "60%",
            "transform": "translateY(-45%) translateX(-20%)",
            "width": "35%",
            "color": theme.palette.text.primary,
            "padding": "20px",
            "overflowY": "scroll",
            "scrollSnapType": "y mandatory",
            "display": "flex",
            "flexDirection": "column",
            "gap": "20px",


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
        "accordion": {
            "backgroundColor": "transparent",
            "borderBottom": `1px solid ${theme.palette.text.primary}`,
            "borderRadius": "none",
        },
        "icons": {
            "color": theme.palette.text.primary,
        },
    }));
