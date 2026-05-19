'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "How does HealthyPlate generate recipes?",
        answer:
            "HealthyPlate uses advanced AI algorithms to personalize recipes based on your dietary preferences, allergies, and available ingredients.",
    },
    {
        question: "Is HealthyPlate free to use?",
        answer:
            "Yes, HealthyPlate offers a free plan with core features. You can upgrade to access premium features like advanced meal planning and expert chat.",
    },
    {
        question: "Can I track my nutrition with HealthyPlate?",
        answer:
            "Absolutely! HealthyPlate provides detailed nutrition insights and tracks your daily intake based on the meals you create or log.",
    },
    {
        question: "Does HealthyPlate support different diets?",
        answer:
            "Yes, whether you're vegan, keto, gluten-free, or on any other diet, HeathlyPlates adjusts its suggestions to match your needs.",
    },
];

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-green-50 py-24 px-4 text-green-900">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-center text-4xl font-extrabold text-green-800 mb-12">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-5">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="cursor-pointer rounded-xl border border-green-100 bg-white shadow-md transition-shadow hover:shadow-lg"
                            >
                                <button
                                    onClick={() => toggle(index)}
                                    className="cursor-pointer w-full flex justify-between items-center text-left px-6 py-5 text-lg font-medium text-green-900 transition-colors duration-200 hover:bg-green-100 rounded-t-xl"
                                >
                                    <span>{faq.question}</span>
                                    <ChevronDown
                                        className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                <div
                                    className={`px-6 text-green-700 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[200px] py-4' : 'max-h-0 py-0'
                                        }`}
                                    style={{ lineHeight: '1.6' }}
                                >
                                    {faq.answer}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
