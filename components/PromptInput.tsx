import React from 'react';
import {
    StorefrontIcon, BoltIcon, UserGroupIcon, ServerStackIcon,
    ShieldLockIcon, CloudArrowUpIcon, CodeBracketIcon, RobotIcon,
    ArrowRightIcon, CheckIcon
} from './Icons';

const platforms = [
    { n: '01', title: 'JGAI Bot', desc: 'AI chatbot for your website — trained on your own data, deployed and live in 48 hours. Try the working demo instantly.', tag: 'AI Chatbot', url: 'https://jgai-demo.netlify.app/', featured: true, accent: '#22d3ee' },
    { n: '02', title: 'JGRewards', desc: 'A smart loyalty and rewards kiosk platform built for retailers. Try the live demo store.', tag: 'Retail', url: 'https://jg-rewards.vercel.app/kiosk?b=demo', accent: '#f59e0b' },
    { n: '03', title: 'JG AgentHub', desc: 'Buy, sell and trade intelligent AI agents in the open marketplace for proprietary machine learning models.', tag: 'Marketplace', url: 'https://agenthub.jgdeveloper.com/', accent: '#8b5cf6' },
    { n: '04', title: 'JD Markets', desc: 'AI-powered market intelligence and analytics for stocks, live and interactive. AI Trading enabled.', tag: 'Fintech', url: 'https://jd-markets.netlify.app/', accent: '#10b981' },
    { n: '05', title: 'JGAI Learning', desc: 'The all-in-one AI university — course marketplace, AI-taught credit-hour programs, real Canvas classroom sync and verifiable certificates.', tag: 'EdTech', url: 'https://jgai-learning.vercel.app/', accent: '#2b6cff' },
    { n: '06', title: 'JGAI Estate', desc: 'Intelligent property discovery and analytics powered by AI.', tag: 'PropTech', url: 'https://jg-ai-estate.vercel.app/', accent: '#ec4899' },
];

const marketplaceFeatures = [
    { icon: BoltIcon, title: 'Smart Agent Listing', description: 'List proprietary AI models and agents with detailed performance metrics and competitive pricing.' },
    { icon: StorefrontIcon, title: 'Secure Transactions', description: 'A trusted escrow system for buying and selling AI agents, ensuring fair trades every time.' },
    { icon: UserGroupIcon, title: 'Global Ecosystem', description: 'Connect with developers, researchers, and enterprises worldwide to monetize cutting-edge AI.' },
];

