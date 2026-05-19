'use client';

import React, { useState } from 'react';
import PriceCard from "@/components/landing/pricing/PriceCard";

const plans = [
  {
    name: 'Free',
    description: 'Perfect for occasional cooking inspiration',
    price: { monthly: 0, annual: 0 },
    features: [
      '5 AI recipe generations per month',
      'Basic dietary preferences',
      'Save up to 10 recipes',
      'Email support',
    ],
    limitations: [
      'No advanced customization',
      'No meal planning',
      'Limited recipe variations',
    ],
    buttonText: 'Get Started',
    buttonVariant: 'outline',
    highlight: false,
  },
  {
    name: 'Pro',
    description: 'For home cooks who want more personalization',
    price: { monthly: 9.99, annual: 7.99 },
    features: [
      '30 AI recipe generations per month',
      'Advanced dietary preferences & restrictions',
      'Save unlimited recipes',
      'Recipe scaling & customization',
      'Ingredient substitutions',
      'Priority email support',
    ],
    limitations: ['Limited meal planning'],
    buttonText: 'Subscribe Now',
    buttonVariant: 'default',
    highlight: true,
  },
  {
    name: 'Premium',
    description: 'Complete culinary assistant for serious cooks',
    price: { monthly: 19.99, annual: 16.99 },
    features: [
      'Unlimited AI recipe generations',
      'Full personalization & customization',
      'Save & organize unlimited recipes',
      'Advanced meal planning',
      'Nutritional analysis',
      'Shopping list generation',
      'Priority phone & email support',
      'Early access to new features',
    ],
    limitations: [],
    buttonText: 'Subscribe Now',
    buttonVariant: 'secondary',
    highlight: false,
  },
  {
    name: 'Credit Booster Pack (1000)',
    description: 'Complete culinary assistant for serious cooks',
    price: { monthly: 19.99, annual: 16.99 },
    features: [
      'Unlimited AI recipe generations',
      'Full personalization & customization',
      'Save & organize unlimited recipes',
      'Advanced meal planning',
      'Nutritional analysis',
      'Shopping list generation',
      'Priority phone & email support',
      'Early access to new features',
    ],
    limitations: [],
    buttonText: 'Subscribe Now',
    buttonVariant: 'secondary',
    highlight: false,
  },
  {
    name: 'Credits Pro Pack (10,000)',
    description: 'Complete culinary assistant for serious cooks',
    price: { monthly: 19.99, annual: 16.99 },
    features: [
      'Unlimited AI recipe generations',
      'Full personalization & customization',
      'Save & organize unlimited recipes',
      'Advanced meal planning',
      'Nutritional analysis',
      'Shopping list generation',
      'Priority phone & email support',
      'Early access to new features',
    ],
    limitations: [],
    buttonText: 'Subscribe Now',
    buttonVariant: 'secondary',
    highlight: false,
  },
];

const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <h2 className="text-4xl font-bold text-green-900 mt-10">Pricing Plans</h2>
        <p className="text-green-700 max-w-2xl mx-auto">
          Whether you're just starting or you're a seasoned home chef, we’ve got a plan for you.
        </p>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center space-x-4 mt-6">
          <span className={`text-lg ${isAnnual ? 'text-gray-500' : 'text-green-900 font-semibold'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative rounded-full w-14 h-7 bg-green-500 transition-colors focus:outline-none focus:ring-2 "
          >
            <span className="sr-only">Toggle billing frequency</span>
            <span
              className={`absolute left-0.5 top-0.5 bg-white w-6 h-6 rounded-full transition-transform ${isAnnual ? 'translate-x-7' : 'translate-x-0'
                }`}
            />
          </button>
          <span className={`text-lg ${isAnnual ? 'text-green-900 font-semibold' : 'text-gray-500'}`}>
            Annual{' '}
            <span className="text-green-600 font-medium">
              Save 20%
            </span>
          </span>
        </div>

        {/* Price Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:grid=cols-3 mt-12">
          {plans.map((plan) => (
            <PriceCard
              key={plan.name}
              name={plan.name}
              description={plan.description}
              price={isAnnual ? plan.price.annual : plan.price.monthly}
              billingType={isAnnual ? 'annual' : 'monthly'}
              features={plan.features}
              limitations={plan.limitations}
              highlight={plan.highlight}
              buttonText={plan.buttonText}
              buttonVariant={plan.buttonVariant as any}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
