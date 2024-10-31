import { useState, useEffect } from "react";

export function useWindowInnerHeight() {
    const [windowInnerHeight, setWindowInnerHeight] = useState(window.innerHeight);
    useEffect(() => {
        const handleResize = () => {
            setWindowInnerHeight(window.innerHeight);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return { windowInnerHeight };
}