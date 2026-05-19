'use client';

import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface PriceCardProps {
    name: string;
    description: string;
    price: number;
    billingType: 'monthly' | 'annual';
    features: string[];
    limitations?: string[];
    highlight?: boolean;
    buttonText: string;
    buttonVariant?: 'default' | 'outline' | 'secondary';
}

const PriceCard: React.FC<PriceCardProps> = ({
    name,
    description,
    price,
    billingType,
    features,
    limitations = [],
    highlight = false,
    buttonText,
    buttonVariant = 'default',
}) => {
    return (
        <Card
            className={`flex flex-col flex-1 bg-green-900 text-white shadow-md border-0 ${highlight ? 'ring-2 shadow-xl' : ''
                }`}
        >
            {highlight && (
                <div className="bg-white text-green-700 text-center py-1 text-sm font-semibold tracking-wide rounded-t-xl">
                    Most Popular
                </div>
            )}

            <div className="px-6 py-8 flex-1">
                <h3 className="text-3xl font-bold">{name}</h3>
                <p className="mt-2 text-green-100">{description}</p>

                <div className="mt-6 flex items-baseline">
                    <span className="text-5xl font-extrabold">${price}</span>
                    <span className="ml-1 text-xl font-medium text-green-200">/month</span>
                </div>

                {billingType === 'annual' && price > 0 && (
                    <p className="mt-1 text-sm text-green-100 opacity-90">
                        Billed annually ${(price * 12).toFixed(2)}/year
                    </p>
                )}

                <ul className="mt-8 space-y-4">
                    {features.map((feature) => (
                        <li key={feature} className="flex items-start">
                            <Check className="h-5 w-5 text-white" />
                            <span className="ml-3">{feature}</span>
                        </li>
                    ))}

                    {limitations.map((limitation) => (
                        <li key={limitation} className="flex items-start opacity-70">
                            <X className="h-5 w-5 text-green-200" />
                            <span className="ml-3">{limitation}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="px-6 pb-8 pt-2">
                <Button
                    variant={buttonVariant}
                    className={`w-full py-3 font-semibold text-green-900 bg-white hover:bg-green-100 transition
                        }`}
                >
                    {buttonText}
                </Button>
            </div>
        </Card>
    );
};

export default PriceCard;
