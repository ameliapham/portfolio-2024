import { tss } from "tss-react/mui";
import Button from "@mui/material/Button";
import { alpha } from "@mui/material/styles";

type Props = {
    className?: string;
    href?: string;
    onClick?: () => void;
    disabled?: boolean;
    hyphenPosition?: "left" | "right";
    children: React.ReactNode;
};

export function SeeMoreButton(props: Props) {
    const { 
        className, 
        onClick, 
        children, 
        disabled, 
        href, 
        hyphenPosition = "right", 
    } = props;
    const { cx, classes } = useStyles({
        isBefore: hyphenPosition === "right"
    });

    return (
        <Button
            className={cx(classes.root, className)}
            href={href}
            onClick={onClick}
            disabled={disabled}
        >
            <span className={classes.buttonText}>{children}</span>
        </Button>
    );
}

const useStyles = tss
    .withName({ SeeMoreButton })
    .withNestedSelectors<"buttonText">()
    .withParams<{
        isBefore: boolean;
    }>()
    .create(({ theme, isBefore, classes }) => ({
        root: {
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

            "&::before": isBefore && {
                content: "''",
                position: "absolute",
                left: "0",
                width: theme.spacing(8),
                height: theme.spacing(0.15),
                backgroundColor: alpha(theme.palette.text.primary, 0.5),
                transition: "all 0.4s ease",
            },
            "&::after": !isBefore && {
                content: "''",
                position: "absolute",
                right: "0",
                width: theme.spacing(8),
                height: theme.spacing(0.15),
                backgroundColor: alpha(theme.palette.text.primary, 0.5),
                transition: "all 0.4s ease",
            },

            [`&:hover::${isBefore ? "before" : "after"}`]: {
                transform: `translateX(${isBefore ? "" : "-"}50px)`,
                width: theme.spacing(3)
            },

            [`&:hover .${classes.buttonText}`]: {
                transform: `translateX(${isBefore ? "" : "-"}20px)`,
                transition: "all 0.4s ease"
            }
        },
        buttonText: {
            position: "absolute",
            left: theme.spacing(8),
            transition: "all 0.4s ease",
            transform: "translateX(10px)"
        }
    }));
