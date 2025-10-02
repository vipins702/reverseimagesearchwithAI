import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Target, Shield, Zap, Globe, CheckCircle } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Images auto-deleted, zero data collection',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Results in under 3 seconds',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Globe,
      title: 'Multi-Engine Search',
      description: 'Google, Bing, Yandex & TinEye',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Free Reverse Image Search Tool - Duplicate Image Finder Online</title>
        <meta name="description" content="Learn about our free reverse image search tool and duplicate image finder. Multi-engine search across Google Lens, Bing, Yandex & TinEye. No registration required." />
        <link rel="canonical" href="https://checkduplicateimage.online/about" />
        {/* Schema Markup */}
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Free Reverse Image Search Tool",
          "url": "https://checkduplicateimage.online/",
          "description": "Free reverse image search tool powered by multiple search engines to find duplicate images, similar photos, and original sources.",
          "foundingDate": "2024",
          "sameAs": [
            "https://checkduplicateimage.online/"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Reverse Image Search Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Free Reverse Image Search",
                  "description": "Find duplicate images and similar photos online"
                }
              }
            ]
          }
        }
        `}</script>
        {/* Open Graph tags */}
        <meta property="og:title" content="About Free Reverse Image Search Tool - Duplicate Image Finder Online" />
        <meta property="og:description" content="Learn about our free reverse image search tool and duplicate image finder. Multi-engine search across Google Lens, Bing, Yandex & TinEye. No registration required." />
        <meta property="og:url" content="https://checkduplicateimage.online/about" />
        <meta property="og:type" content="website" />
        {/* Twitter tags */}
        <meta name="twitter:title" content="About Free Reverse Image Search Tool - Duplicate Image Finder Online" />
        <meta name="twitter:description" content="Learn about our free reverse image search tool and duplicate image finder. Multi-engine search across Google Lens, Bing, Yandex & TinEye. No registration required." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-16 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto space-y-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold gradient-text-cosmic">
              About Our Free Reverse Image Search Tool
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              The world's most comprehensive free reverse image search platform. Find duplicate images, similar photos, and original sources across Google Lens, Bing Visual Search, Yandex Images, and TinEye.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="glass-strong p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">10M+</div>
                <div className="text-sm text-gray-600">Images Searched</div>
              </div>
              <div className="glass-strong p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="glass-strong p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">&lt;3s</div>
                <div className="text-sm text-gray-600">Average Speed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold">
                Our Mission: <span className="gradient-text-cosmic">Free Reverse Image Search for Everyone</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe reverse image search should be accessible to everyone. Our free tool combines the power of multiple search engines to help you find duplicate images, protect your copyrights, and verify image authenticity.
              </p>
              
              <div className="space-y-3">
                {[
                  'Find duplicate images across the web',
                  'Protect photographers and content creators',
                  'Verify image authenticity for journalists',
                  'Help researchers find original sources',
                  'Detect copyright infringement'
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-600">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-strong rounded-3xl p-8"
            >
              <h3 className="text-xl font-bold mb-6 text-center gradient-text-cosmic">
                🔍 Why Choose Our Free Tool?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Multi-Engine Power</h4>
                    <p className="text-sm text-gray-600">Search Google Lens, Bing, Yandex & TinEye simultaneously</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-green-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">100% Private & Secure</h4>
                    <p className="text-sm text-gray-600">No registration, no data collection, images auto-deleted</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Instant Results</h4>
                    <p className="text-sm text-gray-600">Advanced algorithms deliver results in under 3 seconds</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              What Makes Our <span className="gradient-text-cosmic">Reverse Image Search</span> Special?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced technology meets user-friendly design to provide the most comprehensive free reverse image search experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="glass-strong rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                    <Icon className="w-8 h-8 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-12 text-center space-y-6 max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold">
              Ready to Start Your <span className="gradient-text-cosmic">Free Reverse Image Search</span>?
            </h2>
            <p className="text-lg text-gray-600">
              Join millions who trust our free reverse image search tool to find duplicates, verify authenticity, and protect their images.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/reverse-image-search"
                className="btn-cosmic bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Start Free Search Now
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <span>✓ 100% Free Forever</span>
              <span>✓ No Registration Required</span>
              <span>✓ Multi-Engine Search</span>
              <span>✓ Privacy Protected</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
