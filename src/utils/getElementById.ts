import { assert } from "tsafe/assert";


export async function getElementById(id: string){


    let element = document.getElementById(id);

    if( element === null ){

        await new Promise<void>(resolve => {

            const observer = new MutationObserver((...[, observer]) => {

                const element_now = document.getElementById(id);

                if( element_now === null ){
                    return;
                }

                observer.disconnect();

                element = element_now;

                resolve();

            });

            observer.observe(document, { childList: true, subtree: true });

        });

        assert(element !== null);

    }

    return element;

}