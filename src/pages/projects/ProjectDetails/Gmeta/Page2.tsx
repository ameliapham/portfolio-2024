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
                src={detailImagesByProjectId.gmeta.gmetaIpad1Url}
                alt="gmeta details"
                className={cx(classes.ipad1)}
            />
            <img
                src={detailImagesByProjectId.gmeta.gmetaIpad2Url}
                alt="gmeta details"
                className={cx(classes.ipad2)}
            />
            <img
                src={detailImagesByProjectId.gmeta.gmetaMacbookUrl}
                alt="gmeta Macbook"
                className={cx(classes.mac)}
            />
            <img
                src={detailImagesByProjectId.gmeta.gmetaIpad3Url}
                alt="gmeta details"
                className={cx(classes.ipad3)}
            />
            <img
                src={detailImagesByProjectId.gmeta.gmetaIpad4Url}
                alt="gmeta details"
                className={cx(classes.ipad4)}
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

const useStyles = tss.withName({ name: "GmetaPage2" }).create(({ theme }) => {
    return {
        root: {
            display: "grid",
            gridTemplateColumns: "1fr 2fr 1fr",
            gridTemplateRows: "1fr 1fr",

            [theme.breakpoints.only("mobile")]: {
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "2fr 1fr 1fr"
            }
        },
        mac: {
            gridColumn: "2/3",
            gridRow: "1/3",
            width: "100%",
            height: "100%",
            maxHeight: "700px",
            objectFit: "contain",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.2s 1 forwards`,

            [theme.breakpoints.only("mobile")]: {
                gridColumn: "1/3",
                gridRow: "1/2"
            }
        },
        ipad1: {
            gridColumn: "1/2",
            gridRow: "1/2",
            width: "100%",
            height: "100%",
            objectFit: "contain",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.3s 1 forwards`,

            [theme.breakpoints.only("mobile")]: {
                gridColumn: "1/2",
                gridRow: "2/3"
            }
        },
        ipad2: {
            gridColumn: "1/2",
            gridRow: "2/3",
            width: "100%",
            height: "100%",
            objectFit: "contain",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.65s 1 forwards`,

            [theme.breakpoints.only("mobile")]: {
                gridColumn: "1/2",
                gridRow: "3/4"
            }
        },
        ipad3: {
            gridColumn: "3/4",
            gridRow: "1/2",
            width: "100%",
            height: "100%",
            objectFit: "contain",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.4s 1 forwards`,

            [theme.breakpoints.only("mobile")]: {
                gridColumn: "2/3",
                gridRow: "2/3"
            }
        },
        ipad4: {
            gridColumn: "3/4",
            gridRow: "2/3",
            width: "100%",
            height: "100%",
            objectFit: "contain",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.5s 1 forwards`,

            [theme.breakpoints.only("mobile")]: {
                gridColumn: "2/3",
                gridRow: "3/4"
            }
        }
    };
});
