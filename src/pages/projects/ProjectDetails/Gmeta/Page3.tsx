import { tss } from "tss";
import { keyframes } from "tss-react";
import { detailImagesByProjectId } from "pages/projects/projectsData";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";

type Props = {
    className?: string;
};

export function Page3(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
            <div className={classes.images}>
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
            </div>
            <Typography variant="body1" className={classes.details}>
                The components
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

const useStyles = tss.withName({ name: "GmetaPage3" }).create(({ theme }) => {
    return {
        root: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "10fr 1fr 1fr",
            gap: theme.spacing(2),
            maxWidth: "900px",

        },
        images: {
            gridColumn: "1 / 4",
            gridRow: "1/4",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: theme.spacing(2),
        },
        component1: {
            gridColumn: "1",
            objectFit: "contain",
            width: "100%",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.2s 1 forwards`,
            alignItems: "start"
        },
        component2: {
            gridColumn: "2",
            objectFit: "contain",
            width: "100%",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.4s 1 forwards`,
            alignItems: "start"
        },
        component3: {
            gridColumn: "3",
            objectFit: "contain",
            width: "100%",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.6s 1 forwards`,
            alignItems: "start"
        },
        details: {
            gridColumn: "3",
            gridRow: "2",
            height: theme.spacing(3),
            textAlign: "right",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.7s 1 forwards`,

            "&::after": {
                content: "''",
                position: "absolute",
                bottom: "0%",
                left: "0%",
                width: "100%",
                height: theme.spacing(0.1),
                backgroundColor: `${alpha(theme.palette.text.primary, 0.2)}`,
                transition: "all 0.5s ease"
            },

            [theme.breakpoints.only("mobile")]: {
                display: "none"
            }
        }
    };
});
