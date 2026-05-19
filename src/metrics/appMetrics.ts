import client from "prom-client";
import { register } from "./registry";

export const recipeCreationCounter = new client.Counter({
    name: 'recipe_creations_total',
    help: 'Total number of recipes created',
    registers: [register],
});

export const mealPlanCreationCounter = new client.Counter({
    name: 'meal_plan_creations_total',
    help: 'Total number of meal plans created',
    registers: [register],
});

// Added a gauge for total recipes in DB (updated periodically or on call)
export const totalRecipesGauge = new client.Gauge({
    name: 'recipes_total_count',
    help: 'Total number of recipes in the database',
    registers: [register],
});
