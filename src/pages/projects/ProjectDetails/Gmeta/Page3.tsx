import { tss } from "tss"
import { keyframes } from "tss-react";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import { detailImagesByProjectId } from "pages/projects/projectsData";

type Props = {
    className?: string;
};

export function Page3(props: Props) {

    const { className } = props;
    const { cx, classes } = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.moodboard}>
                <img
                    src={detailImagesByProjectId.gmeta.gmetaColorUrl}
                    alt="gmeta code color"
                    className={classes.moodboard0}
                />
                <img
                    src={detailImagesByProjectId.gmeta.gmetaMoodboard1Url}
                    alt="gmeta moodboard"
                    className={classes.moodboard1}
                />
                <img
                    src={detailImagesByProjectId.gmeta.gmetaMoodboard2Url}
                    alt="gmeta moodboard"
                    className={classes.moodboard2}
                />
                <img
                    src={detailImagesByProjectId.gmeta.gmetaMoodboard3Url}
                    alt="gmeta moodboard"
                    className={classes.moodboard3}
                />
                <img
                    src={detailImagesByProjectId.gmeta.gmetaMoodboard4Url}
                    alt="gmeta moodboard"
                    className={classes.moodboard4}
                />
                <img
                    src={detailImagesByProjectId.gmeta.gmetaMoodboard5Url}
                    alt="gmeta moodboard"
                    className={classes.moodboard5}
                />
            </div>

            <div className={classes.logos}>
                <img
                    src={detailImagesByProjectId.gmeta.gmetaLogo1Url}
                    alt="gmeta logo"
                    className={cx(classes.logo1)}
                />
                <img
                    src={detailImagesByProjectId.gmeta.gmetaLogo2Url}
                    alt="gmeta logo"
                    className={cx(classes.logo2)}
                />
                <div className={classes.textContainer}>
                    <Typography variant="body1" className={classes.text}>
                        Moodboard & Logos
                    </Typography>
                </div>
            </div>
        </div>
    )
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

const useStyles = tss.withName({ name: "GmetaPage3" }).create(({ theme }) => {
    return {
        root: {
            gridRow: "1/2",
            display: "grid",
            gridTemplateColumns: "3fr 2fr",
            gridTemplateRows: "1fr",
            gap: theme.spacing(4),
            maxWidth: "900px",
            maxHeight: "700px"
        },
        moodboard: {
            gridColumn: "1/2",
            gridRow: "1/2",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: theme.spacing(1)
        },
        moodboard0: {
            gridColumn: "1/2",
            gridRow: "1/2",
            width: "100%",
            height: "100%",
            objectFit: "contain",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.2s 1 forwards`,

            [theme.breakpoints.down("laptop")]: {
                objectFit: "cover"
            }
        },
        moodboard1: {
            gridColumn: "2/4",
            gridRow: "1/2",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.3s 1 forwards`
        },
        moodboard2: {
            gridColumn: "1/4",
            gridRow: "2/3",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.4s 1 forwards`
        },
        moodboard3: {
            gridColumn: "4/7",
            gridRow: "1/2",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.5s 1 forwards`
        },
        moodboard4: {
            gridColumn: "4/6",
            gridRow: "2/3",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.6s 1 forwards`
        },
        moodboard5: {
            gridColumn: "6/7",
            gridRow: "2/3",
            width: "100%",
            height: "100%",
            objectFit: "contain",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.7s 1 forwards`,

            [theme.breakpoints.down("laptop")]: {
                objectFit: "cover"
            }
        },
        logos: {
            gridColumn: "2/3",
            gridRow: "1/2",
            display: "grid",
            gridTemplateRows: "2fr 2fr 1fr 1fr",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.4s 1 forwards`
        },
        logo1: {
            gridRow: "1/2",
            width: "100%",
            height: "auto",
            objectFit: "contain",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.5s 1 forwards`
        },
        logo2: {
            gridRow: "2/3",
            width: "100%",
            height: "auto",
            objectFit: "contain",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.7s 1 forwards`
        },
        textContainer: {
            height: "50px",
            gridRow: "4",
            display: "grid",
            gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr",
            alignItems: "center",
            alignSelf: "end"
        },
        text: {
            gridRow: "2",
            position: "relative",
            textAlign: "right",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.4s 1 forwards`,

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
        },

    }
});