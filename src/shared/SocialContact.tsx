import { tss } from "tss";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { alpha } from "@mui/material/styles";

type Props = {
    className?: string;
};

const social = [
    {
        name: "mail",
        url: "mailto:pham@ameliart.fr",
        Icon: EmailIcon
    },
    {
        name: "github",
        url: "https://github.com/ameliapham",
        Icon: GitHubIcon
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/amelia-huong-pham/",
        Icon: LinkedInIcon
    }
];

export function SocialContact(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
            {social.map((social, index) => (
                <a key={index} href={social.url} target="_blank" rel="noreferrer" className={classes.a}>
                    <social.Icon className={classes.icon} />
                </a>
            ))}
        </div>
    );
}

const useStyles = tss.withName({ SocialContact }).create(({ theme }) => ({
    root: {
        display: "flex",
        gap: theme.spacing(3)
    },
    a: {
        height: theme.spacing(4),
        position: "relative",

        "&::after": {
            content: "''",
            position: "absolute",
            bottom: "0",
            left: "50%",
            width: "0",
            height: theme.spacing(0.1),
            backgroundColor: `${alpha(theme.palette.text.primary, 0.5)}`,
            transform: "translateX(-50%)",
            transition: "all 0.5s ease"
        },

        "&:hover::after": {
            width: "100%"
        }
    },
    icon: {
        width: theme.spacing(4),
        height: theme.spacing(4),
        color: theme.palette.text.primary,
        transition: "0.3s ease-in-out",
        "&:hover": {
            transform: "translateY(-5px)"
        }
    }
}));
