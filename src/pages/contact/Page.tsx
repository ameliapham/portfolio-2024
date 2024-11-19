import { tss, keyframes } from "tss";
import Typography from "@mui/material/Typography";
import { BackgroundBeams } from "shared/BackgroundBeams";
import { PageRoute } from "./route";
import { SocialContact } from "../../shared/SocialContact";

type Props = {
    className?: string;
    route: PageRoute;
};

export default function Page(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();

    return (
        <>
            <div className={cx(classes.root, className)}>
                <div className={classes.textZone}>
                    <Typography variant="h3">Let's progress together !</Typography>

                    <Typography variant="body1">
                        A new project in mind? Need help evolving your digital tools? Let's get in touch
                        and discuss it! I would be happy to share my experience and guide you in the
                        realization of your projects.
                    </Typography>
                </div>

                <SocialContact className={classes.social} />
            </div>

            <BackgroundBeams className={classes.backgroundBeams} />
        </>
    );
}

const useStyles = tss.withName({ Page }).create(({ theme }) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: "50px",
        color: theme.palette.text.primary,
        zIndex: 1,
        padding: `0 ${theme.spacing(30)}`,
        animation: `${keyframes`
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
            `} 400ms`,

        [theme.breakpoints.only("tablet")]: {
            padding: `0 ${theme.spacing(10)}`
        },
        [theme.breakpoints.only("mobile")]: {
            padding: `0 ${theme.spacing(6)}`
        },

    },
    textZone: {
        display: "flex",
        flexDirection: "column",
        gap: "20px"
    },
    social: {
        height: theme.spacing(6)
    },
    backgroundBeams: {
        position: "absolute",
        height: "100%",
        width: "100%",
        overflow: "hidden"
    }
}));
