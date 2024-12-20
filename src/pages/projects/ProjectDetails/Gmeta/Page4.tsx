import { tss } from "tss";
import { keyframes } from "tss-react";
import { detailImagesByProjectId } from "pages/projects/projectsData";
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
            <img
                src={detailImagesByProjectId.gmeta.gmetaComponent1Url}
                alt="gmeta Macbook"
                className={cx(classes.component1)}
            />
            <img
                src={detailImagesByProjectId.gmeta.gmetaComponent2Url}
                alt="gmeta logo"
                className={cx(classes.component2)}
            />
            <img
                src={detailImagesByProjectId.gmeta.gmetaComponent3Url}
                alt="gmeta logo"
                className={cx(classes.component3)}
            />
            <div className={classes.textContainer}>
                <Typography variant="body1" className={classes.text}>
                    Components
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

const useStyles = tss.withName({ name: "GmetaPage4" }).create(({ theme }) => {
    return {
        root: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "1fr 1fr 1fr",
            gap: theme.spacing(2),
            maxWidth: "1000px",
        },
        component1: {
            gridColumn: "1/2",
            gridRow: "1/4",
            objectFit: "contain",
            width: "100%",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.2s 1 forwards`,
            alignItems: "start"
        },
        component2: {
            gridColumn: "2/3",
            gridRow: "1/4",
            objectFit: "contain",
            width: "100%",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.4s 1 forwards`,
            alignItems: "start"
        },
        component3: {
            gridColumn: "3/4",
            gridRow: "1/4",
            objectFit: "contain",
            width: "100%",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.6s 1 forwards`,
            alignItems: "start"
        },
        textContainer: {
            gridColumn: "3/4",
            gridRow: "3/4",
            height: "50px",
            display: "grid",
            gridTemplateRows: "1fr 1fr 1fr",
            alignItems: "center",
            alignSelf: "end"
        },
        text: {
            gridRow: "2",
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
                width: "150%",
                height: theme.spacing(0.1),
                backgroundColor: `${alpha(theme.palette.text.primary, 0.2)}`,
                transition: "all 0.5s ease"
            },
        }
    };
});
