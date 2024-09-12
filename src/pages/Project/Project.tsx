import { tss } from "tss-react/mui";
import { useState } from "react";
import { Item } from "./Item";
import { projectData, ItemData } from "data/projectData";

type Props = {
    className?: string;
    initialPage: "zen" | "dame" | "gmeta" | "iso" | "arti" | "gili" | "famed" | "badgeur";
    onPageSelected: (pageId: "zen" | "dame" | "gmeta" | "iso" | "arti" | "gili" | "famed" | "badgeur") => void;
};


export function Project(props: Props) {

    const { className, initialPage } = props;

    const { classes } = useStyles();

    const [items, setItems] = useState(() => {
        let items = projectData; structuredClone(initialPage);

        // eslint-disable-next-line no-constant-condition
        while (true) {
            if (items[1].nameId === initialPage) {
                break;
            }
            items = rotateToTheRight(items);
        }
        return items;
    });

    return (
        <div className={className}>
            <div>
                {items.map((itemData, i) => (
                    <Item
                        key={itemData.nameId}
                        position={i + 1}
                        itemData={itemData}
                        //onClick={() => onPageSelected(itemData.nameId)}
                    />
                ))}
            </div>
            <div className={classes.button}>
                <button
                    onClick={() => {
                        const newItems = rotateToTheRight(items);
                        setItems(newItems);
                    }}
                >
                    <i className="fa-solid fa-arrow-left" />
                </button>
                <button
                    onClick={() => {
                        const newItems = rotateToTheLeft(items);
                        setItems(newItems);
                    }}
                >
                    <i className="fa-solid fa-arrow-right" />
                </button>
            </div>
        </div>

    )
}

function rotateToTheRight(items: ItemData[]): ItemData[] {
    const [lastItem, ...otherItemsReversed] = structuredClone(items).reverse();
    return [lastItem, ...otherItemsReversed.reverse()];
}

function rotateToTheLeft(items: ItemData[]): ItemData[] {
    const [firstItem, ...otherItems] = structuredClone(items);
    return [...otherItems, firstItem];
}



const useStyles = tss
    .withName({ Project })
    .create({
        "button": {
            "width": "100%",
            "textAlign": "center",
            "position": "absolute",
            "bottom": 20,
            "& button": {
                "width": 40,
                "height": 35,
                "borderRadius": 8,
                "cursor": "pointer",
                "margin": "0 5px",
                "border": "1px solid #000",
                "transition": "0.3s",
                "&:hover": {
                    "background": "#ababab",
                    "color": "#fff"
                }
            }

        },
    });