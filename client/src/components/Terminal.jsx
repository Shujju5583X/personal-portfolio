import { useState, useEffect, useRef } from 'react';
import { createGmailLink, personalInfo } from '../data/portfolioData';
import { Bio } from './sections/About';
import { SkillsGrid } from './sections/Skills';
import { ProjectCard } from './sections/Projects';

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
    const terminalRef = useRef(null);
    const shouldAutoScrollRef = useRef(true);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }

        if (terminalRef.current && shouldAutoScrollRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    const handleTerminalScroll = () => {
        const el = terminalRef.current;
        if (!el) return;

        const isNearBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 24;
        shouldAutoScrollRef.current = isNearBottom;
    };

    const handleCommand = (cmd) => {
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
                setHistory([...newHistory, { type: 'output', content: <Bio /> }]);
                break;
            case 'skills':
                setHistory([...newHistory, { type: 'output', content: <SkillsGrid /> }]);
                break;
            case 'projects':
                if (loading) {
                    setHistory([...newHistory, { type: 'output', content: <span className="text-emerald-400">Fetching latest data from GitHub...</span> }]);
                } else if (projects.length === 0) {
                    setHistory([...newHistory, { type: 'output', content: <span className="text-slate-400">No projects found. Unable to fetch from GitHub.</span> }]);
                } else {
                    const projectList = (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-2">
                            {projects.map(p => (
                                <ProjectCard key={p.id} project={p} />
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
    };

    const handleContactFlow = (value, currentHistory) => {
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

            const gmailLink = createGmailLink({
                to: personalInfo.email,
                subject: `Portfolio Contact from ${finalData.name}`,
                body: `Name: ${finalData.name}\nEmail: ${finalData.email}\nMessage: ${finalData.message}`,
            });
            setTimeout(() => {
                setHistory(prev => [...prev, {
                    type: 'output',
                    content: (
                        <div className="flex flex-col gap-1">
                            <span className="text-emerald-400">✓ Message prepared.</span>
                            <a href={gmailLink} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline text-sm">
                                → Click here to send via Gmail
                            </a>
                        </div>
                    )
                }]);
            }, 1000);
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
            ref={terminalRef}
            className="w-full max-w-4xl mx-auto p-2 sm:p-4 h-[50vh] sm:h-[60vh] overflow-y-auto font-mono text-xs sm:text-sm md:text-base"
            onClick={() => inputRef.current?.focus()}
            onScroll={handleTerminalScroll}
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
                    placeholder={contactStep ? '' : 'Type a command...'}
                    aria-describedby="terminal-hint"
                />
            </div>
            <div id="terminal-hint" className="sr-only">Type 'help' to see available commands</div>
        </div>
    );
};

export default Terminal;
