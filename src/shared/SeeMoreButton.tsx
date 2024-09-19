import { tss } from "tss-react/mui";
import Button from "@mui/material/Button";
import { alpha } from "@mui/material/styles";

type Props = {
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
};

export function SeeMoreButton(props: Props) {
    const { className, onClick, children } = props;
    const { cx, classes } = useStyles();

    return (
        <div className={cx(classes.root, className)} onClick={onClick}>
            <Button className={classes.button}>{children}</Button>
        </div>
    );
}

const useStyles = tss.create(({ theme }) => ({
    root: {
        justifyContent: "center",
        alignItems: "center"
    },
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

        "&::before": {
            content: "''",
            left: 0,
            width: 0,
            height: theme.spacing(0.15),
            backgroundColor: `${alpha(theme.palette.text.primary, 0.5)}`,
            transform: "translateX(-10px)",
            transition: "all 0.5s ease"
        },

        "&:hover::before": {
            width: theme.spacing(3)
        }
    }
}));
