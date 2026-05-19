'use client';

import React from 'react';
import { NutritionCoach } from "@/components/dashboard/chat/NutritionCoach";

const Chat: React.FC = () => {
  return (
    <div className="space-y-3">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-0">Nutrition Coach</h1>
      </div>
      <NutritionCoach />
    </div>
  );
};

export default Chat;