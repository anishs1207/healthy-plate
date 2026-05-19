import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { fetchWithCache } from "@/lib/redis";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const userId = req.headers.get("userId");

    if (!userId) {
      return NextResponse.json({ error: "User ID missing" }, { status: 400 });
    }

    const cacheKey = `creditsAndTier:${userId}`;

    const data = await fetchWithCache(cacheKey, async () => {
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });

      if (!user) {
        return null;
      }

      return {
        credits: user.credits,
        tierPlan: user.tierPlan,
      };
    }, 3600);

    if (!data) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    console.log(data);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error at /api/credits-and-tier", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
