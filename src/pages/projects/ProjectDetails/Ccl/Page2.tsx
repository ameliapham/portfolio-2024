import { tss } from "tss";
import { keyframes } from "tss-react";
import { detailImagesByProjectId } from "pages/projects/projectsData";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";

type Props = {
    className?: string;
};

export function Page2(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
            <img
                src={detailImagesByProjectId.ccl.cclIpad}
                alt="CCL iPad"
                className={classes.ipad}
            />
            <img
                src={detailImagesByProjectId.ccl.cclMac}
                alt="CCL mac"
                className={classes.mac}
            />
            <div className={classes.textContainer}>
                <Typography variant="body1" className={classes.text}>
                    Website
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

const useStyles = tss.withName({ name: "CclPage2" }).create(({ theme }) => {
    return {
        root: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 2fr 1fr",
            gridRow: "1fr 1fr 1fr",
        },
        ipad: {
            gridColumn: "1 / 4",
            gridRow: "1 / 3",
            width: "100%",
            height: "100%",
            maxHeight: "600px",
            objectFit: "contain",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.5s 1 forwards`
        },
        mac: {
            gridColumn: "2 / 6",
            gridRow: "1 / 4",
            width: "100%",
            height: "100%",
            maxHeight: "600px",
            objectFit: "contain",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.2s 1 forwards`
        },
        textContainer: {
            height: "50px",
            gridColumn: "4/6",
            gridRow: "1/2",
            display: "grid",
            gridTemplateRows: "1fr 1fr",
            alignItems: "center",
            alignSelf: "end",
            paddingRight: theme.spacing(6)
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
