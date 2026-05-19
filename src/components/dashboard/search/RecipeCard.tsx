import React, { useState } from 'react';
import { Recipe } from '@/types';
import { Heart, Clock, Flame, Drumstick } from 'lucide-react';
import { toast } from "sonner";

interface RecipeCardProps {
    recipe: Recipe;
    onFavoriteToggle: (recipeId: string) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onFavoriteToggle }) => {
    const [isFav, setIsFav] = useState(recipe.favourite);
    const [showMore, setShowMore] = useState(false);

    const getInitials = (name: string | undefined | null) => {
        if (!name) return '';
        return name
            .split(' ')
            .map((word) => word[0])
            .join('')
            .toUpperCase();
    };

    const handleToggleFav = async (e: React.MouseEvent) => {
        e.stopPropagation();

        const newStatus = !isFav;
        setIsFav(newStatus); // Optimistic update

        try {
            await onFavoriteToggle(recipe.id); // Wait for parent to update
            toast.success(`Recipe ${newStatus ? 'added to' : 'removed from'} favorites!`);
        } catch (error) {
            setIsFav(!newStatus); // Revert on failure
            toast.error('Failed to update favorite status.');
            console.error(error);
        }
    };


    return (
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition hover:shadow-lg cursor-pointer group flex flex-col h-full">
            {/* Header with Initials */}
            <div className="relative bg-gradient-to-r from-green-300 to-blue-300 h-32 flex items-center justify-center">
                <div className="text-3xl font-bold text-white opacity-90">
                    {getInitials(recipe.title)}
                </div>
                <button
                    onClick={handleToggleFav}
                    className="absolute top-3 right-3 p-2 bg-white bg-opacity-90 rounded-full shadow hover:scale-110 transition-transform"
                >
                    <Heart
                        size={18}
                        className={
                            isFav
                                ? "fill-red-500 cursor-pointer text-red-500"
                                : "text-gray-400 cursor-pointer"
                        }
                    />
                </button>
            </div>

            {/* Card Body */}
            <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                    <div className="flex flex-wrap gap-2 mb-2">
                        {recipe.keywords.slice(0, 3).map((tag) => (
                            <span
                                key={tag}
                                className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h3 className="font-semibold text-gray-800 mb-1 truncate">{recipe.title}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2 min-h-[40px]">
                        {recipe.description}
                    </p>

                    {/* Read More Button */}
                    {(recipe.ingredients?.length > 0 || (recipe.steps && recipe.steps.length > 0)) && (
                        <div className="flex justify-center mt-1">
                            <button
                                onClick={() => setShowMore(!showMore)}
                                className="cursor-pointer text-sm text-emerald-600 hover:underline"
                            >
                                {showMore ? "Hide details" : "Read more"}
                            </button>
                        </div>
                    )}


                    {/* Extra Content */}
                    {showMore && (
                        <div className="mt-4 space-y-3">
                            {recipe.ingredients && recipe.ingredients.length > 0 && (
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-800 mb-1">
                                        Ingredients
                                    </h4>
                                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                        {recipe.ingredients.map((ing: string, idx: number) => (
                                            <li key={idx}>{ing}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {recipe.steps && recipe.steps.length > 0 && (
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-800 mb-1">
                                        Steps
                                    </h4>
                                    <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1">
                                        {recipe.steps.map((step: string, idx: number) => (
                                            <li key={idx}>{step}</li>
                                        ))}
                                    </ol>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-4">
                    <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{recipe.time} min</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1">
                            <Flame size={14} className="text-orange-500" />
                            <span>{recipe.calories_kcal} kcal</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Drumstick size={14} className="text-amber-600" />
                            <span>{recipe.protein_g} g</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default RecipeCard;
