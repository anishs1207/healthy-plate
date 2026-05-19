'use client';

import React from 'react';
import { Briefcase, Dumbbell, School, Heart, Leaf, Moon } from 'lucide-react';

const useCases = [
    {
        title: "9-to-5 Warriors",
        description: "You're balancing work, meetings, and deadlines. Let HeathlyPlate plan healthy meals so you don’t skip or UberEats again.",
        icon: <Briefcase className="h-6 w-6 text-green-700" />,
        image: "https://static.toiimg.com/photo/94250425.cms"
    },
    {
        title: "Gym Bros & Wellness Girls",
        description: "Protein? Carbs? We got the macros. Whether you're bulking or cutting, your plate’s got a new coach.",
        icon: <Dumbbell className="h-6 w-6 text-green-700" />,
        image: "https://miro.medium.com/v2/resize:fit:1400/1*-1D7YmRD8R0tprwZCsxjow.jpeg"
    },
    {
        title: "College Survivors",
        description: "You're broke. You're hungry. You have eggs and maybe 1 onion. We turn that into a gourmet moment.",
        icon: <School className="h-6 w-6 text-green-700" />,
        image: "https://www.usnews.com/object/image/00000156-94ac-d0b3-ad56-dced2bfc0000/160816-collegeroommates-stock.jpg?update-time=1471373194295&size=responsive640"
    },
    {
        title: "Sleep-Deprived Parents",
        description: "Between picky kids and 'what’s for dinner' chaos — we help feed the fam with less stress and more smiles.",
        icon: <Heart className="h-6 w-6 text-green-700" />,
        image: "https://kindercare.ca/wp-content/uploads/Picky-Eater.jpg"
    },
    {
        title: "Plant-Based People",
        description: "You're done explaining where your protein comes from. We just help you eat better — no labels needed.",
        icon: <Leaf className="h-6 w-6 text-green-700" />,
        image: "https://plantbasednews.org/app/uploads/2021/07/plant-based-news-vegan-food-highest-protein.jpg"
    },
    {
        title: "Midnight Hustlers",
        description: "Designing, editing, coding at 2AM? Here's how to snack smart without crashing or craving junk.",
        icon: <Moon className="h-6 w-6 text-green-700" />,
        image: "https://i.redd.it/is-2am-still-dinner-or-breakfast-or-simply-too-late-for-v0-jz8jlw2y9cla1.jpg?width=4032&format=pjpg&auto=webp&s=74721a7db19e807af8d47a65a5be5c9055ca11eb"
    },
];

const UseCasesSection: React.FC = () => {
    return (
        <section className="py-24 bg-green-700 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Who’s Actually Using HeathlyPlate?</h2>
                <p className="text-green-100 text-lg max-w-3xl mx-auto mb-12">
                    Built for real people — with messy lives, weird cravings, and not enough time.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {useCases.map((useCase, idx) => (
                        <div key={idx} className="bg-white rounded-xl shadow-xl overflow-hidden text-left hover:shadow-2xl transition-all group">
                            <div className="relative h-52 w-full">
                                <img
                                    src={useCase.image}
                                    alt={useCase.title}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-5 sm:p-6">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="bg-green-100 p-2 rounded-full">
                                        {useCase.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-green-800">{useCase.title}</h3>
                                </div>
                                <p className="text-green-700 text-sm leading-relaxed">{useCase.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCasesSection;
