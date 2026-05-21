import React from 'react';
import { skills } from '../../data/portfolioData';

const Skills = () => {
    return (
        <section id="skills" className="section-container min-h-screen flex items-center justify-center py-16 sm:py-20">
            <div className="max-w-4xl w-full px-4 sm:px-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-6 sm:mb-8">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="bg-slate-800/50 rounded-lg p-4 sm:p-6 border border-slate-700/50">
                        <h3 className="font-bold text-emerald-400 text-lg sm:text-xl mb-3 sm:mb-4">Languages</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.languages.map(s => (
                                <span key={s} className="tag">{s}</span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
                        <h3 className="font-bold text-emerald-400 text-xl mb-4">Frameworks</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.frameworks.map(s => (
                                <span key={s} className="tag">{s}</span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
                        <h3 className="font-bold text-emerald-400 text-xl mb-4">Tools & Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.tools.map(s => (
                                <span key={s} className="tag">{s}</span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
                        <h3 className="font-bold text-emerald-400 text-xl mb-4">Certifications</h3>
                        <div className="space-y-2">
                            {skills.certifications.map((cert, index) => (
                                <div key={index}>
                                    <div className="tag inline-block mb-2 text-xs sm:text-sm">{cert.name}</div>
                                    <div className="text-slate-400 text-xs sm:text-sm">{cert.issuer} ({cert.date})</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
