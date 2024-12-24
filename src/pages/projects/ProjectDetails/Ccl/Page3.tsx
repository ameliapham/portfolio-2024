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
            <img
                src={detailImagesByProjectId.ccl.cclPlatform1}
                alt="CCL platform"
                className={classes.cclPlatform1}
            />
            <img
                src={detailImagesByProjectId.ccl.cclPlatform2}
                alt="CCL platform"
                className={classes.cclPlatform2}
            />
            <div className={classes.textContainer}>
                <Typography variant="body1" className={classes.text}>
                    Platform
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

const useStyles = tss.withName({ name: "CclPage3" }).create(({ theme }) => {
    return {
        root: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridRow: "2fr 1fr",
            gap: theme.spacing(5),
        },
        cclPlatform1: {
            gridColumn: "1/2",
            gridRow: "1/3",
            width: "100%",
            maxWidth: "400px",
            height: "auto",
            maxHeight: "600px",
            objectFit: "contain",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.2s 1 forwards`
        },
        cclPlatform2: {
            gridColumn: "2/3",
            gridRow: "1/2",
            width: "100%",
            maxWidth: "400px",
            height: "auto",
            maxHeight: "600px",
            objectFit: "contain",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.5s 1 forwards`
        },
        textContainer: {
            height: "50px",
            gridColumn: "2/3",
            gridRow: "2/3",
            display: "grid",
            gridTemplateRows: "1fr 1fr",
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
        }
    };
});
