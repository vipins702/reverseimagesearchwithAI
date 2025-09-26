
import React from 'react'
import { Link } from 'react-router-dom'
import {Sparkles, Mail, Shield, FileText, Heart} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative z-10 mt-20">
      <div className="glass-strong border-t border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 glass rounded-xl">
                  <Sparkles className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-xl font-bold gradient-text-cosmic">
                  Cosmic Search
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Professional reverse image search tool powered by cosmic technology. 
                Find image sources across multiple search engines instantly.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/upload" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Upload Image
                  </Link>
                </li>
                <li>
                  <Link to="/how-it-works" className="text-gray-400 hover:text-blue-400 transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Features</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Multi-Engine Search</li>
                <li>• Privacy Protected</li>
                <li>• Fast & Secure</li>
                <li>• No Registration</li>
                <li>• Mobile Friendly</li>
                <li>• Free to Use</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Support</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span>support@cosmicsearch.com</span>
                </div>
                <div className="space-y-2">
                  <Link to="/privacy" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                    <Shield className="w-4 h-4" />
                    Privacy Policy
                  </Link>
                  <Link to="/terms" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                    <FileText className="w-4 h-4" />
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Cosmic Search. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>for the web</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
