import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const userId = req.headers.get('user-id');

    if (!userId) {
      return NextResponse.json({ error: 'Missing userId in headers' }, { status: 400 });
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const endDate = new Date(today);
    endDate.setDate(endDate.getDate() + 3); 

    const mealPlans = await prisma.mealPlan.findMany({
      where: {
        userId,
        date: {
          gte: today,
          lte: endDate,
        },
      },
      include: {
        recipe: true,
      },
    });

    const grouped: Record<string, any> = {};

    for (const meal of mealPlans) {
      const adjustedDate = new Date(meal.date);
      adjustedDate.setDate(adjustedDate.getDate() + 1);

      const dateKey = adjustedDate.toISOString().split('T')[0];

      if (!grouped[dateKey]) {
        grouped[dateKey] = {
          date: adjustedDate,
          breakfast: null,
          lunch: null,
          dinner: null,
        };
      }

      if (meal.mealType === 'BREAKFAST') grouped[dateKey].breakfast = meal.recipe;
      else if (meal.mealType === 'LUNCH') grouped[dateKey].lunch = meal.recipe;
      else if (meal.mealType === 'DINNER') grouped[dateKey].dinner = meal.recipe;
    }

    const result = Object.values(grouped).sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    return NextResponse.json({ meals: result });
  } catch (error) {
    console.error('Error fetching upcoming meals:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
