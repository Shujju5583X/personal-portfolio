import { navLinks } from '../data/portfolioData';

const Navbar = () => {
    return (
        <nav className="navbar" aria-label="Main navigation">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                <div className="text-lg sm:text-xl font-bold text-slate-100">
                    <span className="text-emerald-400">&lt;</span>
                    Shujatullah
                    <span className="text-emerald-400">/&gt;</span>
                </div>
                <div className="flex gap-3 sm:gap-6 text-sm sm:text-base">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="nav-link">
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
