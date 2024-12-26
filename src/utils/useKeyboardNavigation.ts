import { useEffect } from "react";
import { useConstCallback } from "powerhooks/useConstCallback";

export function useKeyboardNavigation(
    onKeyboardPress: (key: "ArrowUp" | "ArrowDown" | "ArrowLeft" | "ArrowRight" | "Escape") => void
) {

    const onKeyboardPress_stable = useConstCallback(onKeyboardPress);

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            switch (event.key) {
                case "ArrowUp":
                case "ArrowDown":
                case "ArrowLeft":
                case "ArrowRight":
                case "Escape":
                    onKeyboardPress_stable(event.key);
                    break;
            }
        };

        window.addEventListener("keydown", onKeyDown);

        return () => {
            window.removeEventListener("keydown", onKeyDown);
        };
    }, []);

}
