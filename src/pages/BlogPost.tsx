import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Clock, User, ArrowLeft, ArrowRight, Share2 } from 'lucide-react';
import RelatedLinks from '../components/RelatedLinks';
import blogPosts from '../data/blogPosts';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the blog post by slug
  const post = blogPosts.find(p => p.slug === slug);
  
  // If post not found, redirect to blog list
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Get related posts (exclude current)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id)
    .slice(0, 3);

  const shareUrl = `https://checkduplicateimage.online/blog/${post.slug}`;

  const handleShare = (platform: string) => {
    const urls = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    };
    window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400');
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{post.metaTitle}</title>
        <meta name="title" content={post.metaTitle} />
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.keywords.join(', ')} />
        <meta name="author" content={post.author} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href={shareUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content="https://checkduplicateimage.online/og-image.jpg" />
        <meta property="og:site_name" content="DuplicateDetective" />
        <meta property="article:published_time" content={post.publishDate} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content={post.category} />
        {post.keywords.map((keyword, index) => (
          <meta key={index} property="article:tag" content={keyword} />
        ))}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={shareUrl} />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content="https://checkduplicateimage.online/og-image.jpg" />

        {/* Article Schema Markup */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "${post.title}",
            "description": "${post.excerpt}",
            "image": "https://checkduplicateimage.online/og-image.jpg",
            "author": {
              "@type": "Organization",
              "name": "${post.author}",
              "url": "https://checkduplicateimage.online"
            },
            "publisher": {
              "@type": "Organization",
              "name": "DuplicateDetective",
              "logo": {
                "@type": "ImageObject",
                "url": "https://checkduplicateimage.online/logo.png"
              }
            },
            "datePublished": "${post.publishDate}",
            "dateModified": "${post.publishDate}",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "${shareUrl}"
            },
            "keywords": "${post.keywords.join(', ')}",
            "articleSection": "${post.category}"
          }
        `}</script>

        {/* HowTo Schema for Tutorial Posts */}
        {post.category === 'Tutorial' && (
          <script type="application/ld+json">{`
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "${post.title}",
              "description": "${post.excerpt}",
              "totalTime": "PT${post.readTime.replace(' min read', 'M')}",
              "step": [
                {
                  "@type": "HowToStep",
                  "name": "Use DuplicateDetective",
                  "text": "Upload your photo to DuplicateDetective for free reverse image search",
                  "url": "${shareUrl}#method-1"
                },
                {
                  "@type": "HowToStep",
                  "name": "Use Built-in Tools",
                  "text": "Utilize Windows File Explorer or Mac Finder to find duplicates",
                  "url": "${shareUrl}#method-2"
                },
                {
                  "@type": "HowToStep",
                  "name": "Use Cloud Solutions",
                  "text": "Leverage Google Photos AI-powered duplicate detection",
                  "url": "${shareUrl}#method-4"
                },
                {
                  "@type": "HowToStep",
                  "name": "Use Desktop Software",
                  "text": "Install free duplicate finder software for comprehensive scanning",
                  "url": "${shareUrl}#method-5"
                }
              ]
            }
          `}</script>
        )}

        {/* BreadcrumbList Schema */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://checkduplicateimage.online"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://checkduplicateimage.online/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "${post.title}",
                "item": "${shareUrl}"
              }
            ]
          }
        `}</script>

        {/* FAQPage Schema - for posts with FAQ sections */}
        {post.slug === 'find-duplicate-photos-computer-free' && (
          <script type="application/ld+json">{`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How do I know if a photo is a duplicate?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Duplicate photos can be exact copies (identical file size, dimensions, content), similar versions (same photo, different edits/crops), or near-duplicates (same scene, slightly different angle). Use AI tools like DuplicateDetective to detect all three types automatically."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Will deleting duplicates affect my original photos?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, if done correctly. Always keep the highest quality version (largest file size), preview before deleting, back up your library before bulk deletion, and use trash/recycle bin to avoid permanent deletion until verified."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much storage space can I save by removing duplicates?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Average savings: Small libraries (under 1,000 photos): 2-5GB, Medium libraries (1,000-10,000 photos): 5-20GB, Large libraries (10,000+ photos): 20-100GB. Some users report saving 30-40% of total storage by removing duplicates."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I find duplicates across multiple folders?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Desktop software scans multiple folders simultaneously. For web tools, search one folder at a time and manually compare results. Cloud backup services like Google Photos can auto-organize across all folders."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What's the fastest way to find duplicate photos?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For quick searches: DuplicateDetective (1-3 seconds per photo). For bulk scanning: Desktop software like dupeGuru (scans 1,000 photos in 2-5 minutes)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I prevent duplicate photos in the future?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Best practices: Import photos only once, use organized folder structure by date/event, enable iCloud Photo Library or Google Photos auto-sync, delete camera roll photos after importing to computer, and use photo management software like Lightroom or Apple Photos."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are free duplicate finders safe to use?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, if you choose reputable tools: DuplicateDetective (web-based, no installation), dupeGuru (open source, community-verified), and built-in OS tools (Windows Explorer, Mac Finder). Avoid unknown software from untrusted websites, apps asking for excessive permissions, and tools bundled with adware/malware."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I recover deleted photos if I make a mistake?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, if you use the Recycle Bin (Windows) or Trash (Mac). For permanently deleted photos, use recovery software (Recuva, Disk Drill), check cloud backups (Google Photos, iCloud), or restore from Time Machine (Mac) or File History (Windows)."
                  }
                }
              ]
            }
          `}</script>
        )}
      </Helmet>

      <div className="pt-20 md:pt-28 pb-8 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-gray-600 mb-6"
          >
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>→</span>
            <Link to="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
            <span>→</span>
            <span className="text-gray-900">{post.category}</span>
          </motion.div>

          {/* Back to Blog Link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-purple-600 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="text-sm text-gray-500 flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-between border-t border-b border-gray-200 py-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{post.author}</p>
                  <p className="text-sm text-gray-500">{post.publishDate}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleShare('twitter')}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleShare('facebook')}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Share on Facebook"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.header>

          {/* Featured Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className="w-full h-64 md:h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-4xl">🔍</span>
                </div>
                <p className="text-gray-600 font-medium text-lg">{post.category}</p>
              </div>
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none mb-12"
          >
            <div className="glass-strong rounded-2xl p-8 md:p-12">
              <ReactMarkdown
                components={{
                  h1: ({node, ...props}) => <h1 className="text-3xl font-bold mb-6 mt-8 text-gray-900" {...props} />,
                  h2: ({node, ...props}) => <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900" {...props} />,
                  h3: ({node, ...props}) => <h3 className="text-xl font-bold mb-3 mt-6 text-gray-900" {...props} />,
                  p: ({node, ...props}) => <p className="mb-4 leading-relaxed text-gray-700" {...props} />,
                  a: ({node, ...props}) => <a className="text-blue-600 hover:text-purple-600 underline transition-colors" {...props} />,
                  ul: ({node, ...props}) => <ul className="mb-4 ml-6 list-disc text-gray-700" {...props} />,
                  ol: ({node, ...props}) => <ol className="mb-4 ml-6 list-decimal text-gray-700" {...props} />,
                  li: ({node, ...props}) => <li className="mb-2" {...props} />,
                  blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4 text-gray-600" {...props} />,
                  table: ({node, ...props}) => <div className="overflow-x-auto my-6"><table className="min-w-full divide-y divide-gray-200" {...props} /></div>,
                  thead: ({node, ...props}) => <thead className="bg-gray-50" {...props} />,
                  tbody: ({node, ...props}) => <tbody className="bg-white divide-y divide-gray-200" {...props} />,
                  th: ({node, ...props}) => <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" {...props} />,
                  td: ({node, ...props}) => <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900" {...props} />,
                  code: ({node, inline, ...props}: any) => 
                    inline ? 
                      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-blue-600" {...props} /> : 
                      <code className="block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4 text-sm font-mono" {...props} />,
                  hr: ({node, ...props}) => <hr className="my-8 border-gray-200" {...props} />,
                }}
              >
                {post.content}
              </ReactMarkdown>

              {/* CTA Section */}
              <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Ready to Find Duplicate Photos?
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Try DuplicateDetective now - the free, privacy-first reverse image search tool. 
                  No registration required, works on all devices, and finds duplicates in seconds.
                </p>
                <Link
                  to="/reverse-image-search"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                >
                  Try DuplicateDetective Free
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="glass rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="h-32 bg-gradient-to-br from-gray-100 to-blue-50 flex items-center justify-center">
                      <span className="text-3xl">📷</span>
                    </div>
                    <div className="p-4">
                      <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded text-xs font-medium">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-lg font-bold mt-3 mb-2 group-hover:text-blue-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}
        </div>

        {/* Related Links */}
        <div className="container mx-auto px-4 py-12">
          <RelatedLinks currentPath={`/blog/${post.slug}`} />
        </div>
      </div>
    </>
  );
};

export default BlogPost;
