/**
 * Image Optimization Script for SEO
 * Converts images to WebP format and optimizes quality
 * Run: node optimize-images.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const INPUT_DIR = './public/images';
const OUTPUT_DIR = './public/images/optimized';
const TARGET_MAX_SIZE_KB = 200;

// Create output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function optimizeImage(inputPath, filename) {
  const ext = path.extname(filename).toLowerCase();
  const baseName = path.basename(filename, ext);
  
  // Skip if already optimized
  if (filename.includes('.webp')) {
    console.log(`⏭️  Skipping ${filename} (already WebP)`);
    return;
  }

  try {
    // Get original file size
    const originalStats = fs.statSync(inputPath);
    const originalSizeKB = (originalStats.size / 1024).toFixed(2);

    console.log(`\n🔄 Processing: ${filename} (${originalSizeKB} KB)`);

    // Convert to WebP with progressive quality reduction
    let quality = 85;
    let outputPath = path.join(OUTPUT_DIR, `${baseName}.webp`);
    let optimized = false;

    while (quality >= 60 && !optimized) {
      await sharp(inputPath)
        .webp({ quality, effort: 6 })
        .toFile(outputPath);

      const outputStats = fs.statSync(outputPath);
      const outputSizeKB = (outputStats.size / 1024).toFixed(2);

      if (outputSizeKB <= TARGET_MAX_SIZE_KB || quality === 60) {
        console.log(`✅ Optimized: ${baseName}.webp (${outputSizeKB} KB, quality: ${quality}%)`);
        console.log(`   💾 Saved: ${(originalSizeKB - outputSizeKB).toFixed(2)} KB (${((1 - outputSizeKB / originalSizeKB) * 100).toFixed(1)}% reduction)`);
        optimized = true;
      } else {
        quality -= 5;
        fs.unlinkSync(outputPath); // Delete and retry with lower quality
      }
    }

    // Also create a fallback JPG/PNG with optimization
    const fallbackPath = path.join(OUTPUT_DIR, filename);
    if (ext === '.jpg' || ext === '.jpeg') {
      await sharp(inputPath)
        .jpeg({ quality: 80, progressive: true, mozjpeg: true })
        .toFile(fallbackPath);
    } else if (ext === '.png') {
      await sharp(inputPath)
        .png({ quality: 85, compressionLevel: 9, progressive: true })
        .toFile(fallbackPath);
    }

    const fallbackStats = fs.statSync(fallbackPath);
    const fallbackSizeKB = (fallbackStats.size / 1024).toFixed(2);
    console.log(`   📦 Fallback: ${filename} (${fallbackSizeKB} KB)`);

  } catch (error) {
    console.error(`❌ Error processing ${filename}:`, error.message);
  }
}

async function processAllImages() {
  console.log('🚀 Starting image optimization...\n');
  console.log(`📁 Input: ${INPUT_DIR}`);
  console.log(`📁 Output: ${OUTPUT_DIR}`);
  console.log(`🎯 Target: ${TARGET_MAX_SIZE_KB} KB per image\n`);

  const files = fs.readdirSync(INPUT_DIR);
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
  });

  console.log(`Found ${imageFiles.length} images to process\n`);

  for (const file of imageFiles) {
    const inputPath = path.join(INPUT_DIR, file);
    await optimizeImage(inputPath, file);
  }

  console.log('\n✨ Optimization complete!');
  console.log(`\n📋 Next Steps:`);
  console.log(`   1. Review optimized images in ${OUTPUT_DIR}`);
  console.log(`   2. Update image references to use .webp format`);
  console.log(`   3. Keep fallback formats for browser compatibility`);
  console.log(`   4. Use <picture> tag for WebP with fallback:`);
  console.log(`\n   <picture>`);
  console.log(`     <source srcSet="/images/optimized/hero.webp" type="image/webp" />`);
  console.log(`     <img src="/images/optimized/hero.jpg" alt="..." />`);
  console.log(`   </picture>`);
}

// Run the optimization
processAllImages().catch(console.error);
