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
                src={detailImagesByProjectId.gmeta.gmetaMacUrl}
                alt="gmeta Macbook"
                className={cx(classes.mac)}
            />
            <img
                src={detailImagesByProjectId.gmeta.gmetaIpad2Url}
                alt="gmeta logo"
                className={cx(classes.detail1)}
            />
            <img
                src={detailImagesByProjectId.gmeta.gmetaIpad3Url}
                alt="gmeta logo"
                className={cx(classes.detail2)}
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

const useStyles = tss.withName({ name: "GmetaPage2" }).create(() => {
    return {
        root: {
            display: "grid",
            gridTemplateColumns: "1fr 2fr 1fr"
        },
        mac: {
            gridColumn: "1/4",
            gridRow: "1/4",
            width: "100%",
            height: "100%",
            maxHeight: "600px",
            objectFit: "contain",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.2s 1 forwards`
        },
        detail1: {
            gridColumn: "3/5",
            gridRow: "1",
            width: "100%",
            opacity: 0,
            objectFit: "contain",
            animation: `${animate} 0.4s ease-in-out 0.6s 1 forwards`
        },
        detail2: {
            gridColumn: "3/5",
            gridRow: "2",
            width: "100%",
            opacity: 0,
            objectFit: "contain",
            animation: `${animate} 0.4s ease-in-out 0.7s 1 forwards`
        }
    };
});
