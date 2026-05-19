import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db"; 
import { fetchWithCache } from "@/lib/redis";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "6", 10);
    const search = searchParams.get("search")?.toLowerCase() || "";
    const ownerId = searchParams.get("userId");

    const skip = (page - 1) * limit;

    if (!ownerId) {
      return NextResponse.json({ error: "Missing userId" }, { status: 400 });
    }

    const cacheKey = `recipeMeal:${ownerId}:${page}:${limit}:${search}`;
    const data = await fetchWithCache(cacheKey, async () => {
      // Count total recipes for pagination
      const totalCount = await prisma.recipe.count({
        where: {
          ownerId,
          title: {
            contains: search,
            mode: "insensitive",
          },
        },
      });

      const totalPages = Math.max(1, Math.ceil(totalCount / limit));

      // Fetch paginated recipes
      const recipes = await prisma.recipe.findMany({
        where: {
          ownerId,
          title: {
            contains: search,
            mode: "insensitive",
          },
        },
        skip,
        take: limit,
        orderBy: {
          date: "desc",
        },
        select: {
          id: true,
          title: true,
          cuisine: true,
          description: true,
          time: true,
          calories_kcal: true,
          protein_g: true,
          keywords: true,
          favourite: true,
          steps: true,
          ingredients: true,
        },
      });

      return {
        recipes,
        totalPages,
        currentPage: page,
      };
    }, 300);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching paginated recipes:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
