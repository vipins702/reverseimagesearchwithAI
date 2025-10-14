import React from 'react';

interface OptimizedImageProps {
  src: string; // Original image path like "/images/hero.jpg"
  alt: string;
  className?: string;
  width?: string | number;
  height?: string | number;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
}

/**
 * OptimizedImage Component
 * Automatically serves WebP with fallback to original format
 * Supports all modern browsers with graceful degradation
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  fetchPriority = 'auto',
}) => {
  // Convert path to optimized versions
  const getOptimizedPath = (originalPath: string, format: 'webp' | 'original') => {
    const pathParts = originalPath.split('/');
    const filename = pathParts.pop() || '';
    const basePath = pathParts.join('/');
    
    if (format === 'webp') {
      const nameWithoutExt = filename.replace(/\.(jpg|jpeg|png)$/i, '');
      return `${basePath}/optimized/${nameWithoutExt}.webp`;
    }
    return `${basePath}/optimized/${filename}`;
  };

  const webpSrc = getOptimizedPath(src, 'webp');
  const fallbackSrc = getOptimizedPath(src, 'original');

  return (
    <picture>
      {/* WebP version for modern browsers */}
      <source srcSet={webpSrc} type="image/webp" />
      
      {/* Fallback for older browsers */}
      <img
        src={fallbackSrc}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchPriority}
      />
    </picture>
  );
};

export default OptimizedImage;
