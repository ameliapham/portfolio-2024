import { tss } from "tss";
import { keyframes } from "tss-react";
import { alpha } from "@mui/material/styles";
import { detailImagesByProjectId } from "../../projectsData";

type Props = {
    className?: string;
};

export function Page2(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
            <img
                src={detailImagesByProjectId.arti.artiPhoneUrl}
                alt="Arti on a phone"
                className={classes.image}
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

const useStyles = tss.withName({ name: "ZenPage2" }).create(({ theme }) => {
    return {
        root: {
            color: theme.palette.text.primary,
            display: "grid",
            gridTemplateColumns: "1fr 15fr 1fr",
            alignItems: "center"
        },
        image: {
            gridColumn: "2",
            width: "100%",
            maxHeight: "700px",
            objectFit: "contain",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.2s 1 forwards`,
            zIndex: 1,
        },
    };
});
