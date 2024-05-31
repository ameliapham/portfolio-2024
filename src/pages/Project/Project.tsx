import { tss } from "tss-react/mui";
import { BoxItem } from "./BoxItem";
import { projectData } from "data/projectData"
import { BackgroundBeams } from "shared/BackgroundBeams";
import { useState, useEffect } from "react";
import { useConstCallback } from "powerhooks/useConstCallback";
import { assert } from "tsafe/assert";


export function Project() {
    const [selectedItemName, setSelectedItemName] = useState<string | undefined>(undefined);

    const { classes } = useStyle({ selectedItemName });
    const [sliderElement, setSliderElement] = useState<HTMLElement | null>(null);
    const [refIsAnimating] = useState({ "current": false });


    const handleNext = useConstCallback(() => {
        if (refIsAnimating.current) {
            return;
        }

        refIsAnimating.current = true;

        assert(sliderElement !== null);

        const firstChild = sliderElement.children[0];
        sliderElement.appendChild(firstChild);

        setTimeout(() => {
            refIsAnimating.current = false;
        }, 500);
    });

    const handlePrev = useConstCallback(() => {
        if (refIsAnimating.current) {
            return;
        }

        refIsAnimating.current = true;

        assert(sliderElement !== null);

        const lastChild = sliderElement.children[sliderElement.children.length - 1];
        sliderElement.prepend(lastChild);

        setTimeout(() => {
            refIsAnimating.current = false;
        }, 500);
    });

    useEffect(() => {
        const onWheel = (e: WheelEvent) => {
            if (e.deltaY < 0) {
                handlePrev();
            } else {
                handleNext();
            }
        };

        window.addEventListener('wheel', onWheel);

        return () => {
            window.removeEventListener('wheel', onWheel);
        };
    }, []);

    return (
        <div className={classes.root}>
            <div
                ref={setSliderElement}
            >
                {projectData.map((itemData) =>
                    <BoxItem
                        key={itemData.name}
                        itemData={itemData}
                        onClick={() => setSelectedItemName(itemData.name)}
                        selected={selectedItemName === itemData.name}
                    />)}
            </div>
            <BackgroundBeams />

        </div>
    );
}

const useStyle = tss
    .withName({ Project })
    .withParams<{ selectedItemName: string | undefined; }>()
    .create(({ theme, selectedItemName }) => ({
        "root": {
            "boxSizing": "border-box",
            "position": "relative",
            "display": "flex",
            "height": "100vh",
            "width": "100%",
            "background": (() => {
                switch (selectedItemName) {
                    case "Project 0": return "yellow";
                    case "Project 1": return "red";
                    default: return "black";
                }
            })(),
            //"overflow": "hidden",

        },
    }))