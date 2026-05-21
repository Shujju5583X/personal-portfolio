import React from 'react';

const Projects = ({ projects, loading }) => {
    return (
        <section id="projects" className="section-container min-h-screen flex items-center justify-center py-16 sm:py-20">
            <div className="max-w-4xl w-full px-4 sm:px-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-6 sm:mb-8">Projects</h2>
                {loading ? (
                    <div className="text-center py-12">
                        <div className="matrix-loader font-mono text-emerald-400 text-sm">
                            <div className="mb-2">[ ACCESSING MAINFRAME... ]</div>
                            <div className="flex items-center justify-center gap-1">
                                <span className="loading-bar"></span>
                                <span className="text-slate-500 text-xs ml-2">Fetching from GitHub...</span>
                            </div>
                        </div>
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
    );
};

export default Projects;
