
import React, { useState, useEffect, useMemo } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Page } from './types';

// Import marketing page components
import Header from './components/Sidebar';
import Footer from './components/UserMenu';
import HomePage from './components/WelcomeScreen';
import ResearchPage from './components/ChatMessage'; // Renaming conceptual Research Page
import PlatformPage from './components/PromptInput';
import CompanyPage from './components/CompanyPage';
import CareersPage from './components/CareersPage';
import WorkplacePage from './components/workplacePage';
import ParticleBackground from './components/ParticleBackground';

const App: React.FC = () => {
    const [activePage, setActivePage] = useState<Page>('home');

    // Set body scrolling
    useEffect(() => {
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
        document.documentElement.classList.add('scroll-smooth');
        window.scrollTo(0, 0);
    }, [activePage]);

    const renderPage = useMemo(() => {
        switch (activePage) {
            case 'home':
                return <HomePage setActivePage={setActivePage} />;
            case 'research':
                return <ResearchPage />;
            case 'api':
                return <PlatformPage />;
            case 'company':
                return <CompanyPage />;
            case 'careers':
                return <CareersPage />;
            case 'workplace':
                return <WorkplacePage />;
            default:
                return <HomePage setActivePage={setActivePage} />;
        }
    }, [activePage]);

    return (
        <ThemeProvider>
            <div className="relative isolate min-h-screen text-slate-900 dark:text-slate-50 font-sans bg-white dark:bg-slate-900 overflow-x-hidden selection:bg-primary/10 selection:text-primary transition-colors duration-300">
                <ParticleBackground activePage={activePage} />
                <div className="relative z-10 flex flex-col min-h-screen">
                    <Header activePage={activePage} setActivePage={setActivePage} />
                    <main className="flex-grow animate-fade-up">
                        {renderPage}
                    </main>
                    <Footer setActivePage={setActivePage} />
                </div>
            </div>
        </ThemeProvider>
    );
};

export default App;
