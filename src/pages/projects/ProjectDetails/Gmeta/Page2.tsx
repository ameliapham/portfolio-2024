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
            <div className={classes.details}>
                <img
                    src={detailImagesByProjectId.gmeta.gmetaIpad1Url}
                    alt="gmeta logo"
                    className={cx(classes.detail1)}
                />
                <img
                    src={detailImagesByProjectId.gmeta.gmetaIpad2Url}
                    alt="gmeta logo"
                    className={cx(classes.detail2)}
                />
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

const useStyles = tss.withName({ name: "GmetaPage2" }).create(({ theme }) => {
    return {
        root: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: theme.spacing(8),
            maxHeight: "600px",

            [theme.breakpoints.only("mobile")]: {
                display: "flex",
                flexDirection: "column"
            }
        },
        mac: {
            gridColumn: "1/4",
            gridRow: "1/3",
            width: "100%",
            height: "100%",
            maxHeight: "600px",
            objectFit: "contain",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.2s 1 forwards`
        },
        details:{
            gridColumn: "3/4",
            gridRow: "1/3",
            display: "grid",
            gridTemplateRows: "1fr 1fr 1fr",

            [theme.breakpoints.only("mobile")]: {
                display: "none"
            }
        }, 
        detail1: {
            gridRow: "1/2",
            width: "100%",
            opacity: 0,
            objectFit: "contain",
            animation: `${animate} 0.4s ease-in-out 0.4s 1 forwards`
        },
        detail2: {
            gridRow: "2/3",
            width: "100%",
            opacity: 0,
            objectFit: "contain",
            animation: `${animate} 0.4s ease-in-out 0.6s 1 forwards`
        }
    };
});
