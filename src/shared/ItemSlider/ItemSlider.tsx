import { tss } from "tss-react/mui";
import { useEffect, useState } from "react";
import { Item } from "./Item";
import { projectData } from "data/projectData";
import { useConstCallback } from "powerhooks/useConstCallback";
import { assert } from "tsafe/assert";
import project1 from "assets/food-pho.webp";
import project2 from "assets/5webp.webp";

export function ItemSlider() {
    const [selectedItemName, setSelectedItemName] = useState<string | undefined>(undefined);

    const { classes } = useStyles({ selectedItemName });
    const [sliderElement, setSliderElement] = useState<HTMLElement | null>(null);
    const [refIsAnimating] = useState({ current: false });

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

        window.addEventListener("wheel", onWheel);

        return () => {
            window.removeEventListener("wheel", onWheel);
        };
    }, []);

    return (
        <div className={classes.container}>
            <div ref={setSliderElement}>
                {projectData.map(itemData => (
                    <Item
                        key={itemData.name}
                        itemData={itemData}
                        onMouseEnter={() => setSelectedItemName(itemData.name)}
                    />
                ))}
            </div>

            <div className={classes.button}>
                <button onClick={handlePrev}>
                    <i className="fa-solid fa-arrow-left" />
                </button>
                <button onClick={handleNext}>
                    <i className="fa-solid fa-arrow-right" />
                </button>
            </div>
        </div>
    );
}

const useStyles = tss
    .withName({ Project: ItemSlider })
    .withParams<{ selectedItemName: string | undefined }>()
    .create(({ theme, selectedItemName }) => ({
        container: {
            boxSizing: "border-box",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            background: theme.palette.background.default,
            overflow: "hidden",
            backgroundImage: (() => {
                switch (selectedItemName) {
                    case "resto":
                        return project1;
                    case "dame":
                        return project2;
                    default:
                        return "black";
                }
            })(),
            transition: "background-image 0.5s"
        },
        button: {
            width: "100%",
            textAlign: "center",
            position: "absolute",
            bottom: "20px",
            "& button": {
                width: "40px",
                height: "35px",
                borderRadius: "8px",
                cursor: "pointer",
                margin: "0 5px",
                border: "1px solid #000",
                transition: "0.3s",
                "&:hover": {
                    background: "#ababab",
                    color: "#fff"
                }
            }
        }
    }));
