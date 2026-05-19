'use client';

import React from 'react';
import FeatureCard from './FeatureCard';
import {
    Sparkles,
    MessageCircle,
    Salad,
    Calendar,
    BarChart3,
    Star,
} from 'lucide-react';

const Features: React.FC = () => {
    return (
        <section className="py-20 bg-green-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                        Everything You Need in One Place
                    </h2>
                    <p className="text-lg text-green-700 max-w-3xl mx-auto">
                        Our comprehensive platform combines AI-powered recipe creation with nutrition tracking and expert coaching.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <FeatureCard
                        title="AI Recipe Creation"
                        description="Create personalized recipes based on your dietary preferences, available ingredients, and nutritional goals."
                        href="/create"
                        Icon={Sparkles}
                    />
                    <FeatureCard
                        title="Nutrition Coach Chat"
                        description="Get personalized nutrition advice and meal suggestions from our AI-powered nutrition coach."
                        href="/nutrition-coach"
                        Icon={MessageCircle}
                    />
                    <FeatureCard
                        title="Ingredient Tracking"
                        description="Keep track of your ingredients, create shopping lists, and reduce food waste with smart suggestions."
                        href="/ingredients"
                        Icon={Salad}
                    />
                    <FeatureCard
                        title="Meal Planning"
                        description="Plan your meals for the week with our intuitive calendar interface and automatic shopping list generation."
                        href="/recipes"
                        Icon={Calendar}
                    />
                    <FeatureCard
                        title="Nutrition Analysis"
                        description="Get detailed nutritional information for all your recipes and track your daily nutrient intake."
                        href="/nutrition-coach"
                        Icon={BarChart3}
                    />
                    <FeatureCard
                        title="Recipe Collection"
                        description="Save and organize your favorite recipes in a personalized digital cookbook accessible anytime."
                        href="/recipes"
                        Icon={Star}
                    />
                </div>
            </div>
        </section>
    );
};

export default Features;
