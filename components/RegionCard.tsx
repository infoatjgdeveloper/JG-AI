
import { RegionalPartner } from '@/data/types';
import React from 'react';


interface RegionCardProps {
    partner: RegionalPartner;
}

const RegionCard: React.FC<RegionCardProps> = ({ partner }) => {
    const isHQ = partner.id === 'asia';

    return (
        <div className={`group relative glass border ${isHQ ? 'border-indigo-500/40' : 'border-white/10'} rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_20px_80px_rgba(59,130,246,0.1)] overflow-hidden flex flex-col h-full`}>
            {/* Dynamic Glow Overlay */}
            <div className={`absolute top-0 right-0 w-48 h-48 ${isHQ ? 'bg-indigo-600/10' : 'bg-blue-600/5'} blur-[80px] -mr-24 -mt-24 group-hover:bg-blue-600/10 transition-colors duration-700`}></div>

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-8">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full ${isHQ ? 'bg-indigo-400' : 'bg-blue-500'}`}></span>
                            <span className={`text-[10px] font-black ${isHQ ? 'text-indigo-400' : 'text-blue-500/80'} uppercase tracking-[0.2em]`}>
                                {partner.region}
                            </span>
                        </div>
                        <h3 className="text-2xl font-extrabold text-white tracking-tight leading-tight group-hover:text-blue-50 mt-1">
                            {isHQ ? 'Global Headquarters' : 'Authorized Partner'}
                        </h3>
                    </div>

                    <div className={`p-3.5 bg-white/5 rounded-2xl border ${isHQ ? 'border-indigo-500/30 bg-indigo-500/5' : 'border-white/10'} group-hover:border-blue-500/50 group-hover:bg-blue-600/10 transition-all duration-500`}>
                        {isHQ ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-500 group-hover:text-blue-400 transition-colors">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                            </svg>
                        )}
                    </div>
                </div>

                <div className="flex-grow space-y-6">
                    <div className="space-y-2">
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Operating Entity</div>
                        <div className={`text-xl font-bold ${isHQ ? 'text-indigo-300' : 'text-blue-400'} leading-tight`}>
                            {partner.partnerName}
                        </div>
                    </div>

                    <div className={`w-full h-px bg-gradient-to-r ${isHQ ? 'from-indigo-500/40 via-indigo-500/10' : 'from-blue-500/20 via-blue-500/10'} to-transparent`}></div>

                    <p className="text-slate-400 text-sm leading-relaxed font-medium">
                        {partner.description}
                    </p>
                </div>

                <div className="mt-10 pt-6 border-t border-white/5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-2">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className={`w-6 h-6 rounded-full border border-slate-900 bg-slate-800 flex items-center justify-center`}>
                                        <div className={`w-1 h-1 rounded-full ${isHQ ? 'bg-indigo-400' : 'bg-blue-500/50'}`}></div>
                                    </div>
                                ))}
                            </div>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                                {isHQ ? 'Strategic Governance Verified' : 'Ecosystem Verified'}
                            </span>
                        </div>

                        {/* <button className={`flex items-center gap-2 px-4 py-2 rounded-xl ${isHQ ? 'bg-indigo-600/10 text-indigo-300 border-indigo-500/30' : 'bg-blue-600/5 hover:bg-blue-600/20 text-blue-400 border-blue-500/20'} border transition-all text-[10px] font-bold uppercase tracking-widest`}>
                            {isHQ ? 'Governance Portal' : 'Partner Access'}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegionCard;
