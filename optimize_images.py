"""
Image Optimization Script for SEO
Converts images to WebP format and optimizes quality
Run: python optimize_images.py
"""

from PIL import Image
import os
from pathlib import Path

INPUT_DIR = Path('./public/images')
OUTPUT_DIR = Path('./public/images/optimized')
TARGET_MAX_SIZE_KB = 200

# Create output directory
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

def get_file_size_kb(filepath):
    """Get file size in KB"""
    return os.path.getsize(filepath) / 1024

def optimize_image(input_path, filename):
    """Optimize a single image"""
    ext = input_path.suffix.lower()
    base_name = input_path.stem
    
    # Skip if already optimized
    if '.webp' in filename:
        print(f"⏭️  Skipping {filename} (already WebP)")
        return
    
    try:
        # Get original size
        original_size_kb = get_file_size_kb(input_path)
        print(f"\n🔄 Processing: {filename} ({original_size_kb:.2f} KB)")
        
        # Open image
        img = Image.open(input_path)
        
        # Convert RGBA to RGB if needed
        if img.mode == 'RGBA':
            background = Image.new('RGB', img.size, (255, 255, 255))
            background.paste(img, mask=img.split()[3])
            img = background
        elif img.mode != 'RGB':
            img = img.convert('RGB')
        
        # Optimize to WebP with progressive quality
        quality = 85
        optimized = False
        
        while quality >= 60 and not optimized:
            webp_path = OUTPUT_DIR / f"{base_name}.webp"
            img.save(webp_path, 'WEBP', quality=quality, method=6)
            
            output_size_kb = get_file_size_kb(webp_path)
            
            if output_size_kb <= TARGET_MAX_SIZE_KB or quality == 60:
                reduction = ((1 - output_size_kb / original_size_kb) * 100)
                print(f"✅ Optimized: {base_name}.webp ({output_size_kb:.2f} KB, quality: {quality}%)")
                print(f"   💾 Saved: {(original_size_kb - output_size_kb):.2f} KB ({reduction:.1f}% reduction)")
                optimized = True
            else:
                quality -= 5
                if webp_path.exists():
                    webp_path.unlink()
        
        # Create optimized fallback
        if ext in ['.jpg', '.jpeg']:
            fallback_path = OUTPUT_DIR / filename
            img.save(fallback_path, 'JPEG', quality=80, optimize=True, progressive=True)
            fallback_size_kb = get_file_size_kb(fallback_path)
            print(f"   📦 Fallback: {filename} ({fallback_size_kb:.2f} KB)")
        elif ext == '.png':
            fallback_path = OUTPUT_DIR / filename
            img.save(fallback_path, 'PNG', optimize=True, compress_level=9)
            fallback_size_kb = get_file_size_kb(fallback_path)
            print(f"   📦 Fallback: {filename} ({fallback_size_kb:.2f} KB)")
            
    except Exception as e:
        print(f"❌ Error processing {filename}: {str(e)}")

def process_all_images():
    """Process all images in the input directory"""
    print('🚀 Starting image optimization...\n')
    print(f'📁 Input: {INPUT_DIR}')
    print(f'📁 Output: {OUTPUT_DIR}')
    print(f'🎯 Target: {TARGET_MAX_SIZE_KB} KB per image\n')
    
    # Find all images
    image_extensions = {'.jpg', '.jpeg', '.png', '.webp'}
    image_files = [f for f in INPUT_DIR.iterdir() 
                   if f.is_file() and f.suffix.lower() in image_extensions]
    
    print(f'Found {len(image_files)} images to process\n')
    
    for image_file in image_files:
        optimize_image(image_file, image_file.name)
    
    print('\n✨ Optimization complete!')
    print(f'\n📋 Next Steps:')
    print(f'   1. Review optimized images in {OUTPUT_DIR}')
    print(f'   2. Update image references to use .webp format')
    print(f'   3. Keep fallback formats for browser compatibility')
    print(f'   4. Use <picture> tag for WebP with fallback:')
    print(f'\n   <picture>')
    print(f'     <source srcSet="/images/optimized/hero.webp" type="image/webp" />')
    print(f'     <img src="/images/optimized/hero.jpg" alt="..." />')
    print(f'   </picture>')

if __name__ == '__main__':
    try:
        process_all_images()
    except Exception as e:
        print(f'❌ Error: {str(e)}')
        print('\n💡 Make sure Pillow is installed: pip install Pillow')
