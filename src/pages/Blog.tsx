import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import RelatedLinks from '../components/RelatedLinks';

const blogPosts = [
  {
    id: 1,
    title: "How to Find the Original Source of Any Image Online",
    excerpt: "Complete guide to using reverse image search to find where an image originally came from, including tips for photographers and content creators.",
    slug: "find-original-source-image-online",
    category: "Tutorial",
    readTime: "5 min read",
    publishDate: "2025-10-10",
    keywords: ["reverse image search tutorial", "find original image source", "image source finder"]
  },
  {
    id: 2,
    title: "Best Free Reverse Image Search Tools Compared",
    excerpt: "Comprehensive comparison of Google Lens, TinEye, Bing Visual Search, and Yandex Images for finding duplicate and similar images.",
    slug: "best-free-reverse-image-search-tools",
    category: "Comparison",
    readTime: "8 min read",
    publishDate: "2025-10-09",
    keywords: ["best reverse image search tools", "google lens vs tineye", "free image search comparison"]
  },
  {
    id: 3,
    title: "How to Detect Stolen Images and Protect Your Photography",
    excerpt: "Learn how photographers can use reverse image search to find unauthorized use of their photos and protect their intellectual property.",
    slug: "detect-stolen-images-protect-photography",
    category: "Photography",
    readTime: "6 min read",
    publishDate: "2025-10-08",
    keywords: ["detect stolen images", "protect photography copyright", "find unauthorized image use"]
  },
  {
    id: 4,
    title: "Reverse Image Search for E-commerce: Finding Product Sources",
    excerpt: "Discover how to use reverse image search to find suppliers, verify product authenticity, and research competitors in e-commerce.",
    slug: "reverse-image-search-ecommerce-product-sources",
    category: "E-commerce",
    readTime: "7 min read",
    publishDate: "2025-10-07",
    keywords: ["reverse image search ecommerce", "find product suppliers", "verify product authenticity"]
  }
];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>DuplicateDetective Blog - Expert Tips & Duplicate Detection Guides</title>
        <meta name="description" content="Expert duplicate image detection tips and tutorials. Learn advanced techniques with DuplicateDetective for copyright protection and professional reverse search." />
        <meta name="keywords" content="duplicate detective blog, duplicate image detection tips, reverse image search tutorials, copyright protection, image plagiarism detection" />
        <meta name="author" content="DuplicateDetective" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://checkduplicateimage.online/blog" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Reverse Image Search Blog - Tips, Tutorials & Best Practices" />
        <meta property="og:description" content="Learn reverse image search techniques, find duplicate images, and discover the best practices for using Google Lens, TinEye & other tools effectively." />
        <meta property="og:url" content="https://checkduplicateimage.online/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DuplicateDetective" />
        <meta property="og:image" content="https://checkduplicateimage.online/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="DuplicateDetective Blog - Expert Tips & Duplicate Detection Guides" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Reverse Image Search Blog - Tips, Tutorials & Best Practices" />
        <meta name="twitter:description" content="Learn reverse image search techniques, find duplicate images, and discover the best practices for using Google Lens, TinEye & other tools effectively." />
        <meta name="twitter:image" content="https://checkduplicateimage.online/og-image.jpg" />
        <meta name="twitter:image:alt" content="DuplicateDetective Blog - Expert Tips & Duplicate Detection Guides" />
        
        {/* Blog Schema Markup */}
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Reverse Image Search Blog",
          "description": "Tips, tutorials and best practices for using reverse image search tools to find duplicate images and original sources",
          "url": "https://checkduplicateimage.online/blog",
          "publisher": {
            "@type": "Organization",
            "name": "DuplicateDetective",
            "url": "https://checkduplicateimage.online"
          },
          "blogPost": [
            {
              "@type": "BlogPosting",
              "headline": "How to Find the Original Source of Any Image Online",
              "url": "https://checkduplicateimage.online/blog/find-original-source-image-online",
              "datePublished": "2025-10-10",
              "author": {
                "@type": "Organization",
                "name": "DuplicateDetective"
              }
            }
          ]
        }
        `}</script>
      </Helmet>

      <div className="pt-20 md:pt-28 pb-8 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6 gradient-text-cosmic mt-4">
              Reverse Image Search Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master the art of finding duplicate images, protecting your photos, and discovering original sources with our comprehensive guides and tutorials
            </p>
          </motion.div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-strong rounded-2xl p-8 mb-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <User className="w-4 h-4" />
                    <span>DuplicateDetective Team</span>
                  </div>
                  <Link
                    to={`/blog/${blogPosts[0].slug}`}
                    className="btn-cosmic bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-2xl">🔍</span>
                    </div>
                    <p className="text-gray-600 font-medium">Tutorial</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="glass rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-gray-100 to-blue-50 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-3 mx-auto">
                      <span className="text-xl">📷</span>
                    </div>
                    <span className="text-sm font-medium text-gray-600">{post.category}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{post.publishDate}</span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-purple-600 font-medium text-sm flex items-center gap-1 transition-colors duration-300"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Coming Soon Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-16"
          >
            <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">More Content Coming Soon!</h3>
              <p className="text-gray-600 mb-6">
                We're working on more comprehensive guides, tutorials, and tips to help you master reverse image search. 
                Check back regularly for new content!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {["Advanced Search Tips", "API Integration Guide", "Business Use Cases", "Privacy Best Practices"].map((topic, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Related Links */}
        <div className="container mx-auto px-4 py-12">
          <RelatedLinks currentPath="/blog" />
        </div>
      </div>
    </>
  );
};

export default Blog;