import { createTss } from "tss-react";
import { useTheme } from "@mui/material/styles";
import { useWindowInnerSize } from "powerhooks/useWindowInnerSize";
export { GlobalStyles, keyframes } from "tss-react";

function useContext() {
    const theme = useTheme();

    const headerHeight = theme.spacing(8);

    const { windowInnerWidth } = useWindowInnerSize();

    const isMobile = windowInnerWidth < theme.breakpoints.values.tablet;

    return {
        theme,
        headerHeight,
        windowInnerWidth,
        isMobile
    };
}

export const { tss } = createTss({
    useContext
});

export const useStyles = tss.create({});
