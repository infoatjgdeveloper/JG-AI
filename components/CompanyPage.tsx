
import React from 'react';
import { MapPinIcon, UserCircleIcon } from './Icons';
import WorldMap from './WorldMap';
import RegionCard from './RegionCard';
import { REGIONAL_CARDS, REGIONAL_PARTNERS } from '../data/regionalPartners';

const CompanyPage: React.FC = () => {
    return (
        <div className="w-full min-h-screen pt-32 pb-20">

            {/* --- HEADER --- */}
            <div className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 mb-32 animate-fade-up">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 border-b border-slate-200 dark:border-slate-700 pb-20">
                    <div>
                        <h1 className="text-5xl md:text-7xl font-display text-primary dark:text-white mb-8">
                            Company
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                            Founded in 2020, JG AI Research And Development Pvt Ltd is dedicated to delivering research-driven AI, secure cloud infrastructure and next-gen digital platforms. We bring together scientists, engineers and business strategists to solve your toughest challenges.
                        </p>
                    </div>
                    <div className="flex flex-col justify-end">
                        <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-8">
                            <div className="flex items-center gap-2 mb-4">
                                <MapPinIcon className="w-5 h-5 text-primary dark:text-white" />
                                <h3 className="font-bold text-primary dark:text-white">Headquarters</h3>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400">
                                Ahmedabad, Gujarat, India.<br />
                                Serving clients globally.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- OUR JOURNEY (Timeline - New) --- */}
            <section className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 mb-32">
                <h2 className="text-3xl font-display font-bold text-primary mb-16 dark:text-white">Our Journey</h2>
                <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-4 md:ml-8 space-y-12">
                    {[
                        { year: "2020", title: "Inception", desc: "Founded in Ahmedabad with a core team of 3 engineers focusing on Cloud Solutions." },
                        { year: "2021", title: "Expansion", desc: "Launched Enterprise Solutions division. Secured first 10 major clients in Finance." },
                        { year: "2023", title: "The AI Pivot", desc: "Established AI Research Lab. Began development of proprietary Agentic Framework." },
                        { year: "2024", title: "Platform Launch", desc: "Released the JG AI Agents Marketplace (Beta) and secured Series A funding." },
                        { year: "2025", title: "Global Scale", desc: "Opening remote hubs in London & NYC. 10,000+ Agents deployed." }
                    ].map((item, i) => (
                        <div key={i} className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-accent"></div>
                            <span className="text-sm font-mono font-bold text-accent mb-1 block">{item.year}</span>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400 max-w-xl">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- TEAM --- */}
            {/* <section className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 mb-32">
                <h2 className="text-sm font-mono text-slate-400 mb-12 uppercase tracking-widest">Leadership Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                        <UserCircleIcon className="w-16 h-16 text-slate-300 mb-6" />
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Jay G.</h3>
                        <p className="text-accent font-bold text-sm mb-4">Founder & CEO</p>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                            Visionary leader driving the strategic direction of JG AI towards future technologies.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                        <UserCircleIcon className="w-16 h-16 text-slate-300 mb-6" />
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Head of AI</h3>
                        <p className="text-accent font-bold text-sm mb-4">CTO</p>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                            Leading our research initiatives and platform architecture.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                        <UserCircleIcon className="w-16 h-16 text-slate-300 mb-6" />
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Head of Engineering</h3>
                        <p className="text-accent font-bold text-sm mb-4">VP Engineering</p>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                            Overseeing global delivery and infrastructure scalability.
                        </p>
                    </div>
                </div>
            </section> */}

            {/* --- ADVISORY BOARD (New) --- */}
            {/* <section className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 mb-32">
                <h2 className="text-sm font-mono text-slate-400 mb-12 uppercase tracking-widest">Advisory Board</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { name: "Dr. Sarah Chen", role: "AI Ethics Advisor", bio: "Former Ethics Lead at DeepMind" },
                        { name: "Mark Russo", role: "Enterprise Sales", bio: "Ex-SVP Sales at Salesforce" },
                        { name: "Elena K.", role: "Security Advisor", bio: "CISO at FinTech Global" },
                        { name: "David Park", role: "Product Strategy", bio: "Product Lead at Google Cloud" }
                    ].map((advisor, i) => (
                        <div key={i} className="flex flex-col p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                            <div className="font-bold text-slate-900 dark:text-white">{advisor.name}</div>
                            <div className="text-xs font-bold text-primary mb-2 uppercase">{advisor.role}</div>
                            <div className="text-sm text-slate-500 dark:text-slate-400">{advisor.bio}</div>
                        </div>
                    ))}
                </div>
            </section> */}

            {/* --- GLOBAL OPERATIONAL NETWORK --- */}
            <section className="bg-slate-900 text-white py-24 mb-16 rounded-[3rem] mx-4 md:mx-8 lg:mx-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <WorldMap />
                </div>

                <div className="relative z-10">
                    {/* Global Operational Network Header */}
                    <section className="container mx-auto px-6 relative mb-16">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white mb-4">Global Operational Network</h2>
                            <p className="text-slate-500 uppercase tracking-widest text-xs">Decentralized Service Delivery through Centralized Governance</p>
                        </div>
                        <WorldMap />
                    </section>

                    {/* Regional Partners */}
                    <section className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
                            {REGIONAL_CARDS.map((partner) => (
                                <RegionCard key={partner.id} partner={partner} />
                            ))}
                        </div>
                    </section>
                </div>
            </section>

            {/* --- VALUES --- */}
            <section className="bg-primary text-white py-24">
                <div className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16">
                    <h2 className="text-3xl font-display mb-16">Our Values</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {["Innovation", "Excellence", "Security", "Collaboration"].map((val, i) => (
                            <div key={i} className="p-6 border border-white/20 rounded-2xl">
                                <h3 className="text-xl font-bold mb-2">{val}</h3>
                                <p className="text-white/60 text-sm">Core to our DNA and every project we undertake.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CompanyPage;
