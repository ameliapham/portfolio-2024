import { Evt } from "evt";
import { throttleTime } from "evt/operators";
import { useEvt } from "evt/hooks";
import { useConstCallback } from "powerhooks/useConstCallback";


const evtScrollNavigation = Evt.create<"up" | "down">();

let lastDeltaYAbs = 0;

window.addEventListener('wheel', event => {

    const deltaYAbs = Math.abs(event.deltaY);

    console.log("deltaYAbs", deltaYAbs);

    if( deltaYAbs - lastDeltaYAbs > 10){
        evtScrollNavigation.post(event.deltaY > 0 ? "down" : "up");
    }

    lastDeltaYAbs = deltaYAbs;

});

const evtScrollNavigationThrottled = evtScrollNavigation.pipe(throttleTime(500));

export function useScrollNavigation(onScrollNavigation: (direction: "up" | "down") => void) {

    const onScrollNavigation_stable = useConstCallback(onScrollNavigation);

    useEvt(ctx=> {
            
        evtScrollNavigationThrottled.attach(ctx,direction => {
            console.log("==================>direction", direction);
            onScrollNavigation_stable(direction);
        });
    
    }, []);

}

