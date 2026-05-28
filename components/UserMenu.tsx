
import React from 'react';
import { Page } from '../types';
import { InstagramIcon, LinkedInIcon, FacebookIcon } from './Icons';

interface FooterProps {
    setActivePage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <footer className="bg-slate-900 text-slate-400 pt-20 pb-12 px-4 md:px-8 lg:px-16 relative z-10" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">JGAI — Footer Navigation</h2>
            <div className="max-w-[90rem] mx-auto">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <div className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center font-display font-bold text-lg mb-4">JG</div>
                            <h3 className="text-xl font-display font-bold text-white">
                                JG AI Research &amp; Development Pvt. Ltd.
                            </h3>
                        </div>
                        <p className="text-sm leading-relaxed mb-6 max-w-sm text-slate-400">
                            Engineering the intelligence of tomorrow for enterprises across 37+ countries. Headquartered in India, operating globally through <strong className="text-white">BRJU Infosec Inc.</strong> (North America) and <strong className="text-white">IA7 Global Tech</strong> (Europe). ISO 27001 certified. GDPR compliant.
                        </p>
                        <address className="not-italic text-sm leading-relaxed mb-6 text-slate-400">
                            Ahmedabad, Gujarat, India<br />
                            <a href="mailto:info@jgdeveloper.com" className="hover:text-accent transition-colors">info@jgdeveloper.com</a>
                        </address>
                        <div className="flex gap-4 text-white/50">
                            <a
                                href="https://www.linkedin.com/company/jg-ai-research-developement/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-accent transition-colors"
                                aria-label="JGAI on LinkedIn (opens in new tab)"
                            >
                                <LinkedInIcon className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.facebook.com/people/JG-AI-Research-Development/61579814966710/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-accent transition-colors"
                                aria-label="JGAI on Facebook (opens in new tab)"
                            >
                                <FacebookIcon className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.instagram.com/jg_ai_/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-accent transition-colors"
                                aria-label="JGAI on Instagram (opens in new tab)"
                            >
                                <InstagramIcon className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <nav aria-label="Company">
                        <h4 className="text-white font-mono text-xs font-bold mb-6 uppercase tracking-wider">Company</h4>
                        <ul className="space-y-3 text-sm" role="list">
                            <li><button onClick={() => scrollTo('about')} className="hover:text-accent transition-colors">About JGAI</button></li>
                            <li><button onClick={() => scrollTo('network')} className="hover:text-accent transition-colors">Global Network</button></li>
                            <li><button onClick={() => setActivePage('careers')} className="hover:text-accent transition-colors">Careers at JGAI</button></li>
                            <li><a href="mailto:info@jgdeveloper.com?subject=Press%20%26%20Media%20%E2%80%94%20JGAI" className="hover:text-accent transition-colors">Press &amp; Media</a></li>
                            <li><a href="mailto:info@jgdeveloper.com?subject=ARC%20Partnership%20Application%20%E2%80%94%20JGAI" className="hover:text-accent transition-colors">Become an ARC Partner</a></li>
                        </ul>
                    </nav>

                    <nav aria-label="Solutions">
                        <h4 className="text-white font-mono text-xs font-bold mb-6 uppercase tracking-wider">Solutions</h4>
                        <ul className="space-y-3 text-sm" role="list">
                            <li><button onClick={() => scrollTo('services')} className="hover:text-accent transition-colors">AI &amp; Machine Learning</button></li>
                            <li><button onClick={() => scrollTo('services')} className="hover:text-accent transition-colors">Cybersecurity &amp; InfoSec</button></li>
                            <li><button onClick={() => scrollTo('services')} className="hover:text-accent transition-colors">Web &amp; App Development</button></li>
                            <li><button onClick={() => scrollTo('services')} className="hover:text-accent transition-colors">AI Chatbot Solutions</button></li>
                            <li><button onClick={() => scrollTo('services')} className="hover:text-accent transition-colors">Cloud &amp; DevOps</button></li>
                        </ul>
                    </nav>

                    <nav aria-label="Get in touch">
                        <h4 className="text-white font-mono text-xs font-bold mb-6 uppercase tracking-wider">Get in Touch</h4>
                        <ul className="space-y-3 text-sm" role="list">
                            <li><a href="mailto:info@jgdeveloper.com" className="hover:text-accent transition-colors">info@jgdeveloper.com</a></li>
                            <li><button onClick={() => scrollTo('demo')} className="hover:text-accent transition-colors">Try Live AI Demo</button></li>
                            <li><a href="mailto:info@jgdeveloper.com?subject=Free%20Strategy%20Call%20%E2%80%94%20JGAI" className="hover:text-accent transition-colors">Book a Free Strategy Call</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
                        </ul>
                    </nav>
                </div>

                {/* JGAI Group Network Badge */}
                <div className="mb-12 pt-8 border-t border-slate-800">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">JGAI Group Network:</span>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="https://www.brjuinfosec.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold px-3 py-1.5 rounded-full transition-colors"
                                aria-label="Visit BRJU Infosec Inc. (opens in new tab)"
                            >
                                🇺🇸 BRJU Infosec Inc.
                                <span className="text-slate-400">↗</span>
                            </a>
                            <a
                                href="https://www.ia7globaltech.eu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold px-3 py-1.5 rounded-full transition-colors"
                                aria-label="Visit IA7 Global Tech (opens in new tab)"
                            >
                                🇪🇺 IA7 Global Tech
                                <span className="text-slate-400">↗</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800 gap-4">
                    <p className="text-xs text-slate-500 text-center md:text-left">
                        © 2026 JG AI Research &amp; Development Pvt. Ltd. All rights reserved. Registered in India. ISO 27001 Certified.
                    </p>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true"></div>
                        <p className="text-xs font-mono text-slate-500">
                            All Systems Operational · 37+ Countries Active
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
