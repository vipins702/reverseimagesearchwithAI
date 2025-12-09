import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDropzone } from 'react-dropzone';
import { Upload, Search, Image as ImageIcon, CheckCircle, Loader2, Globe, Eye, Zap, X, Link as LinkIcon } from 'lucide-react';
import toast from 'react-hot-toast';

interface UploadedImage {
  file?: File;
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
    searchUrl: (url) => `https://lens.google.com/uploadbyurl?url=${encodeURIComponent(url)}`,
    description: 'Best for products & objects'
  },
  {
    name: 'Bing Visual',
    icon: <Search className="w-5 h-5" />,
    color: 'from-green-500 to-green-600',
    searchUrl: (url) => `https://www.bing.com/images/search?q=imgurl:${encodeURIComponent(url)}&view=detailv2&iss=sbi`,
    description: 'Great for similar images'
  },
  {
    name: 'Yandex',
    icon: <Eye className="w-5 h-5" />,
    color: 'from-red-500 to-red-600',
    searchUrl: (url) => `https://yandex.com/images/search?rpt=imageview&url=${encodeURIComponent(url)}`,
    description: 'Global search coverage'
  },
  {
    name: 'TinEye',
    icon: <Zap className="w-5 h-5" />,
    color: 'from-purple-500 to-purple-600',
    searchUrl: (url) => `https://www.tineye.com/search?url=${encodeURIComponent(url)}`,
    description: 'Exact match finder'
  }
];

const HomeUpload = () => {
  const [uploadedImage, setUploadedImage] = useState<UploadedImage | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [urlInput, setUrlInput] = useState('');
  const [showUrlInput, setShowUrlInput] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      toast.error('File size must be less than 10MB');
      return;
    }

    const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      toast.error('Please upload a JPG, PNG, or WebP image');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        const dataUrl = e.target.result as string;
        setUploadedImage({ file, dataUrl });
        uploadToVercelBlob(dataUrl, file.name);
      }
    };
    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
      'image/webp': ['.webp']
    },
    multiple: false,
    maxSize: 10 * 1024 * 1024
  });

  const uploadToVercelBlob = async (dataUrl: string, filename: string) => {
    setIsUploading(true);
    setUploadProgress(0);

    try {
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageData: dataUrl, filename })
      });

      clearInterval(progressInterval);
      setUploadProgress(100);

      if (!response.ok) throw new Error('Upload failed');

      const result = await response.json();
      if (result.success && result.publicUrl) {
        setUploadedImage((prev) => prev ? {
          ...prev,
          publicUrl: result.publicUrl,
          filename: result.filename
        } : null);
        toast.success('Image ready for search!');
      } else {
        throw new Error('Invalid response');
      }
    } catch (error) {
      console.error('Upload error:', error);
      toast.error('Upload failed. Please try again.');
      setUploadedImage(null);
    } finally {
      setIsUploading(false);
    }
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput) return;

    // Basic URL validation
    try {
      new URL(urlInput);
      setUploadedImage({ dataUrl: urlInput, publicUrl: urlInput });
      toast.success('URL added! Select a search engine.');
      setShowUrlInput(false);
    } catch {
      toast.error('Please enter a valid URL');
    }
  };

  const handleSearch = (engine: SearchEngine) => {
    if (!uploadedImage?.publicUrl) return;
    window.open(engine.searchUrl(uploadedImage.publicUrl), '_blank');
    toast.success(`Searching on ${engine.name}...`);
  };

  const resetUpload = (e: React.MouseEvent) => {
    e.stopPropagation();
    setUploadedImage(null);
    setIsUploading(false);
    setUploadProgress(0);
    setUrlInput('');
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        {!uploadedImage ? (
          <motion.div
            key="upload"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            <div
              {...getRootProps()}
              className={`
                glass-upload rounded-3xl p-8 md:p-10 cursor-pointer
                transition-all duration-300 group relative overflow-hidden
                ${isDragActive ? 'border-blue-500 bg-blue-500/10' : 'hover:border-purple-500/50'}
              `}
            >
              <input {...getInputProps()} />

              <div className="text-center space-y-6 relative z-10">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                      <Upload className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center border-4 border-[#0f172a]">
                      <Zap className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {isDragActive ? 'Drop it here!' : 'Upload Image to Search'}
                  </h3>
                  <p className="text-gray-400 text-base max-w-md mx-auto">
                    Drag & drop, click to browse, or paste an image URL
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowUrlInput(!showUrlInput);
                    }}
                    className="px-4 py-2 glass rounded-full text-sm text-blue-300 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-2"
                  >
                    <LinkIcon className="w-4 h-4" />
                    {showUrlInput ? 'Hide URL Input' : 'Paste Image URL'}
                  </button>
                </div>

                {showUrlInput && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="max-w-md mx-auto mt-4 animate-in fade-in slide-in-from-top-2"
                  >
                    <form onSubmit={handleUrlSubmit} className="flex gap-2">
                      <input
                        type="url"
                        value={urlInput}
                        onChange={(e) => setUrlInput(e.target.value)}
                        placeholder="https://example.com/image.jpg"
                        className="flex-1 bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
                        autoFocus
                      />
                      <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors"
                      >
                        Add
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-strong rounded-3xl p-6"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center">
              {/* Compact Preview */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
                <img
                  src={uploadedImage.dataUrl}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-xl border border-white/10 shadow-lg"
                />
                <button
                  onClick={resetUpload}
                  className="absolute -top-2 -right-2 bg-red-500 text-white p-1.5 rounded-full hover:bg-red-600 transition-colors shadow-lg z-10"
                  title="Remove image"
                >
                  <X className="w-3 h-3" />
                </button>
                {isUploading && (
                  <div className="absolute inset-0 bg-black/60 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <Loader2 className="w-6 h-6 text-blue-400 animate-spin" />
                  </div>
                )}
              </div>

              {/* Search Options - Right Side for Desktop */}
              <div className="flex-1 w-full">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">Select Search Engine</h3>
                    <p className="text-gray-400 text-xs">Click any engine to search</p>
                  </div>
                  {!isUploading && uploadedImage.publicUrl && (
                    <div className="flex items-center gap-1 text-green-400 text-xs bg-green-400/10 px-2 py-1 rounded-lg">
                      <CheckCircle className="w-3 h-3" />
                      <span>Ready</span>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {searchEngines.map((engine) => (
                    <button
                      key={engine.name}
                      onClick={() => handleSearch(engine)}
                      disabled={!uploadedImage.publicUrl}
                      className={`
                        group relative p-3 rounded-xl border border-white/5 text-left transition-all duration-200
                        ${uploadedImage.publicUrl
                          ? 'bg-white/5 hover:bg-white/10 hover:border-blue-500/30 hover:-translate-y-0.5'
                          : 'bg-white/5 opacity-50 cursor-not-allowed'}
                      `}
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${engine.color} flex items-center justify-center mb-2 shadow-lg`}>
                        {React.cloneElement(engine.icon as React.ReactElement, { className: "w-4 h-4 text-white" })}
                      </div>
                      <div className="font-semibold text-white text-sm">{engine.name}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomeUpload;
