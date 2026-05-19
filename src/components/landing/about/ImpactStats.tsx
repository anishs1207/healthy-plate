'use client';

import React, { useEffect, useRef, useState } from 'react';
import { BarChart3, Flame, Smile } from 'lucide-react';

const stats = [
    {
        icon: <BarChart3 className="w-6 h-6 text-green-700" />,
        label: 'Recipes Created',
        value: 150_000,
        suffix: '+',
    },
    {
        icon: <Flame className="w-6 h-6 text-green-700" />,
        label: 'Calories Tracked',
        value: 1_200_000,
        suffix: '+',
    },
    {
        icon: <Smile className="w-6 h-6 text-green-700" />,
        label: 'User Satisfaction',
        value: 87,
        suffix: '%',
    },
];

const formatNumber = (num: number) => {
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + 'M';
    if (num >= 1_000) return (num / 1_000).toFixed(1) + 'k';
    return num.toString();
};

const ImpactStats: React.FC = () => {
    const [counts, setCounts] = useState(stats.map(() => 0));
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            {
                threshold: 0.4, // Trigger when 40% of the component is visible
            }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [hasAnimated]);

    useEffect(() => {
        if (!hasAnimated) return;

        const interval = setInterval(() => {
            setCounts((prev) =>
                prev.map((count, i) => {
                    const target = stats[i].value;
                    const increment = target / 40;

                    return count < target ? Math.min(count + increment, target) : count;
                })
            );
        }, 50);

        return () => clearInterval(interval);
    }, [hasAnimated]);

    return (
        <section ref={sectionRef} className="bg-green-50 py-24 px-5">
            <div className="max-w-7xl mx-auto text-center space-y-14">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-green-800">Our Impact</h2>
                    <p className="text-green-700 max-w-xl mx-auto text-lg">
                        We’re more than an app — we’re a movement toward healthier living powered by data and real results.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl py-10 px-6 shadow-md hover:shadow-xl transition text-center space-y-4"
                        >
                            <div className="flex justify-center">{stat.icon}</div>
                            <h3 className="text-3xl font-bold text-green-800">
                                {formatNumber(Math.floor(counts[index]))}
                                {stat.suffix}
                            </h3>
                            <p className="text-green-700 text-lg">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactStats;
