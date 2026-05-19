export * from "./registry";
export * from "./httpRequestMetrics";
export * from "./userMetrics";
export * from "./appMetrics";
export * from "./aiMetrics";
export * from "./businessMetrics";

import { requestCounter, requestDuration, activeRequestsCounter } from "./httpRequestMetrics";

export async function trackMetrics(method: string, route: string, handler: () => Promise<Response>) {
    const startTime = Date.now();
    activeRequestsCounter.inc();

    try {
        const result = await handler();
        const endTime = Date.now();
        const durationSeconds = (endTime - startTime) / 1000;
        const status = result?.status || 200;

        requestCounter.inc({
            method,
            route,
            status_code: status,
        });

        requestDuration.observe({
            method,
            route,
            status_code: status,
        }, durationSeconds);

        return result;
    } catch (error) {
        requestCounter.inc({
            method,
            route,
            status_code: 500,
        });
        throw error;
    } finally {
        activeRequestsCounter.dec();
    }
}
