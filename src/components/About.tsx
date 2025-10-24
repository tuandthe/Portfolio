import { FaGraduationCap, FaBriefcase, FaQuoteLeft, FaAward, FaCalendar } from 'react-icons/fa';
import { profileData } from '../data/profileData';

const About = () => {
    const { about, education, experience } = profileData;

    return (
        <section id="about" className="relative py-16 px-4 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Giới thiệu về tôi
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-10">
                    {/* About Me - Enhanced */}
                    <div className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl hover:shadow-primary-500/20 transition-all duration-500 border border-gray-700/50 hover:border-primary-500/50 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <FaQuoteLeft className="text-primary-400 text-2xl" />
                                <h3 className="text-2xl font-bold text-white">Về tôi</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-justify">{about.vi}</p>
                            <div className="mt-6 pt-6 border-t border-gray-700/50">
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm font-medium border border-primary-500/20">Backend Expert</span>
                                    <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium border border-purple-500/20">Java & .NET</span>
                                    <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium border border-blue-500/20">Clean Code</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education - Enhanced */}
                    <div className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 border border-gray-700/50 hover:border-purple-500/50 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg">
                                    <FaGraduationCap className="text-white text-2xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Học vấn</h3>
                            </div>
                            <div className="space-y-4">
                                <p className="text-white font-bold text-xl">{education.school}</p>
                                <div className="flex items-start gap-3">
                                    <FaAward className="text-purple-400 mt-1 flex-shrink-0" />
                                    <p className="text-gray-300 font-medium">{education.major}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaCalendar className="text-purple-400 flex-shrink-0" />
                                    <p className="text-gray-400 text-sm">{education.period}</p>
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-700/50">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30">
                                        <span className="text-gray-300 font-medium">GPA:</span>
                                        <span className="text-2xl font-bold text-white">{education.gpa}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-900 rounded-lg p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-6">
                        <FaBriefcase className="text-primary-500 text-3xl" />
                        <h3 className="text-2xl font-semibold text-primary-400">Kinh nghiệm làm việc</h3>
                    </div>
                    {experience.map((exp, index) => (
                        <div key={index} className="mb-6 last:mb-0">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                                <div>
                                    <h4 className="text-xl font-semibold text-white">{exp.position}</h4>
                                    <p className="text-primary-400 font-medium">{exp.company}</p>
                                    <p className="text-gray-500 text-sm italic">{exp.project}</p>
                                </div>
                                <span className="text-gray-500 text-sm mt-2 md:mt-0">{exp.period}</span>
                            </div>
                            <ul className="space-y-2 ml-4">
                                {exp.responsibilities.map((resp, idx) => (
                                    <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                                        <span className="text-primary-500 mt-1">•</span>
                                        <span>{resp}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
