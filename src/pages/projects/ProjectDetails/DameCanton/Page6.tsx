import { tss } from "tss";
import { keyframes } from "tss-react";
import { detailImagesByProjectId } from "pages/projects/projectsData";

type Props = {
    className?: string;
};

export function Page6(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
            <img
                src={detailImagesByProjectId.dame.dameImage3Url}
                alt="panels presentation"
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

const useStyles = tss.withName({ name: "DamePage6" }).create(() => {
    return {
        root: {
            display: "flex"
        },
        image: {
            width: "100%",
            height: "100%",
            maxHeight: "600px",
            objectFit: "contain",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.2s 1 forwards`
        }
    };
});
