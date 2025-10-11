import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import RelatedLinks from '../components/RelatedLinks';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - DuplicateDetective Data Protection & Security</title>
        <meta name="description" content="Privacy policy for DuplicateDetective duplicate image detection tool. We protect your data with auto-deletion, no tracking and secure processing." />
        <meta name="keywords" content="duplicate detective privacy policy, image detection privacy, duplicate finder data policy, secure image processing, GDPR compliant" />
        <meta name="author" content="DuplicateDetective" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://checkduplicateimage.online/privacy" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Privacy Policy - DuplicateDetective Data Protection & Security" />
        <meta property="og:description" content="Privacy policy for DuplicateDetective duplicate image detection tool. We protect your data with auto-deletion, no tracking and secure processing." />
        <meta property="og:url" content="https://checkduplicateimage.online/privacy" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DuplicateDetective" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy - DuplicateDetective Data Protection & Security" />
        <meta name="twitter:description" content="Privacy policy for DuplicateDetective duplicate image detection tool. We protect your data with auto-deletion, no tracking and secure processing." />
        {/* Canonical BreadcrumbList Schema */}
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "@id": "https://checkduplicateimage.online/privacy#breadcrumb",
          "name": "Breadcrumbs — Privacy Policy",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@type": "WebPage",
                "@id": "https://checkduplicateimage.online/",
                "name": "Home"
              }
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@type": "WebPage",
                "@id": "https://checkduplicateimage.online/privacy",
                "name": "Privacy Policy"
              }
            }
          ]
        }
        `}</script>
      </Helmet>

      <div className="pt-20 md:pt-28 pb-8 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text-cosmic mt-4">DuplicateDetective Privacy Policy</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              How DuplicateDetective handles your data and protects your privacy when using our duplicate image detection and reverse search tool
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-6 md:p-8 mb-8"
          >
            <div className="prose prose-lg max-w-none">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-blue-100">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold m-0">Data Collection</h2>
              </div>
              
              <p>
                At DuplicateDetective (checkduplicateimage.online), we prioritize your privacy and data security. When you use our duplicate image detection and reverse search tool:
              </p>
              
              <ul>
                <li>We do not collect or store any personal information about users</li>
                <li>Images you upload are temporarily processed and then automatically deleted within 24 hours</li>
                <li>We do not use cookies for tracking or advertising purposes</li>
                <li>We do not sell any data to third parties</li>
              </ul>
              
              <div className="flex items-center gap-3 mb-4 mt-8">
                <div className="p-3 rounded-full bg-purple-100">
                  <Lock className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-semibold m-0">How We Use Your Data</h2>
              </div>
              
              <p>
                The only data we process is:
              </p>
              
              <ul>
                <li>Temporarily stored uploaded images (automatically deleted within 24 hours)</li>
                <li>Anonymous usage statistics to improve our service</li>
                <li>Standard server logs with IP addresses (retained for 7 days for security purposes)</li>
              </ul>
              
              <div className="flex items-center gap-3 mb-4 mt-8">
                <div className="p-3 rounded-full bg-green-100">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-semibold m-0">Third-Party Services</h2>
              </div>
              
              <p>
                DuplicateDetective's duplicate image detection and reverse search tool integrates with the following third-party services:
              </p>
              
              <ul>
                <li>Google Lens - Subject to <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a></li>
                <li>Bing Visual Search - Subject to <a href="https://privacy.microsoft.com/en-us/privacystatement" target="_blank" rel="noopener noreferrer">Microsoft's Privacy Policy</a></li>
                <li>Yandex Images - Subject to <a href="https://yandex.com/legal/confidential/" target="_blank" rel="noopener noreferrer">Yandex's Privacy Policy</a></li>
                <li>TinEye - Subject to <a href="https://tineye.com/privacy" target="_blank" rel="noopener noreferrer">TinEye's Privacy Policy</a></li>
              </ul>
              
              <p>
                When you use our tool, your image may be processed by these services according to their respective privacy policies.
              </p>
              
              <div className="flex items-center gap-3 mb-4 mt-8">
                <div className="p-3 rounded-full bg-amber-100">
                  <FileText className="w-6 h-6 text-amber-600" />
                </div>
                <h2 className="text-2xl font-semibold m-0">Updates to This Policy</h2>
              </div>
              
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.
              </p>
              
              <p>
                If you have any questions or concerns about our privacy practices, please contact us at privacy@checkduplicateimage.online.
              </p>
              
              <p className="text-sm text-gray-500 mt-8">
                Last updated: October 10, 2025
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Related Links */}
        <div className="container mx-auto px-4 py-12">
          <RelatedLinks currentPath="/privacy" />
        </div>
      </div>
    </>
  );
};

export default Privacy;