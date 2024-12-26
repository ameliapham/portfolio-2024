import { tss } from "tss";
import { keyframes } from "tss-react";
import { detailImagesByProjectId } from "pages/projects/projectsData";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";

type Props = {
    className?: string;
};

export function Page5(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
            <img
                src={detailImagesByProjectId.gmeta.gmetaComponent4Url}
                alt="gmeta Macbook"
                className={cx(classes.component1)}
            />
            <img
                src={detailImagesByProjectId.gmeta.gmetaComponent5Url}
                alt="gmeta logo"
                className={cx(classes.component2)}
            />
            <div className={classes.textContainer}>
                <Typography variant="body1" className={classes.text}>
                    More Components
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

const useStyles = tss.withName({ name: "GmetaPage5" }).create(({ theme }) => {
    return {
        root: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: theme.spacing(2),
            maxWidth: "900px"
        },
        component1: {
            gridColumn: "1/2",
            gridRow: "1/3",
            objectFit: "contain",
            width: "100%",
            alignSelf: "end",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.2s 1 forwards`
        },
        component2: {
            gridColumn: "2/4",
            gridRow: "2/3",
            objectFit: "contain",
            width: "100%",
            alignSelf: "end",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.4s 1 forwards`
        },
        textContainer: {
            gridColumn: "2/4",
            gridRow: "1/2",
            display: "grid",
            gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr",
            alignSelf: "end"
        },
        text: {
            gridRow: "5",
            position: "relative",
            alignSelf: "end",
            textAlign: "right",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.7s 1 forwards`,

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
