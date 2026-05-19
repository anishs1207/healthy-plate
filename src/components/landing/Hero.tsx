import React from 'react';
import Link from "next/link";
import { Sparkles, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-800 to-green-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left Side: Text */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Create Delicious, Healthy Recipes with AI
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-green-100 max-w-xl mx-auto md:mx-0">
              Personalized recipes, nutrition coaching, and meal planning all in one place.
              Start your health journey today!
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/dashboard"
                className="px-6 py-3 bg-white text-green-800 rounded-full font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center"
              >
                Start Creating Recipes <Sparkles className="ml-2 h-5 w-5" />
              </Link>

            </div>
          </div>

          {/* Right Side: Image + Review Box */}
          <div className="relative block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-300 w-full max-w-md mx-auto">
              <img
                src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg"
                alt="Delicious healthy recipe"
                className="w-full h-auto rounded-2xl aspect-[4/3] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-[-1rem] bg-white rounded-lg shadow-lg p-4 transform -rotate-3 hover:rotate-0 transition-all duration-300">
              <div className="flex items-center justify-center gap-1">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} className="text-yellow-500 h-5 w-5" />
                ))}
              </div>
              <p className="text-green-800 font-medium text-center">Loved by 10,000+ users</p>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-green-50 to-transparent"></div>
    </section>
  );
};

export default Hero;
