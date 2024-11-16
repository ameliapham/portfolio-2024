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
            <img src={detailImagesByProjectId.zen.zenMacUrl} alt="Zen Gourmet website on a phone" className={classes.image} />
            <img src={detailImagesByProjectId.zen.zenLogoUrl} alt="Zen Gourmet website on a phone" className={classes.details} />
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

const useStyles = tss.withName({ name: "ZenPage3" }).create(({ theme }) => {
    return {
        root: {
            color: theme.palette.text.primary,
            display: "grid",
            gridTemplateColumns: "1fr 3fr 1fr 1fr",
            gridTemplateRows: "1fr 1fr 1fr",
            alignItems: "center"
        },
        image: {
            gridColumn: "1 / 4",
            gridRow: "1 / 4",
            width: "100%",
            height: "100%",
            maxHeight: "700px",
            objectFit: "contain",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.2s 1 forwards`
        },
        details: {
            gridColumn: "3/5",
            gridRow: "1/3",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.4s 1 forwards`
        }
    };
});
