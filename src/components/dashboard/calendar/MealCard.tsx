import React, { useState } from 'react';
import { Recipe } from '@/types';
import { Clock, Dumbbell, Flame, Hash } from 'lucide-react';

interface MealCardProps {
  recipe?: Recipe;
  mealType: 'breakfast' | 'lunch' | 'dinner';
  onAddMeal?: () => void;
}

const mealIcons = {
  breakfast: 'bg-amber-100 text-amber-600',
  lunch: 'bg-blue-100 text-blue-600',
  dinner: 'bg-purple-100 text-purple-600',
};

const mealTitles = {
  breakfast: 'Breakfast',
  lunch: 'Lunch',
  dinner: 'Dinner',
};

const MealCard: React.FC<MealCardProps> = ({ recipe, mealType, onAddMeal }) => {
  const [showMore, setShowMore] = useState(false);
  const mealColor = mealIcons[mealType];
  const mealTitle = mealTitles[mealType];

  if (!recipe) {
    return (
      <div className="bg-white border border-dashed border-gray-300 rounded-xl h-44 flex flex-col justify-between p-4 hover:shadow transition cursor-pointer">
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded-full ${mealColor}`}>
            <Hash size={16} />
          </div>
          <h3 className="text-sm font-medium text-gray-700">{mealTitle}</h3>
        </div>

        <button
          onClick={onAddMeal}
          className="cursor-pointer text-sm text-gray-600 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-md py-1.5 px-4 transition"
        >
          + Add Meal
        </button>
      </div>
    );
  }

  const hasDetails = (recipe.ingredients?.length ?? 0) > 0 || (recipe.steps?.length ?? 0) > 0;

  return (
    <div className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded-full ${mealColor}`}>
            <Hash size={16} />
          </div>
          <h3 className="text-sm font-medium text-gray-700">{mealTitle}</h3>
        </div>

        <h2 className="text-base font-semibold text-gray-900 line-clamp-1">{recipe.title}</h2>

        <p className="text-sm text-gray-500 line-clamp-2">{recipe.description}</p>

        <div className="text-xs text-gray-400">
          {recipe.cuisine?.join(', ')}
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t">
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{recipe.time} min</span>
          </div>
          <div className="flex items-center gap-1">
            <Flame size={14} />
            <span>{recipe.calories_kcal} kcal</span>
          </div>
          <div className="flex items-center gap-1">
            <Dumbbell size={14} />
            <span>{recipe.protein_g} g</span>
          </div>
        </div>

        {/* Read More button */}
        {hasDetails && (
          <button
            onClick={() => setShowMore(!showMore)}
            className="cursor-pointer text-sm text-emerald-600 hover:underline mt-2"
          >
            {showMore ? 'Hide details' : 'Read more'}
          </button>
        )}

        {/* Conditional Details */}
        {showMore && (
          <>
            {/* Ingredients */}
            {recipe.ingredients && recipe.ingredients.length > 0 && (
              <div className="pt-2">
                <h4 className="text-sm font-semibold text-gray-800 mb-1">Ingredients</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {recipe.ingredients.map((ing: string, index: number) => (
                    <li key={index}>{ing}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Steps */}
            {recipe.steps && recipe.steps.length > 0 && (
              <div className="pt-2">
                <h4 className="text-sm font-semibold text-gray-800 mb-1">Steps</h4>
                <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1">
                  {recipe.steps.map((step: string, index: number) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MealCard;
