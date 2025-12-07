import React from 'react';
import Terminal from './components/Terminal';

function App() {
    return (
        <div className="relative min-h-screen w-full bg-slate-900 text-slate-300 overflow-hidden">
            {/* Navbar */}
            <nav className="navbar">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="text-xl font-bold text-slate-100">
                        <span className="text-emerald-400">&lt;</span>
                        Syed
                        <span className="text-emerald-400">/&gt;</span>
                    </div>
                    <div className="flex gap-6">
                        <a href="#about" className="nav-link">About</a>
                        <a href="#projects" className="nav-link">Projects</a>
                        <a href="#skills" className="nav-link">Skills</a>
                        <a href="#contact" className="nav-link">Contact</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="section-container pt-32 min-h-screen flex flex-col items-center justify-center">
                <h1 className="heading-hero text-center mb-6">
                    System Interface
                </h1>
                <p className="body-text text-center max-w-2xl mb-8">
                    Welcome to my interactive portfolio terminal. Type commands to explore my work.
                </p>

                {/* Terminal Container */}
                <div className="w-full max-w-4xl card group">
                    <div className="flex items-center justify-between px-4 py-2 border-b border-slate-700/50 bg-slate-900/50 rounded-t-lg -mt-4 -mx-4 mb-4">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                            <div className="w-3 h-3 rounded-full bg-emerald-500/70"></div>
                        </div>
                        <div className="text-xs text-slate-500 font-mono">syed@portfolio:~</div>
                    </div>
                    <Terminal />
                </div>
            </section>
        </div>
    );
}

export default App;
