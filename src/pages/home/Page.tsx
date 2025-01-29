import { useEffect } from "react";
import { tss } from "tss";
import headVideoMp4Url from "assets/headVideo.mp4";
import headVideoGifUrl from "assets/headVideo.gif";
import headTextWebpUrl from "assets/headText.webp";
import Typography from "@mui/material/Typography";
import { HomeSeeMoreButton } from "./HomeSeeMoreButton";
import { CustomGradients } from "./Gradients";
import { routes } from "routes";
import { PageRoute } from "./route";
import { keyframes } from "tss-react";
import { useScrollNavigation } from "utils/useScrollNavigation";

type Props = {
    className?: string;
    route: PageRoute;
};

export default function Page(props: Props) {
    const { className } = props;
    const { cx, classes, isMobile } = useStyles();

    useScrollNavigation(direction => {
        if (direction === "down") {
            routes.projects().push();
        }
    });

    useEffect(()=>{
        if( !isMobile ){
            return;
        }

        let hasBeenCalled = false;

        const listener = ()=> {

            if( hasBeenCalled ){
                return;
            }

            hasBeenCalled = true;

            routes.projects().push();
        };

        document.addEventListener("touchmove", listener);

        return ()=> {
            document.removeEventListener("touchmove", listener);
        };


    }, []);

    return (
        <div className={cx(classes.root, className)}>
            {isMobile ? (
                <img className={classes.video} src={headVideoGifUrl} />
            ) : (
                <video className={classes.video} autoPlay muted loop>
                    <source src={headVideoMp4Url} type="video/mp4" />
                </video>
            )}

            <img className={classes.imageUrl} src={headTextWebpUrl} alt="headText" />

            <Typography className={classes.description} variant="h6">
                UX UI Designer / Front End Developer
            </Typography>

            <div className={classes.sparklesZone}>
                <CustomGradients />

                <div className={classes.sparklesBottom}></div>
            </div>

            <HomeSeeMoreButton
                className={classes.button}
                onClick={() => {
                    routes.projects().push();
                }}
            >
                View My Work
            </HomeSeeMoreButton>
        </div>
    );
}

const useStyles = tss.withName({ Page }).create(({ theme }) => ({
    root: {
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        animation: `${keyframes`
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
            `} 400ms`
    },
    video: {
        objectFit: "contain",
        width: "100%"
    },
    imageUrl: {
        position: "absolute",
        width: "100%"
    },
    description: {
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
        overflow: "hidden",

        [theme.breakpoints.down("tablet")]: {
            width: "500px"
        }
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
