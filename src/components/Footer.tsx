
import { Link } from 'react-router-dom'
import { Sparkles } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative z-10 mt-20">
      <div className="glass-strong border-t border-slate-200/50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="p-2 glass rounded-xl">
                <Sparkles className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-lg font-bold gradient-text-cosmic">
                checkduplicateimage
              </span>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link to="/reverse-image-search" className="text-gray-600 hover:text-blue-600 transition-colors">
                Search
              </Link>
              <Link to="/how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">
                How It Works
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link to="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">
                Privacy
              </Link>
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © 2024 checkduplicateimage
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
