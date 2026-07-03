import React from 'react';
import { ArrowUpRightIcon } from './Icons';

const InvestorsPage: React.FC = () => {
    return (
        <div className="w-full min-h-screen pt-32 pb-20">
            <div className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 animate-fade-in">
                
                {/* --- HEADER --- */}
                <div className="flex flex-col md:flex-row justify-between items-end border-b border-gray-100 pb-8 mb-12">
                    <div>
                        <h1 className="text-4xl font-display text-gray-900 mb-2">Investor Relations</h1>
                        <div className="flex items-center gap-3 font-mono text-sm text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full w-fit">
                            <div className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></div>
                            <span className="font-bold">SERIES B • Q3 2024</span>
                        </div>
                    </div>
                    <div className="flex gap-4 mt-6 md:mt-0">
                        <button className="border border-gray-200 text-gray-600 px-6 py-2 text-sm font-medium rounded-full hover:border-gray-400 transition-colors">
                            FY23 Report
                        </button>
                        <button className="bg-black text-white px-6 py-2 text-sm font-bold rounded-full hover:bg-gray-800 transition-colors">
                            Request Deck
                        </button>
                    </div>
                </div>

                {/* --- DASHBOARD --- */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-16">
                    
                    {/* Metric Cards */}
                    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                        <p className="text-xs text-gray-400 font-bold uppercase mb-2">ARR</p>
                        <p className="text-3xl font-display text-gray-900 mb-2 font-bold">$28.4M</p>
                        <p className="text-xs text-emerald-600 flex items-center gap-1 font-bold">
                            <ArrowUpRightIcon className="w-3 h-3" /> 112% YoY
                        </p>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                        <p className="text-xs text-gray-400 font-bold uppercase mb-2">Gross Margin</p>
                        <p className="text-3xl font-display text-gray-900 mb-2 font-bold">84.2%</p>
                        <p className="text-xs text-emerald-600 flex items-center gap-1 font-bold">
                            <ArrowUpRightIcon className="w-3 h-3" /> +2.1% QoQ
                        </p>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                        <p className="text-xs text-gray-400 font-bold uppercase mb-2">NDR</p>
                        <p className="text-3xl font-display text-gray-900 mb-2 font-bold">124%</p>
                        <p className="text-xs text-gray-500">Best in Class</p>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                        <p className="text-xs text-gray-400 font-bold uppercase mb-2">Enterprise Clients</p>
                        <p className="text-3xl font-display text-gray-900 mb-2 font-bold">42</p>
                        <p className="text-xs text-emerald-600 flex items-center gap-1 font-bold">
                            <ArrowUpRightIcon className="w-3 h-3" /> +8 this quarter
                        </p>
                    </div>

                    {/* Main Chart Area */}
                    <div className="lg:col-span-3 bg-white border border-gray-100 rounded-2xl p-8 min-h-[400px] relative shadow-sm">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-sm font-bold text-gray-900 uppercase">Revenue Trajectory</h3>
                            <div className="flex gap-4 text-xs font-mono text-gray-400">
                                <span>2021</span>
                                <span>2022</span>
                                <span>2023</span>
                                <span className="text-black font-bold">2024</span>
                            </div>
                        </div>
                        {/* CSS Graph Representation */}
                        <div className="absolute bottom-8 left-8 right-8 top-24 flex items-end gap-2">
                            {[20, 25, 22, 30, 35, 45, 50, 60, 55, 65, 75, 85, 80, 90, 100, 110, 105, 115, 125, 130, 140, 135, 145, 160].map((h, i) => (
                                <div key={i} className="flex-1 bg-indigo-50 rounded-t-sm border-t-2 border-indigo-500 relative group transition-all hover:bg-indigo-100" style={{height: `${h/1.8}%`}}>
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                                        ${(h * 0.2).toFixed(1)}M
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Capital Allocation Table */}
                    <div className="lg:col-span-1 bg-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col shadow-sm">
                        <div className="p-6 border-b border-gray-100 bg-gray-50">
                            <h3 className="text-sm font-bold text-gray-900 uppercase">Allocation</h3>
                        </div>
                        <div className="flex-1 overflow-y-auto">
                            <table className="w-full text-left text-sm">
                                <tbody className="text-gray-700">
                                    <tr className="border-b border-gray-100">
                                        <td className="p-4 font-medium">R&D (Core)</td>
                                        <td className="p-4 text-right font-mono font-bold text-indigo-600">40%</td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="p-4 font-medium">Compute Infra</td>
                                        <td className="p-4 text-right font-mono font-bold text-indigo-600">30%</td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="p-4 font-medium">Sales (Global)</td>
                                        <td className="p-4 text-right font-mono font-bold text-indigo-600">20%</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium">Ops</td>
                                        <td className="p-4 text-right font-mono font-bold text-indigo-600">10%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvestorsPage;