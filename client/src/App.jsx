import React, { useState, useEffect } from 'react';
import Terminal from './components/Terminal';
import MatrixRain from './components/MatrixRain';

function App() {
    // State for GitHub projects
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch projects from GitHub API
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('https://api.github.com/users/Shujju5583X/repos?sort=updated');
                if (!response.ok) throw new Error('Failed to fetch');
                const repos = await response.json();
                const mappedProjects = repos.map(repo => ({
                    id: repo.id,
                    title: repo.name,
                    description: repo.description || 'No description available',
                    tech: repo.language ? [repo.language] : [],
                    link: repo.html_url,
                    period: new Date(repo.created_at).getFullYear().toString()
                }));
                setProjects(mappedProjects);
            } catch (error) {
                console.error('Error fetching GitHub repos:', error);
                setProjects([]);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

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
                    '0': 'hero',
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
            {/* Matrix Rain Background Effect */}
            <MatrixRain />

            {/* Navbar */}
            <nav className="navbar sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800" role="navigation" aria-label="Main navigation">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                    <div className="text-lg sm:text-xl font-bold text-slate-100">
                        <span className="text-emerald-400">&lt;</span>
                        Shujatullah
                        <span className="text-emerald-400">/&gt;</span>
                    </div>
                    <div className="flex gap-3 sm:gap-6 text-sm sm:text-base" role="menubar">
                        <a
                            href="#hero"
                            className="nav-link"
                            role="menuitem"
                            tabIndex="0"
                            aria-label="Navigate to Terminal section (Alt+0)"
                        >
                            Terminal
                        </a>
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

            {/* About Section */}
            <section id="about" className="section-container min-h-screen flex items-center justify-center py-16 sm:py-20">
                <div className="max-w-4xl w-full px-4 sm:px-6">
                    <h2 className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-6 sm:mb-8">About Me</h2>
                    <div className="space-y-6 sm:space-y-8">
                        <div>
                            <div className="text-2xl sm:text-3xl font-bold text-slate-100 mb-2">Syed Shujatullah</div>
                            <div className="text-emerald-400 font-medium text-base sm:text-lg mb-2">Full Stack Engineering Student (Integrated M.Tech)</div>
                            <div className="text-slate-400 text-sm sm:text-base flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                <span>✉️ shujatullahsyed801@gmail.com</span>
                                <span className="hidden sm:inline">|</span>
                                <a href="https://github.com/Shujju5583X" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">github.com/Shujju5583X</a>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold text-slate-100 text-xl mb-3">Professional Summary</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Ambitious and hands-on developer with a strong foundation in the MERN stack and TypeScript.
                                Fueled by curiosity and a passion for technology, I am deeply immersed in learning coding,
                                web development, and data analysis. Currently building AI-driven solutions and seeking a
                                challenging internship where I can take ownership of tasks, ship production-grade features,
                                and demonstrate continuous growth in an ever-evolving field.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold text-slate-100 text-xl mb-3">Education</h3>
                            <div className="space-y-3">
                                <div className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-1 text-sm sm:text-base">▸</span>
                                    <div>
                                        <div className="text-slate-200 font-semibold text-sm sm:text-base">VIT AP CAMPUS, Amaravati</div>
                                        <div className="text-slate-400 text-xs sm:text-sm">M.Tech (Integrated) in CSE (2021-2026) - CGPA: 7.37/10</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-1 text-sm sm:text-base">▸</span>
                                    <div>
                                        <div className="text-slate-200 font-semibold text-sm sm:text-base">Akansha Junior College</div>
                                        <div className="text-slate-400 text-xs sm:text-sm">Senior Secondary (Science) (2021) - 76.10%</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-1 text-sm sm:text-base">▸</span>
                                    <div>
                                        <div className="text-slate-200 font-semibold text-sm sm:text-base">Sree Narayana High School</div>
                                        <div className="text-slate-400 text-xs sm:text-sm">Secondary (2019) - CGPA: 8.80/10</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold text-slate-100 text-xl mb-3">Activities & Interests</h3>
                            <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-1 text-sm sm:text-base">▸</span>
                                    <span className="text-slate-400 text-sm sm:text-base">
                                        <span className="text-slate-200 font-semibold">Competitive Coding:</span> Active participant in team coding contests.
                                    </span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-1 text-sm sm:text-base">▸</span>
                                    <span className="text-slate-400 text-sm sm:text-base">
                                        <span className="text-slate-200 font-semibold">Technical Interests:</span> Coding, Web Development, Data Analysis.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="section-container min-h-screen flex items-center justify-center py-16 sm:py-20">
                <div className="max-w-4xl w-full px-4 sm:px-6">
                    <h2 className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-6 sm:mb-8">Projects</h2>
                    {loading ? (
                        <div className="text-center py-12">
                            <div className="text-emerald-400 text-lg">Loading projects from GitHub...</div>
                        </div>
                    ) : projects.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="text-slate-400 text-lg">Unable to load projects. Please try again later.</div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            {projects.map(project => (
                                <div key={project.id} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-slate-100 mb-2 hover:text-emerald-400 transition-colors block">
                                        {project.title}
                                    </a>
                                    <div className="text-sm text-emerald-400/70 mb-3">Created: {project.period}</div>
                                    <p className="text-slate-400 leading-relaxed mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map(t => (
                                            <span key={t} className="tag">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="section-container min-h-screen flex items-center justify-center py-16 sm:py-20">
                <div className="max-w-4xl w-full px-4 sm:px-6">
                    <h2 className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-6 sm:mb-8">Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div className="bg-slate-800/50 rounded-lg p-4 sm:p-6 border border-slate-700/50">
                            <h3 className="font-bold text-emerald-400 text-lg sm:text-xl mb-3 sm:mb-4">Languages</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="tag">JavaScript</span>
                                <span className="tag">TypeScript</span>
                                <span className="tag">Python</span>
                                <span className="tag">Java</span>
                                <span className="tag">HTML5</span>
                                <span className="tag">CSS3</span>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
                            <h3 className="font-bold text-emerald-400 text-xl mb-4">Frameworks</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="tag">Node.js</span>
                                <span className="tag">React</span>
                                <span className="tag">Express.js</span>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
                            <h3 className="font-bold text-emerald-400 text-xl mb-4">Tools & Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="tag">APIs</span>
                                <span className="tag">Machine Learning</span>
                                <span className="tag">TensorFlow</span>
                                <span className="tag">IoT (Raspberry Pi)</span>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
                            <h3 className="font-bold text-emerald-400 text-xl mb-4">Certifications</h3>
                            <div className="space-y-2">
                                <div>
                                    <div className="tag inline-block mb-2 text-xs sm:text-sm">AI Using Google TensorFlow</div>
                                    <div className="text-slate-400 text-xs sm:text-sm">Smart Bridge, Powered by Google Developers (Jun 2024)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section-container min-h-screen flex items-center justify-center py-16 sm:py-20">
                <div className="max-w-4xl w-full px-4 sm:px-6">
                    <h2 className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-6 sm:mb-8">Get In Touch</h2>
                    <div className="bg-slate-800/50 rounded-lg p-6 sm:p-8 border border-slate-700/50">
                        <p className="text-slate-400 text-sm sm:text-base md:text-lg mb-6">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start sm:items-center gap-3">
                                <span className="text-emerald-400 text-lg sm:text-xl mt-0.5 sm:mt-0">📧</span>
                                <div className="min-w-0 flex-1">
                                    <div className="text-slate-300 font-semibold text-sm sm:text-base">Email</div>
                                    <a href="mailto:shujatullahsyed801@gmail.com" className="text-emerald-400 hover:underline text-xs sm:text-sm break-all">
                                        shujatullahsyed801@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-700/50">
                            <p className="text-slate-500 text-xs sm:text-sm text-center">
                                💡 Tip: You can also use the terminal above and type <span className="text-emerald-400 font-mono">contact</span> for an interactive form!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
