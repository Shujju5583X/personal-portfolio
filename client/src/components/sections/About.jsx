import React from 'react';
import { personalInfo, education, activities } from '../../data/portfolioData';

const About = () => {
    return (
        <section id="about" className="section-container min-h-screen flex items-center justify-center py-16 sm:py-20">
            <div className="max-w-4xl w-full px-4 sm:px-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-6 sm:mb-8">About Me</h2>
                <div className="space-y-6 sm:space-y-8">
                    <div>
                        <div className="text-2xl sm:text-3xl font-bold text-slate-100 mb-2">{personalInfo.name}</div>
                        <div className="text-emerald-400 font-medium text-base sm:text-lg mb-2">{personalInfo.title}</div>
                        <div className="text-slate-400 text-sm sm:text-base flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                            <span>✉️ {personalInfo.email}</span>
                            <span className="hidden sm:inline">|</span>
                            <a href={personalInfo.github.url} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                                github.com/{personalInfo.github.username}
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-100 text-xl mb-3">Professional Summary</h3>
                        <p className="text-slate-400 leading-relaxed">{personalInfo.summary}</p>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-100 text-xl mb-3">Education</h3>
                        <div className="space-y-3">
                            {education.map((edu, index) => (
                                <div key={index} className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-1 text-sm sm:text-base">▸</span>
                                    <div>
                                        <div className="text-slate-200 font-semibold text-sm sm:text-base">{edu.institution}</div>
                                        <div className="text-slate-400 text-xs sm:text-sm">
                                            {edu.degree} ({edu.period}) - {edu.score}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-100 text-xl mb-3">Activities & Interests</h3>
                        <div className="space-y-2">
                            {activities.map((activity, index) => (
                                <div key={index} className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-1 text-sm sm:text-base">▸</span>
                                    <span className="text-slate-400 text-sm sm:text-base">
                                        <span className="text-slate-200 font-semibold">{activity.label}:</span> {activity.description}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
