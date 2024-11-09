import { tss, keyframes } from "tss";
import LogoSvg from "assets/logoSvg.svg?react";

type Props = {
    className?: string;
};

export function SplashScreen(props: Props) {
    const { className } = props;

    const { cx, classes } = useStyles();

    return <LogoSvg className={cx(classes.root, className)} />;
}

const getAnimationHorizontal = (delay: string) =>
    `${keyframes`
0% {
    opacity: 0;
    clip-path: inset(0 100% 0 0)
}
40% {
    opacity: 1;
    clip-path: inset(0 0 0 0)
}
60%, 100% {
    opacity: 1;
}
`} ${delay} infinite ease-in-out`;

const getAnimationVertical = (delay: string) =>
    `${keyframes`
0% {
    opacity: 0;
    clip-path: inset(0 0 100% 0)
}
40% {
    opacity: 1;
    clip-path: inset(0 0 0 0)
}
60%, 100% {
    opacity: 1;
}
`} ${delay} infinite ease-in-out`;

const useStyles = tss.withName({ SplashScreen }).create(() => ({
    root: {
        animation: `${keyframes`
                    0% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                    `} 2s`,
        "& .path1": {
            opacity: 0,
            animation: getAnimationHorizontal("2.5s"),
            animationDelay: ".1s"
        },
        "& .path2": {
            opacity: 0,
            animation: getAnimationHorizontal("2.5s"),
            animationDelay: ".2s"
        },
        "& .path12": {
            opacity: 0,
            animation: getAnimationHorizontal("2.5s"),
            animationDelay: ".3s"
        },
        "& .path3": {
            opacity: 0,
            animation: getAnimationHorizontal("2.5s"),
            animationDelay: ".4s"
        },
        "& .path14": {
            opacity: 0,
            animation: getAnimationVertical("2.5s"),
            animationDelay: ".5s"
        },
        "& .path4": {
            opacity: 0,
            animation: getAnimationHorizontal("2.5s"),
            animationDelay: ".6s"
        },
        "& .path5": {
            opacity: 0,
            animation: getAnimationHorizontal("2.5s"),
            animationDelay: ".7s"
        },
        "& .path6": {
            opacity: 0,
            animation: getAnimationVertical("2.5s"),
            animationDelay: ".8s"
        },
        "& .path7": {
            opacity: 0,
            animation: getAnimationVertical("2.5s"),
            animationDelay: ".9s"
        },
        "& .path8": {
            opacity: 0,
            animation: getAnimationVertical("2.5s"),
            animationDelay: "1.0s"
        },
        "& .path9": {
            opacity: 0,
            animation: getAnimationHorizontal("2.5s"),
            animationDelay: "1.1s"
        },
        "& .path10": {
            opacity: 0,
            animation: getAnimationVertical("2.5s"),
            animationDelay: "1.2s"
        },
        "& .path11": {
            opacity: 0,
            animation: getAnimationHorizontal("2.5s"),
            animationDelay: "1.3s"
        },

        "& .path13": {
            opacity: 0,
            animation: getAnimationVertical("2.5s"),
            animationDelay: "1.4s"
        },

    }
}));
