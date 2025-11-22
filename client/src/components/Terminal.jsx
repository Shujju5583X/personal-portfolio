import React, { useState, useEffect, useRef } from 'react';

const Terminal = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'output', content: 'Welcome to the Matrix. Type "help" to see available commands.' }
    ]);
    const [contactStep, setContactStep] = useState(null); // null, 'name', 'email', 'message'
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
                            <div>Available commands:</div>
                            <div className="pl-4">help     - Show this help message</div>
                            <div className="pl-4">about    - Who am I?</div>
                            <div className="pl-4">projects - View my work</div>
                            <div className="pl-4">skills   - Technical abilities</div>
                            <div className="pl-4">clear    - Clear the terminal</div>
                        </div>
                    )
                }]);
                break;
            case 'about':
                setHistory([...newHistory, {
                    type: 'output',
                    content: (
                        <div className="flex flex-col gap-2">
                            <div className="text-xl font-bold text-matrix-green">Syed Shujatullah</div>
                            <div className="opacity-80">Full Stack Engineering Student (Integrated M.Tech)</div>
                            <div className="opacity-80">Hyderabad | +91 6305085183 | shujatullahsyed801@gmail.com</div>
                            <br />
                            <div className="font-bold">Professional Summary:</div>
                            <div>Ambitious and hands-on developer with a strong foundation in the MERN stack and TypeScript. Fueled by curiosity and a passion for technology, I am deeply immersed in learning coding, web development, and data analysis. Currently building AI-driven solutions.</div>
                            <br />
                            <div className="font-bold">Education:</div>
                            <div>{'>'} VIT AP CAMPUS (2021-2026): M.Tech (Integrated) in CSE - CGPA: 7.37/10</div>
                            <div>{'>'} Akansha Junior College (2021): Senior Secondary - 76.10%</div>
                            <div>{'>'} Sree Narayana High School (2019): Secondary - CGPA: 8.80/10</div>
                        </div>
                    )
                }]);
                break;
            case 'skills':
                setHistory([...newHistory, {
                    type: 'output',
                    content: (
                        <div className="flex flex-col gap-2">
                            <div><span className="font-bold">Languages:</span> JavaScript, TypeScript, Python, Java, HTML5, CSS3</div>
                            <div><span className="font-bold">Frameworks:</span> Node.js, React, Express.js</div>
                            <div><span className="font-bold">Tools:</span> APIs, Machine Learning, TensorFlow, IoT (Raspberry Pi)</div>
                            <div><span className="font-bold">Certifications:</span> AI Using Google TensorFlow</div>
                        </div>
                    )
                }]);
                break;
            case 'projects':
                setHistory([...newHistory, { type: 'output', content: 'Fetching projects...' }]);
                try {
                    const res = await fetch('/api/projects');
                    const data = await res.json();
                    const projectList = (
                        <div className="flex flex-col gap-4 mt-2">
                            {data.map(p => (
                                <div key={p.id} className="border-l-2 border-matrix-green pl-4">
                                    <div className="text-xl font-bold">{p.title}</div>
                                    <div className="text-sm opacity-80">{p.description}</div>
                                    <div className="text-xs mt-1 text-matrix-darkGreen font-bold">Tech: {p.tech.join(', ')}</div>
                                </div>
                            ))}
                        </div>
                    );
                    setHistory(prev => [...prev.slice(0, -1), { type: 'output', content: projectList }]);
                } catch (err) {
                    setHistory(prev => [...prev.slice(0, -1), { type: 'output', content: 'Error: Could not connect to the mainframe.' }]);
                }
                break;
            case 'contact':
                setContactStep('name');
                setHistory([...newHistory, { type: 'output', content: 'Initiating secure connection... Enter your Name:' }]);
                break;
            case 'clear':
                setHistory([]);
                break;
            case '':
                setHistory(newHistory);
                break;
            default:
                setHistory([...newHistory, { type: 'output', content: `Command not found: ${cmd}. Type "help" for assistance.` }]);
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
            setHistory([...currentHistory, { type: 'output', content: 'Transmitting data...' }]);

            try {
                await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(finalData)
                });
                setHistory(prev => [...prev, { type: 'output', content: 'Message sent successfully.' }]);
            } catch (err) {
                setHistory(prev => [...prev, { type: 'output', content: 'Transmission failed.' }]);
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
        <div className="w-full max-w-4xl mx-auto p-4 h-[80vh] overflow-y-auto font-vt323 text-lg" onClick={() => inputRef.current?.focus()}>
            {history.map((item, index) => (
                <div key={index} className="mb-2">
                    {item.type === 'input' ? (
                        <div className="flex">
                            <span className="mr-2 text-matrix-green">{'>'}</span>
                            <span>{item.content}</span>
                        </div>
                    ) : (
                        <div className="text-matrix-green opacity-90 animate-typing overflow-hidden whitespace-pre-wrap">
                            {item.content}
                        </div>
                    )}
                </div>
            ))}

            <div className="flex items-center">
                <span className="mr-2 text-matrix-green">{contactStep ? '?' : '>'}</span>
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="bg-transparent border-none outline-none text-matrix-green w-full font-vt323 text-lg caret-matrix-green"
                    autoFocus
                />
            </div>
            <div ref={bottomRef} />
        </div>
    );
};

export default Terminal;
