import { tss } from "tss-react/mui";
import Button from "@mui/material/Button";
import { alpha } from "@mui/material/styles";

type Props = {
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
    disabled?: boolean;
};

export function SeeMoreButton(props: Props) {
    const { className, onClick, children, disabled } = props;
    const { cx, classes } = useStyles();

    return (
        <Button
            className={cx(classes.button, className)}
            onClick={onClick}
            disabled={disabled}
        >
            <span>{children}</span>
        </Button>
    );
}

const useStyles = tss.create(({ theme }) => ({
    button: {
        position: "relative",
        color: theme.palette.text.primary,
        height: theme.spacing(6),
        padding: 0,
        cursor: "pointer",
        width: "200px",
        left: "0",

        "&:hover": {
            backgroundColor: "transparent"
        },

        "&::before": {
            content: "''",
            position: "absolute",
            left: "0",
            width: theme.spacing(8),
            height: theme.spacing(0.15),
            backgroundColor: `${alpha(theme.palette.text.primary, 0.5)}`,
            transition: "all 0.4s ease"
        },

        "&:hover::before": {
            right: "0",
            transform: "translateX(50px)",
            width: theme.spacing(3)
        },

        span: {
            position: "absolute",
            left: theme.spacing(8),
            transition: "all 0.4s ease",
            transform: "translateX(10px)"
        },

        "&:hover span": {
            transform: "translateX(20px)",
            transition: "all 0.4s ease"
        }
    }
}));
