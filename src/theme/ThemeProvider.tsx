import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { theme } from "./theme";

type ThemeProviderProps = {
    children: React.ReactNode;
};

export function ThemeProvider(props: ThemeProviderProps) {
    const { children } = props;

    return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
