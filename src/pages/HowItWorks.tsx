import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Upload, Search, Eye, CheckCircle, ArrowRight, ChevronDown } from 'lucide-react'

const HowItWorks = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const steps = [
    {
      icon: Upload,
      title: 'Upload Your Image',
      description: 'Drag & drop or click to upload JPG, PNG, WebP (max 10MB)',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Search,
      title: 'Multi-Engine Search',
      description: 'We search Google Lens, Bing, Yandex & TinEye simultaneously',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Eye,
      title: 'Get Results',
      description: 'View duplicate images, similar photos & original sources',
      color: 'from-green-500 to-green-600'
    }
  ]

  const faqs = [
    {
      question: 'How does reverse image search work?',
      answer: 'Our tool uploads your image to multiple search engines (Google Lens, Bing, Yandex, TinEye) and finds visually similar or identical images across the web using advanced AI algorithms.'
    },
    {
      question: 'Is this reverse image search tool really free?',
      answer: 'Yes, 100% free with no registration required. We provide unlimited searches with no hidden fees or premium upgrades needed.'
    },
    {
      question: 'What image formats are supported?',
      answer: 'We support JPG, PNG, and WebP formats with a maximum file size of 10MB for optimal search results.'
    },
    {
      question: 'How long does it take to find duplicate images?',
      answer: 'Most searches complete in under 3 seconds. Our multi-engine approach provides comprehensive results quickly.'
    },
    {
      question: 'Is my uploaded image stored or shared?',
      answer: 'No, your privacy is protected. Images are automatically deleted immediately after the search completes. We never store or share your images.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>How Reverse Image Search Works - Find Duplicate Images Step by Step Guide</title>
        <meta name="description" content="Learn how our free reverse image search works to find duplicate images. Step-by-step guide using Google Lens, Bing, Yandex & TinEye. No registration required." />
        <link rel="canonical" href="https://checkduplicateimage.online/how-it-works" />
        {/* Schema Markup */}
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Use Free Reverse Image Search Tool",
          "description": "Step-by-step guide to find duplicate images and similar photos using our free reverse image search tool",
          "image": "https://checkduplicateimage.online/og-image.jpg",
          "totalTime": "PT3M",
          "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "USD",
            "value": "0"
          },
          "step": [
            {
              "@type": "HowToStep",
              "name": "Upload your image",
              "text": "Drag and drop or click to upload your image file (JPG, PNG, WebP up to 10MB)",
              "url": "https://checkduplicateimage.online/reverse-image-search"
            },
            {
              "@type": "HowToStep",
              "name": "Multi-engine search",
              "text": "Our system searches Google Lens, Bing Visual Search, Yandex Images, and TinEye simultaneously",
              "url": "https://checkduplicateimage.online/reverse-image-search"
            },
            {
              "@type": "HowToStep",
              "name": "View results",
              "text": "Review duplicate images, similar photos, and original sources with direct links",
              "url": "https://checkduplicateimage.online/reverse-image-search"
            }
          ]
        }
        `}</script>
        {/* Open Graph tags */}
        <meta property="og:title" content="How Reverse Image Search Works - Find Duplicate Images Step by Step Guide" />
        <meta property="og:description" content="Learn how our free reverse image search works to find duplicate images. Step-by-step guide using Google Lens, Bing, Yandex & TinEye. No registration required." />
        <meta property="og:url" content="https://checkduplicateimage.online/how-it-works" />
        <meta property="og:type" content="website" />
        {/* Twitter tags */}
        <meta name="twitter:title" content="How Reverse Image Search Works - Find Duplicate Images Step by Step Guide" />
        <meta name="twitter:description" content="Learn how our free reverse image search works to find duplicate images. Step-by-step guide using Google Lens, Bing, Yandex & TinEye. No registration required." />
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
              How Reverse Image Search Works - Find Duplicate Images
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Learn how our free reverse image search tool finds duplicate images, similar photos, and original sources across Google Lens, Bing Visual Search, Yandex Images, and TinEye in just 3 simple steps.
            </p>
            
            <div className="flex justify-center">
              <a
                href="/reverse-image-search"
                className="btn-cosmic bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
              >
                Try It Now - Upload Image
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
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
              <span className="gradient-text-cosmic">3 Simple Steps</span> to Find Duplicate Images
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our reverse image search process is designed for speed and accuracy, delivering comprehensive results in seconds.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="glass-strong rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative">
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-4`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <div className="flex items-center justify-center gap-2 text-green-400 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      <span>Fast & Accurate</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
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
              <span className="gradient-text-cosmic">Multi-Engine</span> Reverse Image Search Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine the power of multiple search engines to give you the most comprehensive results possible.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: 'Google Lens', icon: '🔍', description: 'AI-powered visual search' },
              { name: 'Bing Visual', icon: '🎯', description: 'Microsoft\'s image recognition' },
              { name: 'Yandex Images', icon: '👁️', description: 'Russian search engine' },
              { name: 'TinEye', icon: '⚡', description: 'Reverse image pioneer' }
            ].map((engine, index) => (
              <motion.div
                key={engine.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-strong rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{engine.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{engine.name}</h3>
                <p className="text-gray-600 text-sm">{engine.description}</p>
                <div className="mt-3">
                  <span className="inline-flex items-center gap-1 text-green-400 text-xs">
                    <CheckCircle className="w-3 h-3" />
                    Active
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              <span className="gradient-text-cosmic">Frequently Asked Questions</span> About Reverse Image Search
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our free reverse image search tool and duplicate image detection process.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-strong rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-lg text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
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
              Ready to <span className="gradient-text-cosmic">Find Duplicate Images</span> Now?
            </h2>
            <p className="text-lg text-gray-600">
              Start your free reverse image search and discover where your images appear online. No registration required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/reverse-image-search"
                className="btn-cosmic bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Upload className="w-5 h-5" />
                Start Free Reverse Image Search
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <span>✓ 100% Free</span>
              <span>✓ No Registration</span>
              <span>✓ Multi-Engine Search</span>
              <span>✓ Instant Results</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default HowItWorks
