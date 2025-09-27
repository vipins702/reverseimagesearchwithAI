
import React, { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { useDropzone } from 'react-dropzone';
import { Upload, Search, Image as ImageIcon, Sparkles, Zap, Globe, Eye, Download, X, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
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
    name: 'Google',
    icon: <Globe className="w-5 h-5" />,
    color: 'from-blue-500 to-blue-600',
    // Use Google Lens for better support (mobile and desktop)
    searchUrl: (url) => `https://lens.google.com/uploadbyurl?url=${encodeURIComponent(url)}`,
    description: 'Google Lens (best for most users)'
  },
  {
    name: 'Karma Decay',
    icon: <Zap className="w-5 h-5" />,
    color: 'from-yellow-500 to-yellow-700',
    searchUrl: (url) => `https://karmadecay.com/search?q=${encodeURIComponent(url)}`,
    description: 'Find Reddit posts with this image'
  },
  {
    name: 'Bing',
    icon: <Search className="w-5 h-5" />,
    color: 'from-green-500 to-green-600',
    searchUrl: (url) => `https://www.bing.com/images/search?q=imgurl:${encodeURIComponent(url)}&view=detailv2&iss=sbi`,
    description: "Microsoft's visual search"
  },
  {
    name: 'Yandex',
    icon: <Eye className="w-5 h-5" />,
    color: 'from-red-500 to-red-600',
    searchUrl: (url) => `https://yandex.com/images/search?rpt=imageview&url=${encodeURIComponent(url)}`,
    description: 'Great for Russian content'
  },
  {
    name: 'TinEye',
    icon: <Zap className="w-5 h-5" />,
    color: 'from-purple-500 to-purple-600',
    // Use TinEye's direct search URL (sometimes requires public image URL)
    searchUrl: (url) => `https://www.tineye.com/search?url=${encodeURIComponent(url)}`,
    description: 'Reverse image specialist'
  }
];


const UploadPage = () => {
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
        <title>Reverse Image Search Tool | Find Image Source Instantly</title>
        <meta name="description" content="Free reverse image search tool powered by AI. Find image sources, search by image, and discover similar photos across Google, Bing, Yandex, TinEye, and Reddit." />
        <meta name="keywords" content="reverse image search, image search tool, find image source, search by image, Google Lens, Bing, TinEye, Yandex, Reddit, AI image search, photo lookup, online image search, visual search engine, image recognition, free reverse image search" />
        <link rel="canonical" href="https://search.lumi.ing/upload" />
        {/* Open Graph tags */}
        <meta property="og:title" content="Reverse Image Search Tool | Find Image Source Instantly" />
        <meta property="og:description" content="Free reverse image search tool powered by AI. Find image sources, search by image, and discover similar photos across Google, Bing, Yandex, TinEye, and Reddit." />
        <meta property="og:url" content="https://search.lumi.ing/upload" />
        <meta property="og:type" content="website" />
        {/* Twitter tags */}
        <meta name="twitter:title" content="Reverse Image Search Tool | Find Image Source Instantly" />
        <meta name="twitter:description" content="Free reverse image search tool powered by AI. Find image sources, search by image, and discover similar photos across Google, Bing, Yandex, TinEye, and Reddit." />
      </Helmet>

      <div className="pt-12 pb-8 min-h-screen flex flex-col justify-start">
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
              <h1 className="text-3xl md:text-4xl font-bold gradient-text-cosmic">Reverse Image Search</h1>
            </div>
            <p className="text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
              Upload any image and discover its origins across the web with our premium reverse image search powered by cosmic technology
            </p>
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
                        <h3 className="text-base font-semibold mb-1">
                          {isDragActive ? 'Drop your image here' : 'Upload your image'}
                        </h3>
                        <p className="text-gray-400 text-lg">
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
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <ImageIcon className="w-6 h-6 text-blue-400" />
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
                        alt="Uploaded"
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
                          <span className="font-medium">{uploadedImage.file.name}</span>
                        </div>
                        <div className="text-gray-400 space-y-2">
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

                  {/* Search Engines */}
                  <div className="glass-strong rounded-3xl p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Search className="w-6 h-6 text-purple-400" />
                      Search Engines
                    </h3>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {searchEngines.map((engine, index) =>
                    <motion.button
                      key={engine.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleSearch(engine)}
                      disabled={!uploadedImage.publicUrl}
                      className={`
                            search-btn p-6 glass rounded-2xl text-left
                            transition-all duration-300 hover:shadow-2xl
                            ${uploadedImage.publicUrl ? 'hover:border-white/30' : 'opacity-50 cursor-not-allowed'}
                          `}>

                          <div className={`w-12 h-12 bg-gradient-to-br ${engine.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                            {engine.icon}
                          </div>
                          <h4 className="font-semibold text-lg mb-2 text-center">{engine.name}</h4>
                          <p className="text-gray-400 text-sm text-center">{engine.description}</p>
                        </motion.button>
                    )}
                    </div>
                    
                    {!uploadedImage.publicUrl && !isUploading &&
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-6 text-center text-gray-400">

                        <p>Upload failed. Please try uploading your image again.</p>
                      </motion.div>
                  }
                    
                    {isUploading &&
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-6 text-center text-gray-400">

                        <p>Please wait for the image to finish uploading before searching</p>
                      </motion.div>
                  }
                  </div>
                </motion.div>)
              }
            </AnimatePresence>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-center mt-16 text-gray-400">

            <p className="text-sm">
              Privacy-focused • Images stored on Vercel CDN • Secure public URLs • No personal data collected
            </p>
          </motion.div>
        </div>
      </div>
    </>);

};

export default UploadPage;