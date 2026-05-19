import client from "prom-client";
import { register } from "./registry";

// Counter: Tracks total profile image updates
export const profileImageUpdateCounter = new client.Counter({
    name: 'user_profile_image_updates_total',
    help: 'Total number of user profile image updates',
    registers: [register],
});

// Gauge: Tracks currently active profile image uploads/processing
export const activeProfileImageUploads = new client.Gauge({
    name: 'user_profile_image_active_uploads',
    help: 'Number of currently active user profile image uploads',
    registers: [register],
});

// Histogram: Tracks the duration of profile image processing/uploading
export const profileImageProcessDuration = new client.Histogram({
    name: 'user_profile_image_process_duration_seconds',
    help: 'Duration of user profile image processing in seconds',
    buckets: [0.5, 1, 3, 5, 10],
    registers: [register],
});
