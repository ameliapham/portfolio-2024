import { tss } from "tss";
import { keyframes } from "tss-react";
import { detailImagesByProjectId } from "pages/projects/projectsData";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";

type Props = {
    className?: string;
};

export function Page10(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
            <img
                src={detailImagesByProjectId.dame.dameBookUrl}
                alt="marketing book"
                className={cx(classes.image, classes.image)}
            />
            <div className={classes.textContainer}>
                <Typography variant="body1" className={classes.text}>
                    Marketing book
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

const useStyles = tss.withName({ name: "DamePage10" }).create(({ theme }) => {
    return {
        root: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr 1fr",
        },
        image: {
            gridColumn: "1/3",
            gridRow: "1/4",
            width: "100%",
            objectFit: "contain",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.2s 1 forwards`
        },
        textContainer: {
            height: "100%",
            gridColumn: "1/2",
            gridRow: "3/4",
            display: "grid",
            gridTemplateRows: "1fr 1fr 1fr 1fr",
            alignItems: "center"
        },
        text: {
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
