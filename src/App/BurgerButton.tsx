import { tss } from "tss";
import BurgerIcon from 'assets/BurgerIcon.svg?react';
import { alpha } from "@mui/material/styles";

type Props = {
    className?: string;
    isOpen: boolean;
};

export function BurgerButton(props: Props) {
    const { className, isOpen } = props;

    const { cx, classes } = useStyles({ isOpen });

    return <BurgerIcon className={cx(classes.burgerButton, className)} />;
}

const useStyles = tss
    .withName({ BurgerButton })
    .withParams<{ isOpen: boolean }>()
    .create(({ theme, isOpen }) => ({
        burgerButton: {
            "& .border": {
                stroke: `${alpha(theme.palette.secondary.light, isOpen ? 0.5 : 0.2)}`,
                transition: "stroke 0.5s",
            },

            "& .path1": {
                transform: isOpen ? "translate(0, -5px)" : "translate(0, 0)",
                fill: `${alpha(theme.palette.secondary.light, isOpen ? 0.8 : 0.7)}`,
                transition: "transform 0.5s",
            },

            "& .path2": {
                fill: `${alpha(theme.palette.secondary.light, isOpen ? 0.8 : 0.7)}`
            },
            "& .path3": {
                transform: isOpen ? "translate(0, 5px)" : "translate(0, 0)",
                fill: `${alpha(theme.palette.secondary.light, isOpen ? 0.8 : 0.7)}`,
                transition: "transform 0.5s",
            },

            "&:hover": {
                "& .border": {
                    stroke: `${alpha(theme.palette.secondary.light, 0.5)}`,
                    transition: "stroke 0.5s",
                },

                "& .path1": {
                    transform: "translate(0, -5px)",
                    transition: "transform 0.5s",
                },

                "& .path3": {
                    transform: "translate(0, 5px)",
                    transition: "transform 0.5s",
                },
            },
        }
    }));

