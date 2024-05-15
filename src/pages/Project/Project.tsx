import { tss } from "tss-react/mui";
import { useRef } from "react";
import { Item } from "./Item";
import { initialItems } from "./ItemData";


export function Project() {

    const { classes } = useStyle();
    const slideRef = useRef<HTMLDivElement>(null);

    const handleNext = () => {
        if (slideRef.current) {
            const firstChild = slideRef.current.children[0];
            slideRef.current.appendChild(firstChild);
        }
    };

    const handlePrev = () => {
        if (slideRef.current) {
            const lastChild = slideRef.current.children[slideRef.current.children.length - 1];
            slideRef.current.prepend(lastChild);
        }
    };

    return (
        <div className={classes.container}>
            <div
                ref={slideRef}
            >
                {initialItems.map(itemData => <Item key={itemData.name} itemData={itemData} />)}
            </div>

            <div className={classes.button}>
                <button
                    onClick={handlePrev}
                >
                    <i className="fa-solid fa-arrow-left" />
                </button>
                <button
                    onClick={handleNext}
                >
                    <i className="fa-solid fa-arrow-right" />
                </button>
            </div>
        </div>
    );
}

const useStyle = tss
    .withName({ Project })
    .create(() => ({
        "container": {
            "boxSizing": "border-box",
            "position": "absolute",
            "top": "50%",
            "left": "50%",
            "transform": "translate(-50%, -50%)",
            "width": "100%",
            "height": "100%",
            "background": "#f5f5f5",
            "overflow": "hidden",
        },
        "button": {
            "width": "100%",
            "textAlign": "center",
            "position": "absolute",
            "bottom": "20px",
            "& button": {
                "width": "40px",
                "height": "35px",
                "borderRadius": "8px",
                "cursor": "pointer",
                "margin": "0 5px",
                "border": "1px solid #000",
                "transition": "0.3s",
                "&:hover": {
                    "background": "#ababab",
                    "color": "#fff"
                }
            }
        }
    }));