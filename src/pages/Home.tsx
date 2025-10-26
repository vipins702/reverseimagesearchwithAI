import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import {Search, Upload, Zap, Shield, CheckCircle, ArrowRight, Eye, Clock} from 'lucide-react'
import RelatedLinks from '../components/RelatedLinks'
import OptimizedImage from '../components/OptimizedImage'

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
        {/* PRIMARY META TAGS - Optimized for CTR */}
        <title>Find Duplicate Images Free - Multi-Engine Search Tool | DuplicateDetective</title>
        <meta name="description" content="Upload any image to find duplicates, similar photos & original sources instantly. Free AI tool searches Google Lens, Bing, Yandex & TinEye. No signup." />
        <meta name="keywords" content="find duplicate images, duplicate image finder, free duplicate photo finder, photo duplicate detector, image similarity search, copyright image checker, image source finder, multi-engine image search, Google Lens search, Bing visual search, TinEye search, Yandex image search" />
        
        {/* SEO META TAGS */}
        <meta name="author" content="DuplicateDetective" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://checkduplicateimage.online/" />
        
        {/* OPEN GRAPH / FACEBOOK - Optimized for Social Sharing */}
        <meta property="og:title" content="Find Duplicate Images Free - Multi-Engine Search Tool" />
        <meta property="og:description" content="Upload any image to discover duplicates, track copyright theft, and find original sources. AI-powered search across Google Lens, Bing, Yandex & TinEye - 100% free!" />
        <meta property="og:url" content="https://checkduplicateimage.online/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DuplicateDetective" />
        <meta property="og:image" content="https://checkduplicateimage.online/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="DuplicateDetective - Free Reverse Image Search Tool Interface" />
        <meta property="og:locale" content="en_US" />
        
        {/* TWITTER CARD - Optimized for Twitter Shares */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DuplicateDetective" />
        <meta name="twitter:title" content="Find Duplicate Images Free - Multi-Engine Search" />
        <meta name="twitter:description" content="Upload images to find duplicates & sources across Google Lens, Bing, Yandex & TinEye. Free AI-powered tool - no signup required!" />
        <meta name="twitter:image" content="https://checkduplicateimage.online/og-image.jpg" />
        <meta name="twitter:image:alt" content="DuplicateDetective Reverse Image Search Tool" />
        {/* WebApplication Schema Markup for SEO */}
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "DuplicateDetective - Find Duplicate Images Free",
          "url": "https://checkduplicateimage.online/",
          "description": "Upload any image to find duplicates, similar photos & original sources instantly. Multi-engine search tool powered by Google Lens, Bing, Yandex & TinEye.",
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
                "text": "Reverse image search is a technique that allows you to upload an image and find similar images, duplicates, or the original source online. Our tool analyzes your uploaded image and searches across multiple engines including Google Lens, Bing Visual Search, Yandex Images, and TinEye to find matching or similar photos. The technology uses advanced computer vision algorithms to extract unique visual features from your image—such as colors, shapes, patterns, and objects—then compares these features against billions of indexed images across the web."
              }
            },
            {
              "@type": "Question",
              "name": "Is this reverse image search tool completely free?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! Our reverse image search tool is 100% free with no hidden charges, subscription fees, or usage limits. You can search for duplicate images, find similar photos, and locate original sources without any cost or registration required. Unlike many competing services that require paid subscriptions for advanced features or unlimited searches, we believe powerful image search technology should be accessible to everyone."
              }
            },
            {
              "@type": "Question",
              "name": "What image formats are supported for reverse image search?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our tool supports all major image formats including JPG, PNG, GIF, WebP, and BMP. You can upload images up to 10MB in size. For best results, use high-quality images with clear details. The higher the resolution and quality of your uploaded image, the more accurate the search results will be."
              }
            },
            {
              "@type": "Question",
              "name": "How accurate is the reverse image search?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our multi-engine approach provides highly accurate results by combining the power of Google Lens, Bing Visual Search, Yandex Images, and TinEye. Each search engine has its own strengths: Google Lens excels at object and product recognition, Bing offers strong visual similarity matching, Yandex provides superior coverage for Eastern European content, and TinEye specializes in finding exact image matches."
              }
            },
            {
              "@type": "Question",
              "name": "Can I use this tool to find stolen or copied images?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely! Our reverse image search tool is perfect for photographers, artists, and content creators who want to check if their images have been used without permission. It helps you find where your images appear online and identify potential copyright infringement. Simply upload your original image, and our tool will scan billions of web pages across multiple search engines to find all instances where your image appears."
              }
            },
            {
              "@type": "Question",
              "name": "Do you store uploaded images on your servers?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No, we prioritize your privacy. Images are temporarily processed for search purposes and automatically deleted from our servers within 24 hours. We don't store, collect, or share your uploaded images with third parties. Your image is only kept in memory during the search process and is immediately removed from our systems once the results are delivered."
              }
            },
            {
              "@type": "Question",
              "name": "How long does it take to get reverse image search results?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our average search time is under 3 seconds! Thanks to our optimized infrastructure and direct API integrations with major search engines, you'll receive results almost instantly. We process your image and query all four search engines (Google Lens, Bing, Yandex, and TinEye) simultaneously, which is why we can deliver comprehensive results so quickly."
              }
            },
            {
              "@type": "Question",
              "name": "Can I search for images on mobile devices?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! Our reverse image search tool is fully responsive and works perfectly on smartphones, tablets, and desktop computers. The mobile experience is optimized for touch interfaces, allowing you to easily upload images from your photo gallery or take a new photo with your camera to search immediately."
              }
            },
            {
              "@type": "Question",
              "name": "What's the difference between reverse image search and Google Lens?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Google Lens is one specific reverse image search engine developed by Google, while our tool combines Google Lens with three other powerful search engines: Bing Visual Search, Yandex Images, and TinEye. This multi-engine approach gives you much broader coverage and more comprehensive results than using Google Lens alone."
              }
            },
            {
              "@type": "Question",
              "name": "How can I get better reverse image search results?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "To get the best results, use high-resolution, clear images with good lighting and minimal blur. Crop out watermarks or logos that might interfere with matching. Use images that clearly show the subject you want to find, avoiding cluttered backgrounds. For product searches, use images showing the product from a clear angle. Higher quality images always produce more accurate and comprehensive search results."
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
      <section className="relative flex items-center justify-center overflow-hidden cosmic-bg pt-24 md:pt-32 pb-8 min-h-[70vh] md:min-h-[85vh]">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-12"
            >
              {/* Main Headline - SEO Optimized with Single H1 */}
              <div className="space-y-6">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-3xl md:text-5xl lg:text-6xl font-bold heading-premium gradient-text-cosmic leading-tight mt-4"
                >
                  DuplicateDetective - Free Reverse Image Search & Duplicate Image Finder Tool
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
                >
                  Find duplicate images, track copyright infringement, and discover original sources across 4 major search engines instantly. Upload any image to search Google Lens, Bing Visual Search, Yandex Images, and TinEye - 100% free, no registration required.
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

            {/* Hero Image Showcase - Critical for SEO */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="mt-16 max-w-5xl mx-auto"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl element-3d">
                <OptimizedImage
                  src="/images/hero-reverse-image-search.jpg"
                  alt="DuplicateDetective reverse image search tool interface showing upload feature, AI analysis, and multi-engine search results across Google Lens, Bing Visual Search, Yandex Images, and TinEye for finding duplicate images and similar photos"
                  className="w-full h-auto object-cover"
                  width="1200"
                  height="630"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </motion.div>

            {/* Stats Section - Separated from main content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
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
      <section className="py-12 cosmic-bg mt-8">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500"
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

      {/* How Reverse Image Search Works - Detailed Explanation */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How Does <span className="gradient-text-cosmic">Reverse Image Search</span> Work?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Understanding the technology behind finding duplicate images and tracking image sources across the internet
              </p>
            </div>

            <div className="glass-strong rounded-3xl p-8 md:p-12 space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Reverse image search is a powerful technology that allows you to upload an image and discover where else it appears online, 
                  find similar images, identify the original source, and locate higher-resolution versions. Unlike traditional text-based search, 
                  reverse image search uses advanced computer vision algorithms and artificial intelligence to analyze the visual content of your image.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Technology Behind Reverse Image Search</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our free reverse image search tool leverages cutting-edge AI and machine learning algorithms to analyze your uploaded image. 
                  The process begins by extracting unique visual features from your image—including colors, shapes, patterns, textures, and object recognition. 
                  These features are then converted into a digital fingerprint or "image signature" that can be compared against billions of images indexed by major search engines.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Multi-Engine Search for Comprehensive Results</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  What sets our tool apart is the ability to search across multiple powerful search engines simultaneously. We integrate with <strong>Google Lens</strong>, 
                  which uses Google's vast image database and AI capabilities to identify objects, landmarks, and products. <strong>Bing Visual Search</strong> provides 
                  additional coverage with Microsoft's image recognition technology. <strong>Yandex Images</strong> offers superior results for Eastern European and 
                  Russian content, while <strong>TinEye</strong> specializes in finding exact matches and tracking image usage across the web since 2008.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Search Process Explained</h3>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
                  <ol className="list-decimal list-inside space-y-3 text-gray-700">
                    <li><strong>Image Upload:</strong> You upload your image in any common format (JPG, PNG, GIF, WebP, or BMP)</li>
                    <li><strong>Feature Extraction:</strong> Our system analyzes the visual elements and creates a unique digital signature</li>
                    <li><strong>Multi-Engine Query:</strong> The image signature is sent to Google Lens, Bing, Yandex, and TinEye simultaneously</li>
                    <li><strong>Result Aggregation:</strong> Matching and similar images are collected from all search engines</li>
                    <li><strong>Instant Display:</strong> Results appear in seconds, showing duplicates, similar images, and source websites</li>
                  </ol>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  This comprehensive approach ensures you get the most complete results possible, whether you're trying to find the original source of an image, 
                  track down unauthorized use of your photos, identify products from pictures, or verify the authenticity of images you find online. 
                  Best of all, our service is completely free, requires no registration, and respects your privacy by automatically deleting uploaded images 
                  within 24 hours.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual Step-by-Step Guide - Critical for SEO */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How to Use <span className="gradient-text-cosmic">DuplicateDetective</span> - Simple 3-Step Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find duplicate images, track copyright infringement, and discover image sources in under 10 seconds
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Step 1: Upload */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6 group">
                  <div className="glass-strong rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4">
                      <Upload className="w-20 h-20 text-blue-600" />
                    </div>
                    <div className="absolute -top-4 -left-4 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg">
                      1
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Upload Your Image</h3>
                <p className="text-gray-600 leading-relaxed">
                  Drag & drop or click to upload any JPG, PNG, GIF, WebP image up to 10MB. Also supports image URL pasting.
                </p>
              </motion.div>

              {/* Step 2: AI Analysis */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6 group">
                  <div className="glass-strong rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-4">
                      <Zap className="w-20 h-20 text-purple-600" />
                    </div>
                    <div className="absolute -top-4 -left-4 w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg">
                      2
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">AI-Powered Analysis</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our advanced AI extracts visual features, colors, shapes, and patterns to create a unique image fingerprint.
                </p>
              </motion.div>

              {/* Step 3: Results */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6 group">
                  <div className="glass-strong rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className="w-full h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mb-4">
                      <Search className="w-20 h-20 text-green-600" />
                    </div>
                    <div className="absolute -top-4 -left-4 w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg">
                      3
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Get Instant Results</h3>
                <p className="text-gray-600 leading-relaxed">
                  View duplicate images, similar photos, and original sources across Google, Bing, Yandex & TinEye in seconds.
                </p>
              </motion.div>
            </div>

            {/* Copyright Protection Image Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-strong rounded-3xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-text-cosmic">
                    Protect Your Creative Work with Duplicate Detection
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Track Copyright Infringement</h4>
                        <p className="text-gray-600">Find unauthorized use of your photos, artwork, and designs across the web</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Monitor Image Usage</h4>
                        <p className="text-gray-600">Regular reverse image searches help photographers and artists protect their intellectual property</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Find Original Sources</h4>
                        <p className="text-gray-600">Identify where images first appeared and track their distribution online</p>
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/reverse-image-search"
                    className="inline-flex items-center gap-2 mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300"
                  >
                    Start Protecting Your Images
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                <div className="relative">
                  <OptimizedImage
                    src="/images/copyright-protection-duplicate-finder.jpg"
                    alt="Copyright protection and duplicate image tracking using reverse image search to find unauthorized use of photos and artwork online"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                    width="600"
                    height="400"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl px-4 py-2">
                    <p className="text-sm font-semibold text-gray-900">✓ Track 1000+ Images Monthly</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Bento Grid Design */}
      <section className="pt-20 pb-24 cosmic-bg">
        <div className="container mx-auto px-4">
          {/* Elegant divider */}
          <div className="flex justify-center mb-16">
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"></div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold heading-premium mb-6">
              Why Choose <span className="gradient-text-cosmic">DuplicateDetective</span> for Duplicate Image Detection?
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

      {/* Use Cases Section - Expanded */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text-cosmic">DuplicateDetective</span> - Perfect for Every Use Case
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From protecting your creative work to verifying online content, our reverse image search tool serves countless purposes
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="glass-strong p-8 rounded-2xl hover-lift"
              >
                <div className="text-5xl mb-6">📸</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Copyright Protection & Image Tracking</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Photographers, artists, and content creators can use our free reverse image search tool to monitor where their images appear online. 
                  Discover unauthorized use of your photos, track down image theft, and protect your intellectual property rights.
                </p>
                <p className="text-gray-600 text-sm">
                  Perfect for: Professional photographers, digital artists, stock photo contributors, graphic designers, and creative agencies
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass-strong p-8 rounded-2xl hover-lift"
              >
                <div className="text-5xl mb-6">🛒</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Product Research & Shopping</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Found a product you love but don't know where to buy it? Upload the image to find the original source, discover similar products, 
                  compare prices across different retailers, and identify the manufacturer or brand behind any product photo.
                </p>
                <p className="text-gray-600 text-sm">
                  Perfect for: Online shoppers, e-commerce sellers, dropshippers, product researchers, and bargain hunters
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="glass-strong p-8 rounded-2xl hover-lift"
              >
                <div className="text-5xl mb-6">✅</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Image Verification & Fact-Checking</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Verify the authenticity of images you encounter online, detect manipulated or fake photos, check if news images are from the claimed source, 
                  and combat misinformation by finding the original context of viral images.
                </p>
                <p className="text-gray-600 text-sm">
                  Perfect for: Journalists, researchers, fact-checkers, social media users, and anyone concerned about online misinformation
                </p>
              </motion.div>
            </div>

            {/* Additional Use Cases */}
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-xl"
              >
                <h4 className="text-lg font-bold mb-3 text-gray-900 flex items-center gap-2">
                  <span className="text-2xl">🔍</span>
                  SEO & Content Marketing
                </h4>
                <p className="text-gray-600 text-sm">
                  Find out who's using your branded images, discover content opportunities, monitor your visual content's reach, 
                  and ensure your images are properly attributed across the web.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-xl"
              >
                <h4 className="text-lg font-bold mb-3 text-gray-900 flex items-center gap-2">
                  <span className="text-2xl">🎨</span>
                  Design & Inspiration
                </h4>
                <p className="text-gray-600 text-sm">
                  Find higher resolution versions of images, locate the original designer or artist, discover similar design styles, 
                  and build inspiration boards with properly sourced content.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why <span className="gradient-text-cosmic">DuplicateDetective</span> Stands Out
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the most powerful and user-friendly reverse image search tool with features designed for your convenience
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="glass-strong p-6 rounded-2xl"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Search className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Multi-Engine Search Power</h3>
                <p className="text-gray-600 leading-relaxed">
                  Unlike single-engine tools, we search across Google Lens, Bing Visual Search, Yandex Images, and TinEye simultaneously. 
                  This comprehensive approach gives you 4x more coverage and significantly higher chances of finding your image matches.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass-strong p-6 rounded-2xl"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">100% Free Forever</h3>
                <p className="text-gray-600 leading-relaxed">
                  No hidden fees, no subscription plans, no premium tiers. Our reverse image search tool is completely free with unlimited searches. 
                  We believe everyone should have access to powerful image search technology without paying a dime.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="glass-strong p-6 rounded-2xl"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Lightning-Fast Results</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get results in under 3 seconds thanks to our optimized infrastructure and direct API integrations with major search engines. 
                  No waiting, no delays—just instant, accurate results every time you search.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="glass-strong p-6 rounded-2xl"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">No Registration Required</h3>
                <p className="text-gray-600 leading-relaxed">
                  Start searching immediately without creating an account, providing email addresses, or filling out forms. 
                  We respect your time and privacy—just upload your image and get results instantly.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="glass-strong p-6 rounded-2xl"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Privacy-First Approach</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your uploaded images are automatically deleted within 24 hours. We don't store, analyze, or share your personal data with third parties. 
                  Your privacy is our top priority, and we never track or profile our users.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="glass-strong p-6 rounded-2xl"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <Upload className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Support for All Image Formats</h3>
                <p className="text-gray-600 leading-relaxed">
                  Upload images in JPG, PNG, GIF, WebP, BMP, and other popular formats up to 10MB in size. 
                  Our tool handles all common image types, ensuring compatibility no matter what format your image is in.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Latest <span className="gradient-text-cosmic">Guides & Tips</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn expert techniques to find duplicate photos, protect your images, and master reverse image search
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <Link
              to="/blog/find-duplicate-photos-computer-free"
              className="group glass-strong rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row"
            >
              <div className="md:w-2/5 bg-gradient-to-br from-blue-100 to-purple-100 p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-5xl">🔍</span>
                  </div>
                  <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                    Tutorial
                  </span>
                </div>
              </div>
              <div className="md:w-3/5 p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                  How to Find Duplicate Photos on Your Computer Free (5 Easy Methods)
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  Discover 5 proven methods to find and remove duplicate photos on Windows and Mac without spending a dime. 
                  Learn which tools work best for your needs and save hours of manual sorting.
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    8 min read
                  </span>
                  <span>Published: Jan 26, 2025</span>
                </div>
                <div className="flex items-center gap-2 text-blue-600 font-medium">
                  Read Full Guide
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <div className="text-center mt-12">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-purple-600 transition-colors font-medium"
              >
                View All Articles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
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
              Frequently Asked Questions About <span className="gradient-text-cosmic">DuplicateDetective</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about finding duplicate images and similar photos online
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "What is reverse image search and how does it work?",
                answer: "Reverse image search is a technique that allows you to upload an image and find similar images, duplicates, or the original source online. Our tool analyzes your uploaded image and searches across multiple engines including Google Lens, Bing Visual Search, Yandex Images, and TinEye to find matching or similar photos. The technology uses advanced computer vision algorithms to extract unique visual features from your image—such as colors, shapes, patterns, and objects—then compares these features against billions of indexed images across the web. This process happens in seconds, giving you comprehensive results from multiple search engines simultaneously."
              },
              {
                question: "Is this reverse image search tool completely free?",
                answer: "Yes! Our reverse image search tool is 100% free with no hidden charges, subscription fees, or usage limits. You can search for duplicate images, find similar photos, and locate original sources without any cost or registration required. Unlike many competing services that require paid subscriptions for advanced features or unlimited searches, we believe powerful image search technology should be accessible to everyone. There are no premium tiers, no feature restrictions, and no limits on the number of searches you can perform daily."
              },
              {
                question: "What image formats are supported for reverse image search?",
                answer: "Our tool supports all major image formats including JPG, PNG, GIF, WebP, and BMP. You can upload images up to 10MB in size. For best results, use high-quality images with clear details. The higher the resolution and quality of your uploaded image, the more accurate the search results will be. We automatically optimize and process your image for compatibility with all four search engines (Google Lens, Bing, Yandex, and TinEye) to ensure maximum accuracy and coverage."
              },
              {
                question: "How accurate is the reverse image search?",
                answer: "Our multi-engine approach provides highly accurate results by combining the power of Google Lens, Bing Visual Search, Yandex Images, and TinEye. This comprehensive search increases the chances of finding duplicate images and similar photos across the internet. Each search engine has its own strengths: Google Lens excels at object and product recognition, Bing offers strong visual similarity matching, Yandex provides superior coverage for Eastern European content, and TinEye specializes in finding exact image matches. By searching all four simultaneously, you get the most complete and accurate results possible."
              },
              {
                question: "Can I use this tool to find stolen or copied images?",
                answer: "Absolutely! Our reverse image search tool is perfect for photographers, artists, and content creators who want to check if their images have been used without permission. It helps you find where your images appear online and identify potential copyright infringement. Simply upload your original image, and our tool will scan billions of web pages across multiple search engines to find all instances where your image appears. This is invaluable for protecting your intellectual property, sending DMCA takedown notices, and monitoring unauthorized use of your creative work."
              },
              {
                question: "Do you store uploaded images on your servers?",
                answer: "No, we prioritize your privacy. Images are temporarily processed for search purposes and automatically deleted from our servers within 24 hours. We don't store, collect, or share your uploaded images with third parties. Your image is only kept in memory during the search process and is immediately removed from our systems once the results are delivered. We never use your images for training AI models, building databases, or any other purpose beyond providing your search results. Your privacy and data security are our top priorities."
              },
              {
                question: "How long does it take to get reverse image search results?",
                answer: "Our average search time is under 3 seconds! Thanks to our optimized infrastructure and direct API integrations with major search engines, you'll receive results almost instantly. The exact time may vary slightly depending on your internet connection speed and the size of your uploaded image, but most searches complete in 2-4 seconds. We process your image and query all four search engines (Google Lens, Bing, Yandex, and TinEye) simultaneously, which is why we can deliver comprehensive results so quickly."
              },
              {
                question: "Can I search for images on mobile devices?",
                answer: "Yes! Our reverse image search tool is fully responsive and works perfectly on smartphones, tablets, and desktop computers. The mobile experience is optimized for touch interfaces, allowing you to easily upload images from your photo gallery or take a new photo with your camera to search immediately. Whether you're using an iPhone, Android device, iPad, or any other mobile device, you'll have full access to all search features without any limitations."
              },
              {
                question: "What's the difference between reverse image search and Google Lens?",
                answer: "Google Lens is one specific reverse image search engine developed by Google, while our tool combines Google Lens with three other powerful search engines: Bing Visual Search, Yandex Images, and TinEye. This multi-engine approach gives you much broader coverage and more comprehensive results. While Google Lens is excellent for product identification and object recognition, TinEye specializes in finding exact matches, Yandex offers superior results for certain geographic regions, and Bing provides strong visual similarity matching. Using all four together maximizes your chances of finding what you're looking for."
              },
              {
                question: "How can I get better reverse image search results?",
                answer: "To get the best results from our reverse image search tool, follow these tips: (1) Use high-resolution, clear images with good lighting and minimal blur, (2) Crop out watermarks or logos that might interfere with matching, (3) Use images that clearly show the subject you want to find, avoiding cluttered backgrounds, (4) For product searches, use images showing the product from a clear angle, (5) Try uploading different versions of the same image if initial results aren't satisfactory. Higher quality images always produce more accurate and comprehensive search results."
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
              Start Using <span className="gradient-text-cosmic">DuplicateDetective</span> Now
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
