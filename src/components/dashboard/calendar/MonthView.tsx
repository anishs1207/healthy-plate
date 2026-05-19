import React from 'react';
import { MonthData } from '@/types';
import CalendarDay from './CalendarDay';
import { getMonthName } from '@/utils/dateUtils';

interface MonthViewProps {
  monthData: MonthData;
  onAddMeal: (date: string, mealType: 'breakfast' | 'lunch' | 'dinner') => void;
}

const MonthView: React.FC<MonthViewProps> = ({ monthData, onAddMeal }) => {
  const monthName = getMonthName(monthData.month);

  const week = [];

  for (const day of monthData.days) {
    week.push({
      date: day.date,
      breakfast: day.breakfast,
      lunch: day.lunch,
      dinner: day.dinner,
    });
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {monthName} {monthData.year}
        </h2>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {week.map((day) => (
          <CalendarDay
            key={day.date}
            dayData={day}
            onAddMeal={onAddMeal}
          />
        ))}
      </div>
    </div>
  );
};

export default MonthView;