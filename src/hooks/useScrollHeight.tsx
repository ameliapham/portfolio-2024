
import { useEffect, useState } from "react";


export function useScrollHeight(){

    const [scrollHeight, setScrollHeight] = useState(0);

    useEffect(
        () => {

            const onScroll = () => {
                setScrollHeight(window.scrollY);
            };

            window.addEventListener("scroll", onScroll);

            return () => {
                window.removeEventListener("scroll", onScroll);
            };

        },
        []
    );

    return { scrollHeight };
}