import { tss } from "tss-react/mui";
import headVideo from "assets/headVideo.mp4";
import headText from "assets/headText.png";
import Typography from "@mui/material/Typography";
import { SeeMoreButton } from "./SeeMoreButton";

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
            
            <Typography
                className={classes.des}
                variant="h6"
            >
                UX UI Designer / Front End Developer
            </Typography>

            <SeeMoreButton
                className={classes.button}
                onClick={() => alert("View My Work")} 
            >
                View My Work
            </SeeMoreButton>
        </div>
    )
}

const useStyle = tss
    .withName({ Home })
    .create(({ theme }) => ({
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
        },
        "des": {
            "position": "absolute",
            "top": "62%",
            "left": "50%",
            "transform": "translate(-50%, -50%)",
            "color": theme.palette.text.primary,
            "textAlign": "center",
        },
        "button": {
            "position": "absolute",
            "top": "80%",
            "left": "50%",
            "transform": "translate(-50%, -50%)",
        },
    }));