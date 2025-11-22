import React from 'react';
import MatrixRain from './components/MatrixRain';
import Terminal from './components/Terminal';

function App() {
    return (
        <div className="relative min-h-screen w-full bg-matrix-black text-matrix-green overflow-hidden">
            <MatrixRain />
            <div className="scanlines"></div>

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-8 glow uppercase tracking-widest">
                    System Interface
                </h1>

                <div className="w-full max-w-4xl bg-black/80 border border-matrix-green/30 rounded-lg shadow-[0_0_15px_rgba(0,255,65,0.2)] backdrop-blur-sm">
                    <div className="flex items-center justify-between px-4 py-2 border-b border-matrix-green/30 bg-matrix-darkGreen/20">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                        </div>
                        <div className="text-xs opacity-70">syed@portfolio:~</div>
                    </div>
                    <Terminal />
                </div>
            </div>
        </div>
    );
}

export default App;
