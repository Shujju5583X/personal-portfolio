import React from 'react';
import { personalInfo } from '../../data/portfolioData';

const Contact = () => {
    return (
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
                                <a href={`mailto:${personalInfo.email}`} className="text-emerald-400 hover:underline text-xs sm:text-sm break-all">
                                    {personalInfo.email}
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
    );
};

export default Contact;
