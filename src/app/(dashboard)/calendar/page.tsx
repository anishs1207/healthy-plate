'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Recipe, MonthData, DayMeals } from '@/types';
import { Timer, Dumbbell, Flame } from "lucide-react";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import axios from "axios";
import MonthView from "@/components/dashboard/calendar/MonthView";

const SkeletonMealCard: React.FC = () => {
  return (
    <div className="bg-white border rounded-xl shadow-sm p-4 space-y-4 w-full">
      {/* Date header */}
      <div className="w-32 h-4 bg-gray-200 rounded" />

      {/* 3 meal blocks */}
      {['Breakfast', 'Lunch', 'Dinner'].map((_, idx) => (
        <div key={idx} className="p-3 border rounded-lg space-y-2 animate-pulse">
          <div className="w-20 h-3 bg-gray-300 rounded" />
          <div className="w-3/4 h-4 bg-gray-400 rounded" />
          <div className="w-full h-3 bg-gray-300 rounded" />
          <div className="w-5/6 h-3 bg-gray-300 rounded" />
          <div className="flex justify-between pt-2 border-t mt-2">
            <div className="w-12 h-3 bg-gray-300 rounded" />
            <div className="w-12 h-3 bg-gray-300 rounded" />
            <div className="w-12 h-3 bg-gray-300 rounded" />
          </div>
        </div>
      ))}
    </div>

  );
};

const CalendarPage: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [mealPlanData, setMealPlanData] = useState<MonthData>({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    days: [],
  });

  const USER_ID = session?.user?.id;
  const RECIPES_PER_PAGE = 6;

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace('/');
    }
  }, [status, router]);

  const fetchMealPlans = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/meals?userId=${USER_ID}`);
      const data = await response.json();

      const mealPlansByDate: Record<string, { mealType: string; recipe: Recipe }[]> = {};
      for (const plan of data.mealPlans) {
        const dateKey = plan.date.split('T')[0];
        if (!mealPlansByDate[dateKey]) {
          mealPlansByDate[dateKey] = [];
        }
        mealPlansByDate[dateKey].push(plan);
      }

      const today = new Date();
      const days = [];

      for (let i = 0; i < 6; i++) {
        const currentDate = new Date(today);
        currentDate.setDate(today.getDate() + i);
        const dateStr = currentDate.toISOString().split('T')[0];

        const meals = mealPlansByDate[dateStr] || [];
        const dayObj: DayMeals = {
          date: dateStr,
        };

        for (const meal of meals) {
          const key = meal.mealType.toLowerCase() as keyof Omit<DayMeals, 'date'>;
          dayObj[key] = meal.recipe;
        }

        days.push(dayObj);
      }

      setMealPlanData({
        month: today.getMonth(),
        year: today.getFullYear(),
        days,
      });
    } catch (error) {
      console.error('Error fetching meal plan:', error);
    } finally {
      setLoading(false);
    }
  }, [USER_ID]);


  const fetchRecipes = useCallback(async (pageNum: number) => {
    try {
      const response = await axios.get(`/api/recipe-meal`, {
        params: {
          page: pageNum,
          limit: RECIPES_PER_PAGE,
          userId: session?.user?.id
        },
      });

      const data = response.data;

      if (data.recipes && data.recipes.length > 0) {
        setRecipes((prev) => {
          const ids = new Set(prev.map((r) => r.id));
          const newUnique: Recipe[] = data.recipes.filter((r: Recipe) => !ids.has(r.id));
          return [...prev, ...newUnique];
        });

        if (pageNum >= data.totalPages) {
          setHasMore(false);
        }
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  }, [session?.user?.id]);


  useEffect(() => {
    setRecipes([]);
    setPage(1);
    setHasMore(true);
    fetchMealPlans();
    fetchRecipes(1);
  }, [fetchMealPlans, fetchRecipes]);



  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-700 text-lg">Checking authentication...</p>
      </div>
    );
  }

  const [selectedMeal, setSelectedMeal] = useState<{
    date: string;
    mealType: 'breakfast' | 'lunch' | 'dinner';
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectRecipe = async (recipe: Recipe) => {
    if (!selectedMeal) return;

    try {
      await fetch('/api/meals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: selectedMeal.date,
          mealType: selectedMeal.mealType.toUpperCase(),
          userId: USER_ID,
          recipeId: recipe.id,
        }),
      });

      // Update state
      setMealPlanData((prev) => {
        const updatedDays = prev.days.map((day) => {
          if (day.date === selectedMeal.date) {
            return {
              ...day,
              [selectedMeal.mealType]: recipe,
            };
          }
          return day;
        });
        return { ...prev, days: updatedDays };
      });

      setIsModalOpen(false);
    } catch (error) {
      console.error('Error saving meal:', error);
    }
  };

  const handleAddMeal = (date: string, mealType: 'breakfast' | 'lunch' | 'dinner') => {
    setSelectedMeal({ date, mealType });
    setIsModalOpen(true);
  };

  const getAcronym = (title: string) => {
    return title
      .split(" ")
      .map((word) => word[0]?.toUpperCase())
      .slice(0, 4)
      .join("");
  };

  console.log("THIS", mealPlanData);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-gray-800">Meal Calendar</h1>
      <p className="text-gray-600 mb-6">Plan and organize your meals for the next few days.</p>

      {loading ? (
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonMealCard key={i} />
          ))}
        </div>
      ) : (
        <MonthView monthData={mealPlanData} onAddMeal={handleAddMeal} />
      )}

      {isModalOpen && selectedMeal && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  Select a Recipe for {selectedMeal.mealType}
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="cursor-pointer p-2 hover:bg-gray-100"
                >
                  ✕
                </button>
              </div>
              <p className="text-sm text-gray-500">
                {new Date(selectedMeal.date).toLocaleDateString()}
              </p>
            </div>

            <div className="p-6 overflow-y-auto flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recipes.map((recipe) => (
                  <div
                    key={recipe.id}
                    onClick={() => handleSelectRecipe(recipe)}
                    className="cursor-pointer border hover:border-yellow-400 rounded-xl shadow-sm overflow-hidden transition bg-white"
                  >

                    <div className="h-35 flex items-center justify-center text-white text-xl font-bold bg-gradient-to-r from-green-300 to-blue-400">
                      {getAcronym(recipe.title)}
                    </div>

                    <div className="p-4 space-y-2">
                      {/* Tags if needed */}
                      <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                        {(recipe.keywords || []).map((tag, i) => (
                          <span
                            key={i}
                            className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{recipe.title}</h3>

                      {/* Description */}
                      <p className="text-sm text-gray-600 line-clamp-2">{recipe.description}</p>

                      {/* Cuisine */}
                      <p className="text-xs text-gray-400">{recipe.cuisine}</p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-sm text-gray-600 pt-2 border-t mt-3">
                        <div className="flex items-center gap-1">
                          <Timer size={16} />
                          <span>{recipe.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Flame size={16} />
                          <span>{recipe.calories_kcal} kcal</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Dumbbell size={16} />
                          <span>{recipe.protein_g} g</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {hasMore && (
                <div className="flex justify-center mt-6">
                  <button
                    onClick={() => {
                      const nextPage = page + 1;
                      setPage(nextPage);
                      fetchRecipes(nextPage);
                    }}
                    className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Load More Recipes
                  </button>
                </div>
              )}
            </div>

            <div className="p-4 border-t flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="cursor-pointer px-4 py-2 text-gray-600 border border-gray-300 rounded mr-2 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={() => (window.location.href = '/generate')}
                className="p-3 cursor-pointer x-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Generate New Recipe
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarPage;
