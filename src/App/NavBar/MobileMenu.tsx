import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { tss } from "tss";
import { alpha } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { SocialContact } from "shared/SocialContact";
import { type PageId, pageIds } from "pages";
import { routes } from "routes";

type PropsDrawerList = {
    className?: string;
    pageId: PageId | false;
    onClick: () => void;
};

export function MobileMenu(props: PropsDrawerList) {
    const { className, onClick } = props;
    const { cx, classes, theme } = useStyles();

    const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

    const DrawerList = (
        <Box className={cx(classes.root, className)} role="presentation">
            <List className={classes.list}>
                {pageIds
                    .filter(pageId => pageId !== "page404" && pageId !== "home")
                    .map(pageId_i => (
                        <ListItem key={pageId_i} disablePadding>
                            <ListItemButton
                                className={classes.text}
                                {...routes[pageId_i]().link}
                                onClick={onClick}
                            >
                                <Typography variant="h2" fontSize={theme.typography.h3.fontSize}>
                                    {capitalize(pageId_i)}
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                    ))}
            </List>

            <SocialContact className={classes.social} />
        </Box>
    );

    return DrawerList;
}

const useStyles = tss.withName({ MobileMenu }).create(({ theme }) => ({
    root: {
        background: theme.palette.background.default,
        boxSizing: "border-box",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column"
    },
    list: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(2),
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: theme.typography.h4.fontSize
    },
    social: {
        justifyContent: "center",
        alignItems: "center",
        borderTop: `1px solid ${alpha(theme.palette.secondary.light, 0.2)}`,
        height: theme.spacing(6),
        margin: `0 ${theme.spacing(10)}`,
        padding: `${theme.spacing(4)} 0`
    }
}));
