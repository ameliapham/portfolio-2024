import { createTheme } from '@mui/material/styles';

const typography = {
    fontFamily: "Poppins",
    h1: {
        fontFamily: "PlayfairDisplay",
    },
    h2: {
        fontFamily: "PlayfairDisplay",
        letterSpacing: "0.5px",
    },
    h3: {
        fontFamily: "PlayfairDisplay",
        letterSpacing: "0.5px",
    },
    h6: {
        fontWeight: 300,
        letterSpacing: "0.5px",
    },
    body1: {
        fontWeight: 200,
        letterSpacing: "0.5px",
    },
    button: {
        letterSpacing: "0.5px",
    },
};

export const theme = createTheme({
    palette: {
        background: {
            default: "#000"
        },
        text: {
            //primary: "#acb3b4"
            primary: "rgba(255, 255, 255, 0.7)"
        },
    },
    typography,
})