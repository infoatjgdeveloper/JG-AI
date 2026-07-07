
import React from 'react';
import { MapPinIcon, CheckIcon, ArrowRightIcon } from './Icons';
import WorldMap from './WorldMap';
import RegionCard from './RegionCard';
import { REGIONAL_CARDS } from '../data/regionalPartners';

const journey = [
    { year: "2020", title: "Inception", desc: "Founded in Ahmedabad with a core team of 3 engineers focusing on Cloud Solutions." },
    { year: "2021", title: "Expansion", desc: "Launched Enterprise Solutions division." },
    { year: "2023", title: "The AI Pivot", desc: "Established AI Research Lab. Began development of proprietary Agentic Framework." },
    { year: "2024", title: "Platform Launch", desc: "Released the JG AI Agents Marketplace (Beta)." },
    { year: "2025", title: "Global Scale", desc: "Opening remote hubs in London and NYC. 10,000+ agents deployed. Authorised regional partnerships across the globe." },
];

const values = [
    { title: "Innovation", desc: "We build with frontier technology, not last year's stack. Research flows directly into every product we ship." },
    { title: "Excellence", desc: "500+ delivered projects and a 98% client retention rate. We hold ourselves to outcomes, not effort." },
    { title: "Security", desc: "Security is engineered in from day one, backed by a dedicated cybersecurity entity, BRJU Infosec Inc." },
    { title: "Collaboration", desc: "Scientists, engineers and strategists working as one team with our clients, across every timezone." },
];

const entities = [
    { name: "JGAI HQ", region: "India", role: "AI research, engineering and global delivery" },
    { name: "BRJU Infosec Inc.", region: "North America", role: "Cybersecurity, SOC and zero trust architecture" },
    { name: "IA7 Global Tech", region: "Europe", role: "EU enterprise AI delivery and compliance" },
];

const CompanyPage: React.FC = () => {
    return (
        <div className="w-full min-h-screen pt-32 pb-20">

            {/* ============ HERO ============ */}
            <div className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 mb-32 animate-fade-up">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">// About JGAI</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <h1 className="text-5xl md:text-7xl font-display text-primary dark:text-white leading-[1.05]">
                        A Research Lab That Ships Products.
                    </h1>
                    <div>
                        <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                            Founded in 2020, JG AI Research And Development Pvt Ltd delivers research-driven AI, secure cloud infrastructure and next-gen digital platforms. We bring together scientists, engineers and business strategists to solve your toughest challenges.
                        </p>
                        <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                            {[
                                { v: '2020', l: 'Founded' },
                                { v: '3', l: 'Entities' },
                                { v: '500+', l: 'Projects' },
                                { v: '37+', l: 'Countries' },
                            ].map((s, i) => (
                                <div key={i} className="border-t-2 border-accent pt-3">
                                    <dd className="font-display font-bold text-3xl text-primary dark:text-white">{s.v}</dd>
                                    <dt className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mt-1">{s.l}</dt>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>

            {/* ============ ENTITIES + HQ ============ */}
            <div className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-slate-900 text-white rounded-3xl p-8">
                        <div className="flex items-center gap-2 mb-4">
                            <MapPinIcon className="w-5 h-5 text-accent" />
                            <h3 className="font-bold">Headquarters</h3>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Ahmedabad, Gujarat, India.<br />Serving clients globally.
                        </p>
                    </div>
                    {entities.map((e, i) => (
                        <div key={i} className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 hover:border-accent/40 transition-colors">
                            <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3">{e.region}</p>
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{e.name}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{e.role}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ============ JOURNEY ============ */}
            <section className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 mb-32">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-primary dark:text-white">Our Journey</h2>
                    <p className="font-mono text-xs uppercase tracking-widest text-slate-400">2020, Present</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
                    {journey.map((item, i) => (
                        <div key={i} className="relative p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                            <span className="inline-block font-mono text-sm font-bold text-white bg-accent px-3 py-1 rounded-full mb-5">{item.year}</span>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                            {i < journey.length - 1 && (
                                <ArrowRightIcon className="hidden xl:block absolute -right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 dark:text-slate-600" />
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* ============ GLOBAL NETWORK ============ */}
            <section className="bg-slate-900 text-white py-24 mb-32 rounded-[3rem] mx-4 md:mx-8 lg:mx-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <WorldMap />
                </div>
                <div className="relative z-10">
                    <section className="container mx-auto px-6 relative mb-16">
                        <div className="text-center mb-16">
                            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4">// One Network, Three Entities</p>
                            <h2 className="text-4xl font-bold text-white mb-4">Global Operational Network</h2>
                            <p className="text-slate-500 uppercase tracking-widest text-xs">Decentralized Service Delivery through Centralized Governance</p>
                        </div>
                        <WorldMap />
                    </section>
                    <section className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
                            {REGIONAL_CARDS.map((partner) => (
                                <RegionCard key={partner.id} partner={partner} />
                            ))}
                        </div>
                    </section>
                </div>
            </section>

            {/* ============ VALUES ============ */}
            <section className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16">
                <div className="bg-primary text-white rounded-[3rem] p-10 md:p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-display mb-6">Our Values</h2>
                            <p className="text-white/70 leading-relaxed">
                                Four principles guide every project, every hire and every line of code at JGAI.
                            </p>
                        </div>
                        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {values.map((val, i) => (
                                <div key={i} className="p-6 border border-white/20 rounded-2xl hover:bg-white/5 transition-colors">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                            <CheckIcon className="w-4 h-4 text-accent" />
                                        </div>
                                        <h3 className="text-xl font-bold">{val.title}</h3>
                                    </div>
                                    <p className="text-white/60 text-sm leading-relaxed">{val.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CompanyPage;
