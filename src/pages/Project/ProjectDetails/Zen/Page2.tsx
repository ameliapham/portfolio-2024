import { tss } from "tss-react/mui";
import { keyframes } from "tss-react";
import zenPhone from "assets/zen-phone.png";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";


type Props = {
    className?: string;
};

export function Page2(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
            <Typography variant="body1" className={classes.lightMode}>
                Light mode
            </Typography>
            <img src={zenPhone} alt="Zen Gourmet website on a phone" className={classes.image} />
            <Typography variant="body1" className={classes.darkMode}>
                Dark mode
            </Typography>
        </div>
    );
}

const animate = keyframes({
    from: {
        opacity: 0,
        transform: "translate(0, 100px)",
        filter: "blur(30px)"
    },
    to: {
        opacity: 1,
        transform: "translate(0)",
        filter: "blur(0)"
    }
});

const useStyles = tss
    .withName({ name: "ZenPage2" })
    .create(({ theme }) => {
        return {
            root: {
                color: theme.palette.text.primary,
                height: "100%",
                display: "flex",
                position: "relative",
            },
            image: {
                width: "100%",
                height: "80%",
                objectFit: "contain",
                opacity: 0,
                animation: `${animate} 0.5s ease-in-out 0.2s 1 forwards`,
                zIndex: 1
            },
            lightMode: {
                position: "relative",
                height: theme.spacing(6),
                width: "300px",
                marginTop: "40%",
                opacity: 0,
                animation: `${animate} 0.5s ease-in-out 0.4s 1 forwards`,

                "&::after": {
                    content: "''",
                    position: "absolute",
                    bottom: "0%",
                    left: "0%",
                    width: "200%",
                    height: theme.spacing(0.1),
                    backgroundColor: `${alpha(theme.palette.text.primary, 0.5)}`,
                    transition: "all 0.5s ease"
                },
            },
            darkMode: {
                position: "relative",
                height: theme.spacing(6),
                width: "300px",
                textAlign: "right",
                marginTop: "10%",
                opacity: 0,
                animation: `${animate} 0.5s ease-in-out 0.4s 1 forwards`,

                "&::after": {
                    content: "''",
                    position: "absolute",
                    bottom: "0%",
                    right: "0%",
                    width: "200%",
                    height: theme.spacing(0.1),
                    backgroundColor: `${alpha(theme.palette.text.primary, 0.5)}`,

                    //transform: "translateX(-50%)",
                    transition: "all 0.5s ease"
                },
            }
        };
    });