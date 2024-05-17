import { tss } from "tss-react/mui";
import Typography from "@mui/material/Typography"
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { BackgroundBeams } from "shared/BackgroundBeams";

type Props = {
    className?: string;
};

const social = [
    {
        name: 'mail',
        url: "mailto:pham@ameliart.fr",
        Icon: EmailIcon,
    },
    {
        name: 'github',
        url: "https://github.com/ameliapham",
        Icon: GitHubIcon,
    },
    {
        name: 'linkedin',
        url: "https://www.linkedin.com/in/amelia-huong-pham/",
        Icon: LinkedInIcon,
    },
]

export function Contact(props: Props) {

    const { className } = props;
    const { cx, classes } = useStyles();

    return (
        <>
            <div className={cx(classes.root, className)}>
                <div className={classes.textZone}>
                    <Typography variant="h3">
                    Let's progress together !
                    </Typography>

                    <Typography variant="body1">
                        A new project in mind? Need help evolving your digital tools? Let's get in touch and discuss it!
                        I would be happy to share my experience and guide you in the realization of your projects.
                    </Typography>
                </div>


                <div className={classes.social}>
                    {social.map((social, index) => (
                        <a key={index} href={social.url} target="_blank" rel="noreferrer">
                            <social.Icon className={classes.icon} />
                        </a>
                    ))}
                </div>
            </div>

            <BackgroundBeams />
        </>


    )
}

const useStyles = tss
    .withName({ Contact })
    .create(({ theme }) => ({
        "root": {
            "position": "absolute",
            "top": "50%",
            "left": "50%",
            "transform": "translate(-50%, -50%)",
            "display": "flex",
            "flexDirection": "column",
            "gap": "50px",
            "alignItems": "center",
            "textAlign": "center",
            "width": "45%",
            "boxSizing": "border-box",
            "color": theme.palette.text.primary
        },
        "textZone": {
            "display": "flex",
            "flexDirection": "column",
            "gap": "20px",
        },
        "social": {
            "display": "flex",
            "gap": theme.spacing(3),
            "justifyContent": "center",
            "alignItems": "center",
            "height": theme.spacing(6),
        },
        "icon": {
            "width": theme.spacing(4),
            "height": theme.spacing(4),
            "color": theme.palette.text.primary,
            "transition": "0.3s ease-in-out",
            "&:hover": {
                transform: "translateY(-5px)",
            }
        },
    }));
