import { tss } from "tss-react/mui";
import { alpha } from "@mui/material/styles";
import type { Link } from "type-route";

type Props = {
    className?: string;
    imageUrl: string;
    children: React.ReactNode;
    link: Link | undefined;
};

export function ProjectFrame(props: Props) {
    const { className, imageUrl, children, link } = props;
    const { cx, classes } = useStyles({ imageUrl });

    if (link === undefined) {
        return (
            <a className={cx(className, classes.root)}>
                <div className={classes.div2} />
                <div className={classes.div1}>
                    {children}
                </div>
            </a>
        );
    } else {
        return (
            <a className={cx(className, classes.root)} {...link}>
                <div className={classes.div2} />
                <div className={classes.div1}>
                    {children}
                </div>
            </a>
        );
    }

}

const useStyles = tss
    .withName({ ProjectFrame })
    .withParams<{ imageUrl: string }>()
    .create(({ theme, imageUrl }) => {
        const top = "0%";
        const right = "0%";

        const gapValues = {
            desktop: "30px",
            default: "15px"
        }

        return {
            root: {
                position: "relative",
            },
            div1: {
                position: "absolute",
                top: top,
                right: right,
                height: "100%",
                width: "100%",
                transition: "0.4s ease",
                background: `url(${imageUrl})`,
                backdropFilter: "brightness(70%)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: theme.spacing(4),
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                border: `1px solid ${alpha(theme.palette.text.primary, 0.2)}`,

                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backdropFilter: "brightness(70%)",
                    zIndex: -1
                },

                "&:hover": {
                    top: `calc(${top} - ${gapValues.default})`,
                    right: `calc(${right} - ${gapValues.default})`,
                }
            },
            div2: {
                position: "absolute",
                height: "100%",
                width: "100%",
                top: top,
                right: right,
                border: `1px solid ${alpha(theme.palette.text.primary, 0.2)}`
            },
        };
    });
