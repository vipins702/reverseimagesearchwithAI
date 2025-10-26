/**
 * Auto-update sitemap.xml with current date
 * This script runs before each build to keep the sitemap fresh for search engines
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get current date in YYYY-MM-DD format
const getCurrentDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// Update sitemap.xml
const updateSitemap = () => {
  const sitemapPath = join(__dirname, '..', 'public', 'sitemap.xml');
  const currentDate = getCurrentDate();
  
  try {
    // Read the sitemap file
    let sitemapContent = readFileSync(sitemapPath, 'utf-8');
    
    // Replace all lastmod dates with current date
    const updatedContent = sitemapContent.replace(
      /<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g,
      `<lastmod>${currentDate}</lastmod>`
    );
    
    // Write back to file
    writeFileSync(sitemapPath, updatedContent, 'utf-8');
    
    console.log(`✅ Sitemap updated successfully! All dates set to: ${currentDate}`);
  } catch (error) {
    console.error('❌ Error updating sitemap:', error.message);
    process.exit(1);
  }
};

// Run the update
updateSitemap();
