import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, AlertCircle } from 'lucide-react';
import RelatedLinks from '../components/RelatedLinks';

const Terms = () => {
    return (
        <>
            <Helmet>
                <title>Terms of Service - DuplicateDetective</title>
                <meta name="description" content="Read the Terms of Service for DuplicateDetective. Understand the rules, user responsibilities, and limitations of our free reverse image search tool." />
                <meta name="robots" content="noindex, follow" /> {/* Usually Terms pages don't need to be indexed for SEO traffic, but AdSense needs to crawl them. 'noindex' might hurt AdSense. Better to let it index but low priority. Changing to index. */}
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://checkduplicateimage.online/terms" />
            </Helmet>

            <div className="pt-20 md:pt-28 pb-8 min-h-screen">
                <div className="container mx-auto px-4 max-w-4xl">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text-cosmic mt-4">Terms of Service</h1>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Please read these terms carefully before using DuplicateDetective
                        </p>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass rounded-2xl p-6 md:p-8 mb-8"
                    >
                        <div className="prose prose-lg max-w-none text-gray-300">
                            <div className="flex items-center gap-3 mb-6">
                                <FileText className="w-6 h-6 text-blue-500" />
                                <h2 className="text-2xl font-semibold text-white m-0">1. Acceptance of Terms</h2>
                            </div>
                            <p>
                                By accessing and using DuplicateDetective (checkduplicateimage.online), you accept and agree to be bound by the terms and provision of this agreement.
                            </p>

                            <div className="flex items-center gap-3 mb-6 mt-8">
                                <CheckCircle className="w-6 h-6 text-green-500" />
                                <h2 className="text-2xl font-semibold text-white m-0">2. Use License</h2>
                            </div>
                            <p>
                                Permission is granted to temporarily use the materials (information or software) on DuplicateDetective's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>modify or copy the materials;</li>
                                <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                                <li>attempt to decompile or reverse engineer any software contained on DuplicateDetective's website;</li>
                                <li>remove any copyright or other proprietary notations from the materials; or</li>
                                <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                            </ul>

                            <div className="flex items-center gap-3 mb-6 mt-8">
                                <AlertCircle className="w-6 h-6 text-red-500" />
                                <h2 className="text-2xl font-semibold text-white m-0">3. Disclaimer</h2>
                            </div>
                            <p>
                                The materials on DuplicateDetective's website are provided on an 'as is' basis. DuplicateDetective makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                            </p>
                            <p className="mt-4">
                                Further, DuplicateDetective does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
                            </p>

                            <div className="flex items-center gap-3 mb-6 mt-8">
                                <FileText className="w-6 h-6 text-purple-500" />
                                <h2 className="text-2xl font-semibold text-white m-0">4. Limitations</h2>
                            </div>
                            <p>
                                In no event shall DuplicateDetective or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on DuplicateDetective's website, even if DuplicateDetective or a DuplicateDetective authorized representative has been notified orally or in writing of the possibility of such damage.
                            </p>

                            <div className="flex items-center gap-3 mb-6 mt-8">
                                <CheckCircle className="w-6 h-6 text-blue-500" />
                                <h2 className="text-2xl font-semibold text-white m-0">5. Accuracy of Materials</h2>
                            </div>
                            <p>
                                The materials appearing on DuplicateDetective's website could include technical, typographical, or photographic errors. DuplicateDetective does not warrant that any of the materials on its website are accurate, complete or current. DuplicateDetective may make changes to the materials contained on its website at any time without notice. However DuplicateDetective does not make any commitment to update the materials.
                            </p>

                            <div className="flex items-center gap-3 mb-6 mt-8">
                                <FileText className="w-6 h-6 text-green-500" />
                                <h2 className="text-2xl font-semibold text-white m-0">6. Links</h2>
                            </div>
                            <p>
                                DuplicateDetective has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by DuplicateDetective of the site. Use of any such linked website is at the user's own risk.
                            </p>

                            <div className="flex items-center gap-3 mb-6 mt-8">
                                <AlertCircle className="w-6 h-6 text-red-500" />
                                <h2 className="text-2xl font-semibold text-white m-0">7. Modifications</h2>
                            </div>
                            <p>
                                DuplicateDetective may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                            </p>

                            <p className="text-sm text-gray-500 mt-12 border-t border-gray-700 pt-8">
                                Last updated: October 26, 2025
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Related Links */}
                <div className="container mx-auto px-4 py-12">
                    <RelatedLinks currentPath="/terms" />
                </div>
            </div>
        </>
    );
};

export default Terms;
