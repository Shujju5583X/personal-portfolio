import React from 'react';
import Terminal from '../Terminal';

const Hero = ({ projects, loading }) => {
    return (
        <section id="hero" className="section-container pt-20 sm:pt-32 min-h-screen flex flex-col items-center justify-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6 text-slate-100">
                System Interface
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-center max-w-2xl mb-6 sm:mb-8 text-slate-400 px-4">
                Welcome to my interactive portfolio terminal. Type commands to explore my work.
            </p>

            {/* Terminal Container */}
            <div className="w-full max-w-4xl card group">
                <div className="flex items-center justify-between px-3 sm:px-4 py-2 border-b border-slate-700/50 bg-slate-900/50 rounded-t-lg -mt-4 -mx-4 mb-4">
                    <div className="flex gap-2">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/70"></div>
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/70"></div>
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/70"></div>
                    </div>
                    <div className="text-[10px] sm:text-xs text-slate-500 font-mono">shujatullah@portfolio:~</div>
                </div>
                <Terminal projects={projects} loading={loading} />
            </div>
        </section>
    );
};

export default Hero;
