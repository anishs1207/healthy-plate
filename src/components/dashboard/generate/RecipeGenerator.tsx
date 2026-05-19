"use client";

import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { toast } from "sonner";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useSession } from 'next-auth/react';
import { useRouter } from "next/navigation";

interface GeneratedRecipe {
  recipeName: string;
  description: string;
  timeToPrepare: number;
  calories: number;
  protein: number;
  ingredients: string[];
  steps: string[];
}

const RecipeGenerator: React.FC = () => {
  const [mealType, setMealType] = useState<'breakfast' | 'lunch' | 'dinner'>();
  const [additionalPreferences, setAdditionalPreferences] = useState('');
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [generatedRecipe, setGeneratedRecipe] = useState<GeneratedRecipe | null>(null);
  const [prepTime, setPrepTime] = useState<string>('15 minutes');
  const [skillLevel, setSkillLevel] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;

    if (status === 'unauthenticated') {
      router.replace('/');
      return;
    }

    if (session?.user?.id) {
      setUserId(session.user.id)
    }

  }, [session, router, status])

  const handleGenerateRecipe = async () => {
    if (
      !mealType ||
      !prepTime ||
      calories <= 0 ||
      protein <= 0 ||
      !skillLevel.trim() ||
      !cuisine.trim()
    ) {
      toast.error("Please fill in all required fields before generating a recipe.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post('/api/generate-recipe', {
        time: prepTime,
        calories_kcal: calories,
        protein_g: protein,
        mealType,
        skillLevel,
        cuisine: [cuisine],
        favourite: false,
        additionalPrompt: additionalPreferences,
      });

      const generated = response.data;

      if (!generated || !generated.recipeName) {
        throw new Error("Invalid response from server");
      }

      setGeneratedRecipe(generated);
      setShowModal(true);
      toast.success('Recipe generated successfully!');
    } catch (error) {
      console.error('Failed to generate recipe:', error);
      toast.error('Something went wrong while generating the recipe.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveRecipe = async () => {
    if (!generatedRecipe) return;

    try {
      setIsSaving(true);
      await axios.post('/api/save-recipe-ai',
        {
          ...generatedRecipe,
          ownerId: userId,
        });
      toast.success('Recipe saved successfully!');
      setShowModal(false);
    } catch (error) {
      console.error('Failed to save recipe:', error);
      toast.error('Failed to save recipe.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleClear = () => {
    setShowModal(false);
    setGeneratedRecipe(null);
  };

  return (
    <div className="w-full relative">
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-purple-100 p-2.5 rounded-lg">
            <Sparkles size={20} className="text-purple-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-800">AI Recipe Generator</h2>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Meal Type</label>
          <div className="grid grid-cols-3 gap-3">
            {(['breakfast', 'lunch', 'dinner'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setMealType(type)}
                className={`cursor-pointer py-2 px-4 rounded-md text-sm transition-colors capitalize ${mealType === type
                  ? 'bg-purple-100 text-purple-700 border border-purple-200'
                  : 'bg-gray-50 text-gray-700 border border-gray-100 hover:bg-gray-100'
                  }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Prompt</label>
          <textarea
            value={additionalPreferences}
            onChange={(e) => setAdditionalPreferences(e.target.value)}
            placeholder="Add preferences, instructions, allergies, etc."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows={3}
          />
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
          <label className="block text-sm font-medium text-gray-700 mb-2">Time Available for Prep</label>
          <select
            value={prepTime}
            onChange={(e) => setPrepTime(e.target.value)}
            className="w-full text-sm px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="15 minutes">15 minutes</option>
            <option value="30 minutes">30 minutes</option>
            <option value="45 minutes">45 minutes</option>
            <option value="1 hour">1 hour</option>
            <option value="More than 1 hour">More than 1 hour</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Cooking Skill Level</label>
          <div className="grid grid-cols-3 gap-3">
            {(['beginner', 'intermediate', 'advanced'] as const).map((level) => (
              <button
                key={level}
                onClick={() => setSkillLevel(level)}
                className={`cursor-pointer py-2 px-6 rounded-md text-sm capitalize ${skillLevel === level
                  ? 'bg-purple-100 text-purple-700 border border-purple-200'
                  : 'bg-gray-50 text-gray-700 border border-gray-100 hover:bg-gray-100'
                  }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Cuisine</label>
          <div className="grid lg:grid-cols-4 grid-cols-3 gap-3">
            {([
              'Indian', 'Mexican', 'Italian', 'Asian', 'Mediterranean', 'Middle Eastern',
              'French', 'American', 'Caribbean', 'Japanese', 'Korean', 'Thai', 'Spanish', 'Vietnamese'
            ] as const).map((type) => (
              <button
                key={type}
                onClick={() => setCuisine(type)}
                className={`cursor-pointer py-2 px-4 rounded-md text-sm capitalize ${cuisine === type
                  ? 'bg-purple-100 text-purple-700 border border-purple-200'
                  : 'bg-gray-50 text-gray-700 border border-gray-100 hover:bg-gray-100'
                  }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>


      <button
        onClick={handleGenerateRecipe}
        disabled={isLoading}
        className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center cursor-pointer"
      >
        {isLoading ? (
          <>
            <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
            Generating...
          </>
        ) : (
          <>
            <Sparkles size={18} className="mr-2" />
            Generate Recipe
          </>
        )}
      </button>


      {
        showModal && generatedRecipe && (
          <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/10 flex items-center justify-center">
            <div className="bg-white dark:bg-gray-900 w-full max-w-2xl rounded-xl shadow-lg p-6 overflow-y-auto max-h-[90vh] relative">
              <h2 className="text-2xl font-bold text-purple-700 mb-3">{generatedRecipe.recipeName}</h2>
              <p className="mb-2 text-gray-700 dark:text-gray-300">{generatedRecipe.description}</p>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                <strong>Prep:</strong> {generatedRecipe.timeToPrepare} min | <strong>Calories:</strong> {generatedRecipe.calories} kcal | <strong>Protein:</strong> {generatedRecipe.protein} g
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-purple-600 mb-1">Ingredients</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                  {generatedRecipe.ingredients.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-purple-600 mb-1">Steps</h3>
                <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                  {generatedRecipe.steps.map((step, idx) => <li key={idx}>{step}</li>)}
                </ol>
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button onClick={handleClear} className="cursor-pointer px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-800">
                  Clear
                </button>
                <button
                  onClick={handleSaveRecipe}
                  disabled={isSaving}
                  className={`cursor-pointer px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${isSaving
                    ? "bg-purple-400 text-white cursor-not-allowed"
                    : "bg-purple-600 text-white hover:bg-purple-700"
                    }`}
                >
                  {isSaving ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    "Save Recipe"
                  )}
                </button>

              </div>
            </div>
          </div>
        )
      }
    </div >
  );
};

export default RecipeGenerator;
