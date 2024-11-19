import { tss } from "tss";
import logo from "assets/logo.svg";
import { NavButton } from "./NavButton";
import { alpha } from "@mui/material/styles";
import { routes, useRoute } from "routes";
import { type PageId, pageIds } from "pages";
import Drawer from "@mui/material/Drawer";
import { MobileMenu } from "./MobileMenu";
import { useState } from "react";
import { BurgerButton } from "./BurgerButton";

type Props = {
    className?: string;
    pageId: PageId | false;
};

export function NavBar(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();
    const route = useRoute();

    const [openDrawer, setOpenDrawer] = useState(false);
    const toggleDrawer = (open: boolean) => () => {
        setOpenDrawer(open);
    };

    return (
        <div className={cx(classes.root, className)}>
            <img className={classes.logo} src={logo} alt="Logo" onClick={() => routes.home().push()} />

            <div className={classes.burgerButton} onClick={toggleDrawer(!openDrawer)}>
                <BurgerButton isOpen={openDrawer} />
            </div>

            <Drawer
                open={openDrawer}
                onClose={toggleDrawer(false)}
                className={classes.drawer}
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <MobileMenu
                    pageId={route.name}
                    onClick={toggleDrawer(false)}
                    className={classes.mobileMenu}
                />
            </Drawer>
            <div className={classes.navButtons}>
                {pageIds
                    .filter(pageId => pageId !== "page404" && pageId !== "home")
                    .map(pageId_i => (
                        <NavButton
                            key={pageId_i}
                            {...routes[pageId_i]().link}
                            selected={route.name === pageId_i}
                        >
                            {pageId_i}
                        </NavButton>
                    ))}
            </div>
        </div>
    );
}

const useStyles = tss.withName({ NavBar }).create(({ theme, headerHeight }) => ({
    root: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: `1px solid ${alpha(theme.palette.text.primary, 0.2)}`,
        padding: `0 ${theme.spacing(10)}`,
        backgroundColor: "transparent"
    },
    logo: {
        width: theme.spacing(15),
        cursor: "pointer"
    },
    navButtons: {
        display: "flex",
        gap: theme.spacing(6),

        [theme.breakpoints.only("mobile")]: {
            display: "none"
        }
    },
    burgerButton: {
        color: `${alpha(theme.palette.secondary.light, 0.8)}`,
        borderRadius: "4px",
        transition: "background 0.4s ease-in-out, border 0.4s ease-in-out, color 0.4s ease-in-out",
        display: "none",
        cursor: "pointer",

        [theme.breakpoints.only("mobile")]: {
            display: "flex"
        }
    },
    drawer: {
        display: "none",

        "& .MuiModal-backdrop": {
            backgroundColor: "unset"
        },

        [theme.breakpoints.only("mobile")]: {
            display: "flex"
        }
    },
    drawerPaper: {
        height: `calc(100% - ${headerHeight})`,
        width: "100%",
        marginTop: headerHeight,
        backgroundColor: theme.palette.background.default,
        backgroundImage: "none"
    },
    mobileMenu: {
        height: "100%"
    }
}));
