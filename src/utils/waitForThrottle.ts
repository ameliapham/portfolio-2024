export function waitForThrottleFactory(params: { delay: number }) {
    const { delay } = params;

    let lastExecution = 0;

    function waitForThrottle(): Promise<void | never> {
        const now = Date.now();

        const timeElapsedSinceLastExecution = now - lastExecution;

        if (timeElapsedSinceLastExecution < delay) {
            return new Promise<never>(() => {});
        }

        lastExecution = now;
        return Promise.resolve();
    }

    return { waitForThrottle };
}
