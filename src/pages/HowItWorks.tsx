
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import {Upload, Search, Eye, Download, Shield, Zap, Globe, CheckCircle, ArrowRight, Play, Clock, HelpCircle, ChevronDown} from 'lucide-react'
import { useState } from 'react'

const HowItWorks = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const steps = [
    {
      icon: Upload,
      title: 'Upload Your Image',
      description: 'Drag and drop or click to upload any image (JPG, PNG, WebP) up to 10MB',
      details: [
        'Secure cloud upload via Vercel CDN',
        'Automatic image optimization',
        'Privacy-protected processing',
        'Instant preview generation'
      ],
      image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Search,
      title: 'Multi-Engine Search',
      description: 'Our system searches across Google, Bing, Yandex, and TinEye simultaneously',
      details: [
        'Parallel processing across 4 engines',
        'Advanced image fingerprinting',
        'Real-time result aggregation',
        'Duplicate detection and filtering'
      ],
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Eye,
      title: 'Analyze Results',
      description: 'Review comprehensive results with source links, similarity scores, and metadata',
      details: [
        'Visual similarity matching',
        'Source website verification',
        'Image metadata extraction',
        'Quality and relevance scoring'
      ],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Download,
      title: 'Take Action',
      description: 'Visit source websites, verify authenticity, or protect your copyright',
      details: [
        'Direct links to source pages',
        'Copyright infringement tools',
        'Download higher resolution versions',
        'Share and bookmark results'
      ],
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-red-500 to-red-600'
    }
  ]

  const features = [
    {
      icon: Shield,
      title: 'Privacy Protected',
      description: 'Images automatically deleted after search completion'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Results in under 3 seconds with optimized algorithms'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Search across billions of images from worldwide sources'
    },
    {
      icon: CheckCircle,
      title: 'High Accuracy',
      description: '99.2% accuracy rate with advanced matching technology'
    }
  ]

  const faqs = [
    {
      question: 'How accurate is the reverse image search?',
      answer: 'Our multi-engine approach provides 99.2% accuracy by combining results from Google, Bing, Yandex, and TinEye. We use advanced image fingerprinting and machine learning algorithms to ensure the most relevant matches.'
    },
    {
      question: 'Is my uploaded image stored or shared?',
      answer: 'No, your privacy is our priority. Images are automatically deleted from our servers immediately after the search is completed. We never store, share, or use your images for any other purpose.'
    },
    {
      question: 'What image formats are supported?',
      answer: 'We support JPG, PNG, and WebP formats with a maximum file size of 10MB. The system automatically optimizes images for the best search results across all engines.'
    },
    {
      question: 'How long does a search take?',
      answer: 'Most searches complete in under 3 seconds. The exact time depends on image complexity and current server load, but our optimized infrastructure ensures consistently fast results.'
    },
    {
      question: 'Can I search for copyrighted images?',
      answer: 'Yes, reverse image search is legal and commonly used for copyright protection. Many photographers and content creators use our service to find unauthorized uses of their work.'
    },
    {
      question: 'Do you offer an API for developers?',
      answer: 'Yes, we offer a professional API for developers and businesses. Contact our support team for pricing and integration details.'
    }
  ]

  const useCases = [
    {
      title: 'Content Creators',
      description: 'Protect your work by finding unauthorized uses',
      icon: '🎨',
      benefits: ['Copyright protection', 'Usage tracking', 'License verification']
    },
    {
      title: 'Journalists',
      description: 'Verify image authenticity and find original sources',
      icon: '📰',
      benefits: ['Fact checking', 'Source verification', 'Breaking news validation']
    },
    {
      title: 'E-commerce',
      description: 'Find product suppliers and verify image authenticity',
      icon: '🛍️',
      benefits: ['Supplier discovery', 'Product sourcing', 'Competitor analysis']
    },
    {
      title: 'Researchers',
      description: 'Academic research and data verification',
      icon: '🔬',
      benefits: ['Data validation', 'Source attribution', 'Research integrity']
    }
  ]

  return (
    <>
      <Helmet>
  <title>How Cosmic Search Works — Reverse Image Search & Duplicate Detection</title>
  <meta name="description" content="Learn how Cosmic Search finds duplicate and similar images using reverse image search and image matching algorithms. See privacy & processing details." />
  <link rel="canonical" href="https://checkduplicateimage.online/how-it-works" />
        {/* Open Graph tags */}
        <meta property="og:title" content="How Free Duplicate Image Checker Works | Reverse Image Search Guide 2025" />
        <meta property="og:description" content="Step-by-step guide to using our free duplicate image checker for reverse image search, copyright protection, and finding duplicate photos online." />
        <meta property="og:url" content="https://checkduplicateimage.online/how-it-works" />
        <meta property="og:type" content="website" />
        {/* Twitter tags */}
        <meta name="twitter:title" content="How Free Duplicate Image Checker Works | Reverse Image Search Guide 2025" />
        <meta name="twitter:description" content="Step-by-step guide to using our free duplicate image checker for reverse image search, copyright protection, and finding duplicate photos online." />
        {/* FAQ Schema Markup for Google Rich Results */}
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Is duplicate image checking free?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our duplicate image checker is 100% free to use for all users."
              }
            },
            {
              "@type": "Question",
              "name": "How do I find duplicate images online for free?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Simply upload your photo and our tool will scan for duplicates across the web at no cost."
              }
            },
            {
              "@type": "Question",
              "name": "Can I use this tool for copyright protection?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our free service helps you verify image originality and protect your photos from theft."
              }
            },
            {
              "@type": "Question",
              "name": "Is registration required to use the free duplicate image checker?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No registration or sign-up is required. Just upload and check instantly."
              }
            }
          ]
        }
        `}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-10 pb-8">
        <div className="container mx-auto px-2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h1 className="text-3xl md:text-5xl font-bold">
              How Cosmic Search Finds Duplicate Images
            </h1>
            <p className="text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
              Discover the technology behind the world's most advanced reverse image search. 
              Simple for users, sophisticated under the hood.
            </p>
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass px-4 py-2 rounded-lg font-semibold text-base hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              >
                <Play className="w-4 h-4" />
                Watch Demo Video
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-8">
        <div className="container mx-auto px-2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold mb-4">The Search Process</h2>
            <p className="text-base text-gray-300 max-w-xl mx-auto">
              Four simple steps powered by advanced technology to give you 
              comprehensive reverse image search results.
            </p>
          </motion.div>

          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={`space-y-3 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400">Step {index + 1}</div>
                        <h3 className="text-lg font-bold">{step.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-300">{step.description}</p>
                    
                    <div className="space-y-1">
                      {step.details.map((detail, detailIndex) => (
                        <motion.div
                          key={detail}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: detailIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-1"
                        >
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-xs">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="glass-strong rounded-xl p-3">
                        <img 
                          src={step.image}
                          alt={step.title}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-8">
        <div className="container mx-auto px-2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold mb-4">Why Our Technology Stands Out</h2>
            <p className="text-base text-gray-300 max-w-xl mx-auto">
              Advanced features that make Cosmic Search the preferred choice 
              for professionals worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-strong rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300"
                >
                  <Icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <h3 className="text-base font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-8">
        <div className="container mx-auto px-2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold mb-4">Perfect for Every Use Case</h2>
            <p className="text-base text-gray-300 max-w-xl mx-auto">
              From content protection to research verification, our platform 
              serves diverse professional needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-strong rounded-2xl p-6 hover:scale-105 transition-all duration-300"
              >
                <div className="text-2xl mb-2 text-center">{useCase.icon}</div>
                <h3 className="text-base font-semibold mb-2 text-center">{useCase.title}</h3>
                <p className="text-gray-400 text-center mb-2 text-xs">{useCase.description}</p>
                <div className="space-y-1">
                  {useCase.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-1 text-xs">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8">
        <div className="container mx-auto px-2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-base text-gray-300 max-w-xl mx-auto">
              Get answers to common questions about our reverse image search technology.
            </p>
          </motion.div>

          <div className="max-w-xl mx-auto space-y-2">
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
                  className="w-full p-3 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-base">{faq.question}</span>
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    className="px-3 pb-3"
                  >
                    <p className="text-gray-300 leading-relaxed text-xs">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8">
        <div className="container mx-auto px-2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-12 text-center space-y-6"
          >
            <h2 className="text-2xl font-bold">
              Ready to <span className="gradient-text-cosmic">Experience</span> the Difference?
            </h2>
            <p className="text-base text-gray-300 max-w-lg mx-auto">
              Join millions of users who trust Cosmic Search for fast, accurate, 
              and secure reverse image searches.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <motion.a
                href="/upload"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-cosmic bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg font-semibold text-base hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Upload className="w-4 h-4" />
                Start Your Search
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default HowItWorks
