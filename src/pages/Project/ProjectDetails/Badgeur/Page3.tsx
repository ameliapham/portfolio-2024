import { tss } from "tss-react/mui";
import { keyframes } from "tss-react";
import badgeurPhone from "assets/badgeur-phone.png";

type Props = {
    className?: string;
};

export function Page3(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
            <img src={badgeurPhone} alt="Badgeur phone" className={classes.image} />
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

const useStyles = tss.withName({ name: "BadgeurPage3" }).create(({theme}) => {
    return {
        root: {
            color: theme.palette.text.primary,
            display: "grid",
            gridTemplateColumns: "1fr 3fr 1fr 1fr",
            gridTemplateRows: "1fr 1fr 1fr",
            alignItems: "center",
            border: "1px solid red"
        },
        image: {
            gridColumn: "1 / 4",
            gridRow: "1 / 4",
            width: "100%",
            height: "100%",
            maxHeight: "700px",
            objectFit: "cover",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.2s 1 forwards`,
            border: "1px solid blue"
        }
    };
});
