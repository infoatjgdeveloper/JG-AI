
import React from 'react';
import { Page } from '../types';
import { ArrowRightIcon, CheckIcon, LogoAWS, BoltIcon, ChartBarIcon, CodeBracketIcon, ShieldCheckIcon, CloudArrowUpIcon, StorefrontIcon, DevicePhoneMobileIcon, SphereWireframe, RobotIcon, CubeTransparentIcon, BlackHoleIcon, ShieldLockIcon, ArrowUpRightIcon } from './Icons';

const HomePage: React.FC<{ setActivePage: (page: Page) => void }> = ({ setActivePage }) => {
    return (
        <div className="w-full min-h-screen pt-32 pb-20 overflow-x-hidden">

            {/* --- HERO SECTION --- */}
            <div className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 mb-24 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                    {/* Left Content */}
                    <div className="lg:w-1/2 animate-fade-up">
                        <div className="inline-flex items-center gap-2 border border-accent/30 bg-accent/5 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8">
                            <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                            <span className="font-mono text-xs text-primary dark:text-slate-200 tracking-wide font-bold uppercase">Research • Engineering • Scale</span>
                        </div>

                        <h1 className="font-display text-5xl md:text-7xl lg:text-[4.5rem] text-primary dark:text-white leading-[1.05] tracking-tight mb-8">
                            Win your market in <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent dark:from-blue-400 dark:to-accent">AI Research & Development.</span>
                        </h1>

                        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-xl mb-10 leading-relaxed">
                            From Enterprise Solutions to our cutting-edge <span className="font-bold text-primary dark:text-white">AI Agents Marketplace</span>. We combine deep research-grade expertise, agile engineering, and enterprise-grade infrastructure to help you get ahead.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button onClick={() => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSeUTygTM3E4EtVAzwCSFqN1Q60q2EKer7Vtme8admS9Xht9nA/viewform?usp=dialog',
      '_blank'
    );
  }} className="bg-primary text-white px-8 py-4 rounded-full font-bold text-sm transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 flex items-center gap-2">
                                Get a demo <ArrowRightIcon className="w-4 h-4" />
                            </button>
                            <button onClick={() => setActivePage('research')} className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-full font-bold text-sm transition-all hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm">
                                Explore services
                            </button>
                        </div>
                    </div>

                    {/* Right Visual (Sphere) */}
                    <div className="lg:w-1/2 relative h-[500px] w-full flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent rounded-full filter blur-3xl"></div>
                        <SphereWireframe className="w-[120%] h-[120%] text-slate-300 opacity-60 animate-spin-slow" />

                        {/* Floating Cards */}
                        <div className="absolute top-1/4 -left-4 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 animate-bounce" style={{ animationDuration: '3s' }}>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent"><CheckIcon className="w-4 h-4" /></div>
                                <div>
                                    <p className="text-xs font-bold text-slate-900 dark:text-white">Agents Deployed</p>
                                    <p className="text-[10px] text-slate-400">10,000+ Active</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-1/3 -right-4 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary"><BoltIcon className="w-4 h-4" /></div>
                                <div>
                                    <p className="text-xs font-bold text-slate-900 dark:text-white">Time-to-market</p>
                                    <p className="text-[10px] text-slate-400">30% Faster</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- PARTNER LOGOS MARQUEE (DOUBLE) --- */}
            <div className="w-full border-y border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 py-10 mb-32 overflow-hidden">
                <p className="text-center text-xs font-mono text-slate-400 mb-6 uppercase tracking-widest">Working with Industry Leaders</p>

                {/* Strip 1: Partners */}
                <div className="relative flex overflow-hidden w-full mb-8">
                    <div className="flex animate-scroll whitespace-nowrap gap-20 items-center px-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        <span className="text-xl font-display font-bold text-slate-600 dark:text-slate-400">OpenAI</span>
                        <span className="text-xl font-display font-bold text-slate-600 dark:text-slate-400">Google Cloud</span>
                        <span className="text-xl font-display font-bold text-slate-600 dark:text-slate-400">Microsoft Azure</span>
                        <LogoAWS className="h-8 w-auto text-slate-600 dark:text-slate-400" />
                        <span className="text-xl font-display font-bold text-slate-600 dark:text-slate-400">NVIDIA</span>
                        <span className="text-xl font-display font-bold text-slate-600 dark:text-slate-400">Oracle</span>
                        <span className="text-xl font-display font-bold text-slate-600 dark:text-slate-400">Samsung</span>
                        {/* Duplicate */}
                        <span className="text-xl font-display font-bold text-slate-600 dark:text-slate-400">OpenAI</span>
                        <span className="text-xl font-display font-bold text-slate-600 dark:text-slate-400">Google Cloud</span>
                        <span className="text-xl font-display font-bold text-slate-600 dark:text-slate-400">Microsoft Azure</span>
                        <LogoAWS className="h-8 w-auto text-slate-600 dark:text-slate-400" />
                        <span className="text-xl font-display font-bold text-slate-600 dark:text-slate-400">NVIDIA</span>
                        <span className="text-xl font-display font-bold text-slate-600 dark:text-slate-400">Oracle</span>
                    </div>
                </div>

                {/* Strip 2: Tech Stack */}
                <div className="relative flex overflow-hidden w-full">
                    <div className="flex animate-scroll-reverse whitespace-nowrap gap-20 items-center px-10 opacity-40">
                        <span className="text-lg font-mono font-bold text-slate-500 dark:text-slate-500">TensorFlow</span>
                        <span className="text-lg font-mono font-bold text-slate-500 dark:text-slate-500">PyTorch</span>
                        <span className="text-lg font-mono font-bold text-slate-500 dark:text-slate-500">Kubernetes</span>
                        <span className="text-lg font-mono font-bold text-slate-500 dark:text-slate-500">Docker</span>
                        <span className="text-lg font-mono font-bold text-slate-500 dark:text-slate-500">React</span>
                        <span className="text-lg font-mono font-bold text-slate-500 dark:text-slate-500">Terraform</span>
                        <span className="text-lg font-mono font-bold text-slate-500 dark:text-slate-500">PostgreSQL</span>
                        {/* Duplicate */}
                        <span className="text-lg font-mono font-bold text-slate-500 dark:text-slate-500">TensorFlow</span>
                        <span className="text-lg font-mono font-bold text-slate-500 dark:text-slate-500">PyTorch</span>
                        <span className="text-lg font-mono font-bold text-slate-500 dark:text-slate-500">Kubernetes</span>
                        <span className="text-lg font-mono font-bold text-slate-500 dark:text-slate-500">Docker</span>
                        <span className="text-lg font-mono font-bold text-slate-500 dark:text-slate-500">React</span>
                        <span className="text-lg font-mono font-bold text-slate-500 dark:text-slate-500">Terraform</span>
                    </div>
                </div>
            </div>

            {/* --- DEEP FEATURE CARDS SECTION --- */}
            <div className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 mb-32">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-primary dark:text-white mb-6">
                        Research insights, AI integration, cloud & cybersecurity — <br className="hidden md:block" />One unified platform.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

                    {/* Card 1: AI Agents Marketplace (Featured) */}
                    <div className="glass-card dark:bg-slate-800/50 dark:border-slate-700 rounded-3xl flex flex-col h-full hover:shadow-xl transition-shadow duration-300 overflow-hidden group border-accent/20">
                        <div className="p-8 pb-4">
                            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                                <RobotIcon className="w-7 h-7 text-accent" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">AI Agents Marketplace</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                Discover, deploy, and monetize autonomous AI agents. The central hub for intelligence on demand.
                            </p>
                        </div>
                        {/* UI Mockup - Agent Store */}
                        <div className="mt-auto px-8 pb-8">
                            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 border border-slate-100 dark:border-slate-700 group-hover:border-accent/30 transition-colors">
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold">R</div>
                                            <div>
                                                <div className="text-[10px] font-bold text-slate-800 dark:text-slate-200">Research Agent</div>
                                                <div className="text-[8px] text-slate-400">Data Mining</div>
                                            </div>
                                        </div>
                                        <button className="bg-accent text-white text-[9px] px-2 py-1 rounded">Deploy</button>
                                    </div>
                                    <div className="flex items-center justify-between p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-xs font-bold">C</div>
                                            <div>
                                                <div className="text-[10px] font-bold text-slate-800 dark:text-slate-200">Coder Agent</div>
                                                <div className="text-[8px] text-slate-400">Full Stack</div>
                                            </div>
                                        </div>
                                        <button className="bg-slate-200 text-slate-500 text-[9px] px-2 py-1 rounded">Active</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Business Enterprise Solutions */}
                    <div className="glass-card dark:bg-slate-800/50 dark:border-slate-700 rounded-3xl flex flex-col h-full hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                        <div className="p-8 pb-4">
                            <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-6">
                                <CubeTransparentIcon className="w-6 h-6 text-accent" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Business Enterprise Solutions</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                Tailored digital transformation. We build scalable software architectures that solve complex business problems.
                            </p>
                        </div>
                        {/* UI Mockup - Dashboard */}
                        <div className="mt-auto px-8 pb-8">
                            <div className="bg-slate-900 rounded-xl p-4 border border-slate-800 font-mono text-[10px] text-slate-400 shadow-lg group-hover:scale-105 transition-transform duration-500 origin-bottom">
                                <div className="flex justify-between items-center border-b border-slate-800 pb-2 mb-2">
                                    <span>Enterprise_V1</span>
                                    <div className="flex gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <span>Online</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="bg-slate-800 p-2 rounded">
                                        <span className="text-[8px] uppercase text-slate-500">Users</span>
                                        <div className="text-lg text-white font-bold">12k</div>
                                    </div>
                                    <div className="bg-slate-800 p-2 rounded">
                                        <span className="text-[8px] uppercase text-slate-500">Revenue</span>
                                        <div className="text-lg text-green-400 font-bold">+24%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Cloud & Cybersecurity */}
                    <div className="glass-card dark:bg-slate-800/50 dark:border-slate-700 rounded-3xl flex flex-col h-full hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                        <div className="p-8 pb-4">
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                                <ShieldCheckIcon className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Cloud & Cybersecurity</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                Monitor your cloud footprint, secure against threats, and ensure 100% uptime for your AI infrastructure.
                            </p>
                        </div>
                        {/* UI Mockup - Security */}
                        <div className="mt-auto px-8 pb-8">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center justify-between bg-white dark:bg-slate-800 p-2 px-3 rounded-lg border border-slate-100 dark:border-slate-700 shadow-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                                        <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Firewall</span>
                                    </div>
                                    <span className="text-[10px] text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded-full">Active</span>
                                </div>
                                <div className="flex items-center justify-between bg-white dark:bg-slate-800 p-2 px-3 rounded-lg border border-slate-100 dark:border-slate-700 shadow-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                        <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Encryption</span>
                                    </div>
                                    <span className="text-[10px] text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded-full">AES-256</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- OUR PROCESS SECTION (New) --- */}
            <div className="bg-white dark:bg-slate-900 py-24 border-y border-slate-100 dark:border-slate-800">
                <div className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16">
                    <h2 className="text-3xl font-display font-bold text-primary dark:text-white mb-16 text-center">Our Engagement Process</h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-slate-100 dark:bg-slate-800 -z-10"></div>

                        {[
                            { step: "01", title: "Discovery", desc: "We analyze your infrastructure, data silos, and business goals to map out a strategic AI roadmap." },
                            { step: "02", title: "Strategy", desc: "Our research team designs the model architecture and selects the optimal tech stack for your needs." },
                            { step: "03", title: "Development", desc: "Agile engineering sprints to build, train, and integrate your custom solution with rigorous testing." },
                            { step: "04", title: "Scale", desc: "Deployment to enterprise cloud, followed by ongoing optimization, security monitoring, and scaling." }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-800 border-4 border-slate-50 dark:border-slate-700 text-accent font-display font-bold text-xl flex items-center justify-center mb-6 shadow-sm relative z-10">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed px-4">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- PROVEN IMPACT SECTION --- */}
            <div className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 my-32">
                <div className="bg-slate-900 rounded-[3rem] p-12 md:p-16 text-white relative overflow-hidden">
                    {/* Background elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-block border border-accent/20 bg-accent/10 px-3 py-1 rounded-full mb-6">
                                <span className="font-mono text-xs text-accent font-bold uppercase tracking-wider">Measurable Growth</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Proven Impact</h2>
                            <p className="text-slate-400 mb-8 leading-relaxed text-lg max-w-md">
                                We don't just build technology; we deliver outcomes. Our clients see measurable improvements in efficiency, security, and market reach.
                            </p>
                            <button onClick={() => setActivePage('research')} className="text-accent font-bold flex items-center gap-2 hover:gap-4 transition-all">
                                View Case Studies <ArrowRightIcon className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="space-y-8 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md">
                            {/* Metric 1 */}
                            <div>
                                <div className="flex justify-between mb-2 items-end">
                                    <span className="font-bold text-lg">Model Accuracy</span>
                                    <span className="text-accent font-mono text-2xl font-bold">98.5%</span>
                                </div>
                                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-accent w-[0%] animate-[width_1.5s_ease-out_forwards] shadow-[0_0_15px_rgba(0,196,140,0.5)]" style={{ width: '98.5%' }}></div>
                                </div>
                                <p className="text-xs text-slate-500 mt-2">vs. 72% industry average</p>
                            </div>
                            {/* Metric 2 */}
                            <div>
                                <div className="flex justify-between mb-2 items-end">
                                    <span className="font-bold text-lg">Deployment Speed</span>
                                    <span className="text-blue-400 font-mono text-2xl font-bold">3x Faster</span>
                                </div>
                                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 w-[0%] animate-[width_1.5s_ease-out_0.3s_forwards]" style={{ width: '85%' }}></div>
                                </div>
                                <p className="text-xs text-slate-500 mt-2">From months to weeks</p>
                            </div>
                            {/* Metric 3 */}
                            <div>
                                <div className="flex justify-between mb-2 items-end">
                                    <span className="font-bold text-lg">Security Incidents</span>
                                    <span className="text-green-400 font-mono text-2xl font-bold">0</span>
                                </div>
                                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-green-500 w-[0%] animate-[width_1.5s_ease-out_0.6s_forwards]" style={{ width: '100%' }}></div>
                                </div>
                                <p className="text-xs text-slate-500 mt-2">100% Uptime & Protection</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- INDUSTRY VERTICALS (New) --- */}
            <div className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 mb-32">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-display font-bold text-primary dark:text-white">Industry Verticals</h2>
                    <p className="text-slate-500 mt-4 max-w-2xl mx-auto">We deliver specialized AI and software solutions tailored to the unique regulatory and operational needs of major industries.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-blue-200 transition-colors">
                        <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4 text-xl">🏦</div>
                        <h3 className="font-bold text-lg mb-2">Finance</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Fraud detection, algorithmic trading, and personalized banking agents.</p>
                    </div>
                    <div className="p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-green-200 transition-colors">
                        <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4 text-xl">🏥</div>
                        <h3 className="font-bold text-lg mb-2">Healthcare</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Diagnostic support AI, patient data management, and HIPAA-compliant cloud.</p>
                    </div>
                    <div className="p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-orange-200 transition-colors">
                        <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4 text-xl">🛒</div>
                        <h3 className="font-bold text-lg mb-2">Retail</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Inventory prediction, visual search, and autonomous customer service agents.</p>
                    </div>
                    <div className="p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-purple-200 transition-colors">
                        <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4 text-xl">🏭</div>
                        <h3 className="font-bold text-lg mb-2">Manufacturing</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Predictive maintenance, supply chain optimization, and digital twins.</p>
                    </div>
                </div>
            </div>

            {/* --- SERVICES SECTION --- */}
            <div className="bg-slate-50 dark:bg-slate-900/50 py-24">
    <div className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-display font-bold text-primary dark:text-white mb-16 text-center">Our Services</h2>

        {/* Featured Service: AI Agents Marketplace */}
        <div className="mb-12 bg-white dark:bg-slate-800 rounded-3xl border border-accent/20 shadow-lg p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                    <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold uppercase mb-4">
                        <RobotIcon className="w-4 h-4" /> Main Focus
                    </div>
                    <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-4">AI Agents Marketplace</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-lg mb-6 leading-relaxed">
                        Build, deploy, and scale autonomous AI agents. Our marketplace infrastructure allows enterprises to integrate pre-trained agents or monetize their own models securely.
                    </p>
                    <button onClick={() => setActivePage('api')} className="text-primary dark:text-white font-bold flex items-center gap-2 hover:gap-3 transition-all">
                        Explore the Marketplace <ArrowRightIcon className="w-4 h-4" />
                    </button>
                </div>
                <div className="w-full md:w-1/3 aspect-video bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-700 flex items-center justify-center relative">
                    <StorefrontIcon className="w-16 h-16 text-slate-200" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-slate-800/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 flex items-center gap-3">
                        <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center text-white font-bold">A</div>
                        <div>
                            <div className="text-xs font-bold">Agent Store</div>
                            <div className="text-[10px] text-slate-400">Live deployment</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cloud Computing */}
            <div className="flex gap-4 p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex-shrink-0 flex items-center justify-center">
                    <CloudArrowUpIcon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Cloud Computing</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Scalable, resilient infrastructure on AWS, Azure, and GCP.</p>
                </div>
            </div>

            {/* Web & App */}
            <div className="flex gap-4 p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 flex-shrink-0 flex items-center justify-center">
                    <DevicePhoneMobileIcon className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Web & App Development</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">High-performance custom web apps and native mobile experiences.</p>
                </div>
            </div>

            {/* Software Development */}
            <div className="flex gap-4 p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-orange-50 flex-shrink-0 flex items-center justify-center">
                    <CodeBracketIcon className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Software Development</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Bespoke software engineering tailored to your specific business logic.</p>
                </div>
            </div>

            {/* Cybersecurity */}
            <div className="flex gap-4 p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-red-50 flex-shrink-0 flex items-center justify-center">
                    <ShieldCheckIcon className="w-5 h-5 text-red-600" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Cybersecurity</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">End-to-end security audits, pen-testing, and compliance monitoring.</p>
                </div>
            </div>

            {/* AI Integration */}
            <div className="flex gap-4 p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-purple-50 flex-shrink-0 flex items-center justify-center">
                    <BoltIcon className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">AI Integration</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Embed LLMs and predictive models directly into your workflow.</p>
                </div>
            </div>

            {/* Business Enterprise Solutions */}
            <div className="flex gap-4 p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-teal-50 flex-shrink-0 flex items-center justify-center">
                    <CubeTransparentIcon className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Enterprise Solutions</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Comprehensive ERP, CRM, and data analytics systems for scale.</p>
                </div>
            </div>

            {/* --- NEW SERVICE 1: Monitoring Services --- */}
            <div className="flex gap-4 p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-green-50 flex-shrink-0 flex items-center justify-center">
                    {/* Using EyeIcon for observability/monitoring */}
                    <ChartBarIcon className="w-5 h-5 text-green-600" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Monitoring Services</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Cloud observability at every phase of the modernization journey for critical insights and intelligence.</p>
                </div>
            </div>
            
            {/* --- NEW SERVICE 2: DR and Business Continuity --- */}
            <div className="flex gap-4 p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-yellow-50 flex-shrink-0 flex items-center justify-center">
                    {/* Using Lifeboat/Rocket/ArrowPath icon for DR/Continuity */}
                    <ShieldLockIcon className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">DR & Business Continuity</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Implementing disaster recovery plans as a core subset of your organization’s business continuity strategy.</p>
                </div>
            </div>

            {/* --- NEW SERVICE 3: Migration and Modernization --- */}
            <div className="flex gap-4 p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-pink-50 flex-shrink-0 flex items-center justify-center">
                    {/* Using Sparkles/Rocket icon for Modernization */}
                    <ArrowUpRightIcon className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Migration & Modernization</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">A growing strategy for businesses involving comprehensive application migration and modernization.</p>
                </div>
            </div>
        </div>
    </div>