const PlatformPage: React.FC = () => {
    return (
        <div className="w-full min-h-screen pt-32 pb-20 bg-white dark:bg-slate-950">
            <div className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 animate-fade-up">

                {/* ============ HERO: SPLIT LAYOUT ============ */}
                <section className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">// JGAI Platform Suite</p>
                        <h1 className="text-5xl md:text-6xl xl:text-7xl font-display text-primary dark:text-white mb-8 tracking-tight leading-[1.05]">
                            JGAI <span className="text-accent">Ecosystem</span>
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-10 max-w-xl">
                            From JGAI Bot — your website's AI assistant live in 48 hours — to marketplaces, fintech and the AI University, every product below is in production and ready to use right now.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://jgai-demo.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:scale-105 inline-flex items-center gap-2"
                            >
                                Try JGAI Bot Live <ArrowRightIcon className="w-4 h-4" />
                            </a>
                            <a
                                href="https://agenthub.jgdeveloper.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-full font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm"
                            >
                                Explore Marketplace
                            </a>
                        </div>
                        <dl className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 max-w-md">
                            {[
                                { v: '6', l: 'Live Platforms' },
                                { v: '37+', l: 'Countries' },
                                { v: '24/7', l: 'Uptime Ops' },
                            ].map((s, i) => (
                                <div key={i}>
                                    <dd className="font-display font-bold text-3xl text-primary dark:text-white">{s.v}</dd>
                                    <dt className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mt-1">{s.l}</dt>
                                </div>
                            ))}
                        </dl>
                    </div>
                    <a href="https://jgai-demo.netlify.app/" target="_blank" rel="noopener noreferrer" className="aspect-video bg-slate-100 dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xl group relative block">
                        <img
                            src="/jgaibot_poster.png"
                            alt="JGAI Bot — your website, answering. AI chatbot trained on your data, live in 48 hours."
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        />
                        <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-4 py-2 rounded-full font-mono text-[10px] uppercase tracking-widest text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                            Try the live demo →
                        </div>
                    </a>
                </section>

                {/* ============ PLATFORMS: FEATURED + GRID ============ */}
                <section className="mb-40">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                        <div>
                            <h2 className="text-sm font-mono text-accent uppercase tracking-[0.3em] mb-4">Live Products</h2>
                            <h3 className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-white">Our Platforms</h3>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 max-w-md md:text-right">
                            Built, deployed and operated by JGAI. Click any card to open the live product.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        {platforms.map((pf, i) => (
                            <a
                                key={i}
                                href={pf.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group relative p-10 rounded-[2rem] border transition-all duration-300 block overflow-hidden hover:-translate-y-1.5 hover:shadow-2xl ${pf.featured
                                    ? 'md:col-span-2 bg-slate-900 dark:bg-slate-900 border-slate-800 text-white'
                                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
                                    }`}
                            >
                                <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background: `linear-gradient(90deg, ${pf.accent}, transparent)` }}></div>
                                <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10 group-hover:opacity-25 transition-opacity" style={{ background: pf.accent }}></div>
                                <div className="flex items-center justify-between mb-8">
                                    <span className="font-mono text-sm font-bold" style={{ color: pf.accent }}>/ {pf.n}</span>
                                    <span className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border" style={{ color: pf.accent, borderColor: `${pf.accent}44`, background: `${pf.accent}14` }}>{pf.tag}</span>
                                </div>
                                <h4 className={`text-2xl font-display font-bold mb-3 transition-colors ${pf.featured ? 'text-white group-hover:text-accent' : 'text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-blue-400'}`}>{pf.title}</h4>
                                <p className={`text-sm leading-relaxed mb-8 ${pf.featured ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400'}`}>{pf.desc}</p>
                                <span className="inline-flex items-center font-bold text-sm" style={{ color: pf.accent }}>
                                    Open Platform <span className="ml-2 group-hover:translate-x-2 transition-transform">&rarr;</span>
                                </span>
                            </a>
                        ))}

                        {/* CTA tile to fill the grid */}
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSeUTygTM3E4EtVAzwCSFqN1Q60q2EKer7Vtme8admS9Xht9nA/viewform?usp=dialog"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-10 rounded-[2rem] border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-primary flex flex-col items-center justify-center text-center transition-colors"
                        >
                            <span className="font-mono text-sm text-slate-400 mb-3">/ 07</span>
                            <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">Your Platform Next</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Custom AI platforms scoped and shipped for your business.</p>
                            <span className="text-primary dark:text-blue-400 font-bold text-sm inline-flex items-center">Start a Project <span className="ml-2 group-hover:translate-x-2 transition-transform">&rarr;</span></span>
                        </a>
                    </div>
                </section>

                {/* ============ MARKETPLACE FEATURES: HORIZONTAL ============ */}
                <section className="mb-40">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {marketplaceFeatures.map((feature, i) => (
                            <div key={i} className="p-8 bg-white dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-primary/30 transition-colors">
                                <div className="w-12 h-12 rounded-2xl bg-primary/5 dark:bg-primary/20 flex items-center justify-center border border-primary/10 mb-6">
                                    <feature.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h4 className="font-bold text-xl dark:text-white mb-2">{feature.title}</h4>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ============ ARCHITECTURE ============ */}
                <section className="mb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-slate-50 dark:bg-slate-900/50 rounded-[3rem] border border-slate-200 dark:border-slate-800 p-10 md:p-14">
                        <div className="lg:col-span-5">
                            <h2 className="text-sm font-mono text-accent uppercase tracking-[0.3em] mb-4">Enterprise Infrastructure</h2>
                            <h3 className="text-4xl font-display font-bold text-primary dark:text-white mb-6">
                                Powered by a Robust Platform
                            </h3>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                                Every product runs on the same modular, micro-services architecture designed for infinite scale and enterprise-grade security.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    { icon: ServerStackIcon, t: 'Modular micro-services' },
                                    { icon: RobotIcon, t: 'Agent orchestration' },
                                    { icon: ShieldLockIcon, t: 'Enterprise security' },
                                    { icon: CodeBracketIcon, t: 'Developer SDKs' },
                                    { icon: CloudArrowUpIcon, t: 'Multi-region cloud, 99.99% uptime' },
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-4">
                                        <div className="w-9 h-9 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center flex-shrink-0">
                                            <item.icon className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="font-medium text-slate-800 dark:text-slate-200">{item.t}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="relative space-y-6 max-w-md mx-auto">
                                <div className="flex justify-center gap-4">
                                    <div className="px-5 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 font-mono text-[10px] dark:text-slate-400">Client Apps</div>
                                    <div className="px-5 py-2 bg-primary text-white rounded-lg shadow-sm font-mono text-[10px] font-bold">Platform API</div>
                                </div>
                                <div className="h-6 border-l-2 border-dashed border-slate-300 dark:border-slate-700 mx-auto w-0"></div>
                                <div className="bg-slate-900 dark:bg-accent p-4 rounded-xl shadow-lg text-center text-white text-sm font-bold">
                                    Orchestration Layer
                                </div>
                                <div className="h-6 border-l-2 border-dashed border-slate-300 dark:border-slate-700 mx-auto w-0"></div>
                                <div className="grid grid-cols-3 gap-3">
                                    {['Billing', 'Logic', 'Auth'].map(box => (
                                        <div key={box} className="p-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 text-center text-[10px] font-bold dark:text-slate-300">{box}</div>
                                    ))}
                                </div>
                                <div className="h-6 border-l-2 border-dashed border-slate-300 dark:border-slate-700 mx-auto w-0"></div>
                                <div className="p-4 bg-primary/90 rounded-xl text-center text-white text-sm font-bold">
                                    AI Model Layer (LLMs &amp; Vision)
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============ FINAL CTA ============ */}
                <section className="text-center bg-slate-900 dark:bg-slate-900 rounded-[3rem] p-14 md:p-20 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to scale with AI?</h2>
                        <p className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto">
                            Whether you deploy one of our platforms or commission your own, JGAI ships production AI, fast.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSeUTygTM3E4EtVAzwCSFqN1Q60q2EKer7Vtme8admS9Xht9nA/viewform?usp=dialog"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-primary px-10 py-4 rounded-full text-lg font-bold hover:bg-slate-100 transition-colors"
                            >
                                Get Started Now
                            </a>
                            <a
                                href="https://agenthub.jgdeveloper.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-transparent border border-white/30 px-10 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-colors"
                            >
                                Explore Marketplace
                            </a>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default PlatformPage;
