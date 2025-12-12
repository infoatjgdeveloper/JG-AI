
import React from 'react';
import { ServerStackIcon, ShieldLockIcon, BoltIcon, CloudArrowUpIcon, CodeBracketIcon, RobotIcon, StorefrontIcon, CheckIcon } from './Icons';

const PlatformPage: React.FC = () => {
    return (
        <div className="w-full min-h-screen pt-32 pb-20">
            <div className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 animate-fade-up">

                {/* --- HEADER --- */}
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <h1 className="text-5xl md:text-6xl font-display text-primary dark:text-white mb-6">
                        Platform
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                        Our platform underpins every service: from web & mobile apps to our core <strong>AI Agents Marketplace</strong>. Built as a modular, micro-services architecture with enterprise cloud infrastructure.
                    </p>
                </div>

                {/* --- ARCHITECTURE OVERVIEW --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">

                    {/* Diagram/Mockup */}
                    <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-8 flex items-center justify-center min-h-[400px]">
                        {/* Conceptual Architecture Diagram */}
                        <div className="relative w-full max-w-lg">
                            <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
                            <div className="relative space-y-4">
                                <div className="flex justify-center gap-4">
                                    <div className="px-6 py-3 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 font-mono text-xs text-slate-600 dark:text-slate-300">Web/Mobile Client</div>
                                    <div className="px-6 py-3 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 font-mono text-xs text-slate-600 dark:text-slate-300 border-accent/30 text-accent font-bold">Agent Marketplace</div>
                                </div>
                                <div className="h-8 border-l-2 border-dashed border-slate-300 dark:border-slate-600 mx-auto w-0"></div>
                                <div className="bg-primary text-white p-4 rounded-xl shadow-lg text-center">
                                    <span className="font-bold">API Gateway & Orchestrator</span>
                                </div>
                                <div className="h-8 border-l-2 border-dashed border-slate-300 dark:border-slate-600 mx-auto w-0"></div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="p-3 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 text-center text-xs font-bold dark:text-slate-300">Auth & Role</div>
                                    <div className="p-3 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 text-center text-xs font-bold text-accent">Agent Logic</div>
                                    <div className="p-3 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 text-center text-xs font-bold dark:text-slate-300">Billing</div>
                                </div>
                                <div className="h-8 border-l-2 border-dashed border-slate-300 dark:border-slate-600 mx-auto w-0"></div>
                                <div className="p-4 bg-slate-900 rounded-xl text-center">
                                    <span className="font-bold text-white">AI Model Layer (LLMs & Vision)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features List */}
                    <div className="lg:col-span-5 space-y-4">
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                                    <ServerStackIcon className="w-5 h-5 text-blue-600" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Modular Micro-services</h3>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                                    <RobotIcon className="w-5 h-5 text-purple-600" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">AI-Agent Orchestration</h3>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                                    <ShieldLockIcon className="w-5 h-5 text-green-600" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Enterprise Security</h3>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                                    <StorefrontIcon className="w-5 h-5 text-orange-600" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Marketplace Deployment</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- TECH STACK --- */}
                <div className="mb-24">
                    <h2 className="text-3xl font-display font-bold text-primary dark:text-white mb-12 text-center">Technology Stack</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700">
                            <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mb-6">
                                <CodeBracketIcon className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 dark:text-white">Application Layer</h3>
                            <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-accent rounded-full"></div> React.js / Next.js</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-accent rounded-full"></div> Node.js (NestJS)</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-accent rounded-full"></div> Tailwind CSS</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-accent rounded-full"></div> GraphQL / REST</li>
                            </ul>
                        </div>

                        <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700">
                            <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mb-6">
                                <BoltIcon className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 dark:text-white">AI & Data</h3>
                            <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-accent rounded-full"></div> Python (PyTorch/TF)</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-accent rounded-full"></div> PostgreSQL & MongoDB</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-accent rounded-full"></div> Pinecone/Milvus</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-accent rounded-full"></div> FastAPI / LangChain</li>
                            </ul>
                        </div>

                        <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700">
                            <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mb-6">
                                <CloudArrowUpIcon className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 dark:text-white">Cloud & Ops</h3>
                            <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-accent rounded-full"></div> AWS / Azure / GCP</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-accent rounded-full"></div> Docker & Kubernetes</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-accent rounded-full"></div> Terraform (IaC)</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-accent rounded-full"></div> CI/CD Pipelines</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* --- DEVELOPER EXPERIENCE (New) --- */}
                <div className="mb-24 bg-slate-900 rounded-[3rem] p-12 md:p-16 text-white overflow-hidden relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-display font-bold mb-6">Built for Developers</h2>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                Our SDKs are designed for developer happiness. Integrate powerful AI capabilities in minutes with our well-documented, type-safe libraries.
                            </p>
                            <div className="flex gap-4">
                                <button className="px-6 py-3 bg-white text-slate-900 rounded-full font-bold text-sm hover:bg-slate-200 transition-colors">Read the Docs</button>
                                <button className="px-6 py-3 border border-white/20 text-white rounded-full font-bold text-sm hover:bg-white/10 transition-colors">View on GitHub</button>
                            </div>
                        </div>
                        <div className="bg-[#1e1e1e] rounded-xl p-6 font-mono text-xs shadow-2xl border border-white/10">
                            <div className="flex gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="space-y-1">
                                <p><span className="text-purple-400">import</span> <span className="text-blue-400">{`{ JGAgent }`}</span> <span className="text-purple-400">from</span> <span className="text-green-400">'@jg-ai/sdk'</span>;</p>
                                <p>&nbsp;</p>
                                <p><span className="text-purple-400">const</span> client = <span className="text-purple-400">new</span> <span className="text-yellow-400">JGAgent</span>({`{`}</p>
                                <p>&nbsp;&nbsp;apiKey: <span className="text-green-400">process.env.JG_API_KEY</span>,</p>
                                <p>{`}`});</p>
                                <p>&nbsp;</p>
                                <p><span className="text-gray-500">// Deploy a new autonomous agent</span></p>
                                <p><span className="text-purple-400">const</span> agent = <span className="text-purple-400">await</span> client.agents.<span className="text-blue-400">create</span>({`{`}</p>
                                <p>&nbsp;&nbsp;name: <span className="text-green-400">'MarketAnalyst'</span>,</p>
                                <p>&nbsp;&nbsp;model: <span className="text-green-400">'jg-enterprise-v2'</span>,</p>
                                <p>&nbsp;&nbsp;capabilities: [<span className="text-green-400">'web_search'</span>, <span className="text-green-400">'data_analysis'</span>]</p>
                                <p>{`}`});</p>
                                <p>&nbsp;</p>
                                <p><span className="text-purple-400">console</span>.<span className="text-blue-400">log</span>(<span className="text-green-400">`Agent deployed at ${`{agent.url}`}!`</span>);</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- SECURITY & COMPLIANCE (New) --- */}
                <div className="mb-24">
                    <h2 className="text-3xl font-display font-bold text-primary dark:text-white mb-12 text-center">Security & Compliance</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {["SOC2 Type II", "HIPAA Compliant", "GDPR Ready", "ISO 27001"].map((item, i) => (
                            <div key={i} className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-green-500 hover:bg-green-50 dark:hover:bg-slate-700 transition-colors cursor-default">
                                <ShieldLockIcon className="w-8 h-8 text-slate-400 mb-4" />
                                <span className="font-bold text-slate-800 dark:text-white">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- ENTERPRISE SCALE (New) --- */}
                <div className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 pt-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <h3 className="text-4xl font-bold text-primary mb-2">99.99%</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">Uptime SLA for Enterprise</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold text-primary mb-2">24/7</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">Global Support & Engineering</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold text-primary mb-2">Multi-Region</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">Data Residency Options</p>
                        </div>
                    </div>
                </div>

                {/* --- INTEGRATION PARTNERS --- */}
                <div className="text-center mt-24">
                    <p className="text-sm font-mono text-slate-400 mb-8 uppercase tracking-widest">Integration Partners</p>
                    <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
                        <span className="text-2xl font-display font-bold">OpenAI</span>
                        <span className="text-2xl font-display font-bold">Google Cloud</span>
                        <span className="text-2xl font-display font-bold">Microsoft</span>
                        <span className="text-2xl font-display font-bold">AWS</span>
                        <span className="text-2xl font-display font-bold">NVIDIA</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PlatformPage;
