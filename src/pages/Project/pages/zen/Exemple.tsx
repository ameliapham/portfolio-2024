import { tss } from "tss-react/mui";
import Typography from "@mui/material/Typography";
import p24zen from "assets/p-zen.webp";
import { SeeMoreButton } from "shared/SeeMoreButton";
import { keyframes } from "tss-react";

type Props = {
    className?: string;
    onClick?: () => void;
};

export function Zen(props: Props) {
    const { onClick } = props;
    const { classes } = useStyles();
    return (
        <div className={classes.root}>
            <SeeMoreButton className={classes.buttonBack} onClick={onClick}>
                Back
            </SeeMoreButton>

            <div className={classes.contain}>
                <Typography variant="body1" className={classes.year}>
                    2024
                </Typography>
                <Typography variant="h2" className={classes.name}>
                    ZenAsia
                </Typography>
                <div className={classes.content}>
                    <div className={classes.column1}>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac placerat
                            eros. Donec nec nisl auctor, lacinia sapien vitae, dapibus nunc. Nulla
                            facilisi. Nam nec justo in massa sodales aliquam. Nulla facilisi. Nam nec
                            justo in massa sodales aliquam.
                        </Typography>
                        <SeeMoreButton>View it online</SeeMoreButton>
                    </div>
                    <div className={classes.column2}>
                        <Typography variant="body1" style={{ textTransform: "uppercase" }}>
                            My role
                        </Typography>
                        <Typography variant="body1">
                            - UI & UX design <br />
                            - Front-end development <br />- Technical development
                        </Typography>
                    </div>
                    <div className={classes.column2}>
                        <Typography variant="body1" style={{ textTransform: "uppercase" }}>
                            Credits
                        </Typography>
                        <Typography variant="body1">- ZenAsia Restaurant</Typography>
                    </div>
                </div>
            </div>

            <div className={classes.background} />
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

const useStyles = tss.create(({ theme }) => {
    return {
        root: {
            color: theme.palette.text.primary
        },
        background: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `url(${p24zen}) center center/cover`,
            filter: "blur(30px)",
            opacity: 0.5
        },
        buttonBack: {
            position: "absolute",
            top: "100px",
            zIndex: 1,
            left: theme.spacing(10)
        },
        contain: {
            position: "absolute",
            top: "50%",
            right: theme.spacing(30),
            left: theme.spacing(30),
            transform: "translate(0, -50%)",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(2),
            border: "1px solid red"
        },
        year: {
            opacity: 0,
            animation: `${animate} 1s ease-in-out 0.2s 1 forwards`
        },
        name: {
            fontWeight: "bold",
            animation: `${animate} 1s ease-in-out 0s 1 forwards`,
            opacity: 0
        },
        content: {
            display: "flex",
            gap: theme.spacing(10),
            opacity: 0,
            animation: `${animate} 1s ease-in-out 0.2s 1 forwards`
        },
        column1: {
            flex: 2,
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(2),

            "& button": {
                opacity: 0,
                animation: `${animate} 1s ease-in-out 0.4s 1 forwards`
            }
        },
        column2: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(2)
        }
    };
});
