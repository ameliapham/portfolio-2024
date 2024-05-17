import { tss } from 'tss-react/mui'
import Button from '@mui/material/Button';
import { alpha } from "@mui/material/styles";


type Props = {
    className?: string;
    onClick: () => void;
    children: React.ReactNode;
};

export function SeeMoreButton(props: Props) {

    const { className, onClick, children } = props;
    const { classes } = useStyle()

    return (
        <div
            className={className}
            onClick={onClick}
        >
            <Button className={classes.button}>
                <span className={classes.buttonText}>
                    {children}
                </span>
            </Button>
        </div>
    )

}

const useStyle = tss
    .create(({ theme }) => ({
        "button": {
            "position": "relative",
            "color": theme.palette.text.primary,
            "height": theme.spacing(30),
            "overflow": "hidden",
            "cursor": "pointer",

            "&:hover": {
                backgroundColor: "transparent",
            },

            "&::before": {
                "content": "''",
                "position": "absolute",
                "top": "0",
                "left": "50%",
                "width": theme.spacing(0.15),
                "height": theme.spacing(5),
                "backgroundColor": `${alpha(theme.palette.text.primary, 0.5)}`,
                "transform": "translateY(100%)",
                "transition": "all 0.5s ease",
            },

            "&:hover::before": {
                "height": theme.spacing(8),
            },

            "&:hover span": {
                "transform": "translateY(100%)",
                "transition": "all 0.5s ease",
            },
        },
        "buttonText": {
            "display": "inline-block",
            "transition": "transform 0.5s ease",
            "transform": "translateY(0)",
        },
    }))
