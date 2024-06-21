import { tss } from "tss-react/mui";
import { useEffect, useState } from "react";
import { Item } from "./Item";
import { projectData } from "data/projectData";
import { useConstCallback } from "powerhooks/useConstCallback";
import { assert } from "tsafe/assert";


export function Project() {

    const { classes } = useStyles();
    const [sliderElement, setSliderElement] = useState<HTMLElement | null>(null);
    const [refIsAnimating] = useState({ "current": false });

    //const [isAnimating, setIsAnimating]= useState(false);

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
        <div className={classes.container}>
            <div
                ref={setSliderElement}
            >
                {projectData.map(itemData => <Item key={itemData.name} itemData={itemData} />)}
            </div>
        </div>
    );
}

const useStyles = tss
    .withName({ Project })
    .create(({ theme }) => ({
        "container": {
            "boxSizing": "border-box",
            "position": "absolute",
            "top": "50%",
            "left": "50%",
            "transform": "translate(-50%, -50%)",
            "width": "100%",
            "height": "100%",
            "background": theme.palette.background.default,
            "overflow": "hidden",
            "transition": "background-image 0.5s",
        },
    }));