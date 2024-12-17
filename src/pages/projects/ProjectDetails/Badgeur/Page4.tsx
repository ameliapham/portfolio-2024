import { tss } from "tss";
import { keyframes } from "tss-react";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import { detailImagesByProjectId } from "pages/projects/projectsData";

type Props = {
    className?: string;
};

export function Page4(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
            <img
                src={detailImagesByProjectId.badgeur.badgeurTestUrl}
                alt="Zen Gourmet website on a phone"
                className={classes.image}
            />
            <Typography variant="body1" className={classes.details}>
                ......to the prototype
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

const useStyles = tss.withName({ name: "BadgeurPage4" }).create(({ theme }) => {
    return {
        root: {
            color: theme.palette.text.primary,
            display: "grid",
            gridTemplateColumns: "5fr 5fr 5fr 1fr",
            gridTemplateRows: "1fr 1fr 1fr",
            alignItems: "center",

            [theme.breakpoints.only("mobile")]: {
                display: "flex"
            }
        },
        image: {
            gridColumn: "1 / 5",
            gridRow: "1 / 4",
            width: "100%",
            height: "100%",
            maxHeight: "600px",
            objectFit: "contain",
            zIndex: 1,
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.2s 1 forwards`
        },
        details: {
            gridColumn: "3",
            gridRow: "1",
            textAlign: "right",
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
            },

            [theme.breakpoints.only("mobile")]: {
                display: "none"
            }
        }
    };
});
