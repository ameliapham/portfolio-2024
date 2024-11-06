import { tss } from "tss";
import logo from "assets/logo.svg";
import { MenuButton } from "./MenuButton";
import { alpha } from "@mui/material/styles";
import { routes, useRoute } from "routes";
import { type PageId, pageIds } from "pages";

type Props = {
    className?: string;
    pageId: PageId | false;
};

export function Header(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();
    const route = useRoute();

    return (
        <div className={cx(classes.root, className)}>
            <img className={classes.logo} src={logo} alt="Logo" onClick={() => routes.home().push()} />
            <div className={classes.buttonZone}>
                {pageIds
                    .filter(pageId => pageId !== "page404" && pageId !== "home")
                    .map(pageId_i => (
                        <MenuButton
                            key={pageId_i}
                            {...routes[pageId_i]().link}
                            selected={route.name === pageId_i}
                        >
                            {pageId_i}
                        </MenuButton>
                    ))}
            </div>
        </div>
    );
}

const useStyles = tss.withName({ Header }).create(({ theme }) => ({
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
    buttonZone: {
        display: "flex",
        gap: theme.spacing(6)
    }
}));
