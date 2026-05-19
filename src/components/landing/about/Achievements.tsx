'use client';

import React from 'react';
import { Trophy, HeartPulse, Users, Flame, Sparkles } from 'lucide-react';

const achievements = [
    {
        icon: <Trophy className="w-8 h-8 text-green-700" />,
        title: '150K+ Recipes Generated',
        description: 'Helping users cook smarter with AI-curated, personalized recipes that fit any lifestyle.',
    },
    {
        icon: <HeartPulse className="w-8 h-8 text-green-700" />,
        title: '1.2M+ Calories Tracked',
        description: 'Empowering healthier choices with smart nutrition tracking for real results.',
    },
    {
        icon: <Users className="w-8 h-8 text-green-700" />,
        title: '87% User Satisfaction',
        description: 'A consistently high rating from users who trust HeathlyPlate to improve their eating habits.',
    },
    {
        icon: <Flame className="w-8 h-8 text-green-700" />,
        title: 'Thousands of Habits Changed',
        description: 'From late-night snacking to balanced planning, users are seeing real lifestyle transformations.',
    },
];

const Achievements: React.FC = () => {
    return (
        <section className="relative bg-gradient-to-br from-green-900 to-green-600 text-white py-28 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto space-y-16 text-center">
                {/* Header */}
                <div>
                    <div className="inline-flex items-center gap- font-medium text-xs tracking-widest uppercase">
                        <Sparkles className="w-4 h-4" />
                        <span>Milestones</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold  mt-4">
                        What We've Achieved Together
                    </h2>
                </div>

                {/* Achievements Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
                    {achievements.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition-all space-y-4"
                        >
                            <div>{item.icon}</div>
                            <h3 className="text-xl font-semibold text-green-800">{item.title}</h3>
                            <p className="text-green-700 text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
