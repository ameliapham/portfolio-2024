import { tss } from "tss";
import { keyframes } from "tss-react";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import { detailImagesByProjectId } from "../../projectsData";

type Props = {
    className?: string;
};

export function Page2(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
            <div className={classes.infoGaucheGridContainer}>
                <Typography variant="body1" className={classes.infoGauche}>
                    Light mode
                </Typography>
            </div>
            <img
                src={detailImagesByProjectId.zen.zenPhoneUrl}
                alt="Zen Gourmet website on a phone"
                className={classes.image}
            />
            <div className={classes.infoDroitGridContainer}>
                <Typography variant="body1" className={classes.infoDroit}>
                    Dark mode
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

const useStyles = tss.withName({ name: "ZenPage2" }).create(({ theme }) => {
    return {
        root: {
            color: theme.palette.text.primary,
            display: "grid",
            gridTemplateColumns: "1fr 6fr 1fr",
            alignItems: "center"
        },
        image: {
            gridColumn: "2",
            width: "100%",
            height: "100%",
            maxHeight: "700px",
            objectFit: "contain",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.2s 1 forwards`,
            zIndex: 1
        },
        infoGaucheGridContainer: {
            height: "100%",
            gridColumn: "1",
            display: "grid",
            gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
            alignItems: "center"
        },
        infoGauche: {
            gridRow: "5",
            position: "relative",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.4s 1 forwards`,

            "&::after": {
                content: "''",
                position: "absolute",
                bottom: "0%",
                left: "0%",
                width: "200%",
                height: theme.spacing(0.1),
                backgroundColor: `${alpha(theme.palette.text.primary, 0.2)}`,
                transition: "all 0.5s ease"
            }
        },
        infoDroitGridContainer: {
            height: "100%",
            gridColumn: "3",
            display: "grid",
            gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr",
            alignItems: "center"
        },
        infoDroit: {
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
                width: "200%",
                height: theme.spacing(0.1),
                backgroundColor: `${alpha(theme.palette.text.primary, 0.2)}`,
                transition: "all 0.5s ease"
            }
        }
    };
});
