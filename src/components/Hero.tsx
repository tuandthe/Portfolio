import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaCode, FaRocket } from 'react-icons/fa';
import { profileData } from '../data/profileData';
import { useEffect, useState } from 'react';

const Hero = () => {
    const { personalInfo } = profileData;
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden bg-gradient-to-br from-gray-900 via-primary-900/20 to-gray-900">
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse"
                    style={{
                        left: `${mousePosition.x / 50}px`,
                        top: `${mousePosition.y / 50}px`,
                        transition: 'all 0.3s ease-out'
                    }}
                />
                <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                {/* Avatar with glow effect */}
                <div className="mb-8 animate-fade-in">
                    <div className="relative inline-block group">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-purple-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse" />
                        <div className="relative w-36 h-36 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-500 via-purple-500 to-pink-500 flex items-center justify-center text-5xl font-bold text-white shadow-2xl transform group-hover:scale-110 transition-all duration-500">
                            {personalInfo.fullName.split(' ').map(n => n[0]).slice(0, 2).join('')}
                        </div>
                        {/* Floating icons */}
                        <div className="absolute -top-2 -right-2 bg-primary-500 p-2 rounded-full animate-bounce shadow-lg">
                            <FaCode className="text-white" size={16} />
                        </div>
                        <div className="absolute -bottom-2 -left-2 bg-purple-500 p-2 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.5s' }}>
                            <FaRocket className="text-white" size={16} />
                        </div>
                    </div>

                    {/* Typing effect for name */}
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-slide-up">
                        {personalInfo.fullName}
                    </h1>

                    {/* Animated role badges */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        {personalInfo.title.split('|').map((role, idx) => (
                            <span
                                key={idx}
                                className="px-4 py-2 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full text-sm md:text-base font-semibold shadow-lg transform hover:scale-110 transition-all duration-300 hover:shadow-primary-500/50"
                            >
                                {role.trim()}
                            </span>
                        ))}
                    </div>

                    {/* Statement with gradient background */}
                    <div className="relative inline-block animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 via-purple-600/20 to-pink-600/20 blur-xl" />
                        <p className="relative text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-6 py-4 rounded-lg backdrop-blur-sm border border-primary-500/20">
                            {personalInfo.portfolioStatement}
                        </p>
                    </div>
                </div>

                {/* Enhanced action buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                    <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center gap-2 px-7 py-3.5 bg-gray-800 text-white rounded-xl transition-all duration-300 hover:scale-105 shadow-xl overflow-hidden"
                        aria-label="GitHub"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <FaGithub size={22} className="relative z-10" />
                        <span className="relative z-10 font-semibold">GitHub</span>
                    </a>
                    <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-xl transition-all duration-300 hover:scale-105 shadow-xl shadow-primary-500/30 overflow-hidden"
                        aria-label="LinkedIn"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <FaLinkedin size={22} className="relative z-10" />
                        <span className="relative z-10 font-semibold">LinkedIn</span>
                    </a>
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="group relative flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl transition-all duration-300 hover:scale-105 shadow-xl shadow-green-500/30 overflow-hidden"
                        aria-label="Email"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <FaEnvelope size={22} className="relative z-10" />
                        <span className="relative z-10 font-semibold">Email Me</span>
                    </a>
                </div>

                {/* Location badge */}
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-800/50 backdrop-blur-sm text-gray-300 rounded-full animate-slide-up border border-gray-700/50 hover:border-primary-500/50 transition-colors" style={{ animationDelay: '0.4s' }}>
                    <FaMapMarkerAlt className="text-primary-400" />
                    <span className="font-medium">{personalInfo.location}</span>
                </div>

                {/* Scroll indicator */}
                <div className="mt-16 animate-bounce">
                    <a href="#about" className="inline-block text-primary-400 hover:text-primary-300 transition-colors" aria-label="Scroll to about">
                        <div className="w-8 h-12 border-2 border-current rounded-full flex items-start justify-center p-2">
                            <div className="w-1.5 h-3 bg-current rounded-full animate-pulse" />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;