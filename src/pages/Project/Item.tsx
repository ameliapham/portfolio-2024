import { tss, keyframes } from 'tss-react';
import { ItemData } from 'data/projectData';

type Props = {
    className?: string;
    itemData: ItemData;
    position: number;
    onClick?: () => void;
};

export function Item(props: Props) {

    const { className, itemData, position, onClick } = props;
    const { cx, classes } = useStyles({ position });

    return (
        <div
            className={cx(classes.root, className)}
            style={{ "backgroundImage": `url(${itemData.img})` }}
        >
            <div className={classes.content}>
                <div >{itemData.year}</div>
                <div className={classes.name}>{itemData.name}</div>
                <div className={classes.des}>{itemData.des}</div>
                <button onClick={onClick}>See More</button>
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

const useStyles = tss
    .withName({ Item })
    .withParams<{ position: number }>()
    .withNestedSelectors<"content">()
    .create(({ classes, position }) => ({
        root: {
            "width": "200px",
            "height": "300px",
            "position": "absolute",
            "top": "50%",
            "transform": "translate(0, -50%)",
            "borderRadius": "20px",
            "boxShadow": "0 30px 50px #505050",
            "backgroundPosition": "50% 50%",
            "backgroundSize": "cover",
            "display": "inline-block",
            "transition": "0.4s",
            ...(() => {

                const oneAndTwo = {
                    "top": 0,
                    "left": 0,
                    "transform": "translate(0, 0)",
                    "borderRadius": 0,
                    "width": "100%",
                    "height": "100%",
                } as const;

                switch (position) {
                    case 1: return oneAndTwo;
                    case 2: return {
                        ...oneAndTwo,
                        [`& .${classes.content}`]: {
                            "display": "block"
                        }
                    };
                    case 3: return {
                        "left": "50%",
                    };
                    case 4: return {
                        "left": "calc(50% + 220px)",
                    };
                    case 5: return {
                        "left": "calc(50% + 440px)",
                    };
                    default: return {
                        "left": "calc(50% + 660px)",
                        "opacity": 0,
                    };
                }

            })(),
        },
        content: {
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
        name: {
            "fontSize": "40px",
            "textTransform": "uppercase",
            "fontWeight": "bold",
            "opacity": 0,
            "animation": `${animate} 1s ease-in-out 1 forwards`,
        },
        des: {
            "marginTop": "10px",
            "marginBottom": "20px",
            "opacity": 0,
            "animation": `${animate} 1s ease-in-out 0.3s 1 forwards`,

        }
    }));
