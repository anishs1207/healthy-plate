'use client';

import React, { useState } from 'react';
import RecipeGenerator from '@/components/dashboard/generate/RecipeGenerator';
import RecipeManual from '@/components/dashboard/generate/RecipeManual';

const Generate: React.FC = () => {
  const [mode, setMode] = useState<'AI' | 'Manual'>('AI');

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Recipe Generator</h1>
        <p className="text-gray-600"> Create personalized recipes with AI or add Manually</p>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setMode('AI')}
          className={`cursor-pointer py-2 px-4 rounded-md text-sm transition-colors capitalize ${mode === 'AI' ? 'bg-purple-100 text-purple-700' : 'bg-gray-200 text-gray-700'
            }`}
        >
          AI
        </button>
        <button
          onClick={() => setMode('Manual')}
          className={`cursor-pointer py-2 px-4 rounded-md text-sm transition-colors capitalize ${mode === 'Manual' ? 'bg-purple-100 text-purple-700' : 'bg-gray-200 text-gray-700'
            }`}
        >
          Manual
        </button>
      </div>

      <div className="flex justify-center w-full">
        {mode === 'AI' ? (
          <RecipeGenerator />
        ) : (
          <RecipeManual />
        )}
      </div>
    </div>
  );
};

export default Generate;
