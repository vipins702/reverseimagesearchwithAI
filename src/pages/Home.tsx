import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import {Search, Upload, Zap, Shield, CheckCircle, ArrowRight, Eye} from 'lucide-react'
import RelatedLinks from '../components/RelatedLinks'

const Home = () => {
  const features = [
    {
      icon: Search,
      title: 'Multi-Engine Search',
      description: 'Google Lens, Bing, Yandex & TinEye in one tool',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Instant Results',
      description: 'Find duplicate images in under 3 seconds',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Shield,
      title: '100% Free & Secure',
      description: 'No registration required, images auto-deleted',
      color: 'from-green-500 to-green-600'
    }
  ]

  const stats = [
    { number: '10M+', label: 'Images Searched' },
    { number: '99.9%', label: 'Success Rate' },
    { number: '<3s', label: 'Average Speed' }
  ]

  return (
    <>
      <Helmet>
        <title>Free Reverse Image Search - Find Duplicate Images Online Instantly</title>
        <meta name="description" content="Free reverse image search tool powered by Google Lens, Bing & Yandex. Find duplicate photos, similar images & original sources instantly. No registration required." />
        <meta name="keywords" content="reverse image search, duplicate image finder, image search engine, find similar images, google lens, bing visual search, yandex images, tineye, photo search, image recognition" />
        <meta name="author" content="checkduplicateimage" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://checkduplicateimage.online/" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Free Reverse Image Search - Find Duplicate Images Online Instantly" />
        <meta property="og:description" content="Free reverse image search tool powered by Google Lens, Bing & Yandex. Find duplicate photos, similar images & original sources instantly. No registration required." />
        <meta property="og:url" content="https://checkduplicateimage.online/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="checkduplicateimage" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Reverse Image Search - Find Duplicate Images Online Instantly" />
        <meta name="twitter:description" content="Free reverse image search tool powered by Google Lens, Bing & Yandex. Find duplicate photos, similar images & original sources instantly. No registration required." />
        {/* Schema Markup for SEO */}
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Free Reverse Image Search Tool",
          "url": "https://checkduplicateimage.online/",
          "description": "Find duplicate images, similar photos, and original sources with our free reverse image search tool powered by Google Lens, Bing, Yandex & TinEye.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://checkduplicateimage.online/reverse-image-search",
            "query-input": "required name=search_term_string"
          }
        }
        `}</script>
        {/* Canonical BreadcrumbList Schema */}
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "@id": "https://checkduplicateimage.online/#breadcrumb",
          "name": "Breadcrumbs — Home",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@type": "WebPage",
                "@id": "https://checkduplicateimage.online/",
                "name": "Home"
              }
            }
          ]
        }
        `}</script>
        {/* OG/Twitter meta tags for social shares */}
        <meta property="og:title" content="Free Reverse Image Search - Find Duplicate Images Online Instantly" />
        <meta property="og:description" content="Free reverse image search tool powered by Google Lens, Bing & Yandex. Find duplicate photos, similar images & original sources instantly. No registration required." />
        <meta property="og:url" content="https://checkduplicateimage.online/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Reverse Image Search - Find Duplicate Images Online Instantly" />
        <meta name="twitter:description" content="Free reverse image search tool powered by Google Lens, Bing & Yandex. Find duplicate photos, similar images & original sources instantly. No registration required." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-10 pb-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h1 className="text-3xl md:text-4xl font-bold gradient-text-cosmic">Free Reverse Image Search - Find Duplicate Images Online</h1>
                <p className="text-lg text-gray-600">Upload any image to instantly find duplicates, similar photos & original sources. Powered by Google Lens, Bing, Yandex & TinEye.</p>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> 100% Free</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> No Registration</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Multi-Engine Search</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Instant Results</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/reverse-image-search"
                  className="btn-cosmic bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Upload className="w-5 h-5" />
                  Start Free Reverse Image Search
                </Link>
                <Link
                  to="/how-it-works"
                  className="glass px-6 py-3 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 border border-gray-600"
                >
                  <Eye className="w-5 h-5" />
                  How It Works
                </Link>
              </div>
              
              <p className="text-sm text-gray-400 mt-4">🔒 Privacy-focused: Images auto-deleted after search • No personal data collected</p>

              <div className="grid grid-cols-3 gap-6 pt-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="text-center glass-strong p-4 rounded-xl"
                  >
                    <div className="text-2xl font-bold text-blue-400 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:pl-8"
            >
              <div className="glass-strong rounded-3xl p-6 space-y-6">
                <h2 className="text-xl font-bold text-center gradient-text-cosmic">🔍 Multi-Engine Reverse Image Search</h2>
                <div className="grid grid-cols-2 gap-3">
                  {[{name: "Google Lens", icon: "🔍"}, {name: "Bing Visual", icon: "🎯"}, {name: "Yandex Images", icon: "👁️"}, {name: "TinEye", icon: "⚡"}].map((engine) => (
                    <div key={engine.name} className="glass p-4 rounded-xl text-center hover:bg-white/10 transition-colors">
                      <div className="text-2xl mb-2">{engine.icon}</div>
                      <div className="text-sm font-medium text-white">{engine.name}</div>
                      <div className="text-xs text-green-400">✓ Ready</div>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-gray-600">Upload any image to start searching</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Why Choose Our <span className="gradient-text-cosmic">Free Reverse Image Search</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The most comprehensive reverse image search tool with multi-engine support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon
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
                    <Icon className="w-8 h-8 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Perfect for <span className="gradient-text-cosmic">Every Use Case</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-strong p-6 rounded-2xl">
                <div className="text-4xl mb-4">📸</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Copyright Protection</h3>
                <p className="text-gray-600 text-sm">Find unauthorized use of your photos and protect your intellectual property</p>
              </div>
              <div className="glass-strong p-6 rounded-2xl">
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Product Research</h3>
                <p className="text-gray-600 text-sm">Discover original product sources and find better suppliers online</p>
              </div>
              <div className="glass-strong p-6 rounded-2xl">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Image Verification</h3>
                <p className="text-gray-600 text-sm">Verify authenticity of images and detect fake or manipulated photos</p>
              </div>
            </div>
          </motion.div>
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
              Start Your <span className="gradient-text-cosmic">Free Reverse Image Search</span> Now
            </h2>
            <p className="text-lg text-gray-600">
              Join millions who trust our free reverse image search tool. Find duplicate images, similar photos, and original sources instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/reverse-image-search"
                className="btn-cosmic bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Upload className="w-5 h-5" />
                Upload Image & Search Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mt-6">
              <span>✓ 100% Free Forever</span>
              <span>✓ No Registration Required</span>
              <span>✓ Instant Results</span>
              <span>✓ Privacy Protected</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 container mx-auto px-4">
        <RelatedLinks currentPath="/" />
      </section>
    </>
  )
}

export default Home
