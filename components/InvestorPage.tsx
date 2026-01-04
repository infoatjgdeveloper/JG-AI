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
} from './Icons';

const InvestorsPage = () => {
    return (
        /* Removed bg-black and text-white to let the global theme take over */
        <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white transition-colors duration-300">
            
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="max-w-3xl">
                        {/* Dynamic border/bg for badge */}
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
                        <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                            We are building the infrastructure for the next era of AI. Join us as we scale 
                            enterprise-grade intelligence to millions of users worldwide.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {/* Inverted buttons for theme visibility */}
                            <a href="#documents" className="px-8 py-4 bg-foreground text-background rounded-full font-bold hover:bg-accent hover:text-white transition-all flex items-center gap-2">
                                Access Pitch Deck <ArrowRightIcon className="w-4 h-4" />
                            </a>
                            <button className="px-8 py-4 bg-muted border border-border rounded-full font-bold hover:bg-accent/10 transition-all">
                                Schedule Briefing
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Background Decoration - Low opacity to work in both modes */}
                <SphereWireframe className="absolute top-20 right-[-10%] w-[600px] h-[600px] text-accent opacity-[0.08]" />
            </section>

            {/* Growth Metrics Section */}
            <section className="py-20 px-6 border-y border-border bg-muted/30">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: 'Revenue Growth', value: '320%', icon: ChartBarIcon },
                            { label: 'Active Users', value: '1.2M+', icon: CubeTransparentIcon },
                            { label: 'Retention Rate', value: '94%', icon: ShieldCheckIcon },
                            { label: 'Compute Power', value: '25 PFLOPS', icon: CpuChipIcon },
                        ].map((stat, i) => (
                            <div key={i} className="space-y-2">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <stat.icon className="w-4 h-4" />
                                    <span className="text-[10px] uppercase tracking-widest font-bold">{stat.label}</span>
                                </div>
                                <div className="text-3xl md:text-4xl font-display font-bold text-foreground">{stat.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Document Section */}
            <section id="documents" className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-display font-bold mb-4 text-foreground">Investor Relations Vault</h2>
                            <p className="text-muted-foreground">Confidential documents and resources for qualified investors.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        
                        <div className="col-span-1 md:col-span-2 p-8 bg-primary text-white rounded-3xl border border-white/10 relative overflow-hidden group shadow-2xl">
                            <div className="relative z-10">
                                <DocumentTextIcon className="w-12 h-12 text-accent mb-6" />
                                <h3 className="text-2xl font-bold mb-2">Strategic Pitch Deck 2024</h3>
                                <p className="text-white/70 mb-8 max-w-md">Our comprehensive vision, market analysis, financial projections, and product roadmap for the next 36 months.</p>
                                <a 
                                    href="YOUR_DRIVE_LINK_HERE" 
                                    target="_blank" 
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full font-bold hover:scale-105 transition-all"
                                >
                                    View Pitch Deck <ArrowUpRightIcon className="w-4 h-4" />
                                </a>
                            </div>
                            <SphereWireframe className="absolute bottom-[-50%] right-[-10%] w-96 h-96 text-white/5" />
                        </div>

                        {/* Other Documents - Theme Aware */}
                        <div className="space-y-4">
                            {[
                                // { title: 'Financial Statements', size: '2.4 MB' },
                                // { title: 'Legal Documentation', size: '4.1 MB' },
                                // { title: 'Market Analysis Report', size: '1.8 MB' },
                            ].map((doc, i) => (
                                <div 
                                    key={i} 
                                    className="p-6 bg-muted border border-border rounded-2xl hover:border-accent/50 transition-all cursor-pointer group"
                                >
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h4 className="font-bold text-sm text-foreground">{doc.title}</h4>
                                            <span className="text-[10px] text-muted-foreground uppercase font-bold">{doc.size} • PDF</span>
                                        </div>
                                        <ArrowUpRightIcon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Contact CTA - Theme Aware Colors */}
            {/* <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto p-12 rounded-[3rem] bg-accent text-white flex flex-col items-center text-center">
                    <h2 className="text-4xl font-display font-bold mb-6">Ready to lead the revolution?</h2>
                    <p className="text-white/80 max-w-xl mb-10 text-lg">
                        Speak directly with our founding team to discuss strategic partnership opportunities.
                    </p>
                    <button className="px-10 py-4 bg-white text-accent rounded-full font-bold hover:shadow-2xl transition-all">
                        Contact IR Team
                    </button>
                </div>
            </section> */}
        </div>
    );
};

export default InvestorsPage;