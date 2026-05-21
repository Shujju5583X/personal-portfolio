import React, { useState, useEffect, useRef, useCallback } from 'react';
import { personalInfo, education, skills, activities } from '../data/portfolioData';

const Terminal = ({ projects = [], loading = false }) => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'output', content: 'Welcome to the Matrix. Type "help" to see available commands.' }
    ]);
    const [contactStep, setContactStep] = useState(null);
    const [contactData, setContactData] = useState({ name: '', email: '', message: '' });

    // Command history navigation
    const [commandHistory, setCommandHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);

    const inputRef = useRef(null);
    const bottomRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [history]);

    const handleCommand = useCallback(async (cmd) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        const newHistory = [...history, { type: 'input', content: cmd }];

        // Save to command history (skip empty)
        if (cmd.trim()) {
            setCommandHistory(prev => [...prev, cmd.trim()]);
            setHistoryIndex(-1);
        }

        if (contactStep) {
            handleContactFlow(cmd, newHistory);
            return;
        }

        switch (trimmedCmd) {
            case 'help':
                setHistory([...newHistory, {
                    type: 'output',
                    content: (
                        <div className="flex flex-col gap-1">
                            <div className="text-slate-100 font-semibold mb-2">Available commands:</div>
                            <div className="pl-4 text-slate-400"><span className="text-emerald-400">help</span>     - Show this help message</div>
                            <div className="pl-4 text-slate-400"><span className="text-emerald-400">about</span>    - Who am I?</div>
                            <div className="pl-4 text-slate-400"><span className="text-emerald-400">projects</span> - View my work</div>
                            <div className="pl-4 text-slate-400"><span className="text-emerald-400">skills</span>   - Technical abilities</div>
                            <div className="pl-4 text-slate-400"><span className="text-emerald-400">contact</span>  - Get in touch</div>
                            <div className="pl-4 text-slate-400"><span className="text-emerald-400">resume</span>   - Open my resume</div>
                            <div className="pl-4 text-slate-400"><span className="text-emerald-400">clear</span>    - Clear the terminal</div>
                            <div className="mt-2 text-slate-500 text-xs">Tip: Use ↑/↓ arrow keys to navigate command history</div>
                        </div>
                    )
                }]);
                break;
            case 'about':
                setHistory([...newHistory, {
                    type: 'output',
                    content: (
                        <div className="flex flex-col gap-3">
                            <div className="text-2xl font-bold text-slate-100">{personalInfo.name}</div>
                            <div className="text-emerald-400 font-medium">{personalInfo.title}</div>
                            <div className="text-slate-500 text-sm">{personalInfo.phone} | {personalInfo.email} | <a href={personalInfo.github.url} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">github.com/{personalInfo.github.username}</a></div>
                            <div className="mt-4">
                                <div className="font-bold text-slate-100 mb-2">Professional Summary:</div>
                                <div className="text-slate-400 leading-relaxed">{personalInfo.summary}</div>
                            </div>
                            <div className="mt-4">
                                <div className="font-bold text-slate-100 mb-2">Education:</div>
                                <div className="space-y-2">
                                    {education.map((edu, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <span className="text-emerald-400">{'>'}</span>
                                            <div className="text-slate-400"><span className="text-slate-200">{edu.institution}</span> ({edu.period}): {edu.degree} - {edu.score}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="font-bold text-slate-100 mb-2">Activities & Interests:</div>
                                <div className="space-y-1">
                                    {activities.map((activity, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <span className="text-emerald-400">{'>'}</span>
                                            <span className="text-slate-400"><span className="text-slate-200">{activity.label}:</span> {activity.description}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )
                }]);
                break;
            case 'skills':
                setHistory([...newHistory, {
                    type: 'output',
                    content: (
                        <div className="flex flex-col gap-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                                    <div className="font-bold text-emerald-400 mb-2">Languages</div>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.languages.map(skill => (
                                            <span key={skill} className="tag">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                                    <div className="font-bold text-emerald-400 mb-2">Frameworks</div>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.frameworks.map(skill => (
                                            <span key={skill} className="tag">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                                    <div className="font-bold text-emerald-400 mb-2">Tools & Technologies</div>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.tools.map(skill => (
                                            <span key={skill} className="tag">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                                    <div className="font-bold text-emerald-400 mb-2">Certifications</div>
                                    <div className="space-y-2">
                                        {skills.certifications.map((cert, i) => (
                                            <div key={i} className="text-slate-400">
                                                <span className="tag">{cert.name}</span>
                                                <span className="text-slate-500 text-sm ml-2">{cert.issuer} ({cert.date})</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }]);
                break;
            case 'projects':
                if (loading) {
                    setHistory([...newHistory, { type: 'output', content: <span className="text-emerald-400">Fetching latest data from GitHub...</span> }]);
                } else if (projects.length === 0) {
                    setHistory([...newHistory, { type: 'output', content: <span className="text-slate-400">No projects found. Unable to fetch from GitHub.</span> }]);
                } else {
                    const projectList = (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                            {projects.map(p => (
                                <div key={p.id} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 group">
                                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors block mb-1">
                                        {p.title}
                                    </a>
                                    <div className="text-xs text-emerald-400/70 mb-2">Created: {p.period}</div>
                                    <div className="text-sm text-slate-400 leading-relaxed mb-3">{p.description}</div>
                                    <div className="flex flex-wrap gap-2">
                                        {p.tech.map(t => (
                                            <span key={t} className="tag">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    );
                    setHistory([...newHistory, { type: 'output', content: projectList }]);
                }
                break;
            case 'resume':
                setHistory([...newHistory, {
                    type: 'output',
                    content: (
                        <div className="flex flex-col gap-2">
                            <span className="text-emerald-400">Opening resume...</span>
                            <span className="text-slate-400 text-sm">
                                If it didn't open automatically:{' '}
                                <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                                    Click here to download
                                </a>
                            </span>
                        </div>
                    )
                }]);
                window.open(personalInfo.resumeUrl, '_blank');
                break;
            case 'contact':
                setContactStep('name');
                setHistory([...newHistory, { type: 'output', content: <span className="text-emerald-400">Initiating secure connection...</span> }, { type: 'output', content: 'Enter your Name:' }]);
                break;
            case 'clear':
                setHistory([]);
                break;
            case '':
                setHistory(newHistory);
                break;
            default:
                setHistory([...newHistory, { type: 'output', content: <span className="text-red-400">Command not found: {cmd}. Type "help" for assistance.</span> }]);
        }
    }, [history, contactStep, contactData, projects, loading]);

    const handleContactFlow = async (value, currentHistory) => {
        if (contactStep === 'name') {
            setContactData({ ...contactData, name: value });
            setContactStep('email');
            setHistory([...currentHistory, { type: 'output', content: 'Enter your Email:' }]);
        } else if (contactStep === 'email') {
            setContactData({ ...contactData, email: value });
            setContactStep('message');
            setHistory([...currentHistory, { type: 'output', content: 'Enter your Message:' }]);
        } else if (contactStep === 'message') {
            const finalData = { ...contactData, message: value };
            setContactStep(null);
            setHistory([...currentHistory, { type: 'output', content: <span className="text-emerald-400">Transmitting data...</span> }]);

            // Attempt to send via Formspree (replace YOUR_FORM_ID with actual ID)
            // For now, falls back to mailto link
            try {
                const mailtoLink = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${finalData.name}&body=${encodeURIComponent(`Name: ${finalData.name}\nEmail: ${finalData.email}\nMessage: ${finalData.message}`)}`;
                setTimeout(() => {
                    setHistory(prev => [...prev, {
                        type: 'output',
                        content: (
                            <div className="flex flex-col gap-1">
                                <span className="text-emerald-400">✓ Message prepared.</span>
                                <a href={mailtoLink} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline text-sm">
                                    → Click here to send via email client
                                </a>
                            </div>
                        )
                    }]);
                }, 1000);
            } catch {
                setTimeout(() => {
                    setHistory(prev => [...prev, { type: 'output', content: <span className="text-red-400">Error transmitting. Please email directly at {personalInfo.email}</span> }]);
                }, 1000);
            }
            setContactData({ name: '', email: '', message: '' });
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        } else if (e.key === 'ArrowUp') {
            // Navigate backward through command history
            e.preventDefault();
            if (commandHistory.length === 0) return;
            const newIndex = historyIndex === -1
                ? commandHistory.length - 1
                : Math.max(0, historyIndex - 1);
            setHistoryIndex(newIndex);
            setInput(commandHistory[newIndex]);
        } else if (e.key === 'ArrowDown') {
            // Navigate forward through command history
            e.preventDefault();
            if (commandHistory.length === 0 || historyIndex === -1) return;
            const newIndex = historyIndex + 1;
            if (newIndex >= commandHistory.length) {
                setHistoryIndex(-1);
                setInput('');
            } else {
                setHistoryIndex(newIndex);
                setInput(commandHistory[newIndex]);
            }
        }
    };

    return (
        <div
            className="w-full max-w-4xl mx-auto p-2 sm:p-4 h-[50vh] sm:h-[60vh] overflow-y-auto font-mono text-xs sm:text-sm md:text-base"
            onClick={() => inputRef.current?.focus()}
            role="log"
            aria-label="Interactive terminal"
        >
            {/* Mobile hint - only visible on touch devices */}
            <div className="sm:hidden text-xs text-slate-500 mb-2 text-center">
                Tap here to type commands
            </div>

            {/* Terminal output with aria-live for screen readers */}
            <div aria-live="polite" aria-atomic="false">
                {history.map((item, index) => (
                    <div key={index} className="mb-2 sm:mb-3">
                        {item.type === 'input' ? (
                            <div className="flex">
                                <span className="mr-1 sm:mr-2 text-emerald-400" aria-hidden="true">{'>'}</span>
                                <span className="text-slate-100 break-all">{item.content}</span>
                            </div>
                        ) : (
                            <div className="text-slate-400 leading-relaxed">
                                {item.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="flex items-center">
                <span className="mr-1 sm:mr-2 text-emerald-400" aria-hidden="true">{contactStep ? '?' : '>'}</span>
                <label htmlFor="terminal-input" className="sr-only">
                    {contactStep ? `Enter your ${contactStep}` : 'Type a command'}
                </label>
                <input
                    id="terminal-input"
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="form-input bg-transparent border-none p-0 focus:ring-0 text-slate-100 w-full font-mono text-xs sm:text-sm md:text-base caret-emerald-400"
                    autoFocus
                    placeholder={contactStep ? '' : 'Type a command...'}
                    aria-describedby="terminal-hint"
                />
            </div>
            <div id="terminal-hint" className="sr-only">Type 'help' to see available commands</div>
            <div ref={bottomRef} />
        </div>
    );
};

export default Terminal;
