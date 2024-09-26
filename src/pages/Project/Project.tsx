import { useState, useEffect, useRef } from "react";
import { Item } from "./Item";
import { projectData, ItemData } from "data/projectData";

type Props = {
    className?: string;
    initialPage: "zen" | "dame" | "gmeta" | "iso" | "arti" | "gili" | "famed" | "badgeur";
    onPageSelected: (
        pageId: "zen" | "dame" | "gmeta" | "iso" | "arti" | "gili" | "famed" | "badgeur"
    ) => void;
};

export function Project(props: Props) {
    const { className, initialPage, onPageSelected } = props;

    const [items, setItems] = useState(() => {
        let items = projectData;
        structuredClone(initialPage);

        // eslint-disable-next-line no-constant-condition
        while (true) {
            if (items[1].nameId === initialPage) {
                break;
            }
            items = rotateToTheRight(items);
        }
        return items;
    });

    const containerRef = useRef<HTMLDivElement | null>(null);
    const isAnimatingRef = useRef(false);

    useEffect(() => {
        const container = containerRef.current;

        const handleScroll = (event: WheelEvent) => {
            event.preventDefault();

            if (isAnimatingRef.current) {
                return;
            }

            isAnimatingRef.current = true;

            if (event.deltaY < 0) {
                setItems(prevItems => rotateToTheRight(prevItems));
            } else {
                setItems(prevItems => rotateToTheLeft(prevItems));
            }

            setTimeout(() => {
                isAnimatingRef.current = false;
            }, 300);
        };

        if (container) {
            container.addEventListener("wheel", handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener("wheel", handleScroll);
            }
        };
    }, []);

    return (
        <div className={className} ref={containerRef}>
            <div>
                {items.map((itemData, i) => (
                    <Item
                        key={itemData.nameId}
                        position={i + 1}
                        itemData={itemData}
                        onClick={() => onPageSelected(itemData.nameId)}
                    />
                ))}
            </div>
        </div>
    );
}

function rotateToTheRight(items: ItemData[]): ItemData[] {
    const [lastItem, ...otherItemsReversed] = structuredClone(items).reverse();
    return [lastItem, ...otherItemsReversed.reverse()];
}

function rotateToTheLeft(items: ItemData[]): ItemData[] {
    const [firstItem, ...otherItems] = structuredClone(items);
    return [...otherItems, firstItem];
}
