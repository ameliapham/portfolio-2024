import { tss } from "tss-react/mui";
import { CarouselItem } from "./CarouselItem";
import { projects } from "pages/projects/projectsData";
import { BackgroundBeams } from "shared/BackgroundBeams";
import { useState, useEffect } from "react";
import { useConstCallback } from "powerhooks/useConstCallback";
import { assert } from "tsafe/assert";

export function Carousel() {
    const { classes } = useStyle();
    const [sliderElement, setSliderElement] = useState<HTMLElement | null>(null);
    const [refIsAnimating] = useState({ current: false });

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

        window.addEventListener("wheel", onWheel);

        return () => {
            window.removeEventListener("wheel", onWheel);
        };
    }, []);

    return (
        <div className={classes.root}>
            <div ref={setSliderElement}>
                {projects.map((project, i) => (
                    <CarouselItem
                        key={project.name}
                        project={project}
                        onClick={() => alert(`Hello ${i}`)}
                    />
                ))}
            </div>
            <BackgroundBeams />
        </div>
    );
}

const useStyle = tss.withName({ Carousel }).create(({ theme }) => ({
    root: {
        boxSizing: "border-box",
        position: "relative",
        display: "flex",
        height: "100vh",
        width: "100%",
        background: theme.palette.background.default,
        overflow: "hidden"
    }
}));
