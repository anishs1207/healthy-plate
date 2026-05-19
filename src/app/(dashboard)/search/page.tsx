'use client';

import React, { useEffect, useState } from 'react';
import { Recipe } from '@/types';
import RecipeCard from '@/components/dashboard/search/RecipeCard';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const RecipeCardSkeleton = () => (
  <div className="animate-pulse p-4 border rounded-lg shadow bg-gray-100 dark:bg-gray-700 h-64 space-y-4">
    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
    <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
    <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
    <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
    <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
  </div>
);

const SearchRecipe: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const PAGE_SIZE = 6;

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace('/');
    }
  }, [status, router]);

  const fetchRecipes = React.useCallback(async (page: number, search = '') => {
    setIsLoading(true);
    setRecipes([]);

    try {
      const res = await axios.get(`/api/recipes`, {
        params: {
          page,
          limit: PAGE_SIZE,
          search,
          userId: session?.user?.id
        },
      });

      // Slight timeout to ensure smooth skeleton appearance
      setTimeout(() => {
        setRecipes(res.data.recipes);
        setTotalPages(res.data.totalPages || 1);
        setIsLoading(false);
      }, 100);
    } catch (err) {
      console.error('Failed to fetch recipes:', err);
      setIsLoading(false);
    }
  }, [session?.user?.id]);

  useEffect(() => {
    fetchRecipes(currentPage, searchTerm);
  }, [currentPage, searchTerm, fetchRecipes]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-700 text-lg">Checking authentication...</p>
      </div>
    );
  }

  const handleFavoriteToggle = async (recipeId: string, currentStatus: boolean) => {
    try {
      await axios.post('/api/toggle-favourite', {
        recipeId,
        favourite: !currentStatus,
      });

      setRecipes(prev =>
        prev.map(r => (r.id === recipeId ? { ...r, favourite: !currentStatus } : r))
      );
    } catch (err) {
      console.error('Failed to toggle favorite:', err);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Search Recipes</h2>

      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search by recipe name..."
        className="w-full p-3 rounded-lg border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-blue-500 transition-all ease-in-out duration-300"
      />

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {Array.from({ length: PAGE_SIZE }).map((_, i) => (
            <RecipeCardSkeleton key={i} />
          ))}
        </div>
      ) : recipes.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-300">No recipes found.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {recipes.map((recipe) => (
              <div key={recipe.id} className="transform transition-transform duration-500 hover:scale-105">
                <RecipeCard
                  recipe={recipe}
                  onFavoriteToggle={() => handleFavoriteToggle(recipe.id, !!recipe.favourite)}
                />
              </div>
            ))}
          </div>

          {/* Pagination controls */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-4 py-2  bg-blue-500 text-white rounded disabled:opacity-50 cursor-pointer"
            >
              Previous
            </button>
            <span className="text-gray-700 dark:text-gray-300">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 cursor-pointer"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchRecipe;
