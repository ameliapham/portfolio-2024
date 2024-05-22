import { tss } from "tss-react/mui";
import { keyframes } from "tss-react";
import Typography from "@mui/material/Typography"
import { PhotoFrame } from "./PhotoFrame";
import { SeeMoreButton } from "shared/SeeMoreButton";
import { BackgroundBeams } from "shared/BackgroundBeams";


type Props = {
    className?: string;
};



export function About(props: Props) {

    const { className } = props;
    const { cx, classes } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
            <PhotoFrame className={classes.frameZone} />
            <div className={classes.content}>
                <div className={classes.object1}>
                    <Typography variant="h3" className={classes.name}>
                        Amélia Pham
                    </Typography>

                    <Typography variant="body1" className={classes.des}>
                        Welcome to my portfolio!
                        <br /><br />
                        I am Huong PHAM, also known as Amélia PHAM.
                        <br /><br />
                        As a UI/UX Designer, Web Designer, and Front-End Developer, my expertise spans a wide range of activities in the design field, including user research, the creation of interactive prototypes, web design and development, as well as user testing. My goal is to transform innovative ideas into rational and functional digital experiences, ensuring a seamless blend of creativity and practicality.
                    </Typography>

                    <SeeMoreButton>
                        Download CV
                    </SeeMoreButton>
                </div>

                <div className={classes.object2}>
                    <Typography variant="h3" className={classes.name}>
                        What I do
                    </Typography>

                    <Typography variant="body1" className={classes.des}>
                        <ul>
                            <li>UI/UX Design</li>
                            <li>Web Design</li>
                            <li>Front-End Development</li>
                            <li>Prototyping</li>
                            <li>User Testing</li>
                        </ul>
                    </Typography>
                </div>

            </div>
            <BackgroundBeams />
        </div>
    )
}

const animate = keyframes({
    "from": {
        "opacity": 0,
        "transform": "translate(0, 100px)",
        "filter": "blur(33px)"
    },
    "to": {
        "opacity": 1,
        "transform": "translate(0)",
        "filter": "blur(0)"
    }
});

const useStyles = tss
    .withName({ About })
    .create(({ theme }) => ({
        "root": {
            "padding": "20px",
            "height": "100vh",
            "boxSizing": "border-box",
            "position": "relative",
        },

        "frameZone": {
            "position": "absolute",
            "top": "50%",
            "right": "50%",
            "transform": "translateY(-50%)",
        },

        "content": {
            "position": "absolute",
            "top": "50%",
            "left": "60%",
            "transform": "translateY(-50%) translateX(-20%)",
            "width": "30%",
            "height": "50%",
            "display": "flex",
            "flexDirection": "column",
            "gap": "60px",
            "color": theme.palette.text.primary,
            "padding": "20px",
            "overflow": "scroll",

            "& button": {
                "opacity": 0,
                "animation": `${animate} 1s ease-in-out 0.6s 1 forwards`,
            },

            // Hide scrollbar for webkit browsers
            "&::-webkit-scrollbar": {
                "display": "none",
            },
            // Hide scrollbar for IE, Edge, and Firefox
            "&": {
                "msOverflowStyle": "none", // IE and Edge
                "scrollbarWidth": "none",  // Firefox
            },
            
        },
        "name": {
            "opacity": 0,
            "animation": `${animate} 1s ease-in-out 1 forwards`,
        },
        "des": {
            "marginTop": "20px",
            "marginBottom": "20px",
            "opacity": 0,
            "animation": `${animate} 1s ease-in-out 0.3s 1 forwards`,

        }
    }));
