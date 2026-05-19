import client from "prom-client";
import { register } from "./registry";

export const requestCounter = new client.Counter({
    name: 'http_requests_total',
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'route', 'status_code'],
    registers: [register],
});

export const requestDuration = new client.Histogram({
    name: 'http_request_duration_seconds',
    help: 'Duration of HTTP requests in seconds',
    labelNames: ['method', 'route', 'status_code'],
    buckets: [0.1, 0.5, 1, 2, 5],
    registers: [register],
});

export const activeRequestsCounter = new client.Gauge({
    name: 'http_active_requests',
    help: 'Number of currently active HTTP requests',
    registers: [register],
});
