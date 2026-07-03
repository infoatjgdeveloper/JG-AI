
import React, { useState } from 'react';
import { Page } from '../types';
import {
    ArrowRightIcon,
    CheckIcon,
    LogoAWS,
    BoltIcon,
    ChartBarIcon,
    CodeBracketIcon,
    ShieldCheckIcon,
    CloudArrowUpIcon,
    DevicePhoneMobileIcon,
    SphereWireframe,
    RobotIcon,
    CubeTransparentIcon,
    ArrowUpRightIcon,
} from './Icons';

const HomePage: React.FC<{ setActivePage: (page: Page) => void }> = ({ setActivePage: _setActivePage }) => {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const faqs = [
        {
            q: 'How quickly can JGAI deploy an AI chatbot for my business?',
            a: 'Our standard deployment is 48 hours from the moment you sign and share your business documents with us. We train the model on your specific data, deploy it to your website, WhatsApp, or app, and hand it over fully functional. Complex enterprise integrations requiring CRM connectivity or custom API work may take 5 to 7 business days, we’ll tell you upfront if that applies.',
        },
        {
            q: 'What countries does JGAI currently serve?',
            a: 'JGAI currently serves 37+ countries across 6 continents. North American clients (US, Canada, Mexico, Latin America) are served through BRJU Infosec Inc., our US LLC. European clients (UK, Germany, France, Netherlands, Spain, Poland, Italy, and broader EU) are served through IA7 Global Tech, our EU-registered entity. All other markets, India, UAE, Saudi Arabia, Qatar, Singapore, Australia, Nigeria, South Africa, and 15+ more, are served directly through JGAI HQ.',
        },
        {
            q: "How much does JGAI's AI chatbot cost?",
            a: 'The AI Chatbot subscription starts at $199 per month and includes custom training on your data, multi-channel deployment (website + WhatsApp + app), 10+ language support, a real-time analytics dashboard, human agent handoff, and monthly model retraining. Business websites start at $499 one-time. Enterprise Suite pricing is custom-scoped, email info@jgdeveloper.com for a quote.',
        },
        {
            q: 'What separates JGAI from other AI development companies?',
            a: 'Three things. First, our global network: three specialized legal entities across India, North America, and Europe. Second, our research-first methodology: solutions built from first principles using frontier AI research. Third, our accountability model: we track and report on your ROI, not hours billed. Our average client sees a 4.2x return. Our 98% retention rate suggests that’s not a number we made up.',
        },
        {
            q: 'How do I become an Authorized Regional Center (ARC) for JGAI?',
            a: 'The JGAI ARC program is open to established IT companies operating in markets not yet fully covered by the JGAI Group. As an ARC, you receive full access to JGAI’s complete product and service portfolio, the right to co-brand and market as a JGAI Authorized Regional Center, dedicated technical support, and a revenue-sharing structure. Email info@jgdeveloper.com with your company name, region, size, and a brief description of your client base.',
        },
    ];

    return (
        <div className="w-full min-h-screen pt-32 pb-20 overflow-x-hidden">

            {/* =====================================================
                 HERO SECTION (H1)
                 ===================================================== */}
            <section id="home" aria-labelledby="hero-heading" className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 mb-24 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    <div className="lg:w-1/2 animate-fade-up">
                        <div className="inline-flex items-center gap-2 border border-accent/30 bg-accent/5 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8">
                            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true"></div>
                            <span className="font-mono text-xs text-primary dark:text-slate-200 tracking-wide font-bold uppercase">
                                37+ Countries
                            </span>
                        </div>

                        <h1 id="hero-heading" className="font-display text-5xl md:text-7xl lg:text-[4.5rem] text-primary dark:text-white leading-[1.05] tracking-tight mb-8">
                            The World&apos;s Most{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent dark:from-blue-400 dark:to-accent">
                                Trusted AI
                            </span>{' '}
                            Research &amp; Development Company
                        </h1>

                        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-xl mb-10 leading-relaxed">
                            JGAI engineers the intelligent systems that give enterprises an unfair competitive edge. From <strong className="text-primary dark:text-white">custom LLMs and AI chatbots deployed in 48 hours</strong>, to airtight cybersecurity and elite web platforms.we operate across 37+ countries through 3 regional entities, delivering results that permanently change what&apos;s possible for your business.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => scrollTo('products')}
                                className="bg-primary text-white px-8 py-4 rounded-full font-bold text-sm transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 flex items-center gap-2"
                                aria-label="Explore JGAI AI solutions and products"
                            >
                                Explore Solutions <ArrowRightIcon className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => scrollTo('demo')}
                                className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-full font-bold text-sm transition-all hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm"
                                aria-label="Try the free JGAI AI chatbot demo"
                            >
                                Try Free AI Demo
                            </button>
                        </div>

                        {/* Hero Stats Bar */}
                        <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-slate-100 dark:border-slate-800">
                            <div>
                                <dt className="font-mono text-[10px] uppercase tracking-widest text-slate-400">Countries Served</dt>
                                <dd className="font-display font-bold text-3xl text-primary dark:text-white">37+</dd>
                            </div>
                            <div>
                                <dt className="font-mono text-[10px] uppercase tracking-widest text-slate-400">Projects Delivered</dt>
                                <dd className="font-display font-bold text-3xl text-primary dark:text-white">500+</dd>
                            </div>
                            <div>
                                <dt className="font-mono text-[10px] uppercase tracking-widest text-slate-400">Client Retention</dt>
                                <dd className="font-display font-bold text-3xl text-accent">98%</dd>
                            </div>
                            <div>
                                <dt className="font-mono text-[10px] uppercase tracking-widest text-slate-400">Global Support</dt>
                                <dd className="font-display font-bold text-3xl text-primary dark:text-white">24/7</dd>
                            </div>
                        </dl>
                    </div>

                    <div className="lg:w-1/2 relative h-[500px] w-full flex items-center justify-center" aria-hidden="true">
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent rounded-full filter blur-3xl"></div>
                        <SphereWireframe className="w-[120%] h-[120%] text-slate-300 opacity-60 animate-spin-slow" />

                        <div className="absolute top-1/4 -left-4 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 animate-bounce" style={{ animationDuration: '3s' }}>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent"><CheckIcon className="w-4 h-4" /></div>
                                <div>
                                    <p className="text-xs font-bold text-slate-900 dark:text-white">AI Chatbots Deployed</p>
                                    <p className="text-[10px] text-slate-400">In 48 Hours</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-1/3 -right-4 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary"><BoltIcon className="w-4 h-4" /></div>
                                <div>
                                    <p className="text-xs font-bold text-slate-900 dark:text-white">Avg Client ROI</p>
                                    <p className="text-[10px] text-slate-400">4.2x · 67-day payback</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                 TRUST BAND
                 ===================================================== */}
            <div className="w-full border-y border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 py-10 mb-32 overflow-hidden">
                <p className="text-center text-xs font-mono text-slate-400 mb-6 uppercase tracking-widest">
                    AI Research · Enterprise Chatbots · Cybersecurity · Cloud · Web Development
                </p>

                <div className="relative flex overflow-hidden w-full mb-8" aria-hidden="true">
                    <div className="flex animate-scroll whitespace-nowrap gap-12 items-center px-10 text-slate-500 dark:text-slate-400 text-sm font-mono">
                        <span>AI Research &amp; Development</span>
                        <span>·</span>
                        <span>Enterprise AI Chatbots, Live in 48h</span>
                        <span>·</span>
                        <span>Cybersecurity &amp; InfoSec</span>
                        <span>·</span>
                        <span>Web &amp; App Development</span>
                        <span>·</span>
                        <span>Machine Learning &amp; LLMs</span>
                        <span>·</span>
                        <span>37+ Countries Active</span>
                        <span>·</span>
                        <span>24/7 Global Support</span>
                        <span>·</span>
                        <span>Data Engineering &amp; Analytics</span>
                        <span>·</span>
                        <span>SOC as a Service</span>
                        <span>·</span>
                        <span>Cloud Architecture &amp; DevOps</span>
                        <span>·</span>
                        <span>LLM Fine-Tuning</span>
                        <span>·</span>
                        <span>Penetration Testing</span>
                        <span>·</span>
                        <span>Multi-Language AI, 10+ Languages</span>
                    </div>
                </div>

                <div className="relative flex overflow-hidden w-full" aria-hidden="true">
                    <div className="flex animate-scroll-reverse whitespace-nowrap gap-20 items-center px-10 opacity-40">
                        <span className="text-lg font-mono font-bold text-slate-500 dark:text-slate-500">TensorFlow</span>
                        <span className="text-lg font-mono font-bold text-slate-500 dark:text-slate-500">PyTorch</span>
                        <span className="text-lg font-mono font-bold text-slate-500 dark:text-slate-500">Kubernetes</span>
                        <LogoAWS className="h-8 w-auto text-slate-600 dark:text-slate-400" />
                        <span className="text-lg font-mono font-bold text-slate-500 dark:text-slate-500">Azure</span>
                        <span className="text-lg font-mono font-bold text-slate-500 dark:text-slate-500">GCP</span>
                        <span className="text-lg font-mono font-bold text-slate-500 dark:text-slate-500">OpenAI</span>
                        <span className="text-lg font-mono font-bold text-slate-500 dark:text-slate-500">NVIDIA</span>
                        <span className="text-lg font-mono font-bold text-slate-500 dark:text-slate-500">Docker</span>
                        <span className="text-lg font-mono font-bold text-slate-500 dark:text-slate-500">Terraform</span>
                        <span className="text-lg font-mono font-bold text-slate-500 dark:text-slate-500">TensorFlow</span>
                        <span className="text-lg font-mono font-bold text-slate-500 dark:text-slate-500">PyTorch</span>
                        <span className="text-lg font-mono font-bold text-slate-500 dark:text-slate-500">Kubernetes</span>
                    </div>
                </div>
            </div>

            {/* =====================================================
                 AWARDS & CERTIFICATIONS
                 ===================================================== */}
            <section aria-labelledby="awards-heading" className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 mb-32">
                <h2 id="awards-heading" className="sr-only">Awards &amp; Certifications</h2>
                <div className="bg-slate-900 dark:bg-slate-800 rounded-3xl grid grid-cols-2 md:grid-cols-3 gap-px overflow-hidden border border-slate-800">
                    {[
                        { t: 'Top AI Startup', s: 'Emerging Tech Recognition' },
                        { t: 'DPIIT Recognized', s: 'Startup India \u00B7 Govt. of India' },
                        { t: '37+ Countries Served', s: 'Global Delivery Network' },
                    ].map((a, i) => (
                        <div key={i} className="bg-slate-900 dark:bg-slate-800 p-6 text-center flex flex-col items-center justify-center">
                                                        <p className="text-white font-bold text-sm mb-1">{a.t}</p>
                            <p className="text-slate-400 font-mono text-[10px] uppercase tracking-wider">{a.s}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* =====================================================
                 ABOUT / MISSION
                 ===================================================== */}
            <section id="about" aria-labelledby="about-heading" className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">// The Company Behind the Intelligence</p>
                        <h2 id="about-heading" className="text-3xl md:text-5xl font-display font-bold text-primary dark:text-white mb-6">
                            We Don&apos;t Sell AI. We Engineer Dominance.
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                            Most companies automate what exists. JGAI <span className="text-accent font-semibold">rebuilds what&apos;s possible</span>, turning AI research into revenue, security into confidence, and technology into category leadership.
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                            Founded in 2020 as JG AI Research &amp; Development Pvt. Ltd., JGAI has grown from a research-focused AI lab in India into a globally operating enterprise technology group. Today we operate through three specialized entities, JGAI HQ, BRJU Infosec Inc. (North America), and IA7 Global Tech (Europe), forming one of the world&apos;s most comprehensive AI delivery networks.
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                            With 500+ completed deployments, a 98% client retention rate, and an average client ROI of 4.2x, our track record is the clearest argument we have. <strong className="text-primary dark:text-white">We don&apos;t compete on price. We compete on results.</strong>
                        </p>

                        <ul className="space-y-3" role="list">
                            {[
                                { t: 'Research-First Engineering', d: 'every product begins with first-principles thinking, never generic templates' },
                                { t: 'True Global Delivery', d: 'local market expertise in 37+ countries, one unified standard of excellence' },
                                { t: 'Outcome-Obsessed', d: 'we track your ROI, not our billable hours' },
                            ].map((p, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                    <CheckIcon className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                                    <span className="text-slate-700 dark:text-slate-300"><strong className="text-primary dark:text-white">{p.t}</strong>, {p.d}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 border border-slate-100 dark:border-slate-700">
                        <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-6">// JGAI, Five Years of Relentless Growth</p>
                        <ol className="space-y-6" role="list">
                            {[
                                { y: '2020', t: 'JGAI Founded in India', d: 'AI research lab established with a mandate to make frontier intelligence accessible to enterprises globally' },
                                { y: '2021', t: '100 Enterprise Clients, 10+ Countries', d: 'First enterprise AI product launched; international expansion accelerates across Asia and the Middle East' },
                                { y: '2022', t: 'BRJU Infosec Inc., North America', d: 'Dedicated cybersecurity LLC established; JGAI Group structure formally created' },
                                { y: '2023', t: 'IA7 Global Tech, Europe', d: 'EU-based entity launched; advanced AI stack deployed for European enterprise market' },
                                { y: '2024', t: '37+ Countries Reached', d: '500+ projects delivered across 6 continents' },
                                { y: '2025', t: 'Global ARC Program', d: 'Authorized Regional Center framework launched; expanding into 20+ new markets via strategic partners' },
                            ].map((e, i) => (
                                <li key={i} className="flex gap-4">
                                    <span className="font-mono text-sm font-bold text-accent flex-shrink-0 w-12">{e.y}</span>
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-1">{e.t}</p>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{e.d}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>

                        <div className="grid grid-cols-3 gap-4 pt-6 mt-6 border-t border-slate-200 dark:border-slate-700">
                            <div className="text-center">
                                <p className="font-display font-bold text-2xl text-accent">98%</p>
                                <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">Client Retention</p>
                            </div>
                            <div className="text-center">
                                <p className="font-display font-bold text-2xl text-accent">4.2x</p>
                                <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">Avg Client ROI</p>
                            </div>
                            <div className="text-center">
                                <p className="font-display font-bold text-2xl text-accent">48h</p>
                                <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">Chatbot Deploy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                 GLOBAL NETWORK
                 ===================================================== */}
            <section id="network" aria-labelledby="network-heading" className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 mb-32">
                <div className="text-center mb-16">
                    <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">// The JGAI Group Network</p>
                    <h2 id="network-heading" className="text-3xl md:text-5xl font-display font-bold text-primary dark:text-white mb-6">
                        Three Entities. Every Market. One Standard.
                    </h2>
                    <p className="text-lg text-slate-500 dark:text-slate-400 max-w-3xl mx-auto">
                        JGAI doesn&apos;t outsource global delivery to partners, we built it ourselves. Three purpose-built legal entities, each the specialist for their region, all running the same technology backbone.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            tag: '// Global Headquarters · Registered in India',
                            name: 'JGAI R&D Pvt. Ltd.',
                            desc: 'The intellectual and operational engine of the entire group. JGAI HQ drives all AI research, core product development, and strategic direction, while directly serving clients across Asia, the Middle East, Africa, and markets worldwide.',
                            tags: ['AI Research', 'LLM Engineering', 'Product Dev', 'Global HQ'],
                            url: 'https://jgai.jgdeveloper.com',
                            highlighted: true,
                        },
                        {
                            tag: '// Authorized Regional Center · North America LLC',
                            name: 'BRJU Infosec Inc.',
                            desc: 'JGAI’s dedicated North American LLC, purpose-built for enterprise cybersecurity and InfoSec. BRJU Infosec delivers penetration testing, 24/7 SOC monitoring, zero trust architecture, and AI-powered threat intelligence.',
                            tags: ['Cybersecurity', 'SOC as a Service', 'PenTesting', 'Zero Trust'],
                            url: 'https://www.brjuinfosec.com',
                            highlighted: false,
                        },
                        {
                            tag: '// Authorized Regional Center · Europe Pvt. Ltd.',
                            name: 'IA7 Global Tech',
                            desc: 'JGAI’s EU-registered entity built for the European enterprise market. IA7 Global Tech delivers elite AI systems, privacy-focused data platforms, and full-stack digital transformation across the UK, Germany, France, Netherlands, and the wider EU.',
                            tags: ['Elite IT Systems', 'Privacy-Focused AI', 'EU Enterprise', 'UK & Europe'],
                            url: 'https://www.ia7globaltech.eu',
                            highlighted: false,
                        },
                    ].map((c, i) => (
                        <article
                            key={i}
                            className={`p-8 rounded-3xl border transition-all hover:shadow-xl ${c.highlighted
                                ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20'
                                : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700'
                                }`}
                        >
                            <p className={`font-mono text-[10px] uppercase tracking-widest mb-4 ${c.highlighted ? 'text-accent' : 'text-slate-400'}`}>{c.tag}</p>
                            <h3 className={`text-2xl font-display font-bold mb-4 ${c.highlighted ? 'text-white' : 'text-primary dark:text-white'}`}>{c.name}</h3>
                            <p className={`text-sm leading-relaxed mb-6 ${c.highlighted ? 'text-slate-200' : 'text-slate-500 dark:text-slate-400'}`}>{c.desc}</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {c.tags.map((t, j) => (
                                    <span key={j} className={`text-[10px] font-mono px-2 py-1 rounded-full ${c.highlighted ? 'bg-white/10 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}>{t}</span>
                                ))}
                            </div>
                            <a
                                href={c.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 text-sm font-bold ${c.highlighted ? 'text-accent hover:text-white' : 'text-primary dark:text-accent hover:gap-3'} transition-all`}
                                aria-label={`Visit ${c.name} website (opens in new tab)`}
                            >
                                Visit Website <ArrowUpRightIcon className="w-4 h-4" />
                            </a>
                        </article>
                    ))}
                </div>

                {/* ARC Banner */}
                <div className="mt-12 bg-gradient-to-br from-slate-900 to-primary rounded-3xl p-10 md:p-12 text-white">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        <div className="md:col-span-2">
                            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                                Become an Authorized Regional Center, Earn as You Grow
                            </h3>
                            <p className="text-slate-300 leading-relaxed">
                                Are you an established IT company in Southeast Asia, Sub-Saharan Africa, the Gulf, or Latin America? The JGAI ARC program gives you our full product suite, co-branding rights, dedicated technical support, and a revenue-share model, so you can sell enterprise AI under a globally recognised brand.
                            </p>
                        </div>
                        <div className="text-center md:text-right">
                            <a
                                href="mailto:info@jgdeveloper.com?subject=ARC%20Partnership%20Application%20%E2%80%94%20JGAI"
                                className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-accent/90 transition-all"
                            >
                                Apply Now <ArrowRightIcon className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                 SERVICES (6 SERVICE CARDS)
                 ===================================================== */}
            <section id="services" aria-labelledby="services-heading" className="bg-slate-50 dark:bg-slate-900/50 py-24 mb-32">
                <div className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16">
                    <div className="text-center mb-16">
                        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">// What We Build For You</p>
                        <h2 id="services-heading" className="text-3xl md:text-5xl font-display font-bold text-primary dark:text-white mb-6">
                            Six Services. One Goal: Your ROI.
                        </h2>
                        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-3xl mx-auto">
                            Every service JGAI delivers is architected for real-world performance at enterprise scale, with security, compliance, and measurable outcomes built in from day one, not patched in later.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                Icon: RobotIcon,
                                color: 'accent',
                                title: 'AI & Machine Learning',
                                desc: 'We don’t use off-the-shelf models and call it AI. JGAI engineers custom large language models fine-tuned on your proprietary data, delivering domain-specific intelligence that generic solutions cannot match.',
                                features: [
                                    'Custom LLM Development & Domain Fine-Tuning',
                                    'AI Chatbot & Virtual Assistant Platforms',
                                    'Predictive Analytics & Demand Forecasting',
                                    'Computer Vision & Document Intelligence',
                                    'MLOps, Monitoring & Model Lifecycle Management',
                                ],
                            },
                            {
                                Icon: ShieldCheckIcon,
                                color: 'red',
                                title: 'Cybersecurity & InfoSec',
                                desc: 'BRJU Infosec Inc., JGAI’s North American cybersecurity division, operates at a level most firms can’t match. We’ve uncovered critical vulnerabilities that Fortune-tier auditors missed, systematically.',
                                features: [
                                    'Enterprise Penetration Testing & Red Teaming',
                                    '24/7 SOC as a Service, 15min response SLA',
                                    'Zero Trust Architecture Design & Implementation',
                                    'HIPAA Compliance & Data Protection',
                                    'AI-Powered Threat Detection & Intelligence',
                                ],
                            },
                            {
                                Icon: DevicePhoneMobileIcon,
                                color: 'indigo',
                                title: 'Web & App Development',
                                desc: 'We build digital products that perform, convert, and last. Enterprise portals, SaaS platforms, and mobile applications developed with AI at their core, not bolted on as a feature.',
                                features: [
                                    'Enterprise Web Platforms & Customer Portals',
                                    'Mobile Applications, iOS & Android',
                                    'SaaS Product Engineering from Zero to Launch',
                                    'API Architecture, GraphQL & Microservices',
                                    'E-Commerce with AI-Powered Personalisation',
                                ],
                            },
                            {
                                Icon: BoltIcon,
                                color: 'purple',
                                title: 'AI Chatbot Solutions',
                                desc: 'Generic chatbots frustrate customers. JGAI chatbots close them. Trained exclusively on your business documents, product catalogue, FAQs, and tone of voice, in 10+ languages, on every channel.',
                                features: [
                                    'Custom-Trained Website AI Assistants, live in 48h',
                                    'WhatsApp, Telegram & Messenger AI Bots',
                                    'Customer Support Automation & Ticket Deflection',
                                    'AI-Powered Lead Qualification & Sales Bots',
                                    '10+ Languages, Auto-Detected, Human Handoff',
                                ],
                            },
                            {
                                Icon: CloudArrowUpIcon,
                                color: 'blue',
                                title: 'Cloud Architecture & DevOps',
                                desc: 'AI at scale demands infrastructure built for it. JGAI designs cloud environments optimised for ML workloads, with Kubernetes orchestration, automated CI/CD, infrastructure-as-code, and 99.9% uptime SLAs.',
                                features: [
                                    'Cloud Migration & Modernisation (AWS, Azure, GCP)',
                                    'Kubernetes Cluster Design & Orchestration',
                                    'CI/CD Pipeline Engineering & GitOps',
                                    'Infrastructure as Code, Terraform & Pulumi',
                                    'Cloud Cost Optimisation & FinOps Strategy',
                                ],
                            },
                            {
                                Icon: ChartBarIcon,
                                color: 'green',
                                title: 'Data Engineering & Analytics',
                                desc: 'Decisions made on bad data are worse than no decisions at all. JGAI builds data foundations your organisation can actually trust, real-time pipelines, clean warehouses, and analytics dashboards.',
                                features: [
                                    'Enterprise Data Warehouse & Lakehouse Architecture',
                                    'Real-Time BI Dashboards & Executive Reporting',
                                    'ETL/ELT Pipeline Development & Orchestration',
                                    'Data Quality, Governance & Strategy Consulting',
                                    'AI-Powered Anomaly Detection & Forecasting',
                                ],
                            },
                        ].map((s, i) => {
                            const colorMap: Record<string, string> = {
                                accent: 'bg-accent/10 text-accent',
                                red: 'bg-red-50 text-red-600',
                                indigo: 'bg-indigo-50 text-indigo-600',
                                purple: 'bg-purple-50 text-purple-600',
                                blue: 'bg-blue-50 text-blue-600',
                                green: 'bg-green-50 text-green-600',
                            };
                            return (
                                <article key={i} className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-8 hover:shadow-xl transition-shadow flex flex-col">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${colorMap[s.color]}`}>
                                        <s.Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{s.title}</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5">{s.desc}</p>
                                    <ul className="space-y-2 mt-auto" role="list">
                                        {s.features.map((f, j) => (
                                            <li key={j} className="flex gap-2 items-start text-xs text-slate-600 dark:text-slate-400">
                                                <CheckIcon className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                                                <span>{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =====================================================
                 HOW WE WORK
                 ===================================================== */}
            <section aria-labelledby="process-heading" className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 mb-32">
                <div className="text-center mb-16">
                    <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">// The JGAI Method</p>
                    <h2 id="process-heading" className="text-3xl md:text-5xl font-display font-bold text-primary dark:text-white">
                        Clarity at Every Step. No Surprises. Ever.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-slate-100 dark:bg-slate-800 -z-10"></div>
                    {[
                        { step: '01', title: 'Deep Discovery', desc: 'We spend real time learning your business, the goals that matter, the pain points costing you money, and the technology landscape you’re working within. No templates. No assumptions.' },
                        { step: '02', title: 'Bespoke Design', desc: 'Our architects build a technology roadmap engineered specifically for you, with defined milestones, measurable success criteria, and pricing that has no hidden clauses.' },
                        { step: '03', title: 'Agile Build', desc: 'Weekly sprint cycles, live demos at every stage, and a direct communication line to your lead engineer. You see progress constantly, never a black box.' },
                        { step: '04', title: 'Launch & Scale', desc: 'We don’t hand over a ZIP file and disappear. Post-launch, our 24/7 global support team monitors performance, patches issues, and evolves your solution as your business grows.' },
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-800 border-4 border-slate-50 dark:border-slate-700 text-accent font-display font-bold text-xl flex items-center justify-center mb-6 shadow-sm relative z-10">
                                {item.step}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed px-2">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* =====================================================
                 PRODUCTS
                 ===================================================== */}
            <section id="products" aria-labelledby="products-heading" className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 mb-32">
                <div className="text-center mb-16">
                    <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">// Ready-to-Deploy Products</p>
                    <h2 id="products-heading" className="text-3xl md:text-5xl font-display font-bold text-primary dark:text-white mb-6">
                        Go Live in Days, Not Quarters.
                    </h2>
                    <p className="text-lg text-slate-500 dark:text-slate-400 max-w-3xl mx-auto">
                        Our productized solutions are pre-engineered, battle-tested across 37+ markets, and ready for your business today.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Product 1: Business Website */}
                    <article className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 p-8 hover:shadow-xl transition-shadow flex flex-col" itemScope itemType="https://schema.org/Product">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                            <CodeBracketIcon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2" itemProp="name">Business Website</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4" itemProp="description">
                            A conversion-engineered, AI-powered, SEO-optimised business website, professionally designed and live within 7 business days. Built to rank, built to convert.
                        </p>
                        <div className="mb-6" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                            <span className="font-display font-bold text-3xl text-primary dark:text-white">from $<span itemProp="price">499</span></span>
                            <span className="text-sm text-slate-400 ml-2">one-time</span>
                            <meta itemProp="priceCurrency" content="USD" />
                            <meta itemProp="availability" content="https://schema.org/InStock" />
                        </div>
                        <ul className="space-y-2 mb-6 flex-1" role="list">
                            {[
                                'Up to 15 custom-designed, branded pages',
                                'Full technical + on-page SEO by JGAI experts',
                                'Integrated JGAI AI chatbot, live on launch day',
                                'CMS dashboard, update content without code',
                                'Mobile-first, Core Web Vitals optimised',
                                '3 months dedicated post-launch support',
                            ].map((f, j) => (
                                <li key={j} className="flex gap-2 items-start text-sm text-slate-600 dark:text-slate-400">
                                    <CheckIcon className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                                    <span>{f}</span>
                                </li>
                            ))}
                        </ul>
                        <a
                            href="mailto:info@jgdeveloper.com?subject=Business%20Website%20Package%20%E2%80%94%20JGAI"
                            className="inline-flex items-center justify-center gap-2 bg-slate-900 dark:bg-white dark:text-slate-900 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-slate-800 transition-colors"
                        >
                            Request a Website <ArrowRightIcon className="w-4 h-4" />
                        </a>
                    </article>

                    {/* Product 2: AI Chatbot (FEATURED) */}
                    <article className="bg-gradient-to-br from-primary to-slate-900 text-white rounded-3xl p-8 relative shadow-2xl shadow-primary/20 flex flex-col" itemScope itemType="https://schema.org/Product">
                        <span className="absolute -top-3 right-6 bg-accent text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Most Popular</span>
                        <div className="w-12 h-12 rounded-xl bg-accent/20 text-accent flex items-center justify-center mb-5">
                            <RobotIcon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2" itemProp="name">AI Chatbot</h3>
                        <p className="text-sm text-slate-200 mb-4" itemProp="description">
                            Your own AI assistant, trained exclusively on your data, deployed to your website and WhatsApp, live within 48 hours. The last customer service hire you&apos;ll ever need to make.
                        </p>
                        <div className="mb-6" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                            <span className="font-display font-bold text-3xl">from $<span itemProp="price">199</span></span>
                            <span className="text-sm text-slate-300 ml-2">/month</span>
                            <meta itemProp="priceCurrency" content="USD" />
                            <meta itemProp="availability" content="https://schema.org/InStock" />
                        </div>
                        <ul className="space-y-2 mb-6 flex-1" role="list">
                            {[
                                'Trained on your documents, FAQs & tone',
                                'Multi-channel: website + WhatsApp + app',
                                '10+ languages, auto-detected per visitor',
                                'Real-time conversation analytics dashboard',
                                'Seamless human agent handoff when needed',
                                'Monthly model retraining on new data',
                            ].map((f, j) => (
                                <li key={j} className="flex gap-2 items-start text-sm text-slate-200">
                                    <CheckIcon className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                                    <span>{f}</span>
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => scrollTo('demo')}
                            className="inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-accent/90 transition-colors"
                        >
                            Try It Live, Free <ArrowRightIcon className="w-4 h-4" />
                        </button>
                    </article>

                    {/* Product 3: Enterprise AI Suite */}
                    <article className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 p-8 hover:shadow-xl transition-shadow flex flex-col" itemScope itemType="https://schema.org/Product">
                        <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5">
                            <CubeTransparentIcon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2" itemProp="name">Enterprise AI Suite</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4" itemProp="description">
                            The complete AI transformation package for large organisations, custom-scoped, multi-entity delivered, and built to reshape your competitive position permanently.
                        </p>
                        <div className="mb-6">
                            <span className="font-display font-bold text-3xl text-primary dark:text-white">Custom</span>
                            <span className="text-sm text-slate-400 ml-2">Scope</span>
                        </div>
                        <ul className="space-y-2 mb-6 flex-1" role="list">
                            {[
                                'Custom AI model & LLM development',
                                'Cybersecurity posture & SOC monitoring',
                                'Dedicated senior account manager & CTO access',
                                'SLA-backed 24/7 global priority support',
                                'Multi-region deployment, all 3 JGAI entities',
                                'Quarterly business & technology reviews',
                            ].map((f, j) => (
                                <li key={j} className="flex gap-2 items-start text-sm text-slate-600 dark:text-slate-400">
                                    <CheckIcon className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                                    <span>{f}</span>
                                </li>
                            ))}
                        </ul>
                        <a
                            href="mailto:info@jgdeveloper.com?subject=Enterprise%20AI%20Suite%20%E2%80%94%20Strategy%20Call"
                            className="inline-flex items-center justify-center gap-2 bg-slate-900 dark:bg-white dark:text-slate-900 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-slate-800 transition-colors"
                        >
                            Book a Strategy Call <ArrowRightIcon className="w-4 h-4" />
                        </a>
                    </article>
                </div>
            </section>

            {/* =====================================================
                 DEMO TEASER
                 ===================================================== */}
            <section id="demo" aria-labelledby="demo-heading" className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">// Experience It Yourself</p>
                        <h2 id="demo-heading" className="text-3xl md:text-5xl font-display font-bold text-primary dark:text-white mb-6">
                            This Is the AI Your Customers Will Talk To.
                        </h2>
                        <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                            What you&apos;re about to chat with is a live instance of the same AI technology powering enterprise deployments across 37+ countries. Ask it anything, from JGAI&apos;s services and pricing to deployment timelines and compliance.
                        </p>

                        <div className="space-y-5 mb-8">
                            {[
                                { t: '48-Hour Deployment, Contractually Guaranteed', d: 'Upload your documents on day 1. Your AI chatbot, trained on your specific business, speaking in your brand’s voice, goes live on day 2.' },
                                { t: '10+ Languages, No Extra Configuration', d: 'Your AI detects each visitor’s language automatically, English, Hindi, Arabic, Spanish, French, German, Mandarin, and more.' },
                                { t: 'Analytics That Actually Tell You Something', d: 'Track every conversation, capture every qualified lead, measure resolution rates from a live dashboard updated in real time.' },
                            ].map((f, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                                        <CheckIcon className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 dark:text-white mb-1">{f.t}</h3>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{f.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <button onClick={() => scrollTo('products')} className="bg-primary text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-primary/90 transition-colors">
                                Get Your AI Chatbot
                            </button>
                            <a
                                href="mailto:info@jgdeveloper.com?subject=Chatbot%20Demo%20Call%20%E2%80%94%20JGAI"
                                className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-6 py-3 rounded-full font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
                            >
                                Book a Demo Call
                            </a>
                        </div>
                    </div>

                    <div className="bg-slate-900 rounded-3xl p-6 shadow-2xl">
                        <div className="flex items-center gap-2 pb-4 mb-4 border-b border-slate-800">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                            <span className="font-mono text-[10px] text-slate-500 ml-2">jgai-enterprise v5.2.0, global inference</span>
                        </div>
                        <div className="font-mono text-[12px] space-y-2 text-slate-300">
                            <p><span className="text-accent">❯</span> jgai deploy --client &quot;enterprise&quot; --sla 99.9</p>
                            <p className="text-slate-500">✦ Bootstrapping JGAI Enterprise Core...</p>
                            <p className="text-green-400">✔ AI inference engine: 42ms p99 latency</p>
                            <p className="text-green-400">✔ 37 active regions, all nodes healthy</p>
                            <p className="text-green-400">✔ BRJU Infosec: threat shield armed</p>
                            <p className="text-green-400">✔ IA7 EU: regional compliance, green</p>
                            <p><span className="text-accent">❯</span> jgai.run(&quot;competitive_advantage_analysis&quot;)</p>
                            <p className="text-blue-400">↳ Analyzing 500+ enterprise deployments...</p>
                            <p className="text-yellow-300">↳ Avg client ROI: 4.2x · Payback: 67 days</p>
                            <p><span className="text-accent animate-pulse">▌</span></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                 GLOBAL PRESENCE
                 ===================================================== */}
            <section id="global" aria-labelledby="global-heading" className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 mb-32">
                <div className="text-center mb-16">
                    <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">// Our Global Footprint</p>
                    <h2 id="global-heading" className="text-3xl md:text-5xl font-display font-bold text-primary dark:text-white mb-6">
                        We&apos;re Already in Your Market. Probably.
                    </h2>
                    <p className="text-lg text-slate-500 dark:text-slate-400 max-w-3xl mx-auto">
                        37+ countries. 6 continents. 3 regional entities. Whether you&apos;re in Dubai, Dallas, Delhi, Dublin, or Dhaka, JGAI has a team, a legal entity, and a compliance framework built for your jurisdiction.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
                    {[
                        { region: 'South Asia', countries: ['India', 'Nepal', 'Bhutan'] },
                        { region: 'The Americas', countries: ['United States', 'Canada', 'Mexico', 'Colombia', 'Brazil', 'Argentina'] },
                        { region: 'Europe & UK', countries: ['United Kingdom', 'Germany', 'France', 'Netherlands', 'Spain', 'Poland', 'Italy'] },
                        { region: 'Middle East', countries: ['United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman'] },
                        { region: 'Asia Pacific & Africa', countries: ['Singapore', 'Malaysia', 'Indonesia', 'Australia', 'Nigeria', 'South Africa', 'Kenya', '+ 10 more markets'] },
                    ].map((c, i) => (
                        <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                            <h3 className="font-mono text-[11px] uppercase tracking-widest text-accent mb-4">{c.region}</h3>
                            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400" role="list">
                                {c.countries.map((country, j) => (
                                    <li key={j} className={country.startsWith('+') ? 'text-accent font-semibold' : ''}>{country}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <dl className="bg-slate-900 rounded-3xl grid grid-cols-2 md:grid-cols-5 gap-px overflow-hidden border border-slate-800">
                    {[
                        { v: '37+', l: 'Active Countries' },
                        { v: '6', l: 'Continents' },
                        { v: '3', l: 'Legal Entities' },
                        { v: '500+', l: 'Projects Delivered' },
                        { v: '24/7', l: 'Follow-the-Sun Support' },
                    ].map((s, i) => (
                        <div key={i} className="bg-slate-900 p-6 text-center">
                            <dt className="font-mono text-[10px] uppercase tracking-widest text-slate-400 order-2">{s.l}</dt>
                            <dd className="font-display font-bold text-3xl md:text-4xl text-accent mb-1">{s.v}</dd>
                        </div>
                    ))}
                </dl>
            </section>

            {/* =====================================================
                 TESTIMONIALS
                 ===================================================== */}
            <section id="testimonials" aria-labelledby="testimonials-heading" className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 mb-32">
                <div className="text-center mb-16">
                    <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">// Verified Client Results</p>
                    <h2 id="testimonials-heading" className="text-3xl md:text-5xl font-display font-bold text-primary dark:text-white">
                        Numbers Don&apos;t Lie. Neither Do Our Clients.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            quote: 'JGAI deployed a fully trained AI support assistant across our entire operation in under 72 hours, exactly as promised. Customer response times dropped by 74%, first-contact resolution hit 91%, and we were seeing measurable ROI before the end of the first month.',
                            name: 'Ahmed R.',
                            role: 'CTO, E-Commerce Platform · Dubai, UAE',
                        },
                        {
                            quote: 'BRJU Infosec conducted the most thorough security audit I’ve ever witnessed. They found 23 critical vulnerabilities that two previous security firms had completely missed. We closed three major enterprise contracts within 90 days.',
                            name: 'Sarah K.',
                            role: 'CEO, SaaS Platform · Toronto, Canada',
                        },
                        {
                            quote: 'IA7 Global Tech built our secure enterprise AI data platform entirely from scratch, on time, on budget, and without a single security incident. The platform now processes 2 million client records daily.',
                            name: 'Marcus L.',
                            role: 'VP Engineering, Fintech Firm · Berlin, Germany',
                        },
                    ].map((t, i) => (
                        <figure key={i} className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-8 flex flex-col" itemScope itemType="https://schema.org/Review">
                            <div className="flex gap-1 mb-4 text-yellow-400" aria-label="5 out of 5 stars">
                                {[...Array(5)].map((_, j) => (
                                    <span key={j} aria-hidden="true">★</span>
                                ))}
                                <meta itemProp="reviewRating" content="5" />
                            </div>
                            <blockquote className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 italic" itemProp="reviewBody">
                                &ldquo;{t.quote}&rdquo;
                            </blockquote>
                            <figcaption className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700" itemProp="author" itemScope itemType="https://schema.org/Person">
                                <p className="font-bold text-slate-900 dark:text-white" itemProp="name">{t.name}</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">{t.role}</p>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </section>

            {/* =====================================================
                 FAQ, Schema.org FAQPage markup
                 ===================================================== */}
            <section id="faq" aria-labelledby="faq-heading" className="bg-slate-50 dark:bg-slate-900/50 py-24 border-y border-slate-200 dark:border-slate-800">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">// Frequently Asked Questions</p>
                        <h2 id="faq-heading" className="text-3xl md:text-5xl font-display font-bold text-primary dark:text-white">
                            Your Questions, Answered Honestly.
                        </h2>
                    </div>

                    <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
                                itemScope
                                itemProp="mainEntity"
                                itemType="https://schema.org/Question"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                                    aria-expanded={openFaq === i}
                                    aria-controls={`faq-answer-${i}`}
                                >
                                    <h3 className="font-bold text-base md:text-lg text-slate-900 dark:text-white" itemProp="name">
                                        {faq.q}
                                    </h3>
                                    <span className={`text-slate-400 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} aria-hidden="true">▼</span>
                                </button>
                                <div
                                    id={`faq-answer-${i}`}
                                    className={`overflow-hidden transition-all ${openFaq === i ? 'max-h-[500px]' : 'max-h-0'}`}
                                    itemScope
                                    itemProp="acceptedAnswer"
                                    itemType="https://schema.org/Answer"
                                >
                                    <p className="px-6 pb-6 text-slate-600 dark:text-slate-300 leading-relaxed" itemProp="text">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =====================================================
                 CTA
                 ===================================================== */}
            <section id="contact" aria-labelledby="cta-heading" className="w-full bg-primary py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} aria-hidden="true"></div>

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 id="cta-heading" className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        While You&apos;re Reading This, Your Competitors Are Deploying AI.
                    </h2>
                    <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        The window to gain an AI-driven competitive advantage is open, but it doesn&apos;t stay open forever. Start with a free demo or a 30-minute strategy call. No obligation. No sales pitch. Just a genuine conversation about what&apos;s possible.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mb-6">
                        <button onClick={() => scrollTo('demo')} className="bg-accent text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-accent/90 transition-colors shadow-xl">
                            Experience the AI Demo
                        </button>
                        <a
                            href="mailto:info@jgdeveloper.com?subject=JGAI%20Strategy%20Call%20Request"
                            className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full font-bold text-sm hover:bg-white/20 transition-colors"
                        >
                            Book a Free Strategy Call
                        </a>
                    </div>
                    <p className="text-xs font-mono text-slate-400">
                        No sales pitch · No commitment required · Free 30-min call · 37+ countries served · Results in 48 hours
                    </p>
                </div>
            </section>

        </div>
    );
};

export default HomePage;
