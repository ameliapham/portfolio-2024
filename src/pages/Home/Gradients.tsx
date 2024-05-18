import { tss } from "tss-react/mui";

type Props = {
    className?: string;
};

export function CustomGradients(props: Props) {

    const { className } = props;
    const { classes } = useStyles();

    return (
        <div className={className}>
            <div className={classes.div1} />
            <div className={classes.div2} />
            <div className={classes.div3} />
            <div className={classes.div4} />
        </div>
    );
}

const useStyles = tss
    .create(() => ({
        "div1": {
            "position": "absolute",
            "top": 0,
            "left": "5rem",
            "right": "5rem",
            "background": "linear-gradient(to right, transparent, #6366f1, transparent)",
            "width": "75%",
            "height": "2px",
            "filter": "blur(4px)",
        },
        "div2": {
            "position": "absolute",
            "top": 0,
            "left": "5rem",
            "right": "5rem",
            "background": "linear-gradient(to right, transparent, #6366f1, transparent)",
            "width": "75%",
            "height": "1px",
        },
        "div3": {
            "position": "absolute",
            "top": 0,
            "left": "50%",
            "transform": "translateX(-50%)",
            "background": "linear-gradient(to right, transparent, #0ea5e9, transparent)",
            "width": "25%",
            "height": "5px",
            "filter": "blur(4px)",
        },
        "div4": {
            "position": "absolute",
            "top": 0,
            "left": "15rem",
            "right": "15rem",
            "background": "linear-gradient(to right, transparent, #0ea5e9, transparent)",
            "width": "25%",
            "height": "1px",
        },
    }));