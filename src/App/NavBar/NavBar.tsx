import { tss } from "tss";
import logo from "assets/logoFix.svg";
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

    const route = useRoute();

    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = (open: boolean) => () => {
        setOpenDrawer(open);
    };

    const { cx, classes } = useStyles({ openDrawer });

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

const useStyles = tss
    .withName({ NavBar })
    .withParams<{ openDrawer: boolean }>()
    .create(({ theme, headerHeight, openDrawer }) => ({
        root: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: `1px solid ${alpha(theme.palette.text.primary, 0.2)}`,
            padding: `0 ${theme.spacing(10)}`,
            backgroundColor: alpha(theme.palette.background.default, 0.8),
            //backgroundColor: openDrawer ? theme.palette.background.default : "transparent",
            //backdropFilter: "blur(10px) saturate(150%)",
            transition: "background-color 0.5s",

            "::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: openDrawer ? "100%" : "0%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                transition: "width 0.2s",
                zIndex: -1
            },

            [theme.breakpoints.only("mobile")]: {
                padding: `0 ${theme.spacing(6)}`
            }
        },
        logo: {
            width: theme.spacing(15),
            cursor: "pointer"
        },
        navButtons: {
            display: "flex",
            gap: theme.spacing(6),

            [theme.breakpoints.down("laptop")]: {
                display: "none"
            }
        },
        burgerButton: {
            color: `${alpha(theme.palette.secondary.light, 0.8)}`,
            borderRadius: "4px",
            transition: "background 0.4s ease-in-out, border 0.4s ease-in-out, color 0.4s ease-in-out",
            display: "none",
            cursor: "pointer",

            [theme.breakpoints.down("laptop")]: {
                display: "flex"
            }
        },
        drawer: {
            display: "none",

            "& .MuiModal-backdrop": {
                backgroundColor: "unset"
            },

            [theme.breakpoints.down("laptop")]: {
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
