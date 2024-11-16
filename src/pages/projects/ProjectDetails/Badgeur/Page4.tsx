import { tss } from "tss-react/mui";
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
            <Typography variant="body1" className={classes.details}>
                From the wireframe......
            </Typography>
            <img src={detailImagesByProjectId.badgeur.wfBadgeurUrl} alt="Badgeur wireframe" className={classes.image} />
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
            gridTemplateColumns: "1fr 2fr 1fr",
            gridTemplateRows: "1fr 1fr 1fr",
            alignItems: "center"
        },
        image: {
            gridColumn: "2 / 4",
            gridRow: "1 / 4",
            width: "100%",
            height: "100%",
            maxHeight: "600px",
            objectFit: "cover",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.2s 1 forwards`
        },
        details: {
            gridColumn: "1/2",
            gridRow: "3",
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
        }
    };
});
