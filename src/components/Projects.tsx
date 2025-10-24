import { FaGithub, FaRocket, FaCode } from 'react-icons/fa';
import { profileData } from '../data/profileData';

const Projects = () => {
    const { projects } = profileData;

    return (
        <section id="projects" className="relative py-16 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Dự án nổi bật
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto rounded-full" />
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Khám phá các dự án đã tôi đã tham gia và xây dựng
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 border border-gray-700/50 hover:border-blue-500/50 overflow-hidden"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Decorative icon */}
                            <div className="absolute top-4 right-4 text-4xl opacity-10 group-hover:opacity-20 group-hover:rotate-12 transition-all duration-500">
                                <FaRocket />
                            </div>

                            <div className="relative z-10">
                                {/* Project header */}
                                <div className="mb-6">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 pr-12">
                                        {project.name}
                                    </h3>
                                    {project.duration && (
                                        <p className="text-sm text-gray-400 flex items-center gap-2">
                                            <span className="text-blue-400">📅</span>
                                            {project.duration}
                                        </p>
                                    )}
                                </div>

                                <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">{project.description}</p>

                                {/* Tech Stack */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                                        <FaCode className="text-cyan-400" />
                                        Công nghệ
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 text-blue-300 px-3 py-1.5 rounded-lg text-xs font-medium hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 cursor-default"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-bold text-white mb-3">
                                        ✨ Tính năng chính
                                    </h4>
                                    <ul className="space-y-2">
                                        {project.features.map((feature, idx) => (
                                            <li key={idx} className="text-gray-300 text-sm flex items-start gap-2 group/item">
                                                <span className="text-purple-400 mt-0.5 group-hover/item:scale-125 transition-transform">•</span>
                                                <span className="group-hover/item:text-white transition-colors">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Links */}
                                {project.github && (
                                    <div className="flex gap-3 mt-6 pt-6 border-t border-gray-700/50">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/btn relative flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-blue-500/50 hover:scale-105 border border-gray-700 hover:border-transparent overflow-hidden"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                            <FaGithub className="relative z-10 group-hover/btn:rotate-12 transition-transform" />
                                            <span className="relative z-10">Source Code</span>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
