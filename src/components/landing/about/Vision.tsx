'use client';

import React from 'react';
import {
    UtensilsCrossed,
    HeartPulse,
    Users,
} from 'lucide-react';

const VisionAndPillars: React.FC = () => {
    return (
        <section className="bg-green-50 text-gray-900 py-28 px-6 sm:px-10">
            <div className="max-w-7xl mx-auto space-y-24">
                {/* Section Header */}
                <div className="text-center space-y-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-green-800 leading-tight mt-0">
                        Empowering Healthy Living with AI
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-0">
                        We blend culinary creativity with intelligent technology to help people eat better,
                        live healthier, and thrive together — one personalized plate at a time.
                    </p>
                </div>

                {/* Core Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-0">
                    {[
                        {
                            icon: <UtensilsCrossed className="w-6 h-6" />,
                            title: 'AI-Powered Recipes',
                            desc: 'Custom meal plans generated from your dietary needs and lifestyle goals — backed by powerful AI.',
                        },
                        {
                            icon: <HeartPulse className="w-6 h-6" />,
                            title: 'Nutrition First',
                            desc: 'All meals are nutritionally optimized for balance, vitality, and transparency in what you eat.',
                        },
                        {
                            icon: <Users className="w-6 h-6" />,
                            title: 'Community Driven',
                            desc: 'A supportive community of food lovers sharing tips, inspiration, and growth together.',
                        },
                        {
                            icon: <UtensilsCrossed className="w-6 h-6" />,
                            title: 'AI-Powered Recipes',
                            desc: 'Custom meal plans generated from your dietary needs and lifestyle goals — backed by powerful AI.',
                        },
                        {
                            icon: <HeartPulse className="w-6 h-6" />,
                            title: 'Nutrition First',
                            desc: 'All meals are nutritionally optimized for balance, vitality, and transparency in what you eat.',
                        },
                        {
                            icon: <Users className="w-6 h-6" />,
                            title: 'Community Driven',
                            desc: 'A supportive community of food lovers sharing tips, inspiration, and growth together.',
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all p-6"
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-700 mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-green-800 mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VisionAndPillars;
