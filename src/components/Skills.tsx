import {
    SiSpringboot,
    SiSharp,
    SiReact,
    SiJavascript,
    SiMysql,
    SiGit,
    SiGithub,
    SiJira,
    SiPostman,
    SiRedis
} from 'react-icons/si';
import { FaJava, FaHtml5, FaCss3Alt, FaBootstrap, FaDatabase, FaCloud } from 'react-icons/fa';
import { profileData } from '../data/profileData';

const Skills = () => {
    const { skills, certifications } = profileData;

    const skillIcons: { [key: string]: JSX.Element } = {
        'Java': <FaJava className="text-red-500" size={40} />,
        'Spring Boot': <SiSpringboot className="text-green-500" size={40} />,
        'C#': <SiSharp className="text-purple-500" size={40} />,
        '.NET Core': <SiSharp className="text-blue-500" size={40} />,
        'ReactJS': <SiReact className="text-cyan-400" size={40} />,
        'JavaScript': <SiJavascript className="text-yellow-400" size={40} />,
        'HTML5': <FaHtml5 className="text-orange-500" size={40} />,
        'CSS3': <FaCss3Alt className="text-blue-500" size={40} />,
        'Bootstrap': <FaBootstrap className="text-purple-600" size={40} />,
        'SQL Server': <FaDatabase className="text-red-600" size={40} />,
        'MySQL': <SiMysql className="text-blue-400" size={40} />,
        'Git': <SiGit className="text-orange-600" size={40} />,
        'GitHub': <SiGithub className="text-gray-400" size={40} />,
        'Jira': <SiJira className="text-blue-500" size={40} />,
        'Postman': <SiPostman className="text-orange-500" size={40} />,
        'Redis': <SiRedis className="text-red-500" size={40} />,
        'Azure': <FaCloud className="text-blue-400" size={40} />,
    };

    const getIcon = (skillName: string) => {
        for (const key in skillIcons) {
            if (skillName.toLowerCase().includes(key.toLowerCase())) {
                return skillIcons[key];
            }
        }
        return null;
    };

    return (
        <section id="skills" className="relative py-16 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-10 w-72 h-72 bg-green-500 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Kỹ năng
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-purple-500 mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-10">
                    {/* Backend Skills */}
                    <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-2xl hover:shadow-red-500/20 transition-all duration-500 border border-gray-700/50 hover:border-red-500/50 overflow-hidden animate-slide-in-left">
                        <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="text-2xl">⚙️</span> Backend
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.backend.map((skill, index) => (
                                    <div key={index} className="group/item flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm px-4 py-3 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/30 border border-gray-700/30">
                                        <div className="transform group-hover/item:rotate-12 transition-transform">
                                            {getIcon(skill)}
                                        </div>
                                        <span className="text-gray-300 text-sm font-medium">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Frontend Skills */}
                    <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 border border-gray-700/50 hover:border-cyan-500/50 overflow-hidden animate-slide-in-right">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="text-2xl">🎨</span> Frontend
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.frontend.map((skill, index) => (
                                    <div key={index} className="group/item flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm px-4 py-3 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30 border border-gray-700/30">
                                        <div className="transform group-hover/item:rotate-12 transition-transform">
                                            {getIcon(skill)}
                                        </div>
                                        <span className="text-gray-300 text-sm font-medium">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Database */}
                    <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 border border-gray-700/50 hover:border-blue-500/50 overflow-hidden animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="text-2xl">🗄️</span> Database
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.database.map((skill, index) => (
                                    <div key={index} className="group/item flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm px-4 py-3 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 border border-gray-700/30">
                                        <div className="transform group-hover/item:rotate-12 transition-transform">
                                            {getIcon(skill)}
                                        </div>
                                        <span className="text-gray-300 text-sm font-medium">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Tools */}
                    <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 border border-gray-700/50 hover:border-orange-500/50 overflow-hidden animate-slide-in-right" style={{ animationDelay: '0.1s' }}>
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="text-2xl">🛠️</span> Tools & Technologies
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.tools.map((skill, index) => (
                                    <div key={index} className="group/item flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm px-4 py-3 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/30 border border-gray-700/30">
                                        <div className="transform group-hover/item:rotate-12 transition-transform">
                                            {getIcon(skill)}
                                        </div>
                                        <span className="text-gray-300 text-sm font-medium">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Concepts & Soft Skills */}
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                    <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 border border-gray-700/50 hover:border-teal-500/50 overflow-hidden animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="text-2xl">💡</span> Concepts & Methodologies
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.concepts.map((concept, index) => (
                                    <span
                                        key={index}
                                        className="bg-teal-600/10 border border-teal-500/30 text-teal-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-600/20 hover:scale-110 transition-all duration-300 cursor-default hover:shadow-lg hover:shadow-teal-500/20"
                                    >
                                        {concept}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-2xl hover:shadow-green-500/20 transition-all duration-500 border border-gray-700/50 hover:border-green-500/50 overflow-hidden animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                        <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-lime-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="text-2xl">🤝</span> Soft Skills
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.softSkills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-green-600/10 border border-green-500/30 text-green-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-600/20 hover:scale-110 transition-all duration-300 cursor-default hover:shadow-lg hover:shadow-green-500/20"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Certifications */}
                <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 overflow-hidden animate-scale-in">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10">
                        <div className="text-center mb-8">
                            <h3 className="text-3xl font-bold text-white mb-2">
                                🏆 Chứng chỉ
                            </h3>
                            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            {certifications.map((cert, index) => (
                                <a
                                    key={index}
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/cert relative bg-gray-900/60 backdrop-blur-sm rounded-xl p-5 hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 border border-gray-700/30 hover:border-purple-500/50 block"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="absolute top-3 right-3 text-3xl opacity-20 group-hover/cert:opacity-40 group-hover/cert:rotate-12 transition-all">
                                        🎖️
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2 pr-8">
                                        {cert.name}
                                    </h4>
                                    <p className="text-gray-300 mb-1 font-medium text-sm">
                                        {cert.issuer}
                                    </p>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
