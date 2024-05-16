import { createTheme } from '@mui/material/styles';

const typography = {
    fontFamily: "Poppins",
    h1: {
        fontFamily: "PlayfairDisplay",
    },
    h2: {
        fontFamily: "PlayfairDisplay",
    },
};

export const theme = createTheme({
    palette: {
        background: {
            default: "#0E0E10"
        },
        text: {
            primary: "#8e97a3"
        },
    },
    typography,
})