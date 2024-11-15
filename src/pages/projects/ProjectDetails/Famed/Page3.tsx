import { tss } from "tss-react/mui";
import { keyframes } from "tss-react";
import famedPhoneM from "assets/famed-phoneM.svg";
import famedPhoneL from "assets/famed-phoneL.svg";
import famedPhoneR from "assets/famed-phoneR.svg";

type Props = {
    className?: string;
};

export function Page3(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
            <img src={famedPhoneL} alt="Famed application" className={classes.phoneLeft} />
            <img src={famedPhoneM} alt="Famed application" className={classes.phoneMiddle} />
            <img src={famedPhoneR} alt="Famed application" className={classes.phoneRight} />
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

const useStyles = tss.withName({ name: "FamedPage3" }).create(({ theme }) => {
    return {
        root: {
            color: theme.palette.text.primary,
            display: "grid",
            gridTemplateColumns: "2fr 1fr 2fr 1fr 2fr",
            gridTemplateRows: "1fr 1fr 1fr",
            alignItems: "center"
        },
        phoneLeft: {
            gridColumn: "1/3",
            gridRow: "1 / 4",
            width: "100%",
            height: "100%",
            maxHeight: "700px",
            objectFit: "contain",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.3s 1 forwards`
        },
        phoneMiddle: {
            gridColumn: "2/5",
            gridRow: "1 / 4",
            width: "100%",
            height: "100%",
            maxHeight: "700px",
            objectFit: "contain",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.2s 1 forwards`
        },
        phoneRight: {
            gridColumn: "4/6",
            gridRow: "1 / 4",
            width: "100%",
            height: "100%",
            maxHeight: "700px",
            objectFit: "contain",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.4s 1 forwards`
        },
    };
});
