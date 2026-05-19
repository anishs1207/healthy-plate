import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      title,
      description,
      time,
      calories_kcal,
      protein_g,
      ingredients,
      mealType,
      steps,
      skillLevel,
      cuisine,
      favourite,
      ownerId,
    } = body;

    if (!title || !description || !ownerId) {
      return NextResponse.json(
        { error: "Missing required fields: title, description, ownerId" },
        { status: 400 }
      );
    }

    if (!Array.isArray(ingredients) || !Array.isArray(steps)) {
      return NextResponse.json(
        { error: "Ingredients and steps must be arrays" },
        { status: 400 }
      );
    }
    
    const mealTypeEnum = mealType.toUpperCase();
    const skillLevelEnum = skillLevel.toUpperCase();

    const recipe = await prisma.recipe.create({
      data: {
        title,
        description,
        time,
        calories_kcal,
        protein_g,
        ingredients,
        mealType: mealTypeEnum,
        steps: [],
        skillLevel: skillLevelEnum,
        cuisine,
        keywords: [],
        favourite,
        ownerId,
      },
    });

    return NextResponse.json({ success: true, recipe });
  } catch (error) {
    console.error("Error creating recipe:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
