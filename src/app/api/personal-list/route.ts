import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const userId = req.headers.get("user-id");

    if (!userId) {
      return NextResponse.json({ error: "Missing user ID" }, { status: 400 });
    }

    const items = await prisma.personalListItem.findMany({
      where: { userId },
      orderBy: { date: "desc" },
    });

    return NextResponse.json(items);
  } catch (error) {
    console.error("GET /api/personal-list error:", error);
    return NextResponse.json(
      { error: "Failed to fetch personal list items" },
      { status: 500 }
    );
  }
}

// POST: Add a new personal list item
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      ingredientName,
      meal,
      tags
    } = body;
    const userId = req.headers.get("user-id")

    if (!ingredientName || !tags || !meal) {
      return NextResponse.json({ error: "Invalid name" }, { status: 400 });
    }

    const newItem = await prisma.personalListItem.create({
      data: {
        ingrediantName: ingredientName,
        tags: tags.toUpperCase(),
        mealType: meal.toUpperCase(),
        completed: false,
        userId: userId
      },
    });

    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    console.error("POST /api/personal-list error:", error);
    return NextResponse.json(
      { error: "Failed to create personal list item" },
      { status: 500 }
    );
  }
}

// PATCH: Toggle completion status of a personal list item
export async function PATCH(req: NextRequest) {
  try {
    const userId = req.headers.get("user-id");
    const id = req.headers.get("item-id");
    const { completed } = await req.json();

    if (!id || typeof completed !== 'boolean' || !userId) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const item = await prisma.personalListItem.findUnique({
      where: { id },
    });

    if (!item || item.userId !== userId) {
      return NextResponse.json({ error: "Unauthorized or not found" }, { status: 403 });
    }

    const updatedItem = await prisma.personalListItem.update({
      where: { id },
      data: { completed: completed },
    });

    return NextResponse.json(updatedItem);
  } catch (error) {
    console.error("PATCH /api/personal-list/[id] error:", error);
    return NextResponse.json({ error: "Failed to update item" }, { status: 500 });
  }
}

// DELETE: Delete a personal list item by ID
export async function DELETE(req: NextRequest) {
  try {
    const userId = req.headers.get("user-id");
    const id = req.headers.get("item-id");

    if (!id || !userId) {
      return NextResponse.json({ error: "Missing ID or user" }, { status: 400 });
    }

    // Check ownership before deleting
    const item = await prisma.personalListItem.findUnique({
      where: { id },
    });

    if (!item || item.userId !== userId) {
      return NextResponse.json({ error: "Unauthorized or not found" }, { status: 403 });
    }

    await prisma.personalListItem.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Item deleted" });
  } catch (error) {
    console.error("DELETE /api/personal-list error:", error);
    return NextResponse.json({ error: "Failed to delete item" }, { status: 500 });
  }
}
