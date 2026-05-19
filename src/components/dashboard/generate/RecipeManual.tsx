"use client";

import React, { useEffect, useState } from 'react';
import { Sparkles, X } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const RecipeGenerator: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [mealType, setMealType] = useState<'breakfast' | 'lunch' | 'dinner'>();
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);
  const [prepTime, setPrepTime] = useState<string>('');
  const [skillLevel, setSkillLevel] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [newIngredient, setNewIngredient] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [_showSuccess, setShowSuccess] = useState(false);
  const [_userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    if (status === 'loading') return;

    if (status === 'unauthenticated') {
      router.replace('/');
      return;
    }

    if (session?.user?.id) {
      setUserId(session.user.id)
    }

  }, [session, status, router])

  const mapPrepTimeToMinutes = (text: string) => {
    if (text.includes("15")) return 15;
    if (text.includes("30")) return 30;
    if (text.includes("45")) return 45;
    if (text.includes("1 hour")) return 60;
    return 75;
  };

  const handleGenerateRecipe = async () => {
    if (
      !title.trim() ||
      !description.trim() ||
      !mealType ||
      calories === 0 ||
      protein === 0 ||
      ingredients.length === 0 ||
      !skillLevel ||
      !cuisine
    ) {
      toast.error("Please fill out all fields before generating a recipe.");
      return;
    }
    setIsLoading(true);

    try {
      const payload = {
        title,
        description,
        time: mapPrepTimeToMinutes(prepTime),
        calories_kcal: calories,
        protein_g: protein,
        ingredients,
        mealType: mealType?.toUpperCase(),
        steps: [],
        skillLevel: skillLevel.toUpperCase(),
        cuisine: [cuisine],
        favourite: false,
      };

      await axios.post("/api/recipe-manual", payload);

      toast.success("Recipe created successfully!");
      setTitle('');
      setDescription('');
      setMealType(undefined);
      setCalories(0);
      setProtein(0);
      setPrepTime('');
      setSkillLevel('');
      setCuisine('');
      setIngredients([]);
      setNewIngredient('');

      setShowSuccess(true);
    } catch (error) {
      console.error("Error generating recipe:", error);
      toast.error("Failed to generate recipe. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddIngredient = () => {
    if (newIngredient.trim()) {
      setIngredients([...ingredients, newIngredient.trim()]);
      setNewIngredient('');
    }
  };

  const handleDeleteIngredient = (index: number) => {
    setIngredients((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-purple-100 p-2.5 rounded-lg">
            <Sparkles size={20} className="text-purple-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-800">Add Recipes</h2>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Recipe Name:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Avocado Toast"
            className="w-full text-sm px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full text-sm px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Meal Type:</label>
          <div className="grid grid-cols-3 gap-3">
            {(['breakfast', 'lunch', 'dinner'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setMealType(type)}
                className={`cursor-pointer py-2 px-4 rounded-md text-sm capitalize ${mealType === type
                  ? 'bg-purple-100 text-purple-700 border border-purple-200'
                  : 'bg-gray-50 text-gray-700 border border-gray-100 hover:bg-gray-100'
                  }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Calories Target</label>
            <input
              type="range"
              min={0}
              max={2000}
              step={50}
              value={calories}
              onChange={(e) => setCalories(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer accent-purple-600"
            />
            <div className="mt-1 text-sm text-center text-gray-600">{calories} kcal</div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Protein Target</label>
            <input
              type="range"
              min={0}
              max={100}
              step={5}
              value={protein}
              onChange={(e) => setProtein(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer accent-purple-600"
            />
            <div className="mt-1 text-sm text-center text-gray-600">{protein} g</div>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Ingredients</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={newIngredient}
              onChange={(e) => setNewIngredient(e.target.value)}
              placeholder="e.g. Tomatoes"
              className="flex-1 text-sm px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              onClick={handleAddIngredient}
              className="cursor-pointer px-4 py-2 text-sm bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
              Add
            </button>
          </div>

          {ingredients.length > 0 && (
            <ul className="mt-4 space-y-3">
              {ingredients.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition rounded-lg px-4 py-3 shadow-sm border border-gray-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-200 text-purple-700 text-xs font-semibold px-2 py-1 rounded-full">
                      {idx + 1}
                    </div>
                    <span className="text-sm text-gray-800">{item}</span>
                  </div>
                  <button
                    onClick={() => handleDeleteIngredient(idx)}
                    className="cursor-pointer text-red-500 hover:text-red-700 hover:scale-110 transition-transform duration-150"
                  >
                    <X size={18} />
                  </button>
                </li>
              ))}
            </ul>
          )}

        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Prep Time</label>
          <select
            value={prepTime}
            onChange={(e) => setPrepTime(e.target.value)}
            className="cursor-pointer w-full text-sm px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="15 minutes">15 minutes</option>
            <option value="30 minutes">30 minutes</option>
            <option value="45 minutes">45 minutes</option>
            <option value="1 hour">1 hour</option>
            <option value="More than 1 hour">More than 1 hour</option>
          </select>
        </div>

        {/* Skill Level */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Skill Level</label>
          <div className="grid grid-cols-3 gap-3">
            {(['beginner', 'intermediate', 'expert'] as const).map((level) => (
              <button
                key={level}
                onClick={() => setSkillLevel(level)}
                className={`cursor-pointer py-2 px-4 rounded-md text-sm capitalize ${skillLevel === level
                  ? 'bg-purple-100 text-purple-700 border border-purple-200'
                  : 'bg-gray-50 text-gray-700 border border-gray-100 hover:bg-gray-100'
                  }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Cuisine */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Cuisine</label>
          <div className="grid grid-cols-3 gap-3">
            {(['Indian', 'Mexican', 'Italian', 'Asian', 'Mediterranean', 'French', 'Japanese'] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCuisine(c)}
                className={`cursor-pointer py-2 px-4 rounded-md text-sm capitalize ${cuisine === c
                  ? 'bg-purple-100 text-purple-700 border border-purple-200'
                  : 'bg-gray-50 text-gray-700 border border-gray-100 hover:bg-gray-100'
                  }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={handleGenerateRecipe}
          disabled={isLoading}
          className=" cursor-pointer w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <div className=" h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              Generating...
            </>
          ) : (
            <>Generate Recipe</>
          )}
        </button>
      </div>
    </div>
  );
};

export default RecipeGenerator;
