import { tss } from "tss-react/mui";
import { useEffect, useState } from "react";
import { Item } from "./Item";
import { projectData } from "data/projectData";
import { useConstCallback } from "powerhooks/useConstCallback";
import { assert } from "tsafe/assert";
import { useScrollWidth } from "hooks/useScrollHeight";
//import LinearProgress from '@mui/material/LinearProgress';
import { useDomRect } from "powerhooks/useDomRect";
import { useMergeRefs } from "powerhooks/useMergeRefs";


export function Project() {


    const [sliderElement, setSliderElement] = useState<HTMLElement | null>(null);
    const [refIsAnimating] = useState({ "current": false });

    const { ref: scrollableContentRef, domRect: { width: scrollableContentWidth } } = useDomRect();

    const ref = useMergeRefs([scrollableContentRef, setSliderElement]);

    const { classes } = useStyles();
    const { scrollWidth } = useScrollWidth();

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

    console.log('Scroll Height:', scrollWidth);
    console.log('Scrollable Content Height:', scrollableContentWidth);


    return (
        <div className={classes.container} >
            <div ref={ref} >
                {projectData.map(itemData => <Item key={itemData.name} itemData={itemData} />)}
            </div>
            {/*
                <LinearProgress
                    classes={{
                        "bar": classes.progressBar
                    }}
                    className={classes.progress}
                    variant="determinate"
                    value={(scrollWidth / (scrollableContentWidth - window.innerHeight)) * 100}
                />
            */}
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
        /*
        "progress": {
            "position": "absolute",
            "width": "50%",
            "bottom": "30px",
            "left": "50%",
            "transform": "translate(-50%, 0)",
            "zIndex": 2,
            "backgroundColor": "black",
        },
        "progressBar": {
            "backgroundColor": "white"
        },
        */
    }));