import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { trackMetrics, recipeCreationCounter } from "@/metrics";

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  return trackMetrics("POST", "/api/save-recipe-ai", async () => {
    try {
      const body = await req.json();

      const {
        recipeName,
        description,
        timeToPrepare,
        calories,
        protein,
        ingredients,
        mealType,
        steps,
        skillLevel,
        cuisine,
        keywords,
        ownerId,
      } = body;

      if (!recipeName || !description) {
        return NextResponse.json(
          { error: "Missing required fields: recipeName, description, ownerId" },
          { status: 400 }
        );
      }

      if (!Array.isArray(ingredients) || !Array.isArray(steps)) {
        return NextResponse.json(
          { error: "Ingredients and steps must be arrays" },
          { status: 400 }
        );
      }

      const mealTypeEnum = mealType?.toUpperCase();
      const skillLevelEnum = skillLevel?.toUpperCase();

      const recipe = await prisma.recipe.create({
        data: {
          title: recipeName,
          description,
          time: timeToPrepare,
          calories_kcal: calories,
          protein_g: protein,
          ingredients,
          mealType: mealTypeEnum,
          steps,
          skillLevel: skillLevelEnum,
          cuisine,
          keywords,
          favourite: false,
          owner: {
            connect: { id: ownerId }
          }
        },
      });

      recipeCreationCounter.inc();

      return NextResponse.json({ success: true, recipe });
    } catch (error) {
      console.error("Error saving AI recipe:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  });
}
