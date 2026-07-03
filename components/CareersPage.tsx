
import React from 'react';
import { CheckIcon } from './Icons';

const CareersPage: React.FC = () => {
    const values = [
        { title: "Intellectual Curiosity", desc: "We hire people who ask better questions. Research time and learning budgets are part of the job, not a perk." },
        { title: "Radical Ownership", desc: "Small teams, full accountability. You ship work that reaches clients in 37+ countries, and you own the outcome." },
        { title: "One Global Team", desc: "Ahmedabad HQ or remote from anywhere, you work as part of a single, cohesive team across three entities." },
    ];
    const benefits = [
        "Competitive salary & equity",
        "Flexible working hours & remote option",
        "Research grants & continual training",
        "Global exposure & growth opportunities",
        "Inclusive, innovative culture",
        "Best-in-class health insurance"
    ];
    const process = [
        { title: "Application", desc: "Submit your resume and portfolio." },
        { title: "Screening", desc: "30-min call to discuss your background." },
        { title: "Technical", desc: "Deep dive into code or case studies." },
        { title: "Culture", desc: "Meet the team and founders." }
    ];
    const jobs = [
        { role: "AI Research Scientist", loc: "Ahmedabad / Remote", id: "RES-01", team: "Research" },
        { role: "Senior Full Stack Engineer", loc: "Remote", id: "ENG-01", team: "Engineering" },
        { role: "Cloud Architect", loc: "Ahmedabad", id: "ENG-02", team: "Engineering" },
        { role: "Cybersecurity Analyst", loc: "Remote", id: "SEC-01", team: "Security" },
        { role: "Product Manager", loc: "Ahmedabad", id: "PROD-01", team: "Product" },
        { role: "UI/UX Designer", loc: "Remote", id: "DES-01", team: "Design" }
    ];
    const applyUrl = "https://docs.google.com/forms/d/e/1FAIpQLScvzvMosFJalCzT2Iw-xTVaOVe3gJLmg3Xsne4meVm9cpMPbA/viewform?usp=dialog";

    return (
        <div className="w-full min-h-screen pt-32 pb-20">
            <div className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 animate-fade-up">

                {/* Hero: split layout with stats */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">// Careers at JGAI</p>
                        <h1 className="text-5xl md:text-6xl font-display text-primary dark:text-white mb-8">Build What's Next.</h1>
                        <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                            Join JG AI Research & Development, where you will build the future of AI, cloud and cybersecurity for clients across the world.
                        </p>
                        <a href="#open-roles" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors">
                            See Open Roles
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { v: "37+", l: "Countries Served" },
                            { v: "3", l: "Global Entities" },
                            { v: "500+", l: "Projects Shipped" },
                            { v: "Remote", l: "Friendly Culture" },
                        ].map((s, i) => (
                            <div key={i} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 text-center border border-slate-100 dark:border-slate-700">
                                <p className="text-3xl font-display font-bold text-primary dark:text-white mb-1">{s.v}</p>
                                <p className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">{s.l}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Life at JG: three value cards */}
                <div className="mb-32">
                    <h2 className="text-3xl font-display font-bold text-primary dark:text-white mb-4 text-center">Life at JG AI</h2>
                    <p className="text-slate-600 dark:text-slate-300 text-center max-w-2xl mx-auto mb-12">
                        The best work happens when you are challenged, supported, and inspired.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {values.map((v, i) => (
                            <div key={i} className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
                                <p className="font-mono text-xs text-accent mb-4">0{i + 1}</p>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{v.title}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Benefits: two-column checklist */}
                <div className="mb-32 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div>
                        <h2 className="text-2xl font-display text-primary dark:text-white mb-4">Why work with us</h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            We invest in people for the long run, from research grants to global mobility.
                        </p>
                    </div>
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {benefits.map((benefit, i) => (
                            <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 dark:bg-slate-800 rounded-xl">
                                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                                    <CheckIcon className="w-4 h-4 text-accent" />
                                </div>
                                <span className="font-medium text-slate-900 dark:text-white">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hiring process: numbered vertical timeline */}
                <div className="mb-32 max-w-3xl mx-auto">
                    <h2 className="text-2xl font-display text-primary dark:text-white mb-12 text-center">The Hiring Process</h2>
                    <div className="space-y-0">
                        {process.map((step, i) => (
                            <div key={i} className="flex gap-6 pb-10 last:pb-0 relative">
                                {i < process.length - 1 && <div className="absolute left-6 top-12 bottom-0 w-px bg-slate-200 dark:bg-slate-700"></div>}
                                <div className="w-12 h-12 rounded-full bg-primary text-white font-bold text-lg flex items-center justify-center flex-shrink-0 z-10">
                                    {i + 1}
                                </div>
                                <div className="pt-2">
                                    <h3 className="font-bold text-lg dark:text-white">{step.title}</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Open Roles */}
                <div id="open-roles" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-[3rem] p-8 md:p-12 shadow-sm mb-24">
                    <div className="flex items-end justify-between mb-8 pl-4">
                        <h2 className="text-2xl font-display text-primary dark:text-white">Open Roles</h2>
                        <p className="font-mono text-xs text-slate-400">{jobs.length} positions</p>
                    </div>
                    {jobs.map((job, i) => (
                        <div key={i} className="group flex flex-col md:flex-row items-center justify-between py-6 px-6 border-b border-slate-100 dark:border-slate-700 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-xl transition-colors">
                            <div className="flex-1">
                                <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1">{job.team}</p>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{job.role}</h3>
                            </div>
                            <div className="flex items-center gap-8 md:gap-16 mt-4 md:mt-0 w-full md:w-auto justify-between">
                                <div className="text-right">
                                    <p className="text-slate-400 text-xs font-mono">{job.loc}</p>
                                    <p className="text-slate-300 dark:text-slate-500 text-[10px] font-mono mt-1">{job.id}</p>
                                </div>
                                <a
                                    href={applyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-primary/90 transition-colors"
                                >
                                    Apply Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CareersPage;
