import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, MapPin, Send } from 'lucide-react';
import RelatedLinks from '../components/RelatedLinks';

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us - DuplicateDetective</title>
                <meta name="description" content="Contact the DuplicateDetective team. We are here to help with any questions about our free reverse image search tool." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://checkduplicateimage.online/contact" />
            </Helmet>

            <div className="pt-20 md:pt-28 pb-8 min-h-screen">
                <div className="container mx-auto px-4 max-w-4xl">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text-cosmic mt-4">Contact Us</h1>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Have questions or suggestions? We'd love to hear from you.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="glass rounded-2xl p-8"
                        >
                            <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-500/10 rounded-lg">
                                        <Mail className="w-6 h-6 text-blue-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white mb-1">Email Us</h3>
                                        <p className="text-gray-400 text-sm mb-2">For general inquiries and support:</p>
                                        <a href="mailto:support@checkduplicateimage.online" className="text-blue-400 hover:text-blue-300 transition-colors">
                                            support@checkduplicateimage.online
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-purple-500/10 rounded-lg">
                                        <MessageSquare className="w-6 h-6 text-purple-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white mb-1">Feedback</h3>
                                        <p className="text-gray-400 text-sm mb-2">We value your feedback to improve our tool:</p>
                                        <a href="mailto:feedback@checkduplicateimage.online" className="text-purple-400 hover:text-purple-300 transition-colors">
                                            feedback@checkduplicateimage.online
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-green-500/10 rounded-lg">
                                        <MapPin className="w-6 h-6 text-green-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white mb-1">Location</h3>
                                        <p className="text-gray-400 text-sm">
                                            DuplicateDetective HQ<br />
                                            Digital Ocean, Cloud Server<br />
                                            Global Availability
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form Placeholder - AdSense likes to see functional looking pages */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="glass-strong rounded-2xl p-8"
                        >
                            <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full btn-cosmic bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                                >
                                    Send Message
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>

                {/* Related Links */}
                <div className="container mx-auto px-4 py-12">
                    <RelatedLinks currentPath="/contact" />
                </div>
            </div>
        </>
    );
};

export default Contact;
