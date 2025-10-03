
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {Sparkles, Menu, X, Search, Upload, Info, Zap} from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/', icon: Sparkles },
    { name: 'Upload', href: '/reverse-image-search', icon: Upload },
    { name: 'How It Works', href: '/how-it-works', icon: Zap },
    { name: 'About', href: '/about', icon: Info },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="relative z-50">
      <div className="glass-strong border-b border-slate-200/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="p-2 glass rounded-xl group-hover:glow-blue transition-all duration-300"
              >
                <Sparkles className="w-6 h-6 text-blue-600" />
              </motion.div>
              <span className="text-xl font-bold gradient-text-cosmic">
                checkduplicateimage
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`
                      relative px-4 py-2 rounded-xl transition-all duration-300
                      flex items-center gap-2 font-medium
                      ${isActive(item.href) 
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    {item.name}
                    {isActive(item.href) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                to="/reverse-image-search"
                className="btn-cosmic bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300"
              >
                Start Search
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 glass rounded-xl"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-b border-slate-200/50"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
                      ${isActive(item.href) 
                        ? 'text-blue-600 bg-blue-50 border border-blue-200' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'
                      }
                    `}
                  >
                    <Icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                )
              })}
              <Link
                to="/reverse-image-search"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 mt-4 btn-cosmic bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-xl font-semibold"
              >
                <Search className="w-5 h-5" />
                Start Search
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
