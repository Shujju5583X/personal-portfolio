import { useState, useEffect } from 'react';
import { personalInfo } from './data/portfolioData';
import Navbar from './components/Navbar';
import MatrixRain from './components/MatrixRain';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

const CACHE_KEY = 'portfolio_github_repos';
const CACHE_DURATION = 1000 * 60 * 30; // 30 minutes

function App() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch projects from GitHub API with localStorage caching
    useEffect(() => {
        const fetchProjects = async () => {
            // Check cache first
            try {
                const cached = localStorage.getItem(CACHE_KEY);
                if (cached) {
                    const { data, timestamp } = JSON.parse(cached);
                    if (Date.now() - timestamp < CACHE_DURATION) {
                        setProjects(data);
                        setLoading(false);
                        return;
                    }
                }
            } catch {
                // Cache read failed, proceed to fetch
            }

            try {
                const response = await fetch(personalInfo.github.apiUrl);
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

                // Save to cache
                try {
                    localStorage.setItem(CACHE_KEY, JSON.stringify({
                        data: mappedProjects,
                        timestamp: Date.now(),
                    }));
                } catch {
                    // localStorage full or unavailable
                }
            } catch (error) {
                console.error('Error fetching GitHub repos:', error);
                setProjects([]);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    return (
        <div className="relative min-h-screen w-full bg-slate-900 text-slate-300 overflow-hidden">
            {/* Matrix Rain Background Effect */}
            <MatrixRain />

            {/* CRT Scanline Overlay */}
            <div className="crt-overlay" aria-hidden="true"></div>

            {/* Navbar */}
            <Navbar />

            {/* Hero Section (Terminal) */}
            <Hero projects={projects} loading={loading} />

            {/* About Section */}
            <About />

            {/* Projects Section */}
            <Projects projects={projects} loading={loading} />

            {/* Skills Section */}
            <Skills />

            {/* Contact Section */}
            <Contact />
        </div>
    );
}

export default App;
