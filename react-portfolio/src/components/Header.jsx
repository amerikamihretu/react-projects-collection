import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export default function Header({ dark, onToggleDark }) {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <a href="#" className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                    &lt;Amerika Mihretu /&gt;
                </a>

                {/* Desktop nav */}
                <ul className="hidden md:flex items-center gap-6">
                    {navLinks.map(link => (
                        <li key={link.name}>
                            <a href={link.href} className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li><ThemeToggle dark={dark} toggle={onToggleDark} /></li>
                </ul>

                {/* Mobile hamburger */}
                <div className="flex md:hidden items-center gap-3">
                    <ThemeToggle dark={dark} toggle={onToggleDark} />
                    <button
                        className="text-gray-700 dark:text-gray-300"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? '✕' : '☰'}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700">
                    <ul className="flex flex-col items-center py-4 gap-4">
                        {navLinks.map(link => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-gray-700 dark:text-gray-300 hover:text-indigo-600"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}