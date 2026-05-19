import React, { useEffect, useState } from 'react';
import { UserPreferences } from '@/types';
import { NavLink } from './NavLink';
import {
  Home,
  Calendar,
  Sparkles,
  Search,
  ShoppingCart,
  MessageSquare,
  SlidersHorizontal,
  CircleDollarSign,
  Crown,
} from 'lucide-react';
import { UserMenu } from './UserMenu';
import logo from "@/../public/logo.png";
import Image from 'next/image';
import axios from "axios";
import Link from "next/link";
import { toast } from "sonner";

interface NavbarProps {
  closeMenu?: () => void;
  userId?: string;
}

function formatEnumString(value: string): string {
  return value
    .toLowerCase()
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const Navbar: React.FC<NavbarProps> = ({ closeMenu, userId }) => {
  const badges: Record<string, string> = {
    free: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200',
    premium: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white',
    pro: 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
  };
  const [credits, _setCredits] = useState<number>(0);
  const [_plan, _setPlan] = useState("FREE");
  const [userPreferences, setUserPreferences] = useState<UserPreferences | null>(null);

  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL as string;

  useEffect(() => {
    const fetchUserPreferences = async () => {
      try {

        const response = await axios.get(`${BACKEND_URL}/preferences`, {
          headers: {
            'user-id': userId,
          },
        });
        const prefs = response.data;
        setUserPreferences(prefs);
      } catch (err) {
        toast.error('Failed to load preferences.');
        console.error('Error fetching preferences:', err);
      }
    };

    if (userId) {
      fetchUserPreferences();

    }
  }, [userId, BACKEND_URL]);

  const prefs = userPreferences || {} as UserPreferences;

  const prompt = `
<core_identity>\n\
You are a highly experienced and respected Nutrition Coach with over 25 years of hands-on practice in the field of dietetics, nutrition science, and behavior change. You've worked with thousands of individuals across all age groups, fitness levels, and health goals — from athletes and working professionals to students and busy parents.\n\
\n\
You specialize in creating personalized, sustainable, and evidence-based nutrition strategies that help people achieve specific goals such as muscle gain, weight loss, improved energy, hormonal balance, and long-term health. You understand that nutrition is deeply personal and influenced by lifestyle, culture, preferences, and psychology.\n\
\n\
You are empathetic yet results-driven, scientific yet simple in communication. You translate complex nutritional information into clear, motivating, and actionable advice.\n\
</core_identity>\n\
\n\
<response_style>\n\
Your tone should be supportive, empowering, and non-judgmental. Use simple, encouraging language while maintaining credibility and professionalism. Avoid generic advice — personalize everything based on the user's context and goals.\n\
Do not use special symbols like **, /, *, |, etc. Just answer in plain text.\n\
Make the response short (NOT MORE THAN 50 words) & interactive.\n\
</response_style>\n\
\n\
<user_context>\n\
The user has provided the following data, questions, or goals. Your task is to analyze it, provide relevant insights, and offer a clear next step they can take to improve their nutrition or make progress toward their goal.\n\
</user_context>\n\
\n\
<user_preferences>\n\
${prefs.name ? `Name: ${prefs.name}\n` : ''}\
${prefs.age > 0 ? `Age: ${prefs.age}\n` : ''}\
${prefs.height > 0 ? `Height: ${prefs.height} cm\n` : ''}\
${prefs.weight > 0 ? `Weight: ${prefs.weight} kg\n` : ''}\
${prefs.goal ? `Goal: ${formatEnumString(prefs.goal)}\n` : ''}\
${prefs.activityLevel ? `Activity Level: ${formatEnumString(prefs.activityLevel)}\n` : ''}\
${prefs.calorieRequirement > 0 ? `Calorie Requirement: ${prefs.calorieRequirement} kcal\n` : ''}\
${prefs.proteinRequirement > 0 ? `Protein Requirement: ${prefs.proteinRequirement} g\n` : ''}\
${prefs.workoutCommitment > 0 ? `Workout Days per Week: ${prefs.workoutCommitment}\n` : ''}\
${prefs.dietaryPreferences?.length ? `Dietary Preferences: ${prefs.dietaryPreferences.join(', ')}\n` : ''}\
${prefs.preferredCuisines?.length ? `Preferred Cuisines: ${prefs.preferredCuisines.join(', ')}\n` : ''}\
${prefs.allergies?.length ? `Allergies: ${prefs.allergies.join(', ')}\n` : ''}\
</user_preferences>

<additional-ask>
You can write additional stuff to ask here from the chatbot....

<additonal-ask>
`;

  const encodedPrompt = encodeURIComponent(prompt);

  return (
    <div className="h-full flex flex-col bg-white dark:bg-gray-900">
      <div className="flex items-center justify-between p-6 border-b dark:border-gray-800">
        <div className="flex items-center gap-2">
          <div className=" text-white p-2 rounded-lg">
            <Image
              src={logo}
              alt="HealthyPlate Logo"
              height={50}
              width={50}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-gray-800 dark:text-white">HealthyPlate</span>
            <div className="flex items-center gap-3 mt-1">
              {/* Credits Badge */}
              <div className="flex items-center gap-1 px-2 py-1 rounded-full  text-yellow-400 font-semibold text-sm">
                <CircleDollarSign size={16} className="text-yellow-400" />
                <span>{credits}</span>
              </div>

              {/* Buy More Button */}
              <Link
                href="/pricing"
                className="px-3 py-1.5 rounded-full  font-semibold text-black text-sm hover:bg-gray-100 transition-all shadow-sm"
              >
                Get More Credits
              </Link>
            </div>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-6 px-4">
        <div className="space-y-1">
          <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Dashboard
          </p>

          <NavLink to="/dashboard" icon={<Home size={20} />} onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/calendar" icon={<Calendar size={20} />} onClick={closeMenu}>
            Meal Calendar
          </NavLink>

          <NavLink to="/generate" icon={<Sparkles size={20} />} onClick={closeMenu}>
            Generate Recipe
          </NavLink>

          <NavLink
            to={userPreferences ? `https://chat.openai.com/?prompt=${encodedPrompt}` : '#'}
            icon={<MessageSquare size={20} />}
            onClick={closeMenu}
          // className={!userPreferences ? 'opacity-50 cursor-not-allowed' : ''}
          >
            {userPreferences ? 'Nutrition Coach' : 'Loading...'}
          </NavLink>


        </div>

        <div className="mt-8 space-y-1">
          <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Collections
          </p>
          <NavLink to="/search" icon={<Search size={20} />} onClick={closeMenu}>
            Search Recipes
          </NavLink>

          <NavLink to="/shopping-list" icon={<ShoppingCart size={20} />} onClick={closeMenu}>
            Shopping List
          </NavLink>

          <NavLink to="/preferences" icon={<SlidersHorizontal size={20} />} onClick={closeMenu}>
            Preferences
          </NavLink>

        </div>
      </nav >

      <div className="p-4 border-t dark:border-gray-800">
        <div className="mt-1 px-3">
          <div className={`flex items-center justify-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${badges['pro']}`}>
            <Crown size={14} />
            Free
          </div>
        </div>
        <UserMenu />
      </div>
    </div >

  );
};

export default Navbar;