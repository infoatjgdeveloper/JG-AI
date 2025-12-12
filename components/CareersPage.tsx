
import React from 'react';
import { CheckIcon } from './Icons';

const CareersPage: React.FC = () => {
    return (
        <div className="w-full min-h-screen pt-32 pb-20">
            <div className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 animate-fade-up">

                {/* Header */}
                <div className="mb-24 text-center max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-display text-primary dark:text-white mb-8">Careers</h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                        Join JG AI Research & Development — where you will build the future of AI, cloud and cybersecurity.
                    </p>
                </div>

                {/* Life at JG (New) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
                    <div>
                        <h2 className="text-3xl font-display font-bold text-primary dark:text-white mb-6">Life at JG AI</h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                            We believe that the best work happens when you are challenged, supported, and inspired. Our culture is built on intellectual curiosity and radical ownership.
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            Whether you are in our Ahmedabad HQ or working remotely from London, you are part of a single, cohesive team pushing the boundaries of what is possible.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-2xl"></div>
                        <div className="aspect-square bg-slate-200 dark:bg-slate-700 rounded-2xl translate-y-8"></div>
                    </div>
                </div>

                {/* Benefits */}
                <div className="mb-32">
                    <h2 className="text-2xl font-display text-primary dark:text-white mb-12 text-center">Why work with us</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Competitive salary & equity",
                            "Flexible working hours & remote option",
                            "Research grants & continual training",
                            "Global exposure & growth opportunities",
                            "Inclusive, innovative culture",
                            "Best-in-class health insurance"
                        ].map((benefit, i) => (
                            <div key={i} className="flex items-center gap-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
                                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                                    <CheckIcon className="w-4 h-4 text-accent" />
                                </div>
                                <span className="font-medium text-slate-900 dark:text-white">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* The Hiring Process (New) */}
                <div className="mb-32">
                    <h2 className="text-2xl font-display text-primary dark:text-white mb-12 text-center">The Hiring Process</h2>
                    <div className="relative">
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-10 hidden md:block"></div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                { title: "Application", desc: "Submit your resume and portfolio." },
                                { title: "Screening", desc: "30-min call to discuss your background." },
                                { title: "Technical", desc: "Deep dive into code or case studies." },
                                { title: "Culture", desc: "Meet the team and founders." }
                            ].map((step, i) => (
                                <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 text-center">
                                    <div className="w-12 h-12 rounded-full bg-primary text-white font-bold text-lg flex items-center justify-center mx-auto mb-4 border-4 border-white dark:border-slate-800 shadow-sm">
                                        {i + 1}
                                    </div>
                                    <h3 className="font-bold text-lg mb-2 dark:text-white">{step.title}</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Open Roles */}
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-[3rem] p-8 md:p-12 shadow-sm mb-24">
                    <h2 className="text-2xl font-display text-primary dark:text-white mb-8 pl-4">Open Roles</h2>

                    {[
                        { role: "AI Research Scientist", loc: "Ahmedabad / Remote", id: "RES-01" },
                        { role: "Senior Full Stack Engineer", loc: "Remote", id: "ENG-01" },
                        { role: "Cloud Architect", loc: "Ahmedabad", id: "ENG-02" },
                        { role: "Cybersecurity Analyst", loc: "Remote", id: "SEC-01" },
                        { role: "Product Manager", loc: "Ahmedabad", id: "PROD-01" },
                        { role: "UI/UX Designer", loc: "Remote", id: "DES-01" }
                    ].map((job, i) => (
                        <div key={i} className="group flex flex-col md:flex-row items-center justify-between py-6 px-6 border-b border-slate-100 dark:border-slate-700 last:border-0 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700 rounded-xl transition-colors">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{job.role}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">You will work on building next-gen platforms...</p>
                            </div>
                            <div className="flex items-center gap-8 md:gap-16 mt-4 md:mt-0 w-full md:w-auto justify-between">
                                <div className="text-right">
                                    <p className="text-slate-400 text-xs font-mono">{job.loc}</p>
                                </div>
                                <button className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-primary/90 transition-colors">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* General Application */}
                <div className="text-center bg-slate-900 dark:bg-black rounded-[3rem] p-16 text-white">
                    <h2 className="text-3xl font-display mb-4">Don't see the right role?</h2>
                    <p className="text-slate-400 mb-8">Send us your resume and a short note explaining your interest.</p>
                    <form className="max-w-md mx-auto space-y-4 text-left">
                        <input type="text" placeholder="Name" className="w-full p-4 rounded-xl bg-slate-800 dark:bg-slate-900 border-none text-white placeholder-slate-500 dark:placeholder-slate-600 focus:ring-2 focus:ring-accent" />
                        <input type="email" placeholder="Email" className="w-full p-4 rounded-xl bg-slate-800 dark:bg-slate-900 border-none text-white placeholder-slate-500 dark:placeholder-slate-600 focus:ring-2 focus:ring-accent" />
                        <button className="w-full bg-accent text-white font-bold py-4 rounded-xl hover:bg-accent/90 transition-colors">
                            Send Resume
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CareersPage;
