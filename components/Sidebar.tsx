
import React from 'react';
import { Page } from '../types';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
    activePage: Page;
    setActivePage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, setActivePage }) => {
    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'research', label: 'Research' },
        { id: 'api', label: 'Platform' },
        { id: 'company', label: 'Company' },
        { id: 'careers', label: 'Career' },
        {id: 'workplace', label: 'Marketplace' },
    ];

    return (
        <header className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none animate-fade-up">
            <div className="pointer-events-auto bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-700/80 rounded-full p-1.5 pl-2 flex items-center shadow-lg shadow-slate-900/5 transition-all duration-300 hover:scale-[1.005]">

                {/* Brand Mark */}
                <button
                    className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-display font-bold tracking-tighter mr-2 hover:bg-primary/90 transition-colors"
                    onClick={() => setActivePage('home')}
                >
                    JG
                </button>

                {/* Navigation */}
                <nav>
                    <ul className="flex items-center gap-0.5">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => setActivePage(item.id as Page)}
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

                <div className="h-4 w-px bg-slate-200 dark:bg-slate-700 mx-3"></div>

                <div className="mr-3">
                    <ThemeToggle />
                </div>

                <button className="mr-1 px-5 py-1.5 bg-primary text-white text-[13px] font-bold rounded-full hover:bg-primary/90 transition-colors shadow-md shadow-primary/20">
                    Get a demo
                </button>
            </div>
        </header>
    );
};

export default Header;
