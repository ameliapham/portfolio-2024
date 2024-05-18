import { tss } from "tss-react/mui";
import Typography from "@mui/material/Typography"

type Props = {
    className?: string;
};

export function About(props: Props) {

    const { className } = props;
    const { cx, classes } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
            <div className={classes.photoZone}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className={classes.textZone}>
                <Typography variant="h3">
                    Amélia Pham
                </Typography>

                <Typography variant="body1">
                    A new project in mind? Need help evolving your digital tools? Let's get in touch and discuss it!
                    I would be happy to share my experience and guide you in the realization of your projects.
                </Typography>
            </div>
        </div>
    )
}

const useStyles = tss
    .withName({ About })
    .create(({ theme }) => ({
        "root": {
            "border": "1px solid green",
            "padding": "20px",
        },
        "photoZone": {
            "border": "1px solid red",
            "position": "absolute",
            "top": "50%",
            "right": "55%",
            "transform": "translateY(-50%)",
            "height": "60%",
            "width": "25%",
            "clipPath": "polygon(0% 0%, 100% 15%, 100% 90%, 0% 100%)",


            "&:nth-of-type(2)": {
                "backgroundColor": "green",
                "transform": "translateY(25%)",
            },
            "&:nth-of-type(3)": {
                "left": "calc(50% + 280px)",
                "backgroundColor": "yellow",
            },
        },
        /*
        "border": {
            "backgroundColor": "red",
            "border": "1px solid yellow",
            "height": "100px",
            "width": "100px",
            "clipPath": "polygon(0% 0%, 100% 15%, 100% 90%, 0% 100%)",

        },
        "border1": {
            //"transform": "skewX(-15deg) skewY(10deg)",
            "clipPath": "polygon(0% 0%, 100% 15%, 100% 90%, 0% 100%)",
            "backgroundColor": "blue",
        },
        */
        "textZone": {
            "position": "absolute",
            "top": "50%",
            "transform": "translateY(-50%)",
            "left": "50%",
            "width": "30%",
            "border": "1px solid blue",
            "display": "flex",
            "flexDirection": "column",
            "gap": "20px",
            "color": theme.palette.text.primary,
        },
    }));
