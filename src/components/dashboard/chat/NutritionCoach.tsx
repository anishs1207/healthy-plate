'use client';

import React, { useState, useEffect } from 'react';
import { UserPreferences } from '@/types';
import axios from 'axios';
import { MessageSquare, Send } from 'lucide-react';
import { MessageList } from './MessageList';
import { prompt } from "./prompt";
import { toast } from "sonner";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'coach';
  timestamp: Date;
}

export const NutritionCoach: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL as string;

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your nutrition coach. How can I help you today?",
      sender: 'coach',
      timestamp: new Date(),
    },
  ]);
  const [showApiKey, setShowApiKey] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [_, setIsTyping] = useState(false);
  const [userPreferences, setUserPreferences] = useState<UserPreferences | null>(null);

  function formatEnumString(value: string): string {
    return value
      .toLowerCase()
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  useEffect(() => {
    const fetchUserPreferences = async () => {
      try {
        if (!session?.user?.id) return;

        const response = await axios.get(`${BACKEND_URL}/preferences`, {
          headers: {
            'user-id': session.user.id,
          },
        });
        const prefs = response.data;
        setUserPreferences(prefs);
      } catch (err) {
        toast.error('Failed to load preferences.');
        console.error('Error fetching preferences:', err);
      }
    };

    if (status === 'authenticated') {
      fetchUserPreferences();
    }
  }, [session, status, BACKEND_URL]);


  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace('/');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-700 text-lg">Checking authentication...</p>
      </div>
    );
  }

  const prefs = userPreferences || {} as UserPreferences;

  const bodyPreferences = `
<user_preferences>
${prefs.name ? `Name: ${prefs.name}` : ''}
${prefs.age > 0 ? `\nAge: ${prefs.age}` : ''}
${prefs.height > 0 ? `\nHeight: ${prefs.height} cm` : ''}
${prefs.weight > 0 ? `\nWeight: ${prefs.weight} kg` : ''}
${prefs.goal ? `\nGoal: ${formatEnumString(prefs.goal)}` : ''}
${prefs.activityLevel ? `\nActivity Level: ${formatEnumString(prefs.activityLevel)}` : ''}
${prefs.calorieRequirement > 0 ? `\nCalorie Requirement: ${prefs.calorieRequirement} kcal` : ''}
${prefs.proteinRequirement > 0 ? `\nProtein Requirement: ${prefs.proteinRequirement} g` : ''}
${prefs.workoutCommitment > 0 ? `\nWorkout Days per Week: ${prefs.workoutCommitment}` : ''}
${prefs.dietaryPreferences?.length ? `\nDietary Preferences: ${prefs.dietaryPreferences.join(', ')}` : ''}
${prefs.preferredCuisines?.length ? `\nPreferred Cuisines: ${prefs.preferredCuisines.join(', ')}` : ''}
${prefs.allergies?.length ? `\nAllergies: ${prefs.allergies.join(', ')}` : ''}
</user_preferences>
`.trim();

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    if (!apiKey.trim()) {
      toast.error("Please enter your Gemini API key.");
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
    const requestBody = {
      contents: [
        {
          parts: [
            {
              text: prompt + bodyPreferences + newMessage,
            },
          ],
        },
      ],
    };

    try {
      const response = await axios.post(url, requestBody, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const responseText =
        response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a response.";

      const words = responseText.split(' ');
      let i = 0;
      let coachText = '';

      setIsTyping(true);
      const interval = setInterval(() => {
        if (i < words.length) {
          coachText += words[i] + ' ';
          setMessages(prev => {
            if (
              prev.length &&
              prev[prev.length - 1].sender === 'coach' &&
              prev[prev.length - 1].id.startsWith('typing')
            ) {
              const newArr = [...prev];
              newArr[newArr.length - 1] = { ...newArr[newArr.length - 1], text: coachText };
              return newArr;
            } else {
              const typingId = `typing-${Date.now()}`;
              return [...prev, { id: typingId, text: coachText, sender: 'coach', timestamp: new Date() }];
            }
          });
          i++;
        } else {
          clearInterval(interval);
          setIsTyping(false);

          setMessages(prev => {
            if (
              prev.length &&
              prev[prev.length - 1].sender === 'coach' &&
              prev[prev.length - 1].id.startsWith('typing')
            ) {
              const newArr = [...prev];
              newArr[newArr.length - 1] = { ...newArr[newArr.length - 1], text: coachText };
              return newArr;
            } else {
              const typingId = `typing-${Date.now()}`;
              return [...prev, { id: typingId, text: coachText, sender: 'coach', timestamp: new Date() }];
            }
          });
        }
      }, 150);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error calling Gemini API:', error.response?.data || error.message);

        // Handle specific Gemini API key errors
        if (
          error.response?.status === 400 ||
          error.response?.status === 401 ||
          error.response?.data?.error?.code === 400 ||
          error.response?.data?.error?.code === 401
        ) {
        toast.error("Invalid or missing Gemini API key. Please check your key and try again.");
        } else {
          toast.error("Something went wrong. Please try again later.");
        }
      } else {
        console.error('Error calling Gemini API:', (error as Error).message);
        toast.error("Something went wrong. Please try again later.");
      }

      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          text: "Sorry, I couldn't connect to the server. Please try again later.",
          sender: 'coach',
          timestamp: new Date(),
        },
      ]);
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div className="p-4 border-b dark:border-gray-700">

        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-100 dark:bg-emerald-900 rounded-lg">
            <MessageSquare className="text-emerald-600 dark:text-emerald-400" size={24} />
          </div>
          <div>
            <h2 className="text-lg font-semibold dark:text-white">Nutrition Coach</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Get expert advice on your diet</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 mb-4 p-4">
        <label className="text-sm text-gray-700 dark:text-gray-300">Enter your Gemini API Key</label>
        <div className="relative">
          <input
            type={showApiKey ? "text" : "password"}
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Paste your Gemini API key here"
            className="w-full px-3 py-2 pr-10 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button
            type="button"
            onClick={() => setShowApiKey(!showApiKey)}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 text-sm text-emerald-600 hover:underline"
          >
            {showApiKey ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      <MessageList messages={messages} />

      <div className="p-4 border-t dark:border-gray-700">
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};







