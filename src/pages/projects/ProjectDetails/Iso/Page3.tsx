import { tss } from "tss-react/mui";
import { keyframes } from "tss-react";

type Props = {
    className?: string;
    onClick?: () => void;
};

export function Page3(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
            <iframe
                src="https://app.videas.fr/embed/media/11878fb1-cf77-4e98-86fe-d0810fb1fef7/?title=false&thumbnail_duration=false&autoplay=true&loop=true"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
                className={classes.videoIframe}
                referrerPolicy="unsafe-url"
            ></iframe>
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

const useStyles = tss.withName({ name: "IsoPage3" }).create(({ theme }) => {
    return {
        root: {
            display: "flex",
            justifyContent: "center",
            position: "relative",
            paddingTop: "56.25%",
            width: "100%",
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.2s 1 forwards`
        },
        videoIframe: {
            position: "absolute",
            top: 0,
            width: "100%",
            maxWidth: "1066px",
            height: "100%",
            maxHeight: "600px",
            borderRadius: theme.spacing(2)
        }
    };
});
