import { tss } from "tss-react/mui";
import Button from "@mui/material/Button";
import { alpha } from "@mui/material/styles";

type Props = {
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
    disabled?: boolean;
};

export function PreviousButton(props: Props) {
    const { className, onClick, children, disabled } = props;
    const { cx, classes } = useStyles();

    return (
        <Button className={cx(classes.previousButton, className)} onClick={onClick} disabled={disabled}>
            <span>{children}</span>
        </Button>
    );
}

export function NextButton(props: Props) {
    const { className, onClick, children, disabled } = props;
    const { cx, classes } = useStyles();

    return (
        <Button className={cx(classes.nextButton, className)} onClick={onClick} disabled={disabled}>
            <span>{children}</span>
        </Button>
    );
}

const useStyles = tss.create(({ theme }) => ({
    previousButton: {
        position: "relative",
        color: theme.palette.text.primary,
        height: theme.spacing(6),
        padding: 0,
        cursor: "pointer",
        width: "150px",
        textAlign: "left",

        "&:hover": {
            backgroundColor: "transparent"
        },

        "&::after": {
            content: "''",
            position: "absolute",
            right: "0",
            width: theme.spacing(5),
            height: theme.spacing(0.15),
            backgroundColor: `${alpha(theme.palette.text.primary, 0.5)}`,
            transition: "all 0.4s ease"
        },

        "&:hover::after": {
            transform: "translateX(-30px)",
            width: theme.spacing(3)
        },

        span: {
            transition: "all 0.4s ease",
            transform: "translateX(-10px)"
        },

        "&:hover span": {
            transform: "translateX(-20px)",
            transition: "all 0.4s ease"
        }
    },

    nextButton: {
        position: "relative",
        color: theme.palette.text.primary,
        height: theme.spacing(6),
        padding: 0,
        cursor: "pointer",
        width: "150px",
        textAlign: "right",

        "&:hover": {
            backgroundColor: "transparent"
        },

        "&::before": {
            content: "''",
            position: "absolute",
            left: "0",
            width: theme.spacing(5),
            height: theme.spacing(0.15),
            backgroundColor: `${alpha(theme.palette.text.primary, 0.5)}`,
            transition: "all 0.4s ease"
        },

        "&:hover::before": {
            transform: "translateX(30px)",
            width: theme.spacing(3)
        },

        span: {
            transition: "all 0.4s ease",
            transform: "translateX(0px)"
        },

        "&:hover span": {
            transform: "translateX(5px)",
            transition: "all 0.4s ease"
        }
    }
}));
