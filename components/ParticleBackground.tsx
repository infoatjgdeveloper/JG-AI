import React from 'react';
import { Page } from '../types';

const ParticleBackground: React.FC<{ activePage: Page }> = ({ activePage }) => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300">
            {/* Aurora Blobs - Adjusted for Meridian Pastel Vibe */}
            <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-rose-100/60 dark:bg-rose-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] animate-blob opacity-60"></div>
            <div className="absolute top-[10%] right-[-20%] w-[60vw] h-[60vw] bg-indigo-100/60 dark:bg-indigo-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000 opacity-60"></div>
            <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-sky-100/60 dark:bg-sky-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000 opacity-60"></div>

            {/* Subtle Noise Overlay */}
            <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
        </div>
    );
};

export default ParticleBackground;