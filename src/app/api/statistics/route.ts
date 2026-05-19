import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { fetchWithCache } from "@/lib/redis";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const userId = req.headers.get("user-id");

  if (!userId) {
    return NextResponse.json({ error: "Missing userId" }, { status: 400 });
  }

  try {
    const cacheKey = `statistics:${userId}`;
    const data = await fetchWithCache(cacheKey, async () => {
      const today = new Date();
      const dates: string[] = [];
      for (let i = 0; i < 6; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        dates.push(date.toISOString().split("T")[0]);
      }

      const startDate = dates[0] + "T00:00:00.000Z";
      const endDate = dates[5] + "T23:59:59.999Z";

      const plannedMeals = await prisma.mealPlan.findMany({
        where: {
          userId,
          date: {
            gte: new Date(startDate),
            lte: new Date(endDate),
          },
        },
        include: {
          recipe: true,
        },
      });

      const plannedMealsCount = plannedMeals.length;

      const planningProgress = Math.round((plannedMealsCount / 18) * 100);

      const totalCalories = plannedMeals.reduce((acc, meal) => {
        return acc + (meal.recipe?.calories_kcal || 0);
      }, 0);

      const avgCalories =
        plannedMeals.length > 0 ? totalCalories / plannedMeals.length : 0;
      const dailyCalories = Math.round(avgCalories * 3);

      const savedRecipes = await prisma.recipe.count();

      return {
        plannedMeals: plannedMealsCount,
        planningProgress,
        dailyCalories,
        savedRecipes,
      };
    }, 3600);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in dashboard metrics:", error);
    return NextResponse.json(
      { error: "Failed to fetch dashboard metrics" },
      { status: 500 }
    );
  }
}
