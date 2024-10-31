/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useId } from "react";
import { useWindowInnerHeight } from "utils/useWindowInnerHeight";
import { useWindowScrollY } from "utils/useWindowScrollY";
import { getElementById } from "utils/getElementById";

export function useFixedScrollOnElement(
    params: {
        height: number;
        initialScrollPercentage: number;
    }
){

    const { height, initialScrollPercentage } = params;

    const rootElementId = useId();
    
    useEffect(()=> {

        let isActive = true;
        const cleanups: (() => void)[] = [];

        (async ()=> {

            const element = await getElementById(rootElementId);

            if( !isActive ){
                return;
            }

            const styleHeightBefore = element.style.height;

            element.style.height = `${height}px`;

            window.scrollTo(0, getScrollY({ "scrollPercentage": initialScrollPercentage, height, "windowInnerHeight": window.innerHeight }));

            cleanups.push(()=> {
                element.style.height = styleHeightBefore;
            });

        })();

        return () => {
            isActive = false;
            cleanups.forEach(cleanup => cleanup());
        }

    }, [height, initialScrollPercentage]);

    const { scrollY } = useWindowScrollY();

    const { windowInnerHeight } = useWindowInnerHeight();

    const scrollPercentage = getScrollPercentage({ scrollY, height, windowInnerHeight });


    return { rootElementId, scrollY, scrollPercentage };

}

function getScrollPercentage(params: { scrollY: number; height: number; windowInnerHeight: number }) {
    const { scrollY, height, windowInnerHeight } = params;
    return ~~(100 * (scrollY / (height - windowInnerHeight)));
}

function getScrollY(params: { scrollPercentage: number; height: number; windowInnerHeight: number }) {
    const { scrollPercentage, height, windowInnerHeight } = params;
    const scrollY=  ~~((height - windowInnerHeight) * (scrollPercentage / 100));
    return scrollY;
}