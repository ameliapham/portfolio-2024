import { tss } from "tss-react/mui";
import logo from "assets/logo.svg";
import { MenuButton } from "./MenuButton";
import { alpha } from "@mui/material/styles";
import { usePageId } from "hooks/usePageId";

type Props = {
    className?: string;
};

export function Header(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();
    const { pageId: selectedPage, setPageId: setSelectedPage } = usePageId();

    return (
        <div className={cx(classes.root, className)}>
            <img
                className={classes.logo}
                src={logo}
                alt="Logo"
                onClick={() => setSelectedPage("home")}
            />

            <div className={classes.buttonZone}>
                <MenuButton onClick={() => setSelectedPage("about")} selected={selectedPage === "about"}>
                    About Me
                </MenuButton>
                <MenuButton
                    onClick={() => setSelectedPage("projects")}
                    selected={selectedPage === "projects"}
                >
                    Projects
                </MenuButton>
                <MenuButton
                    onClick={() => setSelectedPage("contact")}
                    selected={selectedPage === "contact"}
                >
                    Contact
                </MenuButton>
            </div>
        </div>
    );
}

const useStyles = tss.withName({ Header }).create(({ theme }) => ({
    root: {
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: `1px solid ${alpha(theme.palette.text.primary, 0.2)}`,
        height: "100%",
        width: "100%",
        zIndex: 1000
    },
    logo: {
        width: theme.spacing(15),
        cursor: "pointer"
    },
    buttonZone: {
        display: "flex",
        gap: theme.spacing(6)
    }
}));
