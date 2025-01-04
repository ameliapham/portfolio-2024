import { Evt } from "evt";
import { throttleTime } from "evt/operators";
import { useEvt } from "evt/hooks";
import { useConstCallback } from "powerhooks/useConstCallback";

const evtScrollNavigation = Evt.create<"up" | "down">();

let lastDeltaYAbs = 0;

window.addEventListener("wheel", event => {
    const deltaYAbs = Math.abs(event.deltaY);

    if (deltaYAbs - lastDeltaYAbs > 2) {
        setTimeout(() => {
            evtScrollNavigation.post(event.deltaY > 0 ? "down" : "up");
        }), 0;
    }

    lastDeltaYAbs = deltaYAbs;
});

const evtScrollNavigationThrottled = evtScrollNavigation.pipe(throttleTime(900));

export function useScrollNavigation(onScrollNavigation: (direction: "up" | "down") => void) {
    const onScrollNavigation_stable = useConstCallback(onScrollNavigation);

    useEvt(ctx => {
        evtScrollNavigationThrottled.attach(ctx, direction => {
            onScrollNavigation_stable(direction);
        });
    }, []);
}
