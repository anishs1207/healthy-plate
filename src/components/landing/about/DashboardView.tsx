'use client';

import React from 'react';
import { Eye } from 'lucide-react';

const DashboardPreview: React.FC = () => {
    return (
        <section className="bg-gradient-to-br from-green-800 to-green-600 py-28 px-6 text-white relative overflow-hidden">
            {/* Background sparkles (optional) */}
            <div className="absolute inset-0 pointer-events-none opacity-10 bg-pattern z-0" />

            <div className="relative z-10 max-w-6xl mx-auto space-y-20">
                {/* Header */}
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 text-green-100 font-medium text-xs tracking-widest uppercase">
                        <Eye className="w-4 h-4" />
                        <span>See It In Action</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4">
                        A Peek Into Your Dashboard
                    </h2>
                    <p className="text-green-100 mt-4 max-w-2xl mx-auto text-lg">
                        Personalized, intuitive, and beautifully designed — the HeathlyPlate dashboard puts your health journey front and center.
                    </p>
                </div>

                {/* Dashboard Image Preview */}
                <div className="rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto ring-2 ring-white/10">
                    <img
                        src="/images/dashboard-preview.png" // <-- Replace with actual dashboard screenshot
                        alt="Dashboard Preview"
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Tagline / Callout */}
                <div className="text-center">
                    <p className="text-lg text-green-100 italic">
                        Designed to feel like your personal health command center.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DashboardPreview;
