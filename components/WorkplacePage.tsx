import React from 'react';
// Import the specific icons from your Icons.tsx file
import { StorefrontIcon, BoltIcon, UserGroupIcon } from './Icons';

// Assuming IconProps is also defined in Icons.tsx, or you can simplify the feature array:

const WorkplacePage: React.FC = () => {
    // Product details for the feature list
    const features = [
        {
            // Using BoltIcon for AI Agent Listing (AI/Power/Speed)
            icon: BoltIcon, 
            title: "Smart Agent Listing",
            description: "List your proprietary AI models and agents with detailed performance metrics and competitive pricing.",
        },
        {
            // Using StorefrontIcon for Secure Transactions (Marketplace/Commerce)
            icon: StorefrontIcon, 
            title: "Secure Transactions",
            description: "A trusted and secure escrow system for buying and selling AI agents, ensuring fair trades.",
        },
        {
            // Using UserGroupIcon for Global Ecosystem (Community/Network)
            icon: UserGroupIcon, 
            title: "Global Ecosystem",
            description: "Connect with developers, researchers, and enterprises worldwide to monetize and acquire cutting-edge AI.",
        },
    ];

    return (
        <div className="w-full min-h-screen pt-32 pb-20">
            <div className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 animate-fade-up">

                {/* Header: AI Agent Marketplace Hero */}
                <div className="mb-24 text-center max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-display text-primary dark:text-white  mb-8">
                        The AI Agent Marketplace
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                    Buy, sell, and trade intelligent AI agents in the world's first open workplace for proprietary machine learning models.
                    </p>
                    <div className="mt-8">
                        <button className="bg-primary text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-primary/90 transition-colors shadow-lg">
                            Explore Agents Now
                        </button>
                    </div>
                </div>

                {/* --- */}

                {/* Product Details: How it Works */}
                <div className="mb-32">
                    <h2 className="text-3xl font-display font-bold text-primary dark:text-white mb-16 text-center">
                        Your Gateway to AI Commerce
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Image Placeholder on the Left */}
                        <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-3xl flex items-center justify-center">
                            <span className="text-xl text-slate-500">
                                
                            </span>
                        </div>

                        {/* Text and Features on the Right */}
                        <div>
                            <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-6">
                                The Ultimate AI Agent Workplace
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                                Our platform empowers developers and businesses to **monetize** their cutting-edge AI creations and allows users to **instantly acquire** tailored, high-performing agents for any task, from advanced data analysis to complex automation.
                            </p>
                            <div className="space-y-6">
                                {features.map((feature, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                                            {/* Render the feature icon */}
                                            <feature.icon className="w-5 h-5 text-accent" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg dark:text-white">{feature.title}</h4>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- */}

                {/* CTA: Get Started Selling */}
                <div className="text-center bg-primary dark:bg-slate-900 rounded-[3rem] p-16 text-white shadow-xl">
                    <h2 className="text-3xl font-display mb-4">
                        Ready to Monetize Your AI?
                    </h2>
                    <p className="text-slate-300 mb-8">
                        Join our platform today to start selling your custom-built AI agents to a global audience.
                    </p>
                    <button className="bg-accent text-white font-bold px-8 py-3 rounded-full text-lg hover:bg-accent/90 transition-colors">
                        List Your First Agent
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WorkplacePage;