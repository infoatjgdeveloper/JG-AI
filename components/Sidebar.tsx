
import React, { useState } from 'react';
import { Page } from '../types';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
    activePage: Page;
    setActivePage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, setActivePage }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'research', label: 'Research' },
        { id: 'api', label: 'Platform' },
        { id: 'company', label: 'Company' },
        { id: 'careers', label: 'Career' },
        { id: 'workplace', label: 'Marketplace' },
    ];

    const handleNavClick = (page: Page) => {
        setActivePage(page);
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none animate-fade-up px-4">
                <div className="pointer-events-auto bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-700/80 rounded-full p-1.5 pl-2 flex items-center shadow-lg shadow-slate-900/5 transition-all duration-300 hover:scale-[1.005] w-full max-w-fit">

                    {/* Brand Mark */}
                    <button
                        className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-display font-bold tracking-tighter mr-2 hover:bg-primary/90 transition-colors flex-shrink-0"
                        onClick={() => handleNavClick('home')}
                    >
                        JG
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:block">
                        <ul className="flex items-center gap-0.5">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <button
                                        onClick={() => handleNavClick(item.id as Page)}
                                        className={`
                                            px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200
                                            ${activePage === item.id
                                                ? 'text-primary dark:text-white bg-slate-100 dark:bg-slate-800 font-semibold'
                                                : 'text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'}
                                        `}
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="hidden lg:block h-4 w-px bg-slate-200 dark:bg-slate-700 mx-3"></div>

                    <div className="hidden lg:block mr-3">
                        <ThemeToggle />
                    </div>

                    <button className="hidden lg:block mr-1 px-5 py-1.5 bg-primary text-white text-[13px] font-bold rounded-full hover:bg-primary/90 transition-colors shadow-md shadow-primary/20">
                        Get a demo
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden ml-auto mr-2 p-2 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMobileMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-up"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed top-20 right-4 left-4 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-700/80 rounded-3xl shadow-2xl transition-all duration-300 ${isMobileMenuOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}
            >
                <nav className="p-4">
                    <ul className="space-y-2">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => handleNavClick(item.id as Page)}
                                    className={`
                                        w-full text-left px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-200
                                        ${activePage === item.id
                                            ? 'text-primary dark:text-white bg-slate-100 dark:bg-slate-800 font-semibold'
                                            : 'text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'}
                                    `}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="h-px bg-slate-200 dark:bg-slate-700 my-4"></div>

                    <div className="flex items-center justify-between px-6 py-2">
                        <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Theme</span>
                        <ThemeToggle />
                    </div>

                    <div className="px-4 pt-4">
                        <button className="w-full px-6 py-3 bg-primary text-white text-sm font-bold rounded-2xl hover:bg-primary/90 transition-colors shadow-md shadow-primary/20">
                            Get a demo
                        </button>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;
