'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const FeatureCard: React.FC = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-green-800 to-green-600 text-white relative overflow-hidden">
            {/* Pattern overlay */}
            <div className="absolute inset-0 bg-pattern opacity-10 pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="text-center lg:text-left space-y-6">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                            Ready to Transform Your Cooking?
                        </h2>
                        <p className="text-lg sm:text-xl text-green-100 max-w-xl mx-auto lg:mx-0">
                            Join thousands of food enthusiasts who have revolutionized their meals with personalized recipes and intelligent nutrition tools.
                        </p>
                        <Link
                            href="/create"
                            className="inline-flex items-center justify-center bg-white text-green-800 hover:bg-green-50 px-6 py-3 rounded-full text-base sm:text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                        >
                            Get Started Today <ChevronRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>

                    {/* Video Embed */}
                    <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="HealthyPlate Demo"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-green-100/10 to-transparent"></div>
        </section>
    );
};

export default FeatureCard;
