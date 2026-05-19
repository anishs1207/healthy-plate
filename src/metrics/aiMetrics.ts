import client from "prom-client";
import { register } from "./registry";

export const aiGenerationCounter = new client.Counter({
    name: 'ai_generation_requests_total',
    help: 'Total number of AI recipe generation requests',
    labelNames: ['model'],
    registers: [register],
});

export const aiGenerationDuration = new client.Histogram({
    name: 'ai_generation_duration_seconds',
    help: 'Duration of AI generation in seconds',
    labelNames: ['model'],
    buckets: [1, 3, 5, 10, 20, 30],
    registers: [register],
});

export const aiGenerationFailureCounter = new client.Counter({
    name: 'ai_generation_failures_total',
    help: 'Total number of AI generation failures',
    labelNames: ['model', 'error_type'],
    registers: [register],
});
