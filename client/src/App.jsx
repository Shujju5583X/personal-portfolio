import React, { useEffect } from 'react';
import Terminal from './components/Terminal';

function App() {
    // Smooth scroll behavior for navigation links
    useEffect(() => {
        const handleSmoothScroll = (e) => {
            const target = e.target.closest('a[href^="#"]');
            if (target) {
                e.preventDefault();
                const id = target.getAttribute('href').slice(1);
                const element = document.getElementById(id);

                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Update URL without jumping
                    window.history.pushState(null, '', `#${id}`);
                }
            }
        };

        // Keyboard shortcuts for quick navigation (Alt + 1-4)
        const handleKeyboardShortcuts = (e) => {
            if (e.altKey) {
                const shortcuts = {
                    '1': 'about',
                    '2': 'projects',
                    '3': 'skills',
                    '4': 'contact'
                };

                if (shortcuts[e.key]) {
                    e.preventDefault();
                    const element = document.getElementById(shortcuts[e.key]);
                    if (element) {
                        element.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                        window.history.pushState(null, '', `#${shortcuts[e.key]}`);
                    }
                }
            }
        };

        document.addEventListener('click', handleSmoothScroll);
        document.addEventListener('keydown', handleKeyboardShortcuts);

        return () => {
            document.removeEventListener('click', handleSmoothScroll);
            document.removeEventListener('keydown', handleKeyboardShortcuts);
        };
    }, []);

    return (
        <div className="relative min-h-screen w-full bg-slate-900 text-slate-300 overflow-hidden">
            {/* Navbar */}
            <nav className="navbar" role="navigation" aria-label="Main navigation">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="text-xl font-bold text-slate-100">
                        <span className="text-emerald-400">&lt;</span>
                        Shujatullah
                        <span className="text-emerald-400">/&gt;</span>
                    </div>
                    <div className="flex gap-6" role="menubar">
                        <a
                            href="#about"
                            className="nav-link"
                            role="menuitem"
                            tabIndex="0"
                            aria-label="Navigate to About section (Alt+1)"
                        >
                            About
                        </a>
                        <a
                            href="#projects"
                            className="nav-link"
                            role="menuitem"
                            tabIndex="0"
                            aria-label="Navigate to Projects section (Alt+2)"
                        >
                            Projects
                        </a>
                        <a
                            href="#skills"
                            className="nav-link"
                            role="menuitem"
                            tabIndex="0"
                            aria-label="Navigate to Skills section (Alt+3)"
                        >
                            Skills
                        </a>
                        <a
                            href="#contact"
                            className="nav-link"
                            role="menuitem"
                            tabIndex="0"
                            aria-label="Navigate to Contact section (Alt+4)"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="hero" className="section-container pt-32 min-h-screen flex flex-col items-center justify-center">
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
                        <div className="text-xs text-slate-500 font-mono">shujatullah@portfolio:~</div>
                    </div>
                    <Terminal />
                </div>
            </section>
        </div>
    );
}

export default App;
