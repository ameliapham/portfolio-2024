import { tss } from "tss-react/mui";
import Button from "@mui/material/Button";
import { alpha } from "@mui/material/styles";
import { useEffect, useState } from "react";

type Props = {
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
};

export function SeeMoreButton(props: Props) {
    const { className, onClick, children } = props;
    const { cx, classes } = useStyles();
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {}, [isHovered]);

    return (
        <div
            className={cx(classes.root, className)}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Button className={classes.button}>
                <span className={classes.buttonText}>{children}</span>
            </Button>
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

        "&:hover span": {
            transform: "translateX(20px)",
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
