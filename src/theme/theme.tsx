import { createTheme } from '@mui/material/styles';

const typography = {
    fontFamily: "Poppins",
    h1: {
        fontFamily: "PlayfairDisplay",
    },
};

export const theme = createTheme({
    palette: {
        background: {
            default: "#0E0E10"
        },
        text: {
            primary: "#FFEEDD"
        },
    },
    typography,
})