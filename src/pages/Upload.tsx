
import React, { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { useDropzone } from 'react-dropzone';
import { Upload, Search, Image as ImageIcon, Sparkles, Zap, Globe, Eye, X, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import RelatedLinks from '../components/RelatedLinks';
import toast from 'react-hot-toast';

interface UploadedImage {
  file: File;
  dataUrl: string;
  publicUrl?: string;
  filename?: string;
}

interface SearchEngine {
  name: string;
  icon: React.ReactNode;
  color: string;
  searchUrl: (imageUrl: string) => string;
  description: string;
}

const searchEngines: SearchEngine[] = [
  {
    name: 'Google Lens',
    icon: <Globe className="w-5 h-5" />,
    color: 'from-blue-500 to-blue-600',
    // Use Google Lens for better support (mobile and desktop)
    searchUrl: (url) => `https://lens.google.com/uploadbyurl?url=${encodeURIComponent(url)}`,
    description: 'Google Lens Visual Search - Advanced AI-powered reverse image search to find duplicate images, similar photos, and identify objects. Best for product identification, text extraction, and comprehensive image analysis.'
  },
  {
    name: 'Bing Visual Search',
    icon: <Search className="w-5 h-5" />,
    color: 'from-green-500 to-green-600',
    searchUrl: (url) => `https://www.bing.com/images/search?q=imgurl:${encodeURIComponent(url)}&view=detailv2&iss=sbi`,
    description: 'Microsoft Bing Image Search - Discover visually similar images, find product sources, and identify objects in photos. Excellent for shopping and product identification.'
  },
  {
    name: 'Yandex Images',
    icon: <Eye className="w-5 h-5" />,
    color: 'from-red-500 to-red-600',
    searchUrl: (url) => `https://yandex.com/images/search?rpt=imageview&url=${encodeURIComponent(url)}`,
    description: 'Yandex Reverse Image Finder - Specialized in Eastern European content, face recognition, and finding images from Russian websites. Great for comprehensive global search coverage.'
  },
  {
    name: 'TinEye',
    icon: <Zap className="w-5 h-5" />,
    color: 'from-purple-500 to-purple-600',
    // Use TinEye's direct search URL (sometimes requires public image URL)
    searchUrl: (url) => `https://www.tineye.com/search?url=${encodeURIComponent(url)}`,
    description: 'TinEye Image Tracker - The first reverse image search engine. Perfect for copyright protection, finding image theft, and tracking how your images are used online.'
  }
];


const UploadPage = () => {
  const [isPurging, setIsPurging] = useState(false);
  const handlePurge = async () => {
    if (!uploadedImage?.filename) return;
    setIsPurging(true);
    try {
      const response = await fetch('/api/purge-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename: uploadedImage.filename })
      });
      if (!response.ok) {
        throw new Error('Failed to purge image');
      }
      toast.success('Image purged from storage!', {
        style: {
          background: 'rgba(239, 68, 68, 0.1)',
          color: '#fff',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          backdropFilter: 'blur(20px)'
        }
      });
      resetUpload();
    } catch (error) {
      toast.error('Failed to purge image', {
        style: {
          background: 'rgba(239, 68, 68, 0.1)',
          color: '#fff',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          backdropFilter: 'blur(20px)'
        }
      });
    } finally {
      setIsPurging(false);
    }
  };
  const [uploadedImage, setUploadedImage] = useState<UploadedImage | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    // Validate file size (10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast.error('File size must be less than 10MB', {
        style: {
          background: 'rgba(239, 68, 68, 0.1)',
          color: '#fff',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          backdropFilter: 'blur(20px)'
        }
      });
      return;
    }

    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      toast.error('Please upload a JPG, PNG, or WebP image', {
        style: {
          background: 'rgba(239, 68, 68, 0.1)',
          color: '#fff',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          backdropFilter: 'blur(20px)'
        }
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        const dataUrl = e.target.result as string;
        setUploadedImage({
          file,
          dataUrl
        });
        uploadToVercelBlob(dataUrl, file.name);
      }
    };
    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
      'image/webp': ['.webp']
    },
    multiple: false,
    maxSize: 10 * 1024 * 1024 // 10MB
  });

  // Real upload to Vercel Blob Storage
  const uploadToVercelBlob = async (dataUrl: string, filename: string) => {
    setIsUploading(true);
    setUploadProgress(0);

    try {
      // Simulate progress updates
      const progressInterval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + Math.random() * 20;
        });
      }, 200);

      const response = await fetch('/api/upload-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          imageData: dataUrl,
          filename: filename
        })
      });

      clearInterval(progressInterval);
      setUploadProgress(100);

      // Check if response is ok first
      if (!response.ok) {
        let errorMessage = `HTTP ${response.status}`;
        try {
          const errorData = await response.json();
          errorMessage = errorData.error || errorMessage;
        } catch {
          errorMessage = `Server error (${response.status})`;
        }
        throw new Error(errorMessage);
      }

      // Parse JSON response
      let result;
      try {
        result = await response.json();
      } catch (parseError) {
        console.error('JSON parse error:', parseError);
        throw new Error('Invalid server response format');
      }

      if (result.success && result.publicUrl) {
        setUploadedImage((prev) => prev ? {
          ...prev,
          publicUrl: result.publicUrl,
          filename: result.filename
        } : null);

        toast.success('Image uploaded successfully!', {
          style: {
            background: 'rgba(34, 197, 94, 0.1)',
            color: '#fff',
            border: '1px solid rgba(34, 197, 94, 0.3)',
            backdropFilter: 'blur(20px)'
          }
        });
      } else {
        throw new Error('Invalid response from server');
      }

    } catch (error) {
      console.error('Upload error:', error);
      toast.error(`Upload failed: ${error instanceof Error ? error.message : 'Unknown error'}`, {
        style: {
          background: 'rgba(239, 68, 68, 0.1)',
          color: '#fff',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          backdropFilter: 'blur(20px)'
        }
      });

      // Reset upload state on error
      setUploadedImage(null);
    } finally {
      setIsUploading(false);
    }
  };

  const handleSearch = (engine: SearchEngine) => {
    if (!uploadedImage?.publicUrl) {
      toast.error('Please wait for image upload to complete', {
        style: {
          background: 'rgba(239, 68, 68, 0.1)',
          color: '#fff',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          backdropFilter: 'blur(20px)'
        }
      });
      return;
    }

    const searchUrl = engine.searchUrl(uploadedImage.publicUrl);
    window.open(searchUrl, '_blank');

    toast.success(`Searching on ${engine.name}...`, {
      style: {
        background: 'rgba(102, 126, 234, 0.1)',
        color: '#fff',
        border: '1px solid rgba(102, 126, 234, 0.3)',
        backdropFilter: 'blur(20px)'
      }
    });
  };

  const resetUpload = () => {
    setUploadedImage(null);
    setIsUploading(false);
    setUploadProgress(0);
  };

  return (
    <>
      <Helmet>
        <title>Upload Image - DuplicateDetective Duplicate Detection Tool</title>
        <meta name="description" content="Drag & drop or upload any image to DuplicateDetective for instant duplicate detection & reverse image search. Professional-grade duplicate photo finder." />
        <meta name="keywords" content="duplicate detective upload, drag drop duplicate detection, duplicate image finder, image plagiarism checker, reverse photo lookup tool, duplicate photo detector" />
        <meta name="author" content="DuplicateDetective" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://checkduplicateimage.online/reverse-image-search" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Upload Image - DuplicateDetective Duplicate Detection Tool" />
        <meta property="og:description" content="Drag & drop or upload any image to DuplicateDetective for instant duplicate detection & reverse image search. Professional-grade duplicate photo finder." />
        <meta property="og:url" content="https://checkduplicateimage.online/reverse-image-search" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DuplicateDetective" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Upload Image to Find Duplicates - Free Reverse Image Search Tool" />
        <meta name="twitter:description" content="Drag & drop or upload any image to instantly find duplicates & similar photos online. Free reverse photo lookup tool with Google Lens & TinEye search." />
        {/* SoftwareApplication Schema Markup */}
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Free Reverse Image Search Tool",
          "description": "Find duplicate images, similar photos, and original sources instantly with our free reverse image search tool. No registration required.",
          "url": "https://checkduplicateimage.online/reverse-image-search",
          "applicationCategory": "MultimediaApplication",
          "operatingSystem": "Web Browser",
          "softwareVersion": "2.0",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "featureList": [
            "Reverse image search",
            "Duplicate image detection",
            "Similar image finding",
            "Multi-engine search support",
            "Google Lens integration",
            "No registration required"
          ],
          "screenshot": "https://checkduplicateimage.online/og-image.jpg"
        }
        `}</script>
        {/* Canonical BreadcrumbList Schema */}
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "@id": "https://checkduplicateimage.online/reverse-image-search#breadcrumb",
          "name": "Breadcrumbs — Reverse Image Search",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@type": "WebPage",
                "@id": "https://checkduplicateimage.online/",
                "name": "Home"
              }
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@type": "WebPage",
                "@id": "https://checkduplicateimage.online/reverse-image-search",
                "name": "Reverse Image Search"
              }
            }
          ]
        }
        `}</script>
      </Helmet>

      <div className="pt-20 md:pt-28 pb-8 min-h-screen flex flex-col justify-start">
        <div className="container mx-auto px-4 max-w-screen-xl w-full">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">

            <div className="flex items-center justify-center gap-3 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="p-3 glass rounded-2xl">

                <Sparkles className="w-8 h-8 text-blue-400" />
              </motion.div>
              <h1 className="text-3xl md:text-5xl font-bold heading-premium gradient-text-cosmic">
                Upload & Find <br className="hidden md:block" />
                <span className="text-4xl md:text-6xl">Image Sources</span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">
              Upload any image to instantly find duplicates, similar photos, and original sources across the web. Free reverse image search tool powered by Google Lens, Bing, Yandex & TinEye.
            </p>
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-4 text-sm">
              <div className="glass p-4 rounded-xl text-center">
                <div className="text-2xl mb-2">🔍</div>
                <h3 className="font-semibold text-gray-800 mb-1">Find Duplicate Images</h3>
                <p className="text-gray-600 text-sm">Discover where your photos appear online and protect against unauthorized use</p>
              </div>
              <div className="glass p-4 rounded-xl text-center">
                <div className="text-2xl mb-2">🛒</div>
                <h3 className="font-semibold text-gray-800 mb-1">Product Research</h3>
                <p className="text-gray-600 text-sm">Find original sources, compare prices, and identify unknown products instantly</p>
              </div>
              <div className="glass p-4 rounded-xl text-center">
                <div className="text-2xl mb-2">✅</div>
                <h3 className="font-semibold text-gray-800 mb-1">Verify Authenticity</h3>
                <p className="text-gray-600 text-sm">Check image authenticity and find original sources of viral photos</p>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              {!uploadedImage ? (
              /* Upload Section */
              <motion.div
                key="upload"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="glass-strong rounded-xl p-4 md:p-6">

                  <div
                  {...getRootProps()}
                  className={`
                      border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer
                      transition-all duration-300 hover:scale-[1.02]
                      ${isDragActive && !isDragReject ? 'dropzone-active' : ''}
                      ${isDragReject ? 'dropzone-reject' : 'border-gray-600 hover:border-blue-400'}
                    `}>

                    <input {...getInputProps()} />
                    
                    <motion.div
                    animate={{ y: isDragActive ? -10 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6">

                      <div className="flex justify-center">
                        <div className="p-6 glass rounded-full glow-blue">
                          <Upload className="w-12 h-12 text-blue-400" />
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {isDragActive ? 'Drop your image here' : 'Upload your image'}
                        </h3>
                        <p className="text-gray-600 text-lg">
                          Drag & drop or click to select • JPG, PNG, WebP • Max 10MB
                        </p>
                      </div>
                      
                      <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-cosmic bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-2xl transition-all duration-300">

                        Choose File
                      </motion.button>
                    </motion.div>
                  </div>
                  
                  {/* Search Engine Preview Icons */}
                  <div className="mt-8 text-center">
                    <p className="text-sm text-gray-600 mb-4">Powered by leading reverse image search engines:</p>
                    <div className="flex justify-center items-center gap-6 flex-wrap">
                      {searchEngines.map((engine, index) => (
                        <motion.div
                          key={engine.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-2 glass px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
                        >
                          <div className={`w-6 h-6 bg-gradient-to-br ${engine.color} rounded-lg flex items-center justify-center`}>
                            {React.cloneElement(engine.icon as React.ReactElement, { className: "w-3 h-3 text-gray-900" })}
                          </div>
                          <span className="text-sm font-semibold text-gray-800">{engine.name.split(' ')[0]}</span>
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-3">Upload an image above to search across all engines simultaneously</p>
                  </div>
                </motion.div>) : (

              /* Results Section */
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8">

                  {/* Image Preview */}
                  <div className="glass-strong rounded-3xl p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                        <ImageIcon className="w-6 h-6 text-blue-500" />
                        Uploaded Image
                      </h3>
                      <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={resetUpload}
                      className="p-2 glass rounded-xl hover:bg-red-500/20 transition-colors">

                        <X className="w-5 h-5" />
                      </motion.button>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                      <div className="relative">
                        <img
                        src={uploadedImage.dataUrl}
                        alt="Uploaded image for reverse image search - find duplicates and similar photos online"
                        className="w-full h-64 object-cover rounded-xl" />

                        {isUploading &&
                      <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center">
                            <div className="text-center space-y-4">
                              <Loader2 className="w-8 h-8 animate-spin mx-auto text-blue-400" />
                              <div className="w-48 bg-gray-700 rounded-full h-2">
                                <div
                              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${uploadProgress}%` }} />

                              </div>
                              <p className="text-sm">Uploading to Vercel Blob...</p>
                            </div>
                          </div>
                      }
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-green-400 rounded-full" />
                          <span className="font-semibold text-gray-800">{uploadedImage.file.name}</span>
                        </div>
                        <div className="text-gray-600 space-y-2">
                          <p>Size: {(uploadedImage.file.size / 1024 / 1024).toFixed(2)} MB</p>
                          <p>Type: {uploadedImage.file.type}</p>
                        </div>
                        
                        {uploadedImage.publicUrl ?
                      <div className="space-y-2">
                            <div className="flex items-center gap-2 text-green-400">
                              <CheckCircle className="w-5 h-5" />
                              <span className="font-medium">Ready for search</span>
                            </div>
                            <p className="text-xs text-gray-500 break-all">
                              Public URL: {uploadedImage.publicUrl}
                            </p>
                            <div className="mt-2 flex flex-col gap-2">
                              <button
                                onClick={handlePurge}
                                disabled={isPurging}
                                className="bg-red-500/80 hover:bg-red-600/80 text-white px-3 py-1 rounded text-xs font-semibold transition-all disabled:opacity-50"
                              >
                                {isPurging ? 'Purging...' : 'Purge Image Now'}
                              </button>
                              <span className="text-xs text-gray-400">Images are auto-deleted from storage after 2-3 days for privacy.</span>
                            </div>
                          </div> :
                      isUploading ?
                      <div className="flex items-center gap-2 text-blue-400">
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Uploading to cloud...</span>
                          </div> :

                      <div className="flex items-center gap-2 text-yellow-400">
                            <AlertCircle className="w-5 h-5" />
                            <span>Upload failed</span>
                          </div>
                      }
                      </div>
                    </div>
                  </div>

                  {/* How to Use Instructions */}
                  <div className="glass-strong rounded-3xl p-6 mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <Eye className="w-6 h-6 text-blue-500" />
                      How to Use Reverse Image Search Engines
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                      <div className="space-y-2">
                        <h4 className="font-bold text-gray-800">🔍 Find Duplicate Images:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Upload any photo to find exact matches</li>
                          <li>• Discover where your images appear online</li>
                          <li>• Check for unauthorized usage or theft</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-bold text-gray-800">🛒 Product & Shopping:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Find original product sources</li>
                          <li>• Compare prices across websites</li>
                          <li>• Identify unknown products or items</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-bold text-gray-800">📸 Copyright Protection:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Track unauthorized image usage</li>
                          <li>• Protect your photography work</li>
                          <li>• Monitor brand image violations</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-bold text-gray-800">✅ Verify Authenticity:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Check if images are fake or real</li>
                          <li>• Find original source of viral photos</li>
                          <li>• Verify news and social media images</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Search Engines - Enhanced with Attention-Grabbing Design */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="glass-strong rounded-3xl p-8 border-2 border-purple-400/30 shadow-2xl relative overflow-hidden"
                  >
                    {/* Animated Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-purple-500/5 animate-pulse" />
                    
                    {/* Attention Indicator */}
                    <div className="absolute -top-1 -right-1">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="w-24 h-24 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-2xl"
                      />
                    </div>

                    <div className="relative z-10">
                      {/* Header with Animation */}
                      <motion.div 
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-center mb-8"
                      >
                        <div className="inline-flex items-center gap-3 mb-4">
                          <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <Search className="w-8 h-8 text-purple-500" />
                          </motion.div>
                          <h3 className="text-2xl md:text-3xl font-bold gradient-text-cosmic">
                            Choose Your Search Engine
                          </h3>
                          <motion.div
                            animate={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <Zap className="w-8 h-8 text-blue-500" />
                          </motion.div>
                        </div>
                        <p className="text-lg text-gray-700 font-medium">
                          👇 Click any engine below to start your reverse image search 👇
                        </p>
                        {uploadedImage.publicUrl && (
                          <motion.p 
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="text-sm text-green-600 font-bold mt-2 flex items-center justify-center gap-2"
                          >
                            <CheckCircle className="w-4 h-4" />
                            Image ready! Select an engine to search
                          </motion.p>
                        )}
                      </motion.div>
                    
                    <div className="grid lg:grid-cols-2 gap-6">
                      {searchEngines.map((engine, index) =>
                    <motion.button
                      key={engine.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleSearch(engine)}
                      disabled={!uploadedImage.publicUrl}
                      className={`
                            group relative p-6 rounded-2xl text-left
                            transition-all duration-300
                            ${uploadedImage.publicUrl 
                              ? 'bg-gradient-to-br from-white/80 to-white/40 hover:from-white hover:to-white/60 shadow-lg hover:shadow-2xl border-2 border-white/50 hover:border-purple-400/50 cursor-pointer' 
                              : 'bg-gray-100/50 opacity-50 cursor-not-allowed border-2 border-gray-300/30'}
                          `}>

                          {/* Hover Glow Effect */}
                          {uploadedImage.publicUrl && (
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
                          )}

                          <div className="relative flex items-start gap-4">
                            <motion.div 
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                              className={`w-14 h-14 bg-gradient-to-br ${engine.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                            >
                              {engine.icon}
                            </motion.div>
                            <div className="flex-1">
                              <h4 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
                                {engine.name}
                              </h4>
                              <p className="text-gray-700 text-sm leading-relaxed mb-3">{engine.description}</p>
                              {uploadedImage.publicUrl && (
                                <motion.div 
                                  initial={{ x: -10, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: 0.2 }}
                                  className="mt-3 flex items-center gap-2 text-sm font-bold text-purple-600"
                                >
                                  Click to search 
                                  <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                  >
                                    →
                                  </motion.span>
                                </motion.div>
                              )}
                            </div>
                          </div>
                        </motion.button>
                    )}
                    </div>
                    
                    {!uploadedImage.publicUrl && !isUploading && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-6 text-center text-gray-400">
                        <p>Upload failed. Please try uploading your image again.</p>
                      </motion.div>
                    )}
                    
                    {isUploading && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-6 text-center text-gray-400">
                        <p>Please wait for the image to finish uploading before searching</p>
                      </motion.div>
                    )}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* SEO Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 max-w-4xl mx-auto">
            
            <div className="glass-strong rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text-cosmic text-center">
                🚀 Why Choose Our Free Reverse Image Search Tool?
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
                <div>
                  <h3 className="font-semibold text-blue-400 mb-3">🔍 Advanced Image Recognition</h3>
                  <ul className="space-y-2 text-xs leading-relaxed">
                    <li>• <strong>Multi-engine search:</strong> Google Lens, Bing Visual Search, Yandex Images, TinEye</li>
                    <li>• <strong>AI-powered detection:</strong> Find similar images even with modifications</li>
                    <li>• <strong>Reverse image lookup:</strong> Discover original sources and duplicates instantly</li>
                    <li>• <strong>Image similarity search:</strong> Find visually related photos and graphics</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-400 mb-3">✅ 100% Free & Secure</h3>
                  <ul className="space-y-2 text-xs leading-relaxed">
                    <li>• <strong>No registration required:</strong> Upload and search images instantly</li>
                    <li>• <strong>Privacy-focused:</strong> Images auto-deleted after 2-3 days</li>
                    <li>• <strong>Fast uploads:</strong> Secure cloud storage with Vercel CDN</li>
                    <li>• <strong>No limits:</strong> Search as many images as you need for free</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
                <h3 className="font-semibold text-purple-400 mb-2 text-center">🎯 Perfect For:</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-center">
                  <div className="space-y-1">
                    <div className="text-lg">📸</div>
                    <span className="text-gray-900 font-medium">Copyright Protection</span>
                  </div>
                  <div className="space-y-1">
                    <div className="text-lg">🛒</div>
                    <span className="text-gray-900 font-medium">Product Research</span>
                  </div>
                  <div className="space-y-1">
                    <div className="text-lg">🕵️</div>
                    <span className="text-gray-900 font-medium">Image Verification</span>
                  </div>
                  <div className="space-y-1">
                    <div className="text-lg">🔎</div>
                    <span className="text-gray-900 font-medium">Duplicate Detection</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Available Search Engines Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-16 max-w-4xl mx-auto">
            
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-3 gradient-text-cosmic">
                🔍 Multi-Engine Reverse Image Search - Google, Bing, Yandex & TinEye
              </h2>
              <p className="text-gray-600 text-sm">
                Choose from the world's most powerful image recognition engines to find duplicates, sources, and similar images
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {searchEngines.map((engine, index) => (
                <motion.div
                  key={engine.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="glass-strong rounded-xl p-4 text-center hover:scale-105 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${engine.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                    {React.cloneElement(engine.icon as React.ReactElement, { className: "w-6 h-6 text-gray-900" })}
                  </div>
                  <h3 className="font-semibold text-sm mb-2">{engine.name}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {engine.description.split('.')[0]}.
                  </p>
                  <div className="mt-3 flex items-center justify-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-green-400 font-medium">Available</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center glass-strong rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-400">
                🚀 How Our Free Reverse Image Search Works
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">1️⃣</span>
                  <div>
                    <p className="font-semibold text-gray-900">Upload Any Image</p>
                    <p className="text-xs">Drag & drop or click to upload JPG, PNG, WebP files up to 10MB</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">2️⃣</span>
                  <div>
                    <p className="font-semibold text-gray-900">Choose Search Engine</p>
                    <p className="text-xs">Select Google Lens, Bing Visual Search, Yandex, or TinEye</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">3️⃣</span>
                  <div>
                    <p className="font-semibold text-gray-900">Find Duplicates & Sources</p>
                    <p className="text-xs">Discover similar images, original sources, and duplicate photos</p>
                  </div>
                </div>
              </div>
              
              <div className="text-xs text-gray-400 border-t border-gray-700 pt-4">
                <p><strong>Supported formats:</strong> JPEG, PNG, WebP | <strong>Max file size:</strong> 10MB | <strong>Processing time:</strong> 2-5 seconds</p>
                <p className="mt-1"><strong>Search capabilities:</strong> Exact duplicates, similar images, reverse lookup, image source finding, copyright checking</p>
              </div>
            </div>
          </motion.div>

          {/* SEO Footer & Keywords */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-center mt-16">
            
            <div className="glass-strong rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4 text-purple-400">
                🏷️ Popular Image Search Keywords
              </h3>
              <div className="flex flex-wrap justify-center gap-2 text-xs">
                {['reverse image search', 'find duplicate images', 'image similarity search', 'google lens search', 'bing visual search', 'free image finder', 'photo duplicate checker', 'reverse photo lookup', 'image source finder', 'copyright image check', 'similar image detection', 'reverse image API'].map((keyword, index) => (
                  <span key={index} className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-gray-600 hover:bg-white/10 transition-colors">
                    {keyword}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-4">
                Our free reverse image search tool supports all these search types and more. No registration required.
              </p>
            </div>
            
            <div className="text-gray-400">
              <p className="text-sm mb-2">
                🔐 <strong>Privacy & Security:</strong> Images auto-deleted after 2-3 days • Secure Vercel CDN storage • No personal data collected
              </p>
              <p className="text-xs">
                <strong>Free Reverse Image Search</strong> | <strong>Duplicate Image Detection</strong> | <strong>Multi-Engine Support</strong> | <strong>No Registration Required</strong>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Related Links */}
        <div className="container mx-auto px-4 py-12">
          <RelatedLinks currentPath="/reverse-image-search" />
        </div>
      </div>
    </>);

};

export default UploadPage;
