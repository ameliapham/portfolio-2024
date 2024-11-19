import { useState, useEffect } from "react";

let hasBeenDelayedAlready = false;

const ARTIFICIAL_DELAY = 2_500;

export function useDelayOnlyOnce() {
    const [isDelayed, setIsDelayed] = useState(hasBeenDelayedAlready ? false : true);

    useEffect(() => {
        if (hasBeenDelayedAlready) {
            return;
        }

        hasBeenDelayedAlready = true;

        const timer = setTimeout(() => {
            setIsDelayed(false);
        }, ARTIFICIAL_DELAY);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return { isDelayed };
}
