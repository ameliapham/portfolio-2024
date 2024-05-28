import { tss } from "tss-react/mui";
import { alpha } from "@mui/material/styles";
import avatar from "assets/avatar.jpeg";

type Props = {
    className?: string;
};

export function PhotoFrame(props: Props) {

    const { className } = props;
    const { cx, classes } = useStyles();

    return (
        <div className={cx(className, classes.root)}>
            <div className={classes.div4}>
                <div className={cx(classes.fakeBorder, classes.fakeBorderDiv4)} />
                <div className={classes.face} />
            </div>

            <div className={classes.div3}>
                <div className={cx(classes.fakeBorder, classes.fakeBorderDiv3)} />
                <div className={classes.face} />
            </div>

            <div className={classes.div2}>
                <div className={cx(classes.fakeBorder, classes.fakeBorderDiv2)} />
                <div className={classes.face} />
            </div>

            <div className={classes.div1}>
                <div className={cx(classes.fakeBorder, classes.fakeBorderDiv1)} />
                <div className={classes.img} />
            </div>
        </div>
    );
}

const useStyles = tss
    .withName({ PhotoFrame })
    .withNestedSelectors<"div1" | "div2" | "div3" | "div4">()
    .create(({ theme, classes }) => {
        const background = theme.palette.text.primary;
        const top = "0%";
        const right = "1%";

        return {
            "root": {
                "display": "flex",
                "boxSizing": "border-box",
                "height": "70%",
                "width": "30%",

                [`&:hover .${classes.div1}`]: {
                    "top": `calc(${top} + 30px)`,
                    "right": `calc(${right} + 30px)`,
                },

                [`&:hover .${classes.div3}`]: {
                    "top": `calc(${top} + 30px)`,
                    "right": `calc(${right} + 30px)`,
                },

                [`&:hover .${classes.div4}`]: {
                    "top": `calc(${top} + 30px)`,
                    "right": `calc(${right} + 30px)`,
                },

            },
            "fakeBorder": {
                "content": "''",
                "position": "absolute",
                "top": "-2px",
                "right": "-2px",
                "bottom": "-2px",
                "left": "-2px",
                "clipPath": "polygon(0% 0%, 100% 10%, 100% 90%, 0% 100%)",
            },

            "img": {
                "height": "100%",
                "width": "100%",
                "background": `url(${avatar})`,
                "backgroundSize": "cover",
                "backgroundPosition": "center",
                "clipPath": "polygon(0% 0%, 100% 10%, 100% 90%, 0% 100%)",
            },

            "face": {
                "height": "100%",
                "width": "100%",
                "background": theme.palette.background.default,
                "clipPath": "polygon(0% 0%, 100% 10%, 100% 90%, 0% 100%)",
            },

            "div1": {
                "position": "absolute",
                "top": top,
                "right": right,
                "height": "100%",
                "width": "100%",
                "transition": "0.4s ease",
            },
            "fakeBorderDiv1": {
                "background": `linear-gradient(to right bottom, ${alpha(background, 0.4)}, ${alpha(background, 0.8)}, ${alpha(background, 0.4)})`,
            },

            "div2": {
                "position": "absolute",
                "top": `calc(${top} + 30px)`,
                "right": `calc(${right} + 30px)`,
                "height": "100%",
                "width": "100%",

            },
            "fakeBorderDiv2": {
                "background": `linear-gradient(to right bottom, ${alpha(background, 0.25)}, ${alpha(background, 0.5)}, ${alpha(background, 0.25)})`,
            },

            "div3": {
                "position": "absolute",
                "top": `calc(${top} + 60px)`,
                "right": `calc(${right} + 60px)`,
                "height": "100%",
                "width": "100%",
                "transition": "0.4s ease",
            },
            "fakeBorderDiv3": {
                "background": `linear-gradient(to right bottom, ${alpha(background, 0.1)}, ${alpha(background, 0.3)}, ${alpha(background, 0.1)})`,
            },

            "div4": {
                "position": "absolute",
                "top": `calc(${top} + 90px)`,
                "right": `calc(${right} + 90px)`,
                "height": "100%",
                "width": "100%",
                "transition": "0.4s ease",
            },

            "fakeBorderDiv4": {
                "background": `linear-gradient(to right bottom, ${alpha(background, 0.01)}, ${alpha(background, 0.2)}, ${alpha(background, 0.01)})`,
            },
        }
    });