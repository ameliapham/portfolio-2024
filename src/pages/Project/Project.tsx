import { tss } from "tss-react/mui";
import { useState } from "react";
import { Item, type ItemData } from "./Item";


const initialItems: ItemData[] = [
    {
        "img": "https://i.ibb.co/qCkd9jS/img1.jpg",
        "name": "1 - Switzerland",
        "des": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    }, {
        "img": "https://i.ibb.co/jrRb11q/img2.jpg",
        "name": "2 - Finland",
        "des": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    }, {
        "img": "https://i.ibb.co/NSwVv8D/img3.jpg",
        "name": "3 - Iceland",
        "des": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    }, {
        "img": "https://i.ibb.co/Bq4Q0M8/img4.jpg",
        "name": "4 - Australia",
        "des": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    }, {
        "img": "https://i.ibb.co/jTQfmTq/img5.jpg",
        "name": "5 - Netherland",
        "des": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    }, {
        "img": "https://i.ibb.co/RNkk6L0/img6.jpg",
        "name": "6 - Ireland",
        "des": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    }
];



export function Project() {

    const { classes } = useStyle();
    const [items, setItems] = useState(initialItems);

    return (
        <div className={classes.container}>
            <div>
                {items.map(itemData => <Item key={itemData.name} itemData={itemData} />)}
            </div>

            <div className={classes.button}>
                <button
                    onClick={() => {
                        const [lastItem, ...otherItemsReversed] = [...items].reverse();
                        setItems([lastItem, ...otherItemsReversed.reverse()]);
                    }}
                >
                    <i className="fa-solid fa-arrow-left" />
                </button>
                <button
                    onClick={() => {
                        const [firstItem, ...otherItems] = items;
                        setItems([...otherItems, firstItem]);
                    }}
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
            
            "border": "1px solid red",
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