import { useEffect, useState } from "react";

export function useScrollWidth() {
    const [scrollWidth, setScrollWidth] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            setScrollWidth(window.scrollX);
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return { scrollWidth };
}
