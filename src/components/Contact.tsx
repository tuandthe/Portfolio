import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { profileData } from '../data/profileData';

const Contact = () => {
    const { contact } = profileData;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mailtoLink = `mailto:${contact.email}?subject=Contact from ${formData.name}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        window.location.href = mailtoLink;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="relative py-16 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Liên hệ với tôi
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto rounded-full" />
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Hãy kết nối với tôi! Tôi luôn sẵn sàng trao đổi về các dự án và cơ hội hợp tác.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Information */}
                    <div className="space-y-6 animate-slide-in-left">
                        <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700/50 hover:border-pink-500/50 transition-all duration-500 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-6">
                                    📞 Thông tin liên hệ
                                </h3>

                                <div className="space-y-5">
                                    <a
                                        href={`mailto:${contact.email}`}
                                        className="group/item flex items-center gap-4 text-gray-300 hover:text-pink-400 transition-all duration-300 p-3 rounded-xl hover:bg-gray-800/50"
                                    >
                                        <div className="w-12 h-12 flex items-center justify-center bg-pink-600/20 rounded-xl group-hover/item:bg-pink-600/30 group-hover/item:scale-110 transition-all">
                                            <FaEnvelope className="text-pink-400 text-xl" />
                                        </div>
                                        <span className="font-medium">{contact.email}</span>
                                    </a>

                                    <a
                                        href={`tel:${contact.phone}`}
                                        className="group/item flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-all duration-300 p-3 rounded-xl hover:bg-gray-800/50"
                                    >
                                        <div className="w-12 h-12 flex items-center justify-center bg-blue-600/20 rounded-xl group-hover/item:bg-blue-600/30 group-hover/item:scale-110 transition-all">
                                            <FaPhone className="text-blue-400 text-xl" />
                                        </div>
                                        <span className="font-medium">{contact.phone}</span>
                                    </a>

                                    <div className="group/item flex items-center gap-4 text-gray-300 p-3 rounded-xl">
                                        <div className="w-12 h-12 flex items-center justify-center bg-purple-600/20 rounded-xl">
                                            <FaMapMarkerAlt className="text-purple-400 text-xl" />
                                        </div>
                                        <span className="font-medium">{contact.address}</span>
                                    </div>
                                </div>

                                <div className="mt-8 pt-8 border-t border-gray-700/50">
                                    <h4 className="text-lg font-bold text-white mb-5">
                                        🌐 Mạng xã hội
                                    </h4>
                                    <div className="flex gap-4">
                                        <a
                                            href={contact.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/social w-14 h-14 flex items-center justify-center bg-gradient-to-br from-blue-600/20 to-cyan-600/20 hover:from-blue-600 hover:to-cyan-600 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 border border-blue-500/30"
                                            aria-label="LinkedIn"
                                        >
                                            <FaLinkedin className="text-2xl text-blue-400 group-hover/social:text-white transition-colors" />
                                        </a>
                                        <a
                                            href={contact.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/social w-14 h-14 flex items-center justify-center bg-gradient-to-br from-gray-700/50 to-gray-600/50 hover:from-gray-600 hover:to-gray-500 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/50 border border-gray-500/30"
                                            aria-label="GitHub"
                                        >
                                            <FaGithub className="text-2xl text-gray-400 group-hover/social:text-white transition-colors" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="animate-slide-in-right">
                        <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-6">
                                    ✉️ Gửi tin nhắn
                                </h3>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="relative">
                                        <label htmlFor="name" className="block text-gray-300 mb-2 text-sm font-medium">
                                            Tên của bạn
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            className={`w-full px-4 py-3 bg-gray-900/50 backdrop-blur-sm border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300 ${focusedField === 'name'
                                                ? 'border-purple-500 shadow-lg shadow-purple-500/20'
                                                : 'border-gray-700/50 hover:border-gray-600'
                                                }`}
                                            placeholder="Nguyễn Văn A"
                                        />
                                    </div>

                                    <div className="relative">
                                        <label htmlFor="email" className="block text-gray-300 mb-2 text-sm font-medium">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            className={`w-full px-4 py-3 bg-gray-900/50 backdrop-blur-sm border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300 ${focusedField === 'email'
                                                ? 'border-blue-500 shadow-lg shadow-blue-500/20'
                                                : 'border-gray-700/50 hover:border-gray-600'
                                                }`}
                                            placeholder="email@example.com"
                                        />
                                    </div>

                                    <div className="relative">
                                        <label htmlFor="message" className="block text-gray-300 mb-2 text-sm font-medium">
                                            Nội dung
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('message')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            rows={5}
                                            className={`w-full px-4 py-3 bg-gray-900/50 backdrop-blur-sm border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none ${focusedField === 'message'
                                                ? 'border-pink-500 shadow-lg shadow-pink-500/20'
                                                : 'border-gray-700/50 hover:border-gray-600'
                                                }`}
                                            placeholder="Viết tin nhắn của bạn..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="group/btn relative w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-xl transition-all duration-300 font-medium shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02] overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            <FaPaperPlane className="group-hover/btn:translate-x-1 transition-transform" />
                                            Gửi tin nhắn
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
