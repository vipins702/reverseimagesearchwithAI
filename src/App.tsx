
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import HowItWorks from './pages/HowItWorks'
import Upload from './pages/Upload'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen cosmic-bg text-white">
      <Toaster position="top-right" />
      <ScrollToTop />
      
      {/* Floating cosmic elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-60 float" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full opacity-40 float-delayed" />
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-pink-400 rounded-full opacity-30 float" />
        <div className="absolute bottom-20 right-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-50 float-delayed" />
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
