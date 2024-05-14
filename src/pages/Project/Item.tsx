import { tss, keyframes } from "tss-react";

export type ItemData = {
    img: string;
    name: string;
    des: string;
    link?: string;
}

type ItemProps = {
    className?: string;
    itemData: ItemData;
}

export function Item(props: ItemProps) {
    const { className, itemData } = props;
    const { cx, classes } = useStyle();

    return (
        <div 
            className={cx(classes.item, className)}
            style={({ backgroundImage: `url(${itemData.img})` })}
        >
            <div className={classes.content}>
                <div className={classes.name}>{itemData.name}</div>
                <div className={classes.des}>{itemData.des}</div>
                <button>See More</button>
            </div>
        </div>
    );
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

const useStyle = tss
    .withName({ Item })
    .withNestedSelectors<"content">()
    .create(({classes}) => ({
        "item": {
            "boxSizing": "border-box",
            "width": "250px",
            "height": "300px",
            "position": "absolute",
            "top": "50%",
            "transform": "translate(0, -50%)",
            "borderRadius": "20px",
            "backgroundPosition": "50% 50%",
            "backgroundSize": "cover",
            "display": "flex",
            "gap": "10px",
            "transition": "0.5s",
            "&:nth-child(1), &:nth-child(2)": {
                "top": 0,
                "left": 0,
                "transform": "translate(0, 0)",
                "borderRadius": 0,
                "width": "100%",
                "height": "100%",
            },
            "&:nth-child(3)": {
                "left": "50%",
            },
            "&:nth-child(4)": {
                "left": "calc(50% + 220px)",
            },
            "&:nth-child(5)": {
                "left": "calc(50% + 440px)",
            },
            "&:nth-child(n + 6)": {
                "left": "calc(50% + 660px)",
                "opacity": 0,
            },

            [`&:nth-child(2) .${classes.content}`]: {
                "display": "block"
            }

        },
        "content": {
            "position": "absolute",
            "top": "50%",
            "left": "100px",
            "width": "300px",
            "textAlign": "left",
            "color": "#eee",
            "transform": "translate(0, -50%)",
            "display": "none",
            "& button": {
                "padding": "10px 20px",
                "border": "none",
                "cursor": "pointer",
                "opacity": 0,
                "animation": `${animate} 1s ease-in-out 0.6s 1 forwards`,
            }
        },
        "name": {
            "fontSize": "40px",
            "textTransform": "uppercase",
            "fontWeight": "bold",
            "opacity": 0,
            "animation": `${animate} 1s ease-in-out 1 forwards`,
        },
        "des": {
            "marginTop": "10px",
            "marginBottom": "20px",
            "opacity": 0,
            "animation": `${animate} 1s ease-in-out 0.3s 1 forwards`,

        }
    }));