'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
    title: string;
    description: string;
    href: string;
    Icon: LucideIcon;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, Icon }) => {
    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">{title}</h3>
                <p className="text-green-700">{description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;
