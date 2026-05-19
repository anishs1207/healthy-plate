'use client';

import React from 'react';
import { Sparkles, Goal, HeartHandshake } from 'lucide-react';

const MissionSection: React.FC = () => {
    return (
        <section className="relative bg-gradient-to-br from-green-900 to-green-600 text-white overflow-hidden py-32">
            {/* Soft background pattern or overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-800/20 via-green-600/10 to-transparent opacity-50 pointer-events-none"></div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Icon */}
                <div className="flex justify-center mb-8">
                    <div className="bg-white text-green-800 p-4 rounded-full shadow-md shadow-green-400/30 animate-pulse">
                        <Goal className="h-8 w-8" />
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
                    Our Mission at HealthyPlate
                </h1>

                {/* Subtext */}
                <p className="text-lg md:text-xl max-w-3xl mx-auto text-green-100 leading-relaxed mb-10">
                    Empowering every individual — whether you're cooking for one or five — to make healthier food choices,
                    save time, and enjoy every bite through smart, personalized AI.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
                    <div className="flex items-center gap-2 bg-white text-green-800 px-6 py-3 rounded-full shadow-lg font-medium text-sm sm:text-base hover:scale-105 transition-transform">
                        <Sparkles className="h-5 w-5" />
                        Personalized AI for Real Life
                    </div>
                    <div className="flex items-center gap-2 bg-white text-green-800 px-6 py-3 rounded-full shadow-lg font-medium text-sm sm:text-base hover:scale-105 transition-transform">
                        <HeartHandshake className="h-5 w-5" />
                        Making Healthy Easy for Everyone
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionSection;
