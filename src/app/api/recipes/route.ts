import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "6", 10);
    const search = searchParams.get("search")?.toLowerCase() || "";
    const ownerId = searchParams.get('userId');

    if (!ownerId) {
      return NextResponse.json({ error: 'Missing userId' }, { status: 400 });
    }

    const skip = (page - 1) * limit;

    const totalCount = await prisma.recipe.count({
      where: {
        ownerId,
        OR: [
          {
            title: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            keywords: {
              has: search,
            },
          },
        ],
      },
    });

    const totalPages = Math.max(1, Math.ceil(totalCount / limit));

    const recipes = await prisma.recipe.findMany({
      where: {
        ownerId,
        OR: [
          {
            title: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            keywords: {
              has: search,
            },
          },
        ],
      },
      skip,
      take: limit,
      orderBy: {
        date: "desc",
      },
      select: {
        id: true,
        title: true,
        description: true,
        time: true,
        calories_kcal: true,
        protein_g: true,
        keywords: true,
        favourite: true,
        ingredients: true,
        steps: true,
      },
    });

    return NextResponse.json({
      recipes,
      totalPages,
      currentPage: page,
    });
  } catch (error) {
    console.error("Error fetching paginated recipes:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
