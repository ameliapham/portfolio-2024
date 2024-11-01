import { tss } from "tss-react/mui";
import { keyframes } from "tss-react";
import zenIpad from "assets/zen-ipad.png";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";

type Props = {
    className?: string;
};

export function Page4(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
            <Typography variant="body1" className={classes.infoGauche}>
                Four responsive main pages optimized for
                <ul>
                    <li>Phone</li>
                    <li>Tablet</li>
                    <li>Computer screens</li>
                </ul>
            </Typography>
            <img src={zenIpad} alt="Zen Gourmet website on a phone" className={classes.image} />
            <div className={classes.infoDroit}>
                <Typography variant="body1">
                    Multiple languages available
                    <ul>
                        <li>English</li>
                        <li>French</li>
                        <li>German (incoming)</li>
                    </ul>
                </Typography>
            </div>
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

const useStyles = tss.withName({ name: "ZenPage4" }).create(({ theme }) => {
    return {
        root: {
            color: theme.palette.text.primary,
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gridTemplateRows: "1fr 1fr 1fr",
            alignItems: "center"
        },
        image: {
            gridColumn: "1/5",
            gridRow: "1/4",
            width: "100%",
            height: "100%",
            maxHeight: "700px",
            objectFit: "contain",
            zIndex: 1,
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.2s 1 forwards`
        },
        infoGauche: {
            gridColumn: "1/3",
            gridRow: "1",
            position: "relative",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.4s 1 forwards`,

            "&::after": {
                content: "''",
                position: "absolute",
                bottom: "0%",
                left: "0%",
                width: "100%",
                height: theme.spacing(0.1),
                backgroundColor: `${alpha(theme.palette.text.primary, 0.2)}`,
                transition: "all 0.5s ease"
            }
        },
        infoDroit: {
            gridColumn: "3/5",
            gridRow: "3",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.4s 1 forwards`,
            display: "flex",
            justifyContent: "end",
            position: "relative",

            "&::after": {
                content: "''",
                position: "absolute",
                bottom: "0%",
                right: "0%",
                width: "100%",
                height: theme.spacing(0.1),
                backgroundColor: `${alpha(theme.palette.text.primary, 0.2)}`,
                transition: "all 0.5s ease"
            }
        }
    };
});
