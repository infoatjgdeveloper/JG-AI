
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { DocumentTextIcon, BeakerIcon, UserGroupIcon, CpuChipIcon } from './Icons';

const ResearchPage: React.FC = () => {
    return (
        <div className="w-full min-h-screen pt-32 px-4 md:px-12 lg:px-24 pb-20 bg-white dark:bg-slate-900">

            {/* --- HERO --- */}
            <AnimatedSection className="mb-24 text-center max-w-4xl mx-auto">
                <div className="inline-block border border-primary/10 bg-primary/5 px-3 py-1 rounded-full mb-6">
                    <span className="font-mono text-xs text-primary font-bold uppercase tracking-wider dark:text-white">JG AI Research</span>
                </div>
                <h1 className="font-display text-5xl md:text-6xl font-bold text-primary dark:text-white mb-8 dark:text-white">
                    Pioneering the Intelligence Frontier
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                    Our research team explores next-gen AI models, platform architectures, cybersecurity for AI, and cloud-native systems. We don't just use AI; we advance the science behind it.
                </p>
            </AnimatedSection>

            {/* --- RESEARCH METHODOLOGY (New) --- */}
            <section className="mb-32 max-w-[90rem] mx-auto bg-slate-50 dark:bg-slate-800 rounded-3xl p-12 border border-slate-200 dark:border-slate-700">
                <h2 className="font-display text-3xl text-primary mb-12 text-center dark:text-white">Our Methodology</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[
                        { title: "Hypothesis", desc: "Identifying gaps in current SOTA models." },
                        { title: "Experimentation", desc: "Rigorous training and fine-tuning on proprietary datasets." },
                        { title: "Validation", desc: "Benchmarking against industry standards (MMLU, HumanEval)." },
                        { title: "Deployment", desc: "Translating research into production-grade APIs." }
                    ].map((step, i) => (
                        <div key={i} className="relative">
                            <div className="text-6xl font-display font-bold text-slate-200 dark:text-slate-700 mb-4 opacity-50">0{i + 1}</div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- FOCUS AREAS --- */}
            <section className="mb-32 max-w-[90rem] mx-auto">
                <h2 className="font-display text-2xl text-primary mb-12 border-b border-slate-200 dark:border-slate-700 pb-4 dark:text-white">Focus Areas</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {["Generative AI", "AI Agents", "AI-Native Search", "Cybersecurity for AI", "Cloud-scale Systems"].map((area, i) => (
                        <div key={i} className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-accent shadow-sm hover:shadow-md transition-all group">
                            <BeakerIcon className="w-8 h-8 text-primary mb-4 group-hover:text-accent transition-colors dark:text-white" />
                            <h3 className="font-bold text-slate-900 dark:text-white">{area}</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Exploring new architectures and optimization techniques.</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- INFRASTRUCTURE (New) --- */}
            <section className="mb-32 max-w-[90rem] mx-auto">
                <div className="bg-slate-900 text-white rounded-3xl p-12 relative overflow-hidden">
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-display text-3xl mb-6">Research Infrastructure</h2>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                Great research requires great compute. We have invested heavily in a dedicated cluster to support training of large-scale foundation models.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="border border-white/20 p-4 rounded-xl">
                                    <CpuChipIcon className="w-6 h-6 text-accent mb-2" />
                                    <div className="text-2xl font-bold font-mono">128x</div>
                                    <div className="text-xs text-slate-400">H100 Tensor Core GPUs</div>
                                </div>
                                <div className="border border-white/20 p-4 rounded-xl">
                                    <CpuChipIcon className="w-6 h-6 text-blue-400 mb-2" />
                                    <div className="text-2xl font-bold font-mono">4PB</div>
                                    <div className="text-xs text-slate-400">High-Performance Storage</div>
                                </div>
                            </div>
                        </div>
                        <div className="h-64 bg-slate-800/50 dark:bg-slate-900/50 rounded-2xl border border-white/10 flex items-center justify-center">
                            <span className="font-mono text-sm text-slate-500">[Cluster Visualization Placeholder]</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- PUBLICATIONS --- */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32 max-w-[90rem] mx-auto">
                <div className="col-span-1 lg:col-span-2">
                    <h2 className="font-display text-2xl text-primary mb-8 border-b border-slate-200 dark:border-slate-700 pb-4 dark:text-white">Publications & White-Papers</h2>
                    <div className="space-y-4">
                        {[
                            { title: "Enhancing AI-Native Search with Vector Databases", date: "September 2024", summary: "Explores novel vector-search architectures and performance benchmarks." },
                            { title: "Securing AI Workflows in Multi-Cloud Environments", date: "August 2024", summary: "Studies end-to-end security strategies for AI pipelines across cloud providers." },
                            { title: "Optimizing Latency in Agentic Chains", date: "July 2024", summary: "A framework for reducing token-time-to-first-byte in complex agent reasoning steps." },
                            { title: "RLHF at Scale: Lessons from the Field", date: "May 2024", summary: "Practical insights into Reinforcement Learning from Human Feedback for domain-specific models." },
                            { title: "The Ethics of Autonomous Agents", date: "March 2024", summary: "A proposed framework for liability and decision-making in autonomous software." }
                        ].map((paper, i) => (
                            <div key={i} className="group flex flex-col md:flex-row md:items-center justify-between p-6 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer">
                                <div className="flex items-start gap-4">
                                    <DocumentTextIcon className="w-6 h-6 text-slate-400 group-hover:text-accent mt-1" />
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{paper.title}</h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">{paper.summary}</p>
                                    </div>
                                </div>
                                <div className="text-left md:text-right mt-4 md:mt-0 md:pl-8 flex-shrink-0">
                                    <span className="font-mono text-xs text-slate-400">{paper.date}</span>
                                    <button className="block mt-2 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">Download PDF</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- COLLABORATIONS --- */}
                <div className="col-span-1">
                    <div className="bg-primary text-white rounded-3xl p-8 h-full relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="font-display text-xl mb-6 flex items-center gap-2">
                                <UserGroupIcon className="w-5 h-5" /> Collaborations
                            </h2>
                            <p className="text-white/70 text-sm mb-8 leading-relaxed">
                                We partner with leading universities and research institutions to push the boundaries of what AI can do.
                            </p>

                            <div className="space-y-6 mb-12">
                                <div className="flex items-center gap-4 opacity-70 hover:opacity-100 transition-opacity">
                                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center font-bold text-xs">GTU</div>
                                    <span className="font-bold">Global Tech University</span>
                                </div>
                                <div className="flex items-center gap-4 opacity-70 hover:opacity-100 transition-opacity">
                                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center font-bold text-xs">ASL</div>
                                    <span className="font-bold">AI Safety Lab</span>
                                </div>
                                <div className="flex items-center gap-4 opacity-70 hover:opacity-100 transition-opacity">
                                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center font-bold text-xs">NIST</div>
                                    <span className="font-bold">Standards Institute</span>
                                </div>
                            </div>

                            <button className="w-full py-3 border border-white/20 rounded-full text-sm font-bold hover:bg-white hover:text-primary transition-all">
                                Partner with Us
                            </button>
                        </div>
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ResearchPage;
