import { tss } from "tss-react/mui";
import Typography from "@mui/material/Typography"
import { PhotoFrame } from "./PhotoFrame";
import { SeeMoreButton } from "shared/SeeMoreButton";

type Props = {
    className?: string;
};

export function About(props: Props) {

    const { className } = props;
    const { cx, classes } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
            <PhotoFrame className={classes.frameZone} />
            <div className={classes.textZone}>
                <Typography variant="h3">
                    Amélia Pham
                </Typography>

                <Typography variant="body1">
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
        </div>
    )
}

const useStyles = tss
    .withName({ About })
    .create(({ theme }) => ({
        "root": {
            "border": "1px solid green",
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

        "textZone": {
            "position": "absolute",
            "top": "50%",
            "left": "60%",
            "transform": "translateY(-50%) translateX(-20%)",
            "width": "30%",
            "display": "flex",
            "flexDirection": "column",
            "gap": "20px",
            "color": theme.palette.text.primary,
        },
    }));
