
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Target, Users, Zap, Shield, Globe, Heart, Award, TrendingUp, Clock, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your data security and privacy are our top priorities. We never store or share your images.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Cutting-edge technology delivers results in seconds, not minutes.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Search across the world\'s largest image databases and search engines.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Heart,
    title: 'User Focused',
    description: 'Every feature is designed with user experience and satisfaction in mind.',
    color: 'from-red-500 to-red-600'
  }];


  const milestones = [
  {
    year: '2023',
    title: 'Company Founded',
    description: 'Started with a vision to make reverse image search accessible to everyone'
  },
  {
    year: '2024',
    title: '10M+ Searches',
    description: 'Reached 10 million successful image searches across our platform'
  },
  {
    year: '2024',
    title: 'Global Expansion',
    description: 'Expanded to serve users in over 150 countries worldwide'
  },
  {
    year: '2024',
    title: 'Premium Features',
    description: 'Launched advanced features including batch processing and API access'
  }];


  const team = [
  {
    name: 'Alex Rodriguez',
    role: 'CEO & Founder',
    bio: 'Former Google engineer with 10+ years in search technology and computer vision.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    skills: ['AI/ML', 'Product Strategy', 'Leadership']
  },
  {
    name: 'Sarah Chen',
    role: 'CTO',
    bio: 'PhD in Computer Vision from MIT. Expert in image recognition and distributed systems.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
    skills: ['Computer Vision', 'System Architecture', 'Research']
  },
  {
    name: 'Marcus Johnson',
    role: 'Head of Design',
    bio: 'Award-winning UX designer focused on creating intuitive and beautiful user experiences.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
    skills: ['UX Design', 'Product Design', 'User Research']
  }];


  return (
    <>
      <Helmet>
        <title>About Us - Cosmic Search | Premium Reverse Image Search Technology</title>
        <meta name="description" content="Learn about Cosmic Search's mission to provide the world's most advanced reverse image search technology. Meet our team and discover our commitment to privacy and innovation." />
        <meta name="keywords" content="about cosmic search, reverse image search company, image search technology, computer vision, privacy-focused search" />
        <link rel="canonical" href="https://search.lumi.ing/about" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-10 pb-8">
        <div className="container mx-auto px-2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8">

            <h1 className="text-3xl md:text-5xl font-bold">
              About <span className="gradient-text-cosmic text-4xl">Reverse Image Search</span>
            </h1>
            <p className="text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
              We're on a mission to democratize reverse image search technology, 
              making it accessible, fast, and privacy-focused for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-8">
        <div className="container mx-auto px-2">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6">

              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                In an era where visual content dominates the digital landscape, 
                we believe everyone should have access to powerful tools for 
                understanding and verifying images. Our mission is to provide 
                the world's most advanced reverse image search technology while 
                maintaining the highest standards of privacy and security.
              </p>
              <div className="space-y-2">
                {[
                'Empower content creators to protect their work',
                'Help journalists verify information quickly',
                'Enable researchers to find image sources',
                'Protect users from misinformation and fraud'].
                map((item, index) =>
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 text-xs">{item}</span>
                  </motion.div>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-strong rounded-3xl p-8">

              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team collaboration"
                className="w-full h-32 object-cover rounded-lg mb-3" />

              <div className="grid grid-cols-2 gap-2">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400">10M+</div>
                  <div className="text-xs text-gray-400">Images Searched</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-400">150+</div>
                  <div className="text-xs text-gray-400">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400">99.9%</div>
                  <div className="text-xs text-gray-400">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-red-400">24/7</div>
                  <div className="text-xs text-gray-400">Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-8">
        <div className="container mx-auto px-2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16">

            <h2 className="text-2xl font-bold mb-4">Our Core Values</h2>
            <p className="text-base text-gray-300 max-w-xl mx-auto">
              These principles guide everything we do, from product development 
              to customer support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-strong rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">

                  <div className={`w-8 h-8 bg-gradient-to-br ${value.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-base font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-400 text-xs">{value.description}</p>
                </motion.div>);

            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-8">
        <div className="container mx-auto px-2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16">

            <h2 className="text-2xl font-bold mb-4">Our Journey</h2>
            <p className="text-base text-gray-300 max-w-xl mx-auto">
              From a simple idea to a global platform trusted by millions of users worldwide.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            {milestones.map((milestone, index) =>
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'justify-start' : 'justify-end'}`
              }>

                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-4' : 'pl-4'}`}>
                  <div className="glass-strong rounded-lg p-3">
                    <div className="text-lg font-bold text-blue-400 mb-1">{milestone.year}</div>
                    <h3 className="text-base font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-gray-400 text-xs">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-gray-900"></div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-8">
        <div className="container mx-auto px-2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16">

            <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-base text-gray-300 max-w-xl mx-auto">
              Passionate experts in technology, design, and user experience working 
              together to build the future of image search.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-4">
            {team.map((member, index) =>
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-strong rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">

                <img
                src={member.image}
                alt={member.name}
                className="w-12 h-12 rounded-full object-cover mx-auto mb-2" />

                <h3 className="text-base font-semibold mb-1">{member.name}</h3>
                <div className="text-blue-400 font-medium mb-2 text-xs">{member.role}</div>
                <p className="text-gray-400 text-xs mb-2">{member.bio}</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {member.skills.map((skill) =>
                <span
                  key={skill}
                  className="px-2 py-0.5 glass rounded-full text-xs">
                      {skill}
                    </span>
                )}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-8">
        <div className="container mx-auto px-2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-12 text-center space-y-6">

            <h2 className="text-2xl font-bold">
              Want to <span className="gradient-text-cosmic">Work With Us?</span>
            </h2>
            <p className="text-base text-gray-300 max-w-lg mx-auto">
              We're always looking for talented individuals who share our passion 
              for innovation and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <a
                href="mailto:careers@cosmicsearch.com"
                className="btn-cosmic bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg font-semibold text-base hover:shadow-2xl transition-all duration-300">
                Join Our Team
              </a>
              <a
                href="mailto:support@cosmicsearch.com"
                className="glass px-4 py-2 rounded-lg font-semibold text-base hover:bg-white/10 transition-all duration-300">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>);

};

export default About;