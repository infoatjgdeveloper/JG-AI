import React from 'react';
import { 
    ChartBarIcon, 
    ShieldCheckIcon, 
    DocumentTextIcon, 
    ArrowUpRightIcon, 
    SphereWireframe,
    ArrowRightIcon,
    CpuChipIcon,
    CubeTransparentIcon
} from './Icons'; // Adjust import path based on your file structure

const InvestorsPage = () => {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-accent selection:text-primary">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                            </span>
                            Series A Funding Round Open
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
                            Investing in the <span className="text-accent">Autonomous</span> Future.
                        </h1>
                        <p className="text-xl text-white/60 leading-relaxed mb-10">
                            We are building the infrastructure for the next era of AI. Join us as we scale 
                            enterprise-grade intelligence to millions of users worldwide.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#documents" className="px-8 py-4 bg-white text-primary rounded-full font-bold hover:bg-accent transition-all flex items-center gap-2">
                                Access Pitch Deck <ArrowRightIcon className="w-4 h-4" />
                            </a>
                            <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all">
                                Schedule Briefing
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Background Sphere Decoration */}
                <SphereWireframe className="absolute top-20 right-[-10%] w-[600px] h-[600px] text-accent/10 opacity-50" />
            </section>

            {/* Growth Metrics Section */}
            <section className="py-20 px-6 border-y border-white/5 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: 'Revenue Growth', value: '320%', icon: ChartBarIcon },
                            { label: 'Active Users', value: '1.2M+', icon: CubeTransparentIcon },
                            { label: 'Retention Rate', value: '94%', icon: ShieldCheckIcon },
                            { label: 'Compute Power', value: '25 PFLOPS', icon: CpuChipIcon },
                        ].map((stat, i) => ( stat &&
                            <div key={i} className="space-y-2">
                                <div className="flex items-center gap-2 text-white/40">
                                    <stat.icon className="w-4 h-4" />
                                    <span className="text-[10px] uppercase tracking-widest font-bold">{stat.label}</span>
                                </div>
                                <div className="text-3xl md:text-4xl font-display font-bold">{stat.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Document Section (Pitch Deck & Drive Links) */}
            <section id="documents" className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-display font-bold mb-4">Investor Relations Vault</h2>
                            <p className="text-white/50">Confidential documents and resources for qualified investors.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Primary Pitch Deck */}
                        <div className="col-span-1 md:col-span-2 p-8 bg-primary rounded-3xl border border-white/10 relative overflow-hidden group">
                            <div className="relative z-10">
                                <DocumentTextIcon className="w-12 h-12 text-accent mb-6" />
                                <h3 className="text-2xl font-bold mb-2">Strategic Pitch Deck 2024</h3>
                                <p className="text-white/50 mb-8 max-w-md">Our comprehensive vision, market analysis, financial projections, and product roadmap for the next 36 months.</p>
                                <a 
                                    href="YOUR_DRIVE_LINK_HERE" 
                                    target="_blank" 
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary rounded-full font-bold hover:scale-105 transition-all"
                                >
                                    View Pitch Deck <ArrowUpRightIcon className="w-4 h-4" />
                                </a>
                            </div>
                            <SphereWireframe className="absolute bottom-[-50%] right-[-10%] w-96 h-96 text-white/5 group-hover:text-accent/10 transition-colors" />
                        </div>

                        {/* Other Documents */}
                        <div className="space-y-6">
                            {[
                                { title: 'Financial Statements', size: '2.4 MB', link: '#' },
                                { title: 'Legal Documentation', size: '4.1 MB', link: '#' },
                                { title: 'Market Analysis Report', size: '1.8 MB', link: '#' },
                            ].map((doc, i) => (
                                <a 
                                    key={i} 
                                    href={doc.link} 
                                    className="block p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all group"
                                >
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h4 className="font-bold text-sm mb-1">{doc.title}</h4>
                                            <span className="text-[10px] text-white/30 uppercase font-bold">{doc.size} • PDF</span>
                                        </div>
                                        <ArrowUpRightIcon className="w-5 h-5 text-white/20 group-hover:text-accent transition-colors" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Contact CTA */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto p-12 rounded-[3rem] bg-accent flex flex-col items-center text-center">
                    <h2 className="text-primary text-4xl font-display font-bold mb-6">Ready to lead the revolution?</h2>
                    <p className="text-primary/70 max-w-xl mb-10 text-lg">
                        Speak directly with our founding team to discuss strategic partnership opportunities 
                        and our long-term equity structure.
                    </p>
                    <button className="px-10 py-4 bg-primary text-white rounded-full font-bold hover:shadow-2xl transition-all">
                        Contact IR Team
                    </button>
                </div>
            </section>
        </div>
    );
};

export default InvestorsPage;