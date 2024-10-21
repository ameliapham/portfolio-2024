import { tss } from "tss-react/mui";
import { keyframes } from "tss-react";

type Props = {
    className?: string;
    onClick?: () => void;
};

export function Page2(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
            <div className={classes.videoContainer}>
                <iframe
                    src="https://app.videas.fr/embed/media/23926476-9bb9-4499-837e-c5fbdae422f4/?title=false"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen={true}
                    className={classes.videoIframe}
                    referrerPolicy="unsafe-url"
                ></iframe>
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

const useStyles = tss
    .withName({ name: "GmetaPage2" })
    .create(({ theme }) => {
        return {
            root: {
                display: "flex",
                flexDirection: "column",
                color: theme.palette.text.primary,
                position: "relative",
            },
            videoContainer: {
                position: "relative",
                paddingTop: "56.25%",
                width: "100%",
                opacity: 0,
                animation: `${animate} 0.5s ease-in-out 0.2s 1 forwards`
            },
            videoIframe: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: theme.spacing(2)
            },
        };
    });
