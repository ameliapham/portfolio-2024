import { tss } from "tss";
import { keyframes } from "tss-react";
import { detailImagesByProjectId } from "pages/projects/projectsData";

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
                alt="CCL iPad"
                className={classes.mac}
            />
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

const useStyles = tss.withName({ name: "CclPage2" }).create(() => {
    return {
        root: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 2fr",
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
    };
});
