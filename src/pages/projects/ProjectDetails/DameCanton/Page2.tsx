import { tss } from "tss";
import { keyframes } from "tss-react";
import Typography from "@mui/material/Typography";

type Props = {
    className?: string;
};

export function Page2(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
            <Typography variant="body1" className={classes.intro}>
                A precise evaluation and simulation of the project were conducted in a real environment, aboard the La Dame de Canton junk.<br />
                Two main types of materials were used in the staging of the project:
            </Typography>
            <div className={classes.materials1}>
                <Typography variant="body1" className={classes.title}>
                    Physical Materials:
                </Typography>
                <Typography variant="body1">
                    - 5 chiffon silk panels: 1 large main screen (2.30m x 2.30m), and 4 smaller screens (2.30m x 0.50m). Chiffon silk, chosen for its lightness and delicacy, is the primary material used for the performance, selected for its lightness and delicacy. To create a sense of depth and dimension, the drapes were divided into three distinct levels.<br />
                    - 2 professional dancers dancing Chinese silhouettes<br />
                    - Instrumentalists

                </Typography>
            </div>
            <div className={classes.materials2}>
                <Typography variant="body1" className={classes.title}>
                    Digital Materials:
                </Typography>
                <Typography variant="body1">
                    - Ink and smoke effects, created using Adobe After Effects<br />
                    - Sound effects generated with an Arduino sound-tracking system<br />
                    - A camera (Intel RealSense D435) captures the dancers' movements, integrated with a Unity 3D game engine application using the Nuitrack plugin
                </Typography>
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

const useStyles = tss.withName({ name: "DamePage2" }).create(({ theme }) => {
    return {
        root: {
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(4)
        },
        intro: {
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.2s 1 forwards`
        },
        title: {
            textTransform: "uppercase"
        },
        materials1: {
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(2),
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.4s 1 forwards`
        },
        materials2: {
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(2),
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.6s 1 forwards`
        },
    };
});
