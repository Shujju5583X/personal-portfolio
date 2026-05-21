/**
 * Centralized portfolio data.
 * Both the visual UI sections and the Terminal component consume this data,
 * ensuring a single source of truth for all personal information.
 */

export const personalInfo = {
    name: 'Syed Shujatullah',
    title: 'Full Stack Engineering Student (Integrated M.Tech)',
    email: 'shujatullahsyed801@gmail.com',
    phone: '+91 6305085183',
    github: {
        username: 'Shujju5583X',
        url: 'https://github.com/Shujju5583X',
        apiUrl: 'https://api.github.com/users/Shujju5583X/repos?sort=updated',
    },
    summary:
        'Ambitious and hands-on developer with a strong foundation in the MERN stack and TypeScript. ' +
        'Fueled by curiosity and a passion for technology, I am deeply immersed in learning coding, ' +
        'web development, and data analysis. Currently building AI-driven solutions and seeking a ' +
        'challenging internship where I can take ownership of tasks, ship production-grade features, ' +
        'and demonstrate continuous growth in an ever-evolving field.',
    resumeUrl: '/resume.pdf', // Place a resume.pdf in client/public/
};

export const education = [
    {
        institution: 'VIT AP CAMPUS, Amaravati',
        degree: 'M.Tech (Integrated) in CSE',
        period: '2021-2026',
        score: 'CGPA: 7.50/10',
    },
    {
        institution: 'Akansha Junior College',
        degree: 'Senior Secondary (Science)',
        period: '2021',
        score: '76.10%',
    },
    {
        institution: 'Sree Narayana High School',
        degree: 'Secondary',
        period: '2019',
        score: 'CGPA: 8.80/10',
    },
];

export const skills = {
    languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'HTML5', 'CSS3'],
    frameworks: ['Node.js', 'React', 'Express.js'],
    tools: ['APIs', 'Machine Learning', 'TensorFlow', 'IoT (Raspberry Pi)'],
    certifications: [
        {
            name: 'AI Using Google TensorFlow',
            issuer: 'Smart Bridge, Powered by Google Developers',
            date: 'Jun 2024',
        },
    ],
};

export const activities = [
    {
        label: 'Competitive Coding',
        description: 'Active participant in team coding contests.',
    },
    {
        label: 'Technical Interests',
        description: 'Coding, Web Development, Data Analysis.',
    },
];

export const navLinks = [
    { label: 'Terminal', href: '#hero', shortcut: '0' },
    { label: 'About', href: '#about', shortcut: '1' },
    { label: 'Projects', href: '#projects', shortcut: '2' },
    { label: 'Skills', href: '#skills', shortcut: '3' },
    { label: 'Contact', href: '#contact', shortcut: '4' },
];
