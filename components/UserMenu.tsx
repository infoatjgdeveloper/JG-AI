
import React from 'react';
import { Page } from '../types';
import { InstagramIcon, GitHubIcon, LinkedInIcon, XIcon, FacebookIcon } from './Icons';

interface FooterProps {
    setActivePage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
    return (
        <footer className="bg-slate-900 text-slate-400 pt-20 pb-12 px-4 md:px-8 lg:px-16 relative z-10">
            <div className="max-w-[90rem] mx-auto">
                
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <div className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center font-display font-bold text-lg mb-4">JG</div>
                            <h2 className="text-xl font-display font-bold text-white">JG AI Research And Development PVT LTD.</h2>
                        </div>
                        <p className="text-sm leading-relaxed mb-8 max-w-xs">
                            Ahmedabad, Gujarat, India.<br/>
                            info@jgdeveloper.com<br/>
                            +91 - XXX XXX XXXX
                        </p>
                        <div className="flex gap-4 text-white/50">
                             <a href="https://www.linkedin.com/company/jg-ai-research-developement/posts?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BZed5N0piSACTs6riz4SxZA%3D%3D" className="hover:text-accent transition-colors"><LinkedInIcon className="w-5 h-5" /></a>
                             <a href="https://www.facebook.com/people/JG-AI-Research-Development/61579814966710/" className="hover:text-accent transition-colors"><FacebookIcon className="w-5 h-5" /></a>
                             <a href="https://www.instagram.com/jg_ai_/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#" className="hover:text-accent transition-colors"><InstagramIcon className="w-5 h-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-mono text-xs font-bold mb-6 uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            <li><button onClick={() => setActivePage('home')} className="hover:text-accent transition-colors">Home</button></li>
                            <li><button onClick={() => setActivePage('research')} className="hover:text-accent transition-colors">Research</button></li>
                            <li><button onClick={() => setActivePage('api')} className="hover:text-accent transition-colors">Platform</button></li>
                            <li><button onClick={() => setActivePage('company')} className="hover:text-accent transition-colors">Company</button></li>
                            <li><button onClick={() => setActivePage('careers')} className="hover:text-accent transition-colors">Career</button></li>
                            <li><button onClick={() => setActivePage('workplace')} className="hover:text-accent transition-colors">Workplace</button></li>
                        </ul>
                    </div>

                    <div>
                         <h4 className="text-white font-mono text-xs font-bold mb-6 uppercase tracking-wider">Legal</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800">
                    <p className="text-xs text-slate-500 mb-4 md:mb-0">
                        © 2025 JG AI Research & Development PVT LTD. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                         <p className="text-xs font-mono text-slate-500">
                            System Operational
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
