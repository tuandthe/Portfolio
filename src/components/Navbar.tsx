import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Detect active section
            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { name: 'Trang chủ', href: '#home', id: 'home' },
        { name: 'Giới thiệu', href: '#about', id: 'about' },
        { name: 'Kỹ năng', href: '#skills', id: 'skills' },
        { name: 'Dự án', href: '#projects', id: 'projects' },
        { name: 'Liên hệ', href: '#contact', id: 'contact' },
    ];

    const handleClick = (href: string) => {
        setIsOpen(false);
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${scrolled
                    ? 'bg-gray-900/80 backdrop-blur-md shadow-2xl border-b border-primary-500/20'
                    : 'bg-gradient-to-b from-gray-900/50 to-transparent backdrop-blur-sm'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo with gradient and animation */}
                    <div className="flex-shrink-0 group">
                        <a
                            href="#home"
                            className="relative text-3xl font-extrabold"
                        >
                            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 hover:from-primary-300 hover:via-purple-300 hover:to-pink-300 transition-all duration-300">
                                DTT
                            </span>
                            {/* Glow effect */}
                            <span className="absolute inset-0 blur-xl bg-gradient-to-r from-primary-500/50 via-purple-500/50 to-pink-500/50 group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-2">
                            {menuItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleClick(item.href);
                                    }}
                                    className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 group overflow-hidden ${activeSection === item.id
                                            ? 'text-white'
                                            : 'text-gray-300 hover:text-white'
                                        }`}
                                >
                                    {/* Active background */}
                                    {activeSection === item.id && (
                                        <span className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl" />
                                    )}
                                    {/* Hover background */}
                                    <span className="absolute inset-0 bg-gradient-to-r from-primary-600/0 to-purple-600/0 group-hover:from-primary-600/20 group-hover:to-purple-600/20 rounded-xl transition-all duration-300" />
                                    {/* Border effect */}
                                    <span className={`absolute inset-0 rounded-xl transition-all duration-300 ${activeSection === item.id
                                            ? 'ring-2 ring-primary-400/50 shadow-lg shadow-primary-500/50'
                                            : 'ring-1 ring-gray-700/50 group-hover:ring-primary-500/50'
                                        }`} />
                                    <span className="relative z-10">{item.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative p-2 text-gray-300 hover:text-white focus:outline-none group"
                            aria-label="Toggle menu"
                        >
                            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="relative z-10">
                                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-primary-500/20 animate-slide-down shadow-2xl">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        {menuItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleClick(item.href);
                                }}
                                className={`relative block px-5 py-3 rounded-xl text-base font-semibold transition-all duration-300 group overflow-hidden ${activeSection === item.id
                                        ? 'text-white'
                                        : 'text-gray-300'
                                    }`}
                            >
                                {/* Active background */}
                                {activeSection === item.id && (
                                    <span className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl" />
                                )}
                                {/* Hover background */}
                                <span className="absolute inset-0 bg-gradient-to-r from-primary-600/0 to-purple-600/0 group-hover:from-primary-600/20 group-hover:to-purple-600/20 rounded-xl transition-all duration-300" />
                                {/* Border */}
                                <span className={`absolute inset-0 rounded-xl transition-all duration-300 ${activeSection === item.id
                                        ? 'ring-2 ring-primary-400/50'
                                        : 'ring-1 ring-gray-700/50 group-hover:ring-primary-500/50'
                                    }`} />
                                <span className="relative z-10">{item.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
