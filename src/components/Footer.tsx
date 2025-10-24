import { FaHeart, FaReact } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';
import { profileData } from '../data/profileData';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { personalInfo } = profileData;

    return (
        <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 py-12 px-4 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="text-center">
                    {/* Made with love */}
                    <p className="text-gray-300 flex items-center justify-center gap-2 mb-3 text-lg">
                        Made with{' '}
                        <FaHeart className="text-red-500 animate-pulse inline-block" />{' '}
                        by{' '}
                        <span className="font-bold text-white">
                            {personalInfo.fullName}
                        </span>
                    </p>

                    {/* Copyright */}
                    <p className="text-gray-400 text-sm mb-4">
                        © {currentYear} All rights reserved.
                    </p>

                    {/* Tech stack badges */}
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="group relative flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-700/30 hover:border-cyan-500/50 hover:bg-gray-800 transition-all duration-300 hover:scale-110">
                            <FaReact className="text-cyan-400 text-xl group-hover:animate-spin" />
                            <span className="text-gray-300 text-xs font-medium">React</span>
                        </div>

                        <div className="group relative flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-700/30 hover:border-blue-500/50 hover:bg-gray-800 transition-all duration-300 hover:scale-110">
                            <SiTypescript className="text-blue-500 text-xl group-hover:scale-110 transition-transform" />
                            <span className="text-gray-300 text-xs font-medium">TypeScript</span>
                        </div>

                        <div className="group relative flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-700/30 hover:border-teal-500/50 hover:bg-gray-800 transition-all duration-300 hover:scale-110">
                            <SiTailwindcss className="text-teal-400 text-xl group-hover:scale-110 transition-transform" />
                            <span className="text-gray-300 text-xs font-medium">Tailwind CSS</span>
                        </div>
                    </div>

                    {/* Bottom gradient line */}
                    <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full animate-pulse" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
