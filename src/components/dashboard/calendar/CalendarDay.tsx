import React from 'react';
import { DayMeals } from '@/types';
import MealCard from './MealCard';

interface CalendarDayProps {
  dayData: DayMeals;
  onAddMeal: (date: string, mealType: 'breakfast' | 'lunch' | 'dinner') => void;
}

const CalendarDay: React.FC<CalendarDayProps> = ({ dayData, onAddMeal }) => {
  const date = new Date(dayData.date);

  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });

  const isToday = new Date().toDateString() === date.toDateString();

  return (
    <div className={`bg-white rounded-lg shadow-sm border ${isToday ? 'border-emerald-200' : 'border-gray-100'} p-4`}>
      <div className={`mb-4 pb-3 border-b ${isToday ? 'border-emerald-100' : 'border-gray-100'}`}>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-medium text-gray-500">
              {formattedDate}
            </p>
          </div>

          {isToday && (
            <span className="bg-emerald-100 text-emerald-600 text-xs px-2 py-1 rounded-full">
              Today
            </span>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <MealCard
          recipe={dayData.breakfast}
          mealType="breakfast"
          onAddMeal={() => onAddMeal(dayData.date, 'breakfast')}
        />

        <MealCard
          recipe={dayData.lunch}
          mealType="lunch"
          onAddMeal={() => onAddMeal(dayData.date, 'lunch')}
        />

        <MealCard
          recipe={dayData.dinner}
          mealType="dinner"
          onAddMeal={() => onAddMeal(dayData.date, 'dinner')}
        />
      </div>
    </div>
  );
};

export default CalendarDay;
