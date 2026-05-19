'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  ChevronRight,
  Utensils,
  CalendarClock,
  TrendingUp,
  ChefHat,
} from 'lucide-react';
import { Recipe } from '@/types';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface UpcomingDay {
  date: string | Date;
  breakfast: Recipe | null;
  lunch: Recipe | null;
  dinner: Recipe | null;
}

const Dashboard: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState<{
    plannedMeals: number;
    planningProgress: number;
    dailyCalories: number;
    savedRecipes: number;
  } | null>(null);
  const [loadingStats, setLoadingStats] = useState(true);
  const [upcomingMeals, setUpcomingMeals] = useState<UpcomingDay[]>([]);
  const [loadingMeals, setLoadingMeals] = useState(true);

  useEffect(() => {
    if (status === 'loading') return;

    if (status === 'unauthenticated') {
      router.replace('/');
      return;
    }

    if (!session?.user?.id) return;

    const USER_ID = session.user.id;

    const fetchStats = async () => {
      try {
        const response = await axios.get('/api/statistics', {
          headers: { 'user-id': USER_ID },
        });
        setStats(response.data);
      } catch (err) {
        console.error('Error loading dashboard stats:', err);
      } finally {
        setLoadingStats(false);
      }
    };

    const fetchUpcoming = async () => {
      try {
        const res = await axios.get('/api/upcoming-meals', {
          headers: { 'user-id': USER_ID },
        });

        const fetchedMeals: UpcomingDay[] = res.data.meals || [];
        const today = new Date();
        const next3Days: UpcomingDay[] = [];

        for (let i = 0; i < 3; i++) {
          const date = new Date(today);
          date.setDate(today.getDate() + i);
          const dateStr = date.toISOString().split("T")[0];

          const matched = fetchedMeals.find(
            (m) => new Date(m.date).toISOString().split("T")[0] === dateStr
          );

          next3Days.push({
            date: dateStr,
            breakfast: matched?.breakfast || null,
            lunch: matched?.lunch || null,
            dinner: matched?.dinner || null,
          });
        }

        setUpcomingMeals(next3Days);
      } catch (err) {
        console.error('Error fetching upcoming meals:', err);
      } finally {
        setLoadingMeals(false);
      }
    };

    fetchStats();
    fetchUpcoming();

  }, [session, status, router]);


  const statItems = [
    {
      icon: <Utensils size={20} className="text-blue-600" />,
      label: 'Planned Meals',
      value: stats?.plannedMeals,
      color: 'blue',
      subtitle: 'This Week',
    },
    {
      icon: <CalendarClock size={20} className="text-emerald-600" />,
      label: 'Planning Progress',
      value: stats ? `${stats.planningProgress}%` : null,
      color: 'emerald',
      subtitle: 'This Week',
    },
    {
      icon: <TrendingUp size={20} className="text-amber-600" />,
      label: 'Daily Calories',
      value: stats?.dailyCalories,
      color: 'amber',
      subtitle: 'Avg for 6 Days',
    },
    {
      icon: <ChefHat size={20} className="text-purple-600" />,
      label: 'Saved Recipes',
      value: stats?.savedRecipes,
      color: 'purple',
      subtitle: 'Total',
    },
  ];

  const StatSkeleton = () => (
    <div className="bg-white rounded-lg shadow-sm border p-5 animate-pulse space-y-4">
      <div className="flex justify-between items-start">
        <div className="bg-gray-200 h-8 w-8 rounded-md" />
        <div className="bg-gray-100 h-5 w-16 rounded-full" />
      </div>
      <div className="h-6 bg-gray-200 rounded w-2/3" />
      <div className="h-4 bg-gray-100 rounded w-1/2" />
    </div>
  );

  const MealCardSkeleton = () => (
    <div className="p-4 space-y-4 animate-pulse">
      <div className="h-4 w-2/3 bg-gray-200 rounded" />
      <div className="space-y-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="h-6 w-6 bg-gray-200 rounded-md" />
            <div className="space-y-1">
              <div className="h-3 w-16 bg-gray-200 rounded" />
              <div className="h-4 w-24 bg-gray-300 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back!</h1>
        <p className="text-gray-600">Your meal plans and nutrition insights are looking good.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {loadingStats
          ? Array.from({ length: 4 }).map((_, i) => <StatSkeleton key={i} />)
          : statItems.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-sm border p-5"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`bg-${stat.color}-100 p-2 rounded-lg`}>
                  {stat.icon}
                </div>
                <span
                  className={`text-xs font-medium bg-${stat.color}-50 text-${stat.color}-700 px-2 py-1 rounded-full`}
                >
                  {stat.subtitle}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
      </div>

      {/* Upcoming Meals */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Upcoming Meals</h2>
          <a
            href="/calendar"
            className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            View Calendar <ChevronRight size={16} />
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
            {loadingMeals
              ? Array.from({ length: 3 }).map((_, i) => (
                <MealCardSkeleton key={i} />
              ))
              : upcomingMeals.map((day, idx) => (
                <div key={idx} className="p-4 space-y-4">
                  <div className="mb-2">
                    <p className="text-sm font-medium text-gray-500">
                      {new Date(day.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </p>
                  </div>

                  {['breakfast', 'lunch', 'dinner'].map((meal) => {
                    const mealData = day[meal as 'breakfast' | 'lunch' | 'dinner'];
                    const mealIcons: Record<string, string> = {
                      breakfast: 'bg-amber-100 text-amber-600',
                      lunch: 'bg-blue-100 text-blue-600',
                      dinner: 'bg-purple-100 text-purple-600',
                    };

                    return (
                      <div key={meal} className="flex items-center gap-3">
                        <div className={`p-1.5 rounded-md ${mealIcons[meal]}`}>
                          <Utensils size={16} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 capitalize">{meal}</p>
                          {mealData ? (
                            <p className="text-sm font-medium text-gray-800 line-clamp-1">
                              {mealData.title}
                            </p>
                          ) : (
                            <p className="text-sm text-gray-400 italic">Meal not planned</p>
                          )}
                        </div>
                      </div>
                    );
                  })}


                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
