
import { REGIONAL_PARTNERS } from '@/data/regionalPartners';
import React from 'react';

const WorldMap: React.FC = () => {
    return (
        <div className="relative w-full max-w-6xl mx-auto aspect-[2/1] bg-slate-950/40 rounded-[2.5rem] border border-white/5 overflow-hidden group shadow-2xl">
            {/* Visual Depth Elements */}
            <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-slate-950 to-transparent z-10 opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-950 to-transparent z-10 opacity-60"></div>

            {/* Background World Visualization */}
            <svg
                viewBox="0 0 1000 500"
                className="w-full h-full opacity-20 group-hover:opacity-30 transition-all duration-1000 scale-[1.02] group-hover:scale-100"
                fill="currentColor"
            >
                <path
                    className="text-slate-700"
                    d="M150 100 Q 180 80 200 120 T 250 150 Q 300 130 350 170 T 400 200 Q 380 250 350 300 T 300 350 Q 250 380 200 350 T 150 300 Q 120 250 100 200 T 150 100 Z"
                />
                <path
                    className="text-slate-700"
                    d="M450 150 Q 480 120 520 150 T 580 130 Q 620 150 650 120 T 700 150 Q 720 200 700 250 T 650 300 Q 600 320 550 300 T 500 320 Q 460 300 450 250 Z"
                />
                <path
                    className="text-slate-700"
                    d="M550 350 Q 580 330 620 350 T 680 380 Q 700 420 680 450 T 620 480 Q 580 480 550 450 T 550 350 Z"
                />
                <path
                    className="text-slate-700"
                    d="M800 350 Q 830 330 870 350 T 920 380 Q 940 420 920 450 T 870 480 Q 830 480 800 450 T 800 350 Z"
                />

                {/* Dynamic connection lines routed through the Asia HQ (Approx 720, 225) */}
                <g className="text-blue-500/20">
                    {/* NA to HQ */}
                    <path d="M180 175 Q 450 100 720 225" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" className="animate-[dash_3s_linear_infinite]" />
                    {/* EU to HQ */}
                    <path d="M470 125 Q 600 150 720 225" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" className="animate-[dash_3s_linear_infinite]" />
                    {/* ME to HQ */}
                    <path d="M580 210 Q 650 210 720 225" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" className="animate-[dash_3s_linear_infinite]" />
                    {/* OC to HQ */}
                    <path d="M850 360 Q 780 300 720 225" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" className="animate-[dash_3s_linear_infinite]" />
                </g>
            </svg>

            <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -20; }
        }
      `}</style>

            {/* Operational Nodes */}
            {REGIONAL_PARTNERS.map((p) => (
                <div
                    key={p.id}
                    className="absolute group/pin cursor-pointer"
                    style={{ left: `${p.coordinates.x}%`, top: `${p.coordinates.y}%` }}
                >
                    <div className="relative flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${p.id === 'asia' ? 'bg-indigo-500/60' : 'bg-blue-500/40'} opacity-75`}></span>
                        <span className={`relative inline-flex rounded-full h-3 w-3 ${p.id === 'asia' ? 'bg-indigo-400 h-4 w-4 shadow-[0_0_20px_rgba(129,140,248,0.9)]' : 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]'} border-2 border-white`}></span>
                    </div>

                    {/* Enhanced Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-5 opacity-0 group-hover/pin:opacity-100 transition-all duration-300 pointer-events-none scale-90 group-hover/pin:scale-100">
                        <div className="glass border border-blue-500/30 rounded-2xl py-3 px-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] whitespace-nowrap">
                            <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-lg ${p.id === 'asia' ? 'bg-indigo-600/30 text-indigo-300' : 'bg-blue-600/20 text-blue-400'} flex items-center justify-center font-bold text-[10px]`}>
                                    {p.id.toUpperCase()}
                                </div>
                                <div>
                                    <p className="text-white text-xs font-bold leading-tight">{p.region}</p>
                                    <p className="text-blue-400 text-[9px] uppercase font-black tracking-widest">{p.partnerName}</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-px h-5 bg-gradient-to-b from-blue-500/50 to-transparent mx-auto"></div>
                    </div>
                </div>
            ))}

            {/* Network HUD Overlay */}
            <div className="absolute top-6 left-8 flex flex-col space-y-4 pointer-events-none z-20">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Global Backbone Status: Operational</span>
                </div>
            </div>

            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end pointer-events-none z-20">
                <div className="space-y-1">
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-2">Network Topology</div>
                    <div className="flex gap-1">
                        {[...Array(20)].map((_, i) => (
                            <div key={i} className={`w-1 h-3 rounded-full ${i < 15 ? 'bg-blue-500/40' : 'bg-slate-800'}`}></div>
                        ))}
                    </div>
                </div>

                <div className="glass px-6 py-4 rounded-2xl border border-white/5 space-y-2 min-w-[200px]">
                    <div className="flex justify-between items-center gap-8">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">HQ API Latency</span>
                        <span className="text-xs font-mono text-blue-400">0.02ms</span>
                    </div>
                    <div className="flex justify-between items-center gap-8">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Network Integrity</span>
                        <span className="text-xs font-mono text-blue-400">100.0%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorldMap;
