import { tss, keyframes } from "tss";
import LogoSvg from "assets/onyxia.svg?react";

type Props = {
    className?: string;
};

export function SplashScreen(props: Props) {
    const { className } = props;

    const { cx, classes } = useStyles();

    return <LogoSvg className={cx(classes.root, className)} />;
}

const getAnimation = (delay: string) =>
    `${keyframes`
0% {
    opacity: 0;
}
40% {
    opacity: 1;
}
60%, 100% {
    opacity: 0;
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
        "& .splashscreen-animation-group1": {
            opacity: 0,
            animation: getAnimation("3.5s"),
            animationDelay: ".3s"
        },
        "& .splashscreen-animation-group2": {
            opacity: 0,
            animation: getAnimation("3.5s"),
            animationDelay: ".7s"
        },
        "& .splashscreen-animation-group3": {
            opacity: 0,
            animation: getAnimation("3.5s"),
            animationDelay: "1.1s"
        }
    }
}));
