"use client";

import React, { useState, useEffect } from 'react';
import { Check, Plus, ShoppingCart, Trash2, Loader2 } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface ShoppingItem {
  id: string;
  name: string;
  completed: boolean;
  category: 'produce' | 'protein' | 'dairy' | 'pantry' | 'other';
  mealTag: string;
  dayTag: string;
}

interface PersonalListItem {
  id: string;
  ingrediantName: string;
  tags: string;
  mealType: string;
  completed: boolean;
  userId: string;
  date: Date;
}

const SkeletonItem = () => (
  <div className="animate-pulse flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded shadow-sm">
    <div className="flex items-center gap-3">
      <div className="rounded-full bg-gray-300 dark:bg-gray-700 h-5 w-5" />
      <div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-32 mb-1"></div>
        <div className="flex gap-2">
          <div className="h-3 w-16 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
          <div className="h-3 w-20 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
        </div>
      </div>
    </div>
    <div className="h-5 w-5 bg-gray-300 dark:bg-gray-700 rounded"></div>
  </div>
);

const ShoppingList: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [generatedShoppingItems, setGeneratedShoppingItems] = useState<ShoppingItem[]>([]);
  const [personalListItems, setPersonalListItems] = useState<PersonalListItem[]>([]);
  const [newIngredientName, setNewIngredientName] = useState('');
  const [newMealType, setNewMealType] = useState<'Breakfast' | 'Lunch' | 'Dinner' | ''>('');
  const [newDayTag, setNewDayTag] = useState<'Today' | 'Tomorrow' | ''>('');
  const [filter, _setFilter] = useState<'Personal'>('Personal');
  const [loadingPersonalList, setLoadingPersonalList] = useState(false);
  const [addingItem, setAddingItem] = useState(false);
  const [deletingItemId, setDeletingItemId] = useState<string | null>(null);
  const [togglingItemId, setTogglingItemId] = useState<string | null>(null);
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || '';

  useEffect(() => {
    if (status === 'loading') return;

    if (status === 'unauthenticated') {
      router.replace('/');
      return;
    }

  }, [status, session, router]);

  const getPersonalListItems = React.useCallback(async () => {
    setLoadingPersonalList(true);
    try {
      const userId = session?.user?.id;

      if (!userId) {
        console.warn("userId not ready yet");
        return;
      }

      const response = await axios.get(`${BACKEND_URL}/personal-list`, {
        headers: { "user-id": userId }
      });

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const updatedItems = response.data.map((item: PersonalListItem) => {
        const itemDate = new Date(item.date);
        itemDate.setHours(0, 0, 0, 0);

        const diffDays = Math.floor((today.getTime() - itemDate.getTime()) / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
          if (item.tags === 'TODAY') item.tags = 'OLD';
          else if (item.tags === 'TOMORROW') item.tags = 'TODAY';
        } else if (diffDays >= 2) {
          if (item.tags === 'TODAY' || item.tags === 'TOMORROW') item.tags = 'OLD';
        }

        return item;
      });

      setPersonalListItems(updatedItems);
    } catch (error) {
      toast.error(`Failed to fetch personal list: ${(error as Error).message}`);
    } finally {
      setLoadingPersonalList(false);
    }
  }, [session?.user?.id, BACKEND_URL]);

  useEffect(() => {
    if (filter === 'Personal') getPersonalListItems();
  }, [filter, getPersonalListItems]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-700 text-lg">Checking authentication...</p>
      </div>
    );
  }



  const addPersonalListItem = async () => {
    if (!newIngredientName || !newMealType || !newDayTag) return toast.error("Fill all fields");
    setAddingItem(true);
    try {

      const response = await axios.post(`${BACKEND_URL}/personal-list`, {
        ingredientName: newIngredientName,
        meal: newMealType,
        tags: newDayTag,
      }, { headers: { "user-id": session?.user?.id } });
      setPersonalListItems(prev => [...prev, response.data]);
    } catch {
      toast.error("Failed to add item");
    } finally {
      setAddingItem(false);
      setNewIngredientName('');
      setNewMealType('');
      setNewDayTag('');
    }
  };

  const togglePersonalListItemCompleted = async (item: PersonalListItem) => {
    setTogglingItemId(item.id);
    setPersonalListItems(prev =>
      prev.map(i => i.id === item.id ? { ...i, completed: !i.completed } : i)
    );

    try {
      await axios.patch(`${BACKEND_URL}/personal-list`, { completed: !item.completed }, {
        headers: {
          "user-id": session?.user?.id,
          "item-id": item.id,
        }
      });
      toast.success("Item Toggled Successfully");

    } catch {
      // Revert if failed
      toast.error("Failed to toggle item");
      setPersonalListItems(prev =>
        prev.map(i => i.id === item.id ? { ...i, completed: item.completed } : i)
      );
    } finally {
      setTogglingItemId(null);
    }
  };


  const deletePersonalListItem = async (id: string) => {
    setDeletingItemId(id);
    try {
      await axios.delete(`${BACKEND_URL}/personal-list`, {
        headers: { "user-id": session?.user?.id, "item-id": id }
      });
      setPersonalListItems(prev => prev.filter(item => item.id !== id));
    } catch {
      toast.error("Delete failed");
    } finally {
      setDeletingItemId(null);
    }
  };

  const addGeneratedItem = () => {
    if (!newIngredientName || !newMealType || !newDayTag) return;
    setGeneratedShoppingItems(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        name: newIngredientName,
        completed: false,
        category: 'other',
        mealTag: newMealType,
        dayTag: newDayTag
      }
    ]);
    setNewIngredientName('');
    setNewMealType('');
    setNewDayTag('');
  };

  const displayedItems =
    filter === 'Personal'
      ? personalListItems.map(item => ({
        id: item.id,
        name: item.ingrediantName,
        completed: item.completed,
        category: 'other',
        mealTag: item.mealType,
        dayTag: item.tags,
      }))
      : generatedShoppingItems.filter(item => item.dayTag === filter);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
      <div className="flex flex-col items-center gap-6 mb-6">
        <div className="flex items-center gap-3">
          <ShoppingCart size={28} className="text-emerald-500" />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Shopping List</h2>
        </div>
      </div>

      {filter == "Personal" &&
        <div className="flex flex-col gap-3 mb-6">
          <input
            value={newIngredientName}
            onChange={(e) => setNewIngredientName(e.target.value)}
            placeholder="Ingredient name"
            className="px-4 py-2 border rounded text-sm dark:bg-gray-800 dark:text-white"
          />
          <select
            value={newMealType}
            onChange={(e) => setNewMealType(e.target.value as 'Breakfast' | 'Lunch' | 'Dinner' | '')}
            className="px-4 py-2 border rounded text-sm dark:bg-gray-800 dark:text-white"
          >
            <option value="">Select Meal</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>
          <select
            value={newDayTag}
            onChange={(e) => setNewDayTag(e.target.value as 'Today' | 'Tomorrow' | '')}
            className="px-4 py-2 border rounded text-sm dark:bg-gray-800 dark:text-white"
          >
            <option value="">Select Day</option>
            <option value="Today">Today</option>
            <option value="Tomorrow">Tomorrow</option>
          </select>
          <button
            onClick={() => filter === 'Personal' ? addPersonalListItem() : addGeneratedItem()}
            className="cursor-pointer flex justify-center items-center bg-emerald-500 text-white py-2 rounded hover:bg-emerald-600 transition"
          >
            {addingItem ? <Loader2 className="animate-spin mr-2" size={16} /> : <Plus className="mr-2" size={16} />}
            {addingItem ? 'Adding...' : 'Add Item'}
          </button>
        </div>
      }

      <div className="space-y-4">
        {(filter === 'Personal' && loadingPersonalList) || (filter !== 'Personal' && generatedShoppingItems.length === 0) ? (
          [...Array(3)].map((_, i) => <SkeletonItem key={i} />)
        ) : displayedItems.length === 0 ? (
          <p className="text-center text-gray-500">No items to display.</p>
        ) : (
          displayedItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between px-4 py-3 bg-gray-100 rounded shadow-sm"
            >
              {filter === 'Personal' ? (
                <>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => togglePersonalListItemCompleted(item as unknown as PersonalListItem)}
                      disabled={togglingItemId === item.id}
                      className={`cursor-pointer w-5 h-5 flex items-center justify-center rounded-full border-2 ${item.completed
                        ? 'bg-emerald-500 border-emerald-500'
                        : 'border-gray-400'
                        }`}
                    >
                      {item.completed && <Check size={14} className="text-white" />}
                    </button>
                    <div>
                      <p
                        className={`text-sm font-medium ${item.completed
                          ? 'line-through text-gray-400'
                          : 'dark:text-white'
                          }`}
                      >
                        {item.name}
                      </p>
                      <div className="flex gap-2 mt-1 text-xs font-medium">
                        <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                          {item.dayTag}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                          {item.mealTag}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => deletePersonalListItem(item.id)}
                    disabled={deletingItemId === item.id}
                    className="cursor-pointer text-gray-400 hover:text-red-500 transition"
                  >
                    {deletingItemId === item.id ? (
                      <Loader2 className="animate-spin" size={18} />
                    ) : (
                      <Trash2 size={18} />
                    )}
                  </button>
                </>
              ) : (
                <div className="flex flex-col">
                  <p className="text-sm font-medium dark:text-white">{item.name}</p>
                  <div className="mt-1 text-xs font-medium">
                    <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                      {item.mealTag}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>


    </div>
  );
};

export default ShoppingList;
