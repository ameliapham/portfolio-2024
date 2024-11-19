import { createTheme } from "@mui/material/styles";

const typography = {
    fontFamily: "Poppins",
    h1: {
        fontFamily: "PlayfairDisplay",
    },
    h2: {
        fontFamily: "PlayfairDisplay",
        letterSpacing: "0.5px",
        fontSize: "2rem",
        [`@media (min-width: 600px)`]: { fontSize: "2.5rem" },
        [`@media (min-width: 900px)`]: { fontSize: "3.5rem" },
        [`@media (min-width: 1200px)`]: { fontSize: "3.75rem" },
    },
    h3: {
        fontFamily: "PlayfairDisplay",
        letterSpacing: "0.5px",
        fontSize: "3rem",
    },
    h6: {
        fontWeight: 300,
        letterSpacing: "0.5px",
        fontSize: "1rem",
        [`@media (min-width: 600px)`]: { fontSize: "1.2rem" },
        [`@media (min-width: 900px)`]: { fontSize: "1.25rem" },
        [`@media (min-width: 1200px)`]: { fontSize: "1.25rem" },
    },
    body1: {
        fontWeight: 200,
        letterSpacing: "0.5px",
        fontSize: "0.8rem",
        [`@media (min-width: 600px)`]: { fontSize: "1rem" },
        [`@media (min-width: 900px)`]: { fontSize: "1rem" },
        [`@media (min-width: 1200px)`]: { fontSize: "1rem" },
    },
    button: {
        letterSpacing: "0.5px",
        fontSize: "0.6rem",
        [`@media (min-width: 600px)`]: { fontSize: "0.8rem" },
        [`@media (min-width: 900px)`]: { fontSize: "0.8rem" },
        [`@media (min-width: 1200px)`]: { fontSize: "1rem" },
    }
};

declare module "@mui/material/styles" {
    interface BreakpointOverrides {
        // removes the `xs` breakpoint
        xs: false;
        sm: false;
        md: false;
        lg: false;
        xl: false;
        // adds the `mobile` breakpoint
        mobile: true;
        tablet: true;
        laptop: true;
        desktop: true;
    }
}

const breakpoints = {
    values: {
        mobile: 0,
        tablet: 600,
        laptop: 900,
        desktop: 1200
    }
};

export const theme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#000"
        },
        text: {
            //primary: "#acb3b4"
            primary: "rgba(255, 255, 255, 0.7)"
        }
    },
    typography,
    breakpoints
});
