
import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import {Search, Upload, Zap, Shield, Globe, Eye, CheckCircle, Star, ArrowRight, Play, Clock, Users} from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: Search,
      title: 'Multi-Engine Search',
      description: 'Search across Google, Bing, Yandex, and TinEye simultaneously',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Get results in seconds with our optimized cloud infrastructure',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Shield,
      title: 'Privacy Protected',
      description: 'Your images are secure and automatically deleted after search',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Find images from websites worldwide with comprehensive indexing',
      color: 'from-red-500 to-red-600'
    }
  ]

  const useCases = [
    {
      title: 'Copyright Verification',
      description: 'Check if your images are being used without permission',
      image: 'https://images.pexels.com/photos/5428833/pexels-photo-5428833.jpeg?auto=compress&cs=tinysrgb&w=600',
      scenario: 'A photographer discovered their work on 15+ websites'
    },
    {
      title: 'Product Research',
      description: 'Find original sources and suppliers for products',
      image: 'https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=600',
      scenario: 'Found the original manufacturer saving 40% on costs'
    },
    {
      title: 'Fact Checking',
      description: 'Verify the authenticity of viral images and news',
      image: 'https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=600',
      scenario: 'Debunked fake news in under 30 seconds'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Professional Photographer',
      content: 'Cosmic Search helped me find unauthorized uses of my photos. The multi-engine search is incredibly thorough!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Mike Chen',
      role: 'E-commerce Manager',
      content: 'Perfect for product sourcing. Found original suppliers and saved thousands on inventory costs.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Emma Davis',
      role: 'Journalist',
      content: 'Essential tool for fact-checking. The speed and accuracy have made my work so much more efficient.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ]

  const stats = [
    { number: '10M+', label: 'Images Searched' },
    { number: '50K+', label: 'Happy Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '<3s', label: 'Average Speed' }
  ]

  return (
    <>
      <Helmet>
        <title>Cosmic Search - Premium Reverse Image Search | Find Image Sources Instantly</title>
        <meta name="description" content="Professional reverse image search tool. Upload any image and discover its origins across Google, Bing, Yandex, TinEye. Fast, secure, privacy-focused. Try free now!" />
        <meta name="keywords" content="reverse image search, image search, find image source, reverse lookup, image finder, google images, bing visual search, tineye, yandex images" />
        <link rel="canonical" href="https://search.lumi.ing/" />
      </Helmet>

      {/* Hero Section */}
        <section className="relative pt-10 pb-16 overflow-hidden">
          <div className="container mx-auto px-2">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                  Find Any Image's
                  <span className="gradient-text-cosmic block">
                    Origin Instantly
                  </span>
                </h1>
                <p className="text-base text-gray-300 leading-relaxed max-w-md">
                  Professional reverse image search across multiple engines. 
                  Discover sources, verify authenticity, and protect your content 
                  with cosmic-powered technology.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <Link
                  to="/upload"
                  className="btn-cosmic bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg font-semibold text-base hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Upload className="w-5 h-5" />
                  Start Free Search
                </Link>
                <Link
                  to="/how-it-works"
                  className="glass px-4 py-2 rounded-lg font-semibold text-base hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  See How It Works
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-2 pt-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-lg font-bold text-blue-400">{stat.number}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-strong rounded-2xl p-4 space-y-4">
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                  <img 
                    src="https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Reverse image search demonstration"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-green-400">
                    <CheckCircle className="w-4 h-4" />
                    <span className="font-medium text-sm">Image uploaded successfully</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    {['Google', 'Bing', 'Yandex', 'TinEye'].map((engine) => (
                        <div key={engine} className="glass p-2 rounded-lg text-center">
                          <div className="text-xs font-medium">{engine}</div>
                          <div className="text-xs text-gray-400">Ready to search</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10">
        <div className="container mx-auto px-2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Why Choose <span className="gradient-text-cosmic">Cosmic Search</span>
            </h2>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              Advanced technology meets intuitive design for the most powerful 
              reverse image search experience available.
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
                  className="glass-strong rounded-2xl p-6 hover:scale-105 transition-all duration-300"
                >
                  <div className={`w-8 h-8 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-2`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-base font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

  {/* Use Cases Section */}
  <section className="py-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Real-World <span className="gradient-text-cosmic">Success Stories</span>
            </h2>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              See how professionals across industries use Cosmic Search to solve 
              real problems and achieve measurable results.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-4">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-strong rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img 
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
                  />
                </div>
                <div className="p-3 space-y-2">
                  <h3 className="text-base font-semibold">{useCase.title}</h3>
                  <p className="text-gray-400 text-sm">{useCase.description}</p>
                  <div className="glass p-2 rounded-lg">
                    <div className="text-xs text-blue-400 font-medium">Success Story:</div>
                    <div className="text-xs text-gray-300">{useCase.scenario}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

  {/* Testimonials Section */}
  <section className="py-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Trusted by <span className="gradient-text-cosmic">Professionals</span>
            </h2>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              Join thousands of satisfied users who rely on Cosmic Search for 
              their reverse image search needs.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-strong rounded-2xl p-6 space-y-4"
              >
                <div className="flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic text-sm">"{testimonial.content}"</p>
                <div className="flex items-center gap-2">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-xs">{testimonial.name}</div>
                    <div className="text-xs text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10">
        <div className="container mx-auto px-2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-12 text-center space-y-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold">
              Ready to <span className="gradient-text-cosmic">Discover</span> Your Image's Story?
            </h2>
            <p className="text-base text-gray-300 max-w-xl mx-auto">
              Join millions of users who trust Cosmic Search for fast, accurate, 
              and secure reverse image searches. Start your search in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Link
                to="/upload"
                className="btn-cosmic bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg font-semibold text-base hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Upload className="w-4 h-4" />
                Start Free Search
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="glass px-4 py-2 rounded-lg font-semibold text-base hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4" />
                Watch Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Home
