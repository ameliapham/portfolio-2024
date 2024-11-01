import { createTss } from "tss-react";
import { useTheme } from "@mui/material/styles";
export { GlobalStyles } from "tss-react";

function useContext() {
    const theme = useTheme();

    const headerHeight= theme.spacing(10);

    return {
        theme,
        headerHeight
    };
}

export const { tss } = createTss({
    useContext
});
