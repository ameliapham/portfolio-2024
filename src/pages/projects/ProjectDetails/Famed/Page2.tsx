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
                src={detailImagesByProjectId.famed.famedPhoneLUrl}
                alt="Famed application"
                className={classes.phoneLeft}
            />
            <img
                src={detailImagesByProjectId.famed.famedPhoneMUrl}
                alt="Famed application"
                className={classes.phoneMiddle}
            />
            <img
                src={detailImagesByProjectId.famed.famedPhoneRUrl}
                alt="Famed application"
                className={classes.phoneRight}
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

const useStyles = tss.withName({ name: "FamedPage2" }).create(({ theme }) => {
    return {
        root: {
            color: theme.palette.text.primary,
            display: "grid",
            gridTemplateColumns: "1fr 4fr 4fr 4fr",
            gridTemplateRows: "1fr 1fr 1fr",
            alignItems: "center"
        },
        phoneLeft: {
            gridColumn: "2/3",
            gridRow: "1 / 4",
            width: "100%",
            height: "100%",
            maxHeight: "700px",
            objectFit: "contain",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.3s 1 forwards`
        },
        phoneMiddle: {
            gridColumn: "3/4",
            gridRow: "1 / 4",
            width: "100%",
            height: "100%",
            maxHeight: "700px",
            objectFit: "contain",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.2s 1 forwards`
        },
        phoneRight: {
            gridColumn: "4/5",
            gridRow: "1 / 4",
            width: "100%",
            height: "100%",
            maxHeight: "700px",
            objectFit: "contain",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.4s 1 forwards`
        }
    };
});
