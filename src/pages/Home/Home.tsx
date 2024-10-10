import { tss } from "tss-react/mui";
import headVideo from "assets/headVideo.mp4";
import headText from "assets/headText.png";
import Typography from "@mui/material/Typography";
import { HomeSeeMoreButton } from "./HomeSeeMoreButton";
import { CustomGradients } from "./Gradients";
import { usePageId } from "hooks/usePageId";

type Props = {
    className?: string;
};

export function Home(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();
    const { setPageId: setPageId } = usePageId();

    return (
        <div className={cx(classes.root, className)}>
            <video className={classes.video} autoPlay muted loop>
                <source src={headVideo} type="video/mp4" />
            </video>

            <img className={classes.img} src={headText} alt="headText" />

            <Typography className={classes.des} variant="h6">
                UX UI Designer / Front End Developer
            </Typography>

            <div className={classes.sparklesZone}>
                <CustomGradients />

                <div className={classes.sparklesBottom}></div>
            </div>

            <HomeSeeMoreButton className={classes.button} onClick={() => setPageId("projects")}>
                View My Work
            </HomeSeeMoreButton>
        </div>
    );
}

const useStyles = tss.withName({ Home }).create(({ theme }) => ({
    root: {
        position: "relative",
        display: "flex",
        boxSizing: "border-box",
        height: "100vh",
        width: "100%"
    },
    video: {
        objectFit: "cover",
        width: "100%",
        height: "100%"
    },
    img: {
        position: "absolute",
        width: "100%",
        height: "100%"
    },
    des: {
        position: "absolute",
        top: "62%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: theme.palette.text.primary,
        textAlign: "center"
    },
    sparklesZone: {
        position: "absolute",
        top: "80%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "800px",
        height: "200px",
        overflow: "hidden"
    },
    sparklesBottom: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        maskImage: "radial-gradient(400px 200px at top, transparent 20%, white)"
    },
    button: {
        position: "absolute",
        top: "80%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    }
}));
