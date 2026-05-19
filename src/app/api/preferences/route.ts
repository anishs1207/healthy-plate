import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

const validGoals = ["MUSCLE_GAIN", "WEIGHT_LOSS", "WEIGHT_GAIN"];
const validActivityLevel = ["ACTIVE", "MODERATE", "LESS_ACTIVE"];

export async function GET(req: NextRequest) {
  try {
    const userId = req.headers.get("user-id");

    if (!userId) {
      return NextResponse.json({ error: "User ID missing" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      name: user.name,
      age: user.age,
      goal: user.goal,
      calorieRequirement: user.calorieRequirement,
      proteinRequirement: user.proteinRequirement,
      weight: user.targetWeight,
      dietaryPreferences: user.dietaryPreferences,
      allergies: user.dietaryRestrictions,
      height: user.height,
      workoutCommitment: user.workoutCommitment,
      preferredCuisines: user.preferredCuisines,
      activityLevel: user.activityLevel,
    });

  } catch (error) {
    console.error("Error at /api/preferences:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const {
      name,
      age,
      calorieRequirement,
      proteinRequirement,
      weight,
      height,
      workoutCommitment,
      dietaryPreferences,
      allergies,
      preferredCuisines,
    } = body;

    let {
      goal,
      activityLevel
    } = body;

    const userId = req.headers.get("user-id");

    function toEnumFormat(value: string): string {
      return value.toUpperCase().replace(/ /g, "_");
    }

    goal = toEnumFormat(goal);
    activityLevel = toEnumFormat(activityLevel);

    if (!userId) {
      return NextResponse.json({ error: "User ID missing" }, { status: 400 });
    }

    if (!validGoals.includes(goal)) {
      return NextResponse.json({ error: "Invalid goal value" }, { status: 400 });
    }

     if (!validActivityLevel.includes(activityLevel)) {
      return NextResponse.json({ error: "Invalid activityLevel" }, { status: 400 });
    }

    const arraysToValidate = [
      { name: "dietaryPreferences", value: dietaryPreferences },
      { name: "preferredCuisines", value: preferredCuisines },
      {name: "dietaryRestrictions", value: allergies }
    ];

    for (const field of arraysToValidate) {
      if (!Array.isArray(field.value)) {
        return NextResponse.json({ error: `${field.name} must be an array` }, { status: 400 });
      }
    }

    if (typeof workoutCommitment !== "number" || workoutCommitment < 1 || workoutCommitment > 7) {
      return NextResponse.json({
        error: "Workout commitment must be a number between 1 and 7",
      }, { status: 400 });
    }

    if (typeof height !== "number") {
      return NextResponse.json({
        error: "Height is required to be a number",
      }, { status: 400 });
    }

   const updatedUser = await prisma.user.update({
  where: { id: userId },
  data: {
    name,
    age,
    goal,
    dietaryPreferences,
    height,
    workoutCommitment,
    dietaryRestrictions: allergies,
    preferredCuisines,
    activityLevel,
    targetWeight: weight,
    calorieRequirement,
    proteinRequirement,
  },
});

    return NextResponse.json({ success: true, user: updatedUser });

  } catch (error) {
    console.error("Error at /api/preferences:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
