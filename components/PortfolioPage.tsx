
import React from 'react';

const PortfolioPage: React.FC = () => {
    const services = [
        {
            title: "Web, App & E-commerce",
            icon: "🌐",
            link: "https://www.notion.so/Web-App-E-commerce-Portfolio-33fadd43948581fb85f4cbf3e7ef9638?pvs=21",
            description: "Modern, responsive web applications and scalable e-commerce platforms built with cutting-edge tech."
        },
        {
            title: "AI & Blockchain",
            icon: "🤖",
            link: "https://www.notion.so/AI-Blockchain-Portfolio-33fadd439485814fb82acc5232cd1458?pvs=21",
            description: "Intelligent AI-native solutions and secure blockchain architectures for the next generation of business."
        },
        {
            title: "Software Development",
            icon: "⚙️",
            link: "https://www.notion.so/Software-Development-Portfolio-33fadd439485815c9cbef88f8748b4fd?pvs=21",
            description: "Custom enterprise software solutions tailored to streamline your business operations."
        },
        {
            title: "Cloud Computing",
            icon: "☁️",
            link: "https://www.notion.so/Cloud-Computing-Portfolio-33fadd43948581efabb5f20f6ee6ff25?pvs=21",
            description: "Scalable cloud infrastructure and DevOps services to ensure 99.9% uptime and global reach."
        },
        {
            title: "Cybersecurity",
            icon: "🔐",
            link: "https://www.notion.so/Cybersecurity-Portfolio-33fadd43948581f1bf36efda950a41f3?pvs=21",
            description: "Enterprise-grade security protocols to protect your business assets from evolving threats."
        }
    ];

    const techArsenal = [
        { layer: "Frontend", techs: "React · Next.js · Vue · Angular · Flutter · TypeScript · Svelte · React Native" },
        { layer: "Backend", techs: "Node.js · Python · Java · .NET · Go · FastAPI · Express.js · NestJS · Spring Boot · Django" },
        { layer: "Cloud", techs: "AWS · Azure · GCP · Docker · Kubernetes · Terraform · CI/CD · Jenkins · GitHub Actions · Serverless" },
        { layer: "AI / ML", techs: "TensorFlow · PyTorch · LangChain · OpenAI · Hugging Face · RAG · Vector DBs · LLM Fine-tuning · Computer Vision" },
        { layer: "Database", techs: "PostgreSQL · MongoDB · Redis · MySQL · Supabase · Firebase · DynamoDB · Elasticsearch" },
        { layer: "Security", techs: "OWASP · Zero Trust · Penetration Testing · DevSecOps · IAM · OAuth2 · JWT · SOC 2 · Encryption" },
        { layer: "Design", techs: "Figma · Adobe XD · UI/UX Strategy · Design Systems" },
        { layer: "Analytics", techs: "Power BI · Tableau · Apache Spark · Kafka · Airflow · BigQuery" },
    ];

    const metrics = [
        { label: "Countries Served", value: "37+", icon: "🌍" },
        { label: "Projects Delivered", value: "100+", icon: "🚀" },
        { label: "Client Satisfaction", value: "99%", icon: "⭐" },
        { label: "Support", value: "24 / 7 / 365", icon: "🕐" },
    ];

    return (
        <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto space-y-24">
            {/* Hero Section */}
            <section className="text-center space-y-6 animate-fade-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 dark:bg-primary/20 border border-primary/10 dark:border-primary/30 text-primary dark:text-blue-400 text-sm font-semibold mb-4">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    DPIIT Registered Indian IT Company
                </div>
                <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
                    Company <span className="text-primary dark:text-blue-400 underline decoration-accent/30">Portfolio</span>
                </h1>
                <p className="max-w-3xl mx-auto text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                    Trusted by clients across 37+ countries. We build world-class technology solutions — from AI-powered platforms to bulletproof cybersecurity.
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                    <a 
                        href="https://tropical-nigella-509.notion.site/Company-Portfolio-336add439485811282d4ec990ef2a09d?pvs=73" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-primary text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-primary/25"
                    >
                        View Full Portfolio Book
                    </a>
                    <a 
                        href="https://calendly.com/infoatjgdeveloper/30min" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-8 py-3 border-2 border-primary text-primary dark:text-blue-400 dark:border-blue-400 font-bold rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                    >
                        Free Consultation
                    </a>
                </div>
            </section>

            {/* Impact Metrics */}
            <section className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {metrics.map((metric, idx) => (
                        <div key={idx} className="glass-card p-6 rounded-3xl text-center border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-800/50 hover:dark:bg-slate-800/80 transition-colors duration-300">
                            <div className="text-3xl mb-2">{metric.icon}</div>
                            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1 font-display">{metric.value}</div>
                            <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{metric.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Services Grid */}
            <section className="space-y-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">Our Expertise</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Explore our specialized domains and see how we deliver excellence across the tech spectrum.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <a 
                            key={idx} 
                            href={service.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative glass-card p-8 rounded-4xl border-slate-200 dark:border-slate-700/50 bg-white/50 dark:bg-slate-800/40 hover:dark:bg-slate-800/60 transition-all duration-500 hover:-translate-y-2 overflow-hidden block"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 group-hover:bg-primary/10 rounded-bl-full transition-colors duration-500"></div>
                            <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors uppercase tracking-tight">{service.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 font-medium uppercase tracking-tight">
                                {service.description}
                            </p>
                            <span className="inline-flex items-center text-primary dark:text-blue-400 font-bold text-sm">
                                View Portfolio <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                            </span>
                        </a>
                    ))}
                </div>
            </section>

            {/* Tech Arsenal */}
            <section className="glass-card rounded-[3rem] p-8 md:p-14 animate-fade-up border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/60 overflow-hidden relative" style={{ animationDelay: '0.6s' }}>
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"></div>
                <div className="relative z-10 space-y-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white uppercase tracking-tight">Tech Arsenal</h2>
                            <p className="text-slate-600 dark:text-slate-400 max-w-lg uppercase tracking-tight font-medium">We use the world's most advanced tools to build bulletproof, future-ready solutions.</p>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12">
                        {techArsenal.map((tech, idx) => (
                            <div key={idx} className="space-y-3 group">
                                <h4 className="text-sm font-bold text-primary dark:text-blue-400 tracking-[0.2em] uppercase">{tech.layer}</h4>
                                <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed uppercase tracking-tight group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                                    {tech.techs}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us & Process */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <section className="space-y-8 animate-fade-up" style={{ animationDelay: '0.7s' }}>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white uppercase tracking-tight">Why Clients Choose Us</h2>
                    <div className="space-y-6">
                        {[
                            { title: "Results-Driven Approach", desc: "Every solution we build is tied directly to your business goals. We measure success by your outcomes." },
                            { title: "AI-Native DNA", desc: "We don't bolt AI on — we architect intelligence into the foundation of your product from day one." },
                            { title: "Security-First Engineering", desc: "Security isn't an afterthought — it's baked into every layer of every solution we build." },
                            { title: "Agile & Fast Delivery", desc: "Sprint-based delivery with regular updates, demos, and on-time execution — every single time." }
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-4 group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-blue-400 font-bold group-hover:bg-primary group-hover:text-white transition-all">
                                    {idx + 1}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-tight">{item.title}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed uppercase tracking-tight">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="glass-card rounded-[3rem] p-10 space-y-8 animate-fade-up border-slate-200 dark:border-slate-700 bg-slate-950 text-white" style={{ animationDelay: '0.8s' }}>
                    <h2 className="text-3xl font-display font-bold uppercase tracking-tight">Our 7-Step Process</h2>
                    <div className="space-y-4">
                        {[
                            "Discovery Call — Understand vision & goals",
                            "Solution Design — Architect tech stack",
                            "Proposal & Pricing — Transparent costs",
                            "Agile Development — Sprint-based builds",
                            "QA & Testing — Rigorous quality assurance",
                            "Launch & Handover — Smooth go-live",
                            "Ongoing Support — 24/7 maintenance"
                        ].map((step, idx) => (
                            <div key={idx} className="flex items-center gap-4 py-2 border-b border-white/5 last:border-0 uppercase tracking-tight text-sm font-medium">
                                <span className="w-6 h-6 rounded-full bg-accent text-slate-900 flex items-center justify-center text-xs font-bold leading-none">{idx + 1}</span>
                                {step}
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Quick Enquiry & Contact */}
            <section className="animate-fade-up" style={{ animationDelay: '0.9s' }}>
                <div className="glass-card rounded-[3rem] overflow-hidden grid grid-cols-1 md:grid-cols-3 border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/20">
                    <div className="p-10 md:p-14 md:col-span-2 space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white uppercase tracking-tight">Quick Enquiry</h2>
                            <p className="text-slate-600 dark:text-slate-400 max-w-md uppercase tracking-tight font-medium">Copy and send this template to info@jgdeveloper.com — we respond within 24 hours.</p>
                        </div>
                        <div className="relative group">
                            <pre className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl text-sm text-slate-700 dark:text-slate-300 font-mono overflow-x-auto border border-slate-200 dark:border-slate-700">
{`Hi JG AI R&D Team,

Service Needed: [Web / Software / Cloud / AI / Cybersecurity]
Project Overview: 
Budget Range: 
Timeline: 
Company / Name: 
Country: 
Contact Number: `}
                            </pre>
                            <button 
                                onClick={() => {
                                    navigator.clipboard.writeText(`Hi JG AI R&D Team,

Service Needed: [Web / Software / Cloud / AI / Cybersecurity]
Project Overview: 
Budget Range: 
Timeline: 
Company / Name: 
Country: 
Contact Number: `);
                                    alert("Template copied to clipboard!");
                                }}
                                className="absolute top-4 right-4 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-sm uppercase tracking-tight"
                            >
                                Copy Template
                            </button>
                        </div>
                    </div>
                    <div className="bg-primary p-10 md:p-14 text-white flex flex-col justify-between space-y-12">
                        <h3 className="text-2xl font-display font-bold uppercase tracking-tight">Direct Contact</h3>
                        <div className="space-y-6">
                            <div className="space-y-1">
                                <p className="text-blue-200 text-xs font-bold uppercase tracking-widest">Email</p>
                                <a href="mailto:info@jgdeveloper.com" className="text-lg font-bold hover:text-accent transition-colors">info@jgdeveloper.com</a>
                            </div>
                            <div className="space-y-1">
                                <p className="text-blue-200 text-xs font-bold uppercase tracking-widest">Phone / WhatsApp</p>
                                <p className="text-lg font-bold">+91 9978442448</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-blue-200 text-xs font-bold uppercase tracking-widest">Website</p>
                                <a href="http://jgai.jgdeveloper.com" className="text-lg font-bold hover:text-accent transition-colors">jgai.jgdeveloper.com</a>
                            </div>
                        </div>
                        <a 
                            href="https://calendly.com/infoatjgdeveloper/30min" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full py-4 bg-accent text-slate-900 font-bold rounded-2xl text-center hover:scale-[1.02] transition-transform shadow-lg shadow-accent/20 uppercase tracking-tight underline"
                        >
                            Book Consultation →
                        </a>
                    </div>
                </div>
            </section>

            <footer className="text-center text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-[0.2em] pb-10">
                © 2025 JG AI Research & Development Pvt Ltd · Serving 37+ Countries
            </footer>
        </div>
    );
};

export default PortfolioPage;
