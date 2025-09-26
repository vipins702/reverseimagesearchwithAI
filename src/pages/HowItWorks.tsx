
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
        <title>How It Works - Cosmic Search | Reverse Image Search Process</title>
        <meta name="description" content="Learn how Cosmic Search's reverse image search works. Step-by-step guide to finding image sources across Google, Bing, Yandex, and TinEye with privacy protection." />
        <meta name="keywords" content="how reverse image search works, image search process, find image source, google reverse search, bing visual search, tineye tutorial" />
        <link rel="canonical" href="https://search.lumi.ing/how-it-works" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold">
              How <span className="gradient-text-cosmic">It Works</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover the technology behind the world's most advanced reverse image search. 
              Simple for users, sophisticated under the hood.
            </p>
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                Watch Demo Video
              </motion.button>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">The Search Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Four simple steps powered by advanced technology to give you 
              comprehensive reverse image search results.
            </p>
          </motion.div>

          <div className="space-y-16">
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
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Step {index + 1}</div>
                        <h3 className="text-3xl font-bold">{step.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-300">{step.description}</p>
                    
                    <div className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <motion.div
                          key={detail}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: detailIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="glass-strong rounded-3xl p-6">
                      <img 
                        src={step.image}
                        alt={step.title}
                        className="w-full h-64 object-cover rounded-2xl"
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Why Our Technology Stands Out</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced features that make Cosmic Search the preferred choice 
              for professionals worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <Icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Perfect for Every Use Case</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From content protection to research verification, our platform 
              serves diverse professional needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-strong rounded-2xl p-6 hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4 text-center">{useCase.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-center">{useCase.title}</h3>
                <p className="text-gray-400 text-center mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400" />
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get answers to common questions about our reverse image search technology.
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
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform ${
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
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
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
            className="glass-strong rounded-3xl p-12 text-center space-y-6"
          >
            <h2 className="text-4xl font-bold">
              Ready to <span className="gradient-text-cosmic">Experience</span> the Difference?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join millions of users who trust Cosmic Search for fast, accurate, 
              and secure reverse image searches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/upload"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-cosmic bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Upload className="w-5 h-5" />
                Start Your Search
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default HowItWorks
