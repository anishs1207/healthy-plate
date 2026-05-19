import client from "prom-client";
import { register } from "./registry";

export const creditConsumptionCounter = new client.Counter({
    name: 'credit_consumption_total',
    help: 'Total number of credits consumed by users',
    labelNames: ['action'],
    registers: [register],
});

export const shoppingListItemCounter = new client.Counter({
    name: 'shopping_list_items_total',
    help: 'Total number of shopping list items added or completed',
    labelNames: ['action'], // 'added' or 'completed'
    registers: [register],
});

export const activeUsersGauge = new client.Gauge({
    name: 'active_sessions_total',
    help: 'Estimated number of active user sessions',
    registers: [register],
});
