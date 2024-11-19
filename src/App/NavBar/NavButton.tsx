import { tss } from "tss-react/mui";
import Button from "@mui/material/Button";
import { alpha } from "@mui/material/styles";

type MenuButtonProps = {
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
    selected: boolean;
};

export function NavButton(props: MenuButtonProps) {
    const { className, onClick, children, selected } = props;
    const { cx, classes } = useStyles();

    return (
        <Button
            className={cx(classes.button, { [classes.selected]: selected }, className)}
            onClick={onClick}
        >
            {children}
        </Button>
    );
}

const useStyles = tss.withName({ NavButton }).create(({ theme }) => ({
    button: {
        position: "relative",
        color: theme.palette.text.primary,
        height: theme.spacing(6),
        padding: 0,
        overflow: "hidden",
        cursor: "pointer",

        "&:hover": {
            backgroundColor: "transparent"
        },

        "&::after": {
            content: "''",
            position: "absolute",
            bottom: "10px",
            left: "50%",
            width: "0",
            height: theme.spacing(0.1),
            backgroundColor: `${alpha(theme.palette.text.primary, 0.5)}`,
            transform: "translateX(-50%)",
            transition: "all 0.5s ease"
        },

        "&:hover::after": {
            width: "100%"
        }
    },
    selected: {
        "&::after": {
            width: "100%"
        }
    }
}));
