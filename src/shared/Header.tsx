import logo from 'assets/logo.svg';
import { MenuButton } from 'shared/MenuButton';
import { tss } from 'tss-react/mui';
import { alpha } from "@mui/material/styles";

export function Header() {

    const { classes } = useStyle();

    return (
        <div className={classes.root}>
            <img
                className={classes.logo}
                src={logo}
                alt="Logo"
            />

            <div className={classes.buttonZone}>
                <MenuButton
                    onClick={() => alert("Hello")}
                >
                    About
                </MenuButton>
                <MenuButton
                    onClick={() => alert("Hello")}
                >
                    Projects
                </MenuButton>
                <MenuButton
                    onClick={() => alert("Hello")}
                >
                    Contact
                </MenuButton>
            </div>


        </div>

    )
}

const useStyle = tss
    .withName({ Header })
    .create(({ theme }) => ({
        "root": {
            "boxSizing": "border-box",
            "display": "flex",
            "justifyContent": "space-between",
            "alignItems": "center",
            "padding": `0 ${theme.spacing(10)}`,
            "borderBottom": `1px solid ${alpha("#FFFFFF", 0.1)}`,
            "height": theme.spacing(8),
        },
        "logo": {
            "width": theme.spacing(15),
            "cursor": "pointer",
            "padding": `${theme.spacing(1)}`,
        },
        "buttonZone": {
            "display": "flex",
            "gap": theme.spacing(6),
        },

    }))