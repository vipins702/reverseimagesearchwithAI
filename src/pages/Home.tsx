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
        <title>Free Reverse Image Search - Find Duplicate Images Online | CheckDuplicateImage</title>
        <meta name="description" content="Upload any image to find duplicates, similar photos & original sources instantly. Free reverse image search powered by Google Lens, Bing & TinEye." />
        <meta name="keywords" content="free reverse image search tool, duplicate image checker online, find similar images online free, reverse photo lookup tool, google lens search, bing visual search, image duplicate finder" />
        <meta name="author" content="checkduplicateimage" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://checkduplicateimage.online/" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Free Reverse Image Search - Find Duplicate Images Online | CheckDuplicateImage" />
        <meta property="og:description" content="Upload any image to find duplicates, similar photos & original sources instantly. Free reverse image search powered by Google Lens, Bing & TinEye." />
        <meta property="og:url" content="https://checkduplicateimage.online/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="checkduplicateimage" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Reverse Image Search - Find Duplicate Images Online | CheckDuplicateImage" />
        <meta name="twitter:description" content="Upload any image to find duplicates, similar photos & original sources instantly. Free reverse image search powered by Google Lens, Bing & TinEye." />
        {/* WebApplication Schema Markup for SEO */}
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Free Reverse Image Search Tool",
          "url": "https://checkduplicateimage.online/",
          "description": "Upload any image to find duplicates, similar photos & original sources instantly. Free reverse image search powered by Google Lens, Bing & TinEye.",
          "applicationCategory": "UtilityApplication",
          "operatingSystem": "Any",
          "browserRequirements": "Modern web browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "featureList": [
            "Multi-engine reverse image search",
            "Google Lens integration",
            "Bing Visual Search",
            "TinEye search",
            "Yandex Images search",
            "No registration required",
            "Free unlimited searches"
          ],
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://checkduplicateimage.online/reverse-image-search",
            "query-input": "required name=search_term_string"
          }
        }
        `}</script>
        {/* FAQ Schema Markup */}
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is reverse image search and how does it work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Reverse image search is a technique that allows you to upload an image and find similar images, duplicates, or the original source online. Our tool analyzes your uploaded image and searches across multiple engines including Google Lens, Bing Visual Search, Yandex Images, and TinEye to find matching or similar photos."
              }
            },
            {
              "@type": "Question",
              "name": "Is this reverse image search tool completely free?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! Our reverse image search tool is 100% free with no hidden charges, subscription fees, or usage limits. You can search for duplicate images, find similar photos, and locate original sources without any cost or registration required."
              }
            },
            {
              "@type": "Question",
              "name": "Can I use this tool to find stolen or copied images?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely! Our reverse image search tool is perfect for photographers, artists, and content creators who want to check if their images have been used without permission. It helps you find where your images appear online and identify potential copyright infringement."
              }
            }
          ]
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

      {/* Hero Section - 2025 Crystal Clear Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden cosmic-bg pt-20 pb-16">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-12"
            >
              {/* Main Headline */}
              <div className="space-y-6">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold heading-premium gradient-text-cosmic leading-tight"
                >
                  Find Image Sources with <br/>
                  <span className="text-5xl md:text-7xl lg:text-8xl">Free Reverse Search</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
                >
                  Upload any image to instantly find duplicates, similar photos & original sources across multiple search engines. No registration required.
                </motion.p>
              </div>
              
              {/* Trust Badges */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-8 text-sm font-medium"
              >
                <span className="flex items-center gap-3 glass px-4 py-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-green-500" /> 
                  <span className="text-gray-700">100% Free Forever</span>
                </span>
                <span className="flex items-center gap-3 glass px-4 py-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-blue-500" /> 
                  <span className="text-gray-700">No Registration</span>
                </span>
                <span className="flex items-center gap-3 glass px-4 py-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-purple-500" /> 
                  <span className="text-gray-700">Multi-Engine Search</span>
                </span>
                <span className="flex items-center gap-3 glass px-4 py-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-cyan-500" /> 
                  <span className="text-gray-700">Instant Results</span>
                </span>
              </motion.div>

              {/* Premium Glassmorphic Upload Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="max-w-2xl mx-auto"
              >
                <div className="glass-upload rounded-3xl p-8 md:p-12 element-3d">
                  <div className="text-center space-y-6">
                    <div className="flex justify-center">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center float">
                          <Upload className="w-10 h-10 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center status-online">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                        Drop Your Image Here
                      </h3>
                      <p className="text-gray-600 text-lg">
                        Or click to upload and start searching instantly
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link
                        to="/reverse-image-search"
                        className="btn-cosmic btn-mega inline-flex items-center justify-center gap-3 ripple hover-lift"
                      >
                        <Upload className="w-6 h-6" />
                        Start Free Search
                        <ArrowRight className="w-6 h-6" />
                      </Link>
                      <Link
                        to="/how-it-works"
                        className="glass px-6 py-4 rounded-xl font-semibold text-lg hover-lift transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <Eye className="w-5 h-5" />
                        How It Works
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-sm text-gray-500 text-center"
              >
                🔒 Privacy-focused: Images auto-deleted after search • No personal data collected
              </motion.p>
            </motion.div>

            {/* Stats Section - Separated from main content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-16 max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 + index * 0.1 }}
                    className="text-center glass-strong p-6 rounded-2xl hover-lift"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-stats gradient-text-cosmic mb-2">{stat.number}</div>
                    <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search Engine Logos Section */}
      <section className="py-12 cosmic-bg">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500"
          >
            <span className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-green-500"></div>
              Google Lens
            </span>
            <span className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-blue-400"></div>
              Bing Visual
            </span>
            <span className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-500 to-yellow-500"></div>
              Yandex Images
            </span>
            <span className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
              TinEye
            </span>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Bento Grid Design */}
      <section className="py-24 cosmic-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-bold heading-premium mb-6">
              Why Choose Our <span className="gradient-text-cosmic">Free Reverse Image Search</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The most comprehensive and powerful reverse image search tool with multi-engine support and advanced AI technology.
            </p>
          </motion.div>

          {/* Bento Grid Features */}
          <div className="bento-grid max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bento-card card-3d group"
                  style={{ gridColumn: index === 0 ? 'span 2' : 'span 1' }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 float`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 group-hover:text-purple-700 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                  
                  {/* Decorative gradient orb */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
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

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Frequently Asked Questions About <span className="gradient-text-cosmic">Reverse Image Search</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about finding duplicate images and similar photos online
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "What is reverse image search and how does it work?",
                answer: "Reverse image search is a technique that allows you to upload an image and find similar images, duplicates, or the original source online. Our tool analyzes your uploaded image and searches across multiple engines including Google Lens, Bing Visual Search, Yandex Images, and TinEye to find matching or similar photos."
              },
              {
                question: "Is this reverse image search tool completely free?",
                answer: "Yes! Our reverse image search tool is 100% free with no hidden charges, subscription fees, or usage limits. You can search for duplicate images, find similar photos, and locate original sources without any cost or registration required."
              },
              {
                question: "What image formats are supported for reverse image search?",
                answer: "Our tool supports all major image formats including JPG, PNG, GIF, WebP, and BMP. You can upload images up to 10MB in size. For best results, use high-quality images with clear details."
              },
              {
                question: "How accurate is the reverse image search?",
                answer: "Our multi-engine approach provides highly accurate results by combining the power of Google Lens, Bing Visual Search, Yandex Images, and TinEye. This comprehensive search increases the chances of finding duplicate images and similar photos across the internet."
              },
              {
                question: "Can I use this tool to find stolen or copied images?",
                answer: "Absolutely! Our reverse image search tool is perfect for photographers, artists, and content creators who want to check if their images have been used without permission. It helps you find where your images appear online and identify potential copyright infringement."
              },
              {
                question: "Do you store uploaded images on your servers?",
                answer: "No, we prioritize your privacy. Images are temporarily processed for search purposes and automatically deleted from our servers within 24 hours. We don't store, collect, or share your uploaded images with third parties."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold mb-3 text-gray-800">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
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
