import { tss } from "tss-react/mui";
import headVideo from "assets/headVideo.mp4";
import headText from "assets/headText.png";

type Props = {
    className?: string;
};

export function Home(props: Props) {

        const { className } = props;
        const { cx, classes } = useStyle();

        return (
            <div className={cx(classes.root, className)}>
                <video className={classes.video} autoPlay muted loop>
                    <source src={headVideo} type="video/mp4" />
                </video>
                <img className={classes.img} src={headText} alt="headText" />
            </div>
        )
}

const useStyle = tss
    .withName({ Home })
    .create(() => ({
        "root": {
            "position": "relative",
            "display": "flex",
            "boxSizing": "border-box",
            "height": "100vh",
            "width": "100%",
        },
        "video": {
            "objectFit": "cover",
            "width": "100%",
            "height": "100%",
        },
        "img": {
            "position": "absolute",
            "width": "100%",
            "height": "100%",
        }
    }));