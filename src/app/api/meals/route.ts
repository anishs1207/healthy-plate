import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { trackMetrics, mealPlanCreationCounter } from '@/metrics';
import { fetchWithCache, redis } from '@/lib/redis';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  return trackMetrics("GET", "/api/meals", async () => {
    try {
      const { searchParams } = new URL(req.url);

      const userId = searchParams.get('userId');

      if (!userId) {
        return NextResponse.json({ error: 'Missing userId' }, { status: 400 });
      }

      const cacheKey = `meals:${userId}`;
      const adjustedMealPlans = await fetchWithCache(cacheKey, async () => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const endDate = new Date(today);
        endDate.setDate(endDate.getDate() + 5);

        await prisma.mealPlan.deleteMany({
          where: {
            userId,
            date: {
              lt: today,
            },
          },
        });

        const mealPlans = await prisma.mealPlan.findMany({
          where: {
            userId,
            date: {
              gte: today,
              lte: endDate,
            },
          },
          orderBy: {
            date: 'asc',
          },
          include: {
            recipe: true,
          },
        });

        return mealPlans.map((plan) => ({
          ...plan,
          date: new Date(new Date(plan.date).setDate(new Date(plan.date).getDate() + 1)),
        }));
      }, 3600);


      console.log (adjustedMealPlans);

      return NextResponse.json({ mealPlans: adjustedMealPlans });
    } catch (error) {
      console.error('GET /meal-plan error:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  });
}

export async function POST(req: NextRequest) {
  return trackMetrics("POST", "/api/meals", async () => {
    try {
      const body = await req.json();
      const { date, mealType, userId, recipeId } = body;

      if (!date || !mealType || !userId || !recipeId) {
        return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
      }

      const [year, month, day] = date.split('-').map(Number);
      const parsedDate = new Date(year, month - 1, day);
      parsedDate.setHours(0, 0, 0, 0);

      const mealPlan = await prisma.mealPlan.upsert({
        where: {
          date_mealType_userId: {
            date: parsedDate,
            mealType,
            userId,
          },
        },
        update: {
          recipeId,
        },
        create: {
          date: parsedDate,
          mealType,
          userId,
          recipeId,
        },
      });

      mealPlanCreationCounter.inc();

      const cacheKey = `meals:${userId}`;
      const upcomingCacheKey = `upcomingMeals:${userId}`;
      const statsCacheKey = `statistics:${userId}`;
      try {
        await redis.del(cacheKey, upcomingCacheKey, statsCacheKey);
      } catch (redisError) {
        console.error('Redis DEL Error:', redisError);
      }

      return NextResponse.json({ success: true, mealPlan });
    } catch (error) {
      console.error('POST /meal-plan error:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  });
}
