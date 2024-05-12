import { tss } from "tss-react/mui";
import Typography from "@mui/materaill/typography"

type Props = {
    className?: string;
};

export function About(props: Props) {

        const { className } = props;
        const { cx, classes } = useStyle();

        return (
            <div className={cx(classes.root, className)}>
              <Typography variant=h1>
                About me
                
              </Typography>
            </div>
        )
}

const useStyle = tss
    .withName({ About })
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
