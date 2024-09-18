import { tss } from "tss-react/mui";
import { SeeMoreButton } from "shared/SeeMoreButton";


type Props = {
    className?: string;
    onClick?: () => void;
    content: React.ReactNode;
    background: string;
}

export function Contain(props: Props) {

    const { onClick, background, content } = props;
    const { classes } = useStyles({ background });
    return (
        <div className={classes.root}>
            <SeeMoreButton
                className={classes.buttonBack}
                onClick={onClick}
            >
                Back
            </SeeMoreButton>
            {content}
            <div className={classes.background} />



        </div>
    )
}

const useStyles = tss
    .withParams<{ background: string }>()
    .create(({ theme, background }) => {
        return {
            root: {
                "color": theme.palette.text.primary,
            },
            background: {
                "position": "absolute",
                "top": 0,
                "left": 0,
                "right": 0,
                "bottom": 0,
                "background": `url(${background}) center center/cover`,
                "filter": "blur(30px)",
                "opacity": 0.5,
            },
            buttonBack: {
                "position": "absolute",
                "top": "100px",
                "zIndex": 1,
                "left": theme.spacing(10),
            },
        }
    });
