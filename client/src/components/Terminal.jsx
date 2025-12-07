import React, { useState, useEffect, useRef } from 'react';

const Terminal = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'output', content: 'Welcome to the Matrix. Type "help" to see available commands.' }
    ]);
    const [contactStep, setContactStep] = useState(null);
    const [contactData, setContactData] = useState({ name: '', email: '', message: '' });

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

    const handleCommand = async (cmd) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        const newHistory = [...history, { type: 'input', content: cmd }];

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
                            <div className="pl-4 text-slate-400"><span className="text-emerald-400">clear</span>    - Clear the terminal</div>
                        </div>
                    )
                }]);
                break;
            case 'about':
                setHistory([...newHistory, {
                    type: 'output',
                    content: (
                        <div className="flex flex-col gap-3">
                            <div className="text-2xl font-bold text-slate-100">Syed Shujatullah</div>
                            <div className="text-emerald-400 font-medium">Full Stack Engineering Student (Integrated M.Tech)</div>
                            <div className="text-slate-500 text-sm">+91 6305085183 | shujatullahsyed801@gmail.com | <a href="https://github.com/Shujju5583X" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">github.com/Shujju5583X</a></div>
                            <div className="mt-4">
                                <div className="font-bold text-slate-100 mb-2">Professional Summary:</div>
                                <div className="text-slate-400 leading-relaxed">Ambitious and hands-on developer with a strong foundation in the MERN stack and TypeScript. Fueled by curiosity and a passion for technology, I am deeply immersed in learning coding, web development, and data analysis. Currently building AI-driven solutions and seeking a challenging internship where I can take ownership of tasks, ship production-grade features, and demonstrate continuous growth in an ever-evolving field.</div>
                            </div>
                            <div className="mt-4">
                                <div className="font-bold text-slate-100 mb-2">Education:</div>
                                <div className="space-y-2">
                                    <div className="flex items-start gap-2">
                                        <span className="text-emerald-400">{'>'}</span>
                                        <div className="text-slate-400"><span className="text-slate-200">VIT AP CAMPUS, Amaravati</span> (2021-2026): M.Tech (Integrated) in CSE - CGPA: 7.37/10</div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-emerald-400">{'>'}</span>
                                        <div className="text-slate-400"><span className="text-slate-200">Akansha Junior College</span> (2021): Senior Secondary (Science) - 76.10%</div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-emerald-400">{'>'}</span>
                                        <div className="text-slate-400"><span className="text-slate-200">Sree Narayana High School</span> (2019): Secondary - CGPA: 8.80/10</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="font-bold text-slate-100 mb-2">Activities & Interests:</div>
                                <div className="space-y-1">
                                    <div className="flex items-start gap-2">
                                        <span className="text-emerald-400">{'>'}</span>
                                        <span className="text-slate-400"><span className="text-slate-200">Competitive Coding:</span> Active participant in team coding contests.</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-emerald-400">{'>'}</span>
                                        <span className="text-slate-400"><span className="text-slate-200">Technical Interests:</span> Coding, Web Development, Data Analysis.</span>
                                    </div>
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
                                        {['JavaScript', 'TypeScript', 'Python', 'Java', 'HTML5', 'CSS3'].map(skill => (
                                            <span key={skill} className="tag">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                                    <div className="font-bold text-emerald-400 mb-2">Frameworks</div>
                                    <div className="flex flex-wrap gap-2">
                                        {['Node.js', 'React', 'Express.js'].map(skill => (
                                            <span key={skill} className="tag">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                                    <div className="font-bold text-emerald-400 mb-2">Tools & Technologies</div>
                                    <div className="flex flex-wrap gap-2">
                                        {['APIs', 'Machine Learning', 'TensorFlow', 'IoT (Raspberry Pi)'].map(skill => (
                                            <span key={skill} className="tag">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                                    <div className="font-bold text-emerald-400 mb-2">Certifications</div>
                                    <div className="space-y-2">
                                        <div className="text-slate-400">
                                            <span className="tag">AI Using Google TensorFlow</span>
                                            <span className="text-slate-500 text-sm ml-2">Smart Bridge, Powered by Google Developers (Jun 2024)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }]);
                break;
            case 'projects':
                const projectsData = [
                    {
                        id: 1,
                        title: 'Acclaim: AI-Based Sanctioning System',
                        period: 'Jul 2025 – Present',
                        description: 'Developing an AI-driven sanctioning system designed to automate and manage patient billing in medical fields. Engineered an efficient Machine Learning model to handle sanctioning logic, ensuring high accuracy in processing. Designed the system for IoT scalability by adapting the model for Raspberry Pi deployment, enabling remote operation via Bluetooth and Wi-Fi.',
                        tech: ['Python', 'Machine Learning', 'TensorFlow', 'IoT', 'Raspberry Pi']
                    },
                    {
                        id: 2,
                        title: 'E-Commerce Web Application',
                        period: 'Jul 2023 – Nov 2023',
                        description: 'Built a functional online shopping platform to apply full-stack web development principles. Tackled complex backend challenges, specifically focusing on API syncing to ensure real-time data consistency across the application. Iterated on the codebase to resolve performance bottlenecks and logic errors, gaining deep insight into state management and data flow.',
                        tech: ['JavaScript', 'React', 'Node.js', 'Express', 'APIs']
                    }
                ];
                const projectList = (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        {projectsData.map(p => (
                            <div key={p.id} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 group">
                                <div className="text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors mb-1">{p.title}</div>
                                <div className="text-xs text-emerald-400/70 mb-2">{p.period}</div>
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

            try {
                await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(finalData)
                });
                setHistory(prev => [...prev, { type: 'output', content: <span className="text-emerald-400">✓ Message sent successfully.</span> }]);
            } catch (err) {
                setHistory(prev => [...prev, { type: 'output', content: <span className="text-red-400">✗ Transmission failed.</span> }]);
            }
            setContactData({ name: '', email: '', message: '' });
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-4 h-[60vh] overflow-y-auto font-mono text-base" onClick={() => inputRef.current?.focus()}>
            {history.map((item, index) => (
                <div key={index} className="mb-3">
                    {item.type === 'input' ? (
                        <div className="flex">
                            <span className="mr-2 text-emerald-400">{'>'}</span>
                            <span className="text-slate-100">{item.content}</span>
                        </div>
                    ) : (
                        <div className="text-slate-400 leading-relaxed">
                            {item.content}
                        </div>
                    )}
                </div>
            ))}

            <div className="flex items-center">
                <span className="mr-2 text-emerald-400">{contactStep ? '?' : '>'}</span>
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="form-input bg-transparent border-none p-0 focus:ring-0 text-slate-100 w-full font-mono text-base caret-emerald-400"
                    autoFocus
                />
            </div>
            <div ref={bottomRef} />
        </div>
    );
};

export default Terminal;
