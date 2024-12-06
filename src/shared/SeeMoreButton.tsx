import { tss } from "tss";
import Button from "@mui/material/Button";
import { alpha } from "@mui/material/styles";

type Props = {
    className?: string;
    href?: string;
    onClick?: () => void;
    disabled?: boolean;
    hyphenPosition?: "left" | "right";
    children: React.ReactNode;
    translateLinePx?: number;
    translateTextPx?: number;
    widthLinePx?: number;
    target?: string;
    rel?: string;
};

export function SeeMoreButton(props: Props) {
    const {
        className,
        onClick,
        children,
        disabled,
        href,
        rel,
        target,
        hyphenPosition = "right",
        translateLinePx = 50,
        widthLinePx = 60
    } = props;
    const { cx, classes } = useStyles({
        isBefore: hyphenPosition === "right",
        translateLinePx,
        widthLinePx
    });

    return (
        <Button
            className={cx(classes.root, className)}
            href={href}
            {...(href && { target, rel })}
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
        translateLinePx?: number;
        widthLinePx?: number;
    }>()
    .create(({ theme, isBefore, classes, translateLinePx, widthLinePx }) => ({
        root: {
            position: "relative",
            color: theme.palette.text.primary,
            height: theme.spacing(6),
            padding: 0,
            cursor: "pointer",
            width: "200px",

            "&:hover": {
                backgroundColor: "transparent"
            },

            "&::before": isBefore && {
                content: "''",
                position: "absolute",
                left: "0",
                width: `${widthLinePx}px`,
                height: theme.spacing(0.15),
                backgroundColor: alpha(theme.palette.text.primary, 0.5),
                transition: "all 0.4s ease"
            },
            "&::after": !isBefore && {
                content: "''",
                position: "absolute",
                right: "0",
                width: `${widthLinePx}px`,
                height: theme.spacing(0.15),
                backgroundColor: alpha(theme.palette.text.primary, 0.5),
                transition: "all 0.4s ease"
            },

            [`&:hover::${isBefore ? "before" : "after"}`]: {
                transform: `translateX(${isBefore ? "" : "-"}${translateLinePx}px)`,
                width: theme.spacing(3)
            },

            [`&:hover .${classes.buttonText}`]: {
                transform: `translateX(${isBefore ? "" : "-"}15px)`,
                transition: "all 0.4s ease"
            }
        },
        buttonText: {
            position: "absolute",
            left: isBefore ? `${(widthLinePx ?? 0) + 10}px` : "auto",
            right: isBefore ? "auto" : `${(widthLinePx ?? 0) + 10}px`,
            transition: "all 0.4s ease"
        }
    }));
