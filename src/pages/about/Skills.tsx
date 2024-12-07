import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { tss } from "tss";
import { alpha } from "@mui/material/styles";

export function Skills() {
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

const useStyles = tss.withName({ Skills }).create(({ theme }) => {
    return {
        accordion: {
            backgroundColor: "transparent",
            borderBottom: `1px solid ${alpha(theme.palette.text.primary, 0.2)}`,
            borderRadius: "none"
        },
        icons: {
            color: theme.palette.text.primary
        }
    };
});
