/**
 * Auto-update sitemap.xml with current date
 * This script runs before each build to keep the sitemap fresh for search engines
 */

const fs = require('fs');
const path = require('path');

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
  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  const currentDate = getCurrentDate();
  
  try {
    // Read the sitemap file
    let sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
    
    // Replace all lastmod dates with current date
    const updatedContent = sitemapContent.replace(
      /<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g,
      `<lastmod>${currentDate}</lastmod>`
    );
    
    // Write back to file
    fs.writeFileSync(sitemapPath, updatedContent, 'utf-8');
    
    console.log(`✅ Sitemap updated successfully! All dates set to: ${currentDate}`);
  } catch (error) {
    console.error('❌ Error updating sitemap:', error.message);
    process.exit(1);
  }
};

// Run the update
updateSitemap();