</div>

            {/* --- WHY JG AI --- */}
            <div className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-display font-bold text-primary dark:text-white mb-6">Why choose JG AI Research & Development</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            At JG AI we combine deep research-grade expertise, agile engineering, and enterprise-grade infrastructure so you can move faster, scale smarter and stay secure.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {["Deep domain research", "End-to-end development", "Scalable infrastructure", "Marketplace ready"].map((item, i) => (
                            <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-center gap-3">
                                <CheckIcon className="w-5 h-5 text-accent flex-shrink-0" />
                                <span className="font-bold text-slate-900 dark:text-white">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- FAQ SECTION (New) --- */}
            <div className="bg-slate-50 dark:bg-slate-900/50 py-24 border-t border-slate-200 dark:border-slate-800">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-display font-bold text-primary dark:text-white mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <details className="group bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 cursor-pointer">
                            <summary className="font-bold text-lg text-slate-900 dark:text-white list-none flex justify-between items-center">
                                How do you handle data privacy for AI models?
                                <span className="group-open:rotate-180 transition-transform text-slate-400">▼</span>
                            </summary>
                            <p className="text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
                                We adhere to strict data governance protocols. All client data is encrypted at rest and in transit. We offer on-premise deployment options for highly regulated industries, ensuring data never leaves your VPC.
                            </p>
                        </details>
                        <details className="group bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 cursor-pointer">
                            <summary className="font-bold text-lg text-slate-900 dark:text-white list-none flex justify-between items-center">
                                Can you integrate with our existing legacy systems?
                                <span className="group-open:rotate-180 transition-transform text-slate-400">▼</span>
                            </summary>
                            <p className="text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
                                Yes. Our Enterprise Solutions team specializes in modernizing legacy stacks. We build secure API wrappers and microservices bridges to connect your mainframes or older ERPs with modern AI capabilities.
                            </p>
                        </details>
                        <details className="group bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 cursor-pointer">
                            <summary className="font-bold text-lg text-slate-900 dark:text-white list-none flex justify-between items-center">
                                What is the typical timeline for an AI Agent project?
                                <span className="group-open:rotate-180 transition-transform text-slate-400">▼</span>
                            </summary>
                            <p className="text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
                                A Proof of Concept (PoC) typically takes 4-6 weeks. Production deployment depends on complexity but generally ranges from 3 to 6 months, including testing and security audits.
                            </p>
                        </details>
                    </div>
                </div>
            </div>

            {/* --- CTA --- */}
            <div className="w-full bg-primary py-20 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">Ready to transform your business with AI?</h2>
                    <div className="flex justify-center">
                        <button onClick={() => setActivePage('company')} className="bg-accent text-white px-10 py-4 rounded-full font-bold text-sm hover:bg-accent/90 transition-colors shadow-xl">
                            Contact us
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomePage;
