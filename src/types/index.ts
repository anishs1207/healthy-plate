export interface Recipe {
  id: string;
  title: string;
  time: number;
  description: string;
  calories_kcal: number;
  protein_g: number;
  ingredients: string[];
  mealType: 'Breakfast' | 'Lunch' | 'Dinner'
  steps?: string[];
  skillLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  cuisine: string[];
  keywords: string[];
  favourite: Boolean;
}
  
  export interface DayMeals {
    date: string;
    breakfast?: Recipe;
    lunch?: Recipe;
    dinner?: Recipe;
  }
  
  export interface MonthData {
    month: number;
    year: number;
    days: DayMeals[];
  }
  
  export interface UserPreferences {
    name?: string;
    age: number;
    goal: string;
    calorieRequirement: number;
    proteinRequirement: number;
    weight: number;
    dietaryPreferences: string[];
    allergies: string[];
    height: number;
    workoutCommitment: number;
    preferredCuisines: string[];
    activityLevel: string;
  }
  
  export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    subscription: {
      tier: 'free' | 'premium' | 'pro';
      validUntil: string;
      features: string[];
    };
    preferences: UserPreferences;
    dailyProgress: {
      calories: number;
      protein: number;
      carbs: number;
      fat: number;
      water: number;
    };
  }
  
  export interface SubscriptionTier {
    id: 'free' | 'premium' | 'pro';
    name: string;
    price: number;
    features: string[];
    recommended?: boolean;
  }
  
  export interface Theme {
    isDark: boolean;
    toggle: () => void;
  }