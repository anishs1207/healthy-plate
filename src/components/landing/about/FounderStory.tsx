'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';
import anish from "@/../public/anish.png";

const FoundersNote: React.FC = () => {
    return (
        <section className="relative bg-gradient-to-br from-green-900 to-green-600 text-white py-28 px-6 overflow-hidden">
            {/* Background pattern overlay (optional) */}
            <div className="absolute inset-0 bg-pattern opacity-10 pointer-events-none z-0" />

            <div className="relative z-10 max-w-6xl mx-auto space-y-20">
                {/* Header */}
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 text-green-100 font-medium text-xs tracking-widest uppercase">
                        <Sparkles className="w-4 h-4" />
                        <span>Letter from the Founder</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 ">
                        Why I Built HealthyPlate
                    </h2>
                </div>

                {/* Story Card */}
                <div className="bg-white text-green-900 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
                    <div className="flex flex-col md:flex-row gap-10 items-center p-8 md:p-12">
                        {/* Founder Image */}
                        <div className="w-full md:w-1/3">
                            <img
                                src={anish.src}
                                alt="Founder photo"
                                className="rounded-2xl w-full h-full object-cover shadow-md"
                            />
                        </div>

                        {/* Story Content */}
                        <div className="w-full md:w-2/3 space-y-6">
                            <p className="text-lg md:text-xl leading-relaxed text-green-800">
                                A few years ago, I was working 12-hour days, living off takeout, and constantly feeling drained. I wasn’t lazy — I just didn’t have the time or headspace to plan healthy meals. Every “healthy eating app” felt too robotic or too complicated. I just wanted food that made sense for *me* — my schedule, my body, my fridge.
                            </p>

                            <p className="text-lg md:text-xl leading-relaxed text-green-800">
                                That’s when I started building what would become HeathlyPlate — an AI-powered platform that doesn’t just generate recipes, but actually *gets* your life. Whether you're a student surviving off leftovers or a parent juggling 5 schedules, HeathlyPlate helps you eat smarter, feel better, and enjoy food again.
                            </p>

                            <p className="text-lg md:text-xl leading-relaxed text-green-800">
                                This isn’t just tech. It’s a tool for freedom. And I hope it helps you as much as it’s helped me.
                            </p>

                            {/* Signature */}
                            <div className="mt-8">
                                <p className="font-semibold text-green-900 text-base">— Anish Sabharwal</p>
                                <p className="text-sm text-green-700 italic">Founder & Food Lover</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoundersNote;
