import { tss } from "tss-react/mui";
import { keyframes } from "tss-react";
import { detailImagesByProjectId } from "pages/projects/projectsData";

type Props = {
    className?: string;
};

export function Page3(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
            <img src={detailImagesByProjectId.badgeur.badgeurPhoneUrl} alt="Badgeur phone" className={cx(classes.image, classes.phone)} />
            <img src={detailImagesByProjectId.badgeur.badgeurLogoUrl} alt="Badgeur logo" className={cx(classes.image, classes.logo)} />
            <img
                src={detailImagesByProjectId.badgeur.badgeurColor1Url}
                alt="Badgeur color 1"
                className={cx(classes.image, classes.color1)}
            />
            <img
                src={detailImagesByProjectId.badgeur.badgeurColor2Url}
                alt="Badgeur color 2"
                className={cx(classes.image, classes.color2)}
            />
            <img
                src={detailImagesByProjectId.badgeur.badgeurColor3Url}
                alt="Badgeur color 3"
                className={cx(classes.image, classes.color3)}
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

const useStyles = tss.withName({ name: "BadgeurPage3" }).create(() => {
    return {
        root: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr"
        },
        image: {
            gridColumn: "1/3",
            gridRow: "1/3",
            width: "100%",
            height: "100%",
            maxHeight: "600px",
            objectFit: "contain"
        },
        phone: {
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.2s 1 forwards`
        },
        logo: {
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.4s 1 forwards`
        },
        color1: {
            opacity: 0,
            animation: `${animate} 0.4s ease-in-out 0.5s 1 forwards`
        },
        color2: {
            opacity: 0,
            animation: `${animate} 0.4s ease-in-out 0.6s 1 forwards`
        },
        color3: {
            opacity: 0,
            animation: `${animate} 0.4s ease-in-out 0.7s 1 forwards`
        }
    };
});
