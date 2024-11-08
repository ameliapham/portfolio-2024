import { tss } from "tss";
import Button from "@mui/material/Button";
import { alpha } from "@mui/material/styles";

type Props = {
    className?: string;
    href?: string;
    onClick?: () => void;
    disabled?: boolean;
    hyphenPosition?: "left" | "right";
    translatePx?: number;
    children: React.ReactNode;
};

export function SeeMoreButton(props: Props) {
    const {
        className,
        href,
        onClick,
        disabled,
        hyphenPosition = "left",
        translatePx = 10,
        children
    } = props;
    const { cx, classes } = useStyles({
        isBefore: hyphenPosition === "left",
        translatePx
    });

    return (
        <div className={cx(classes.root, className)}>
            <Button className={classes.button} href={href} onClick={onClick} disabled={disabled}>
                <span className={classes.buttonText}>{children}</span>
            </Button>
        </div>
    );
}

const useStyles = tss
    .withName({ SeeMoreButton })
    .withNestedSelectors<"buttonText">()
    .withParams<{
        isBefore: boolean;
        translatePx: number;
    }>()
    .create(({ theme, isBefore, translatePx, classes }) => ({
        root: {
            justifyContent: "center",
            alignItems: "center"
        },
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

            [`&::${isBefore ? "before" : "after"}`]: {
                content: "''",
                position: "absolute",
                left: "0",
                width: theme.spacing(8),
                height: theme.spacing(0.15),
                backgroundColor: `${alpha(theme.palette.text.primary, 0.5)}`,
                transition: "all 0.4s ease"
            },

            [`&:hover::${isBefore ? "before" : "after"}`]: {
                right: "0",
                transform: `translateX(50px)`,
                width: theme.spacing(3)
            },

            [`&:hover .${classes.buttonText}`]: {
                transform: `translateX(${isBefore ? "" : "-"}${2 * translatePx}px)`,
                transition: "all 0.4s ease"
            }
        },
        buttonText: {
            position: "absolute",
            left: theme.spacing(8),
            transition: "all 0.4s ease",
            transform: `translateX(${isBefore ? "" : "-"}${translatePx}px)`
        }
    }));
