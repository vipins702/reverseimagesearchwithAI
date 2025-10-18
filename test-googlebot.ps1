# Test what Googlebot sees on your site
# Run: .\test-googlebot.ps1

$domain = "checkduplicateimage.online"
$useragent = "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"

Write-Host "🔍 Testing what Googlebot sees on your site..." -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

# Test Homepage
Write-Host "1️⃣  Testing Homepage (https://$domain/)" -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "https://$domain/" -UserAgent $useragent -TimeoutSec 10
    $html = $response.Content
    
    Write-Host "✅ Status: $($response.StatusCode)" -ForegroundColor Green
    Write-Host "📦 Size: $($html.Length) bytes" -ForegroundColor Green
    Write-Host ""
    
    # Check for title
    if ($html -match '<title>(.*?)</title>') {
        Write-Host "✅ Title found: $($Matches[1])" -ForegroundColor Green
    } else {
        Write-Host "❌ NO TITLE FOUND!" -ForegroundColor Red
    }
    
    # Check for meta description
    if ($html -match '<meta name="description" content="(.*?)"') {
        $desc = $Matches[1]
        if ($desc.Length -gt 80) {
            Write-Host "✅ Description found: $($desc.Substring(0, 80))..." -ForegroundColor Green
        } else {
            Write-Host "✅ Description found: $desc" -ForegroundColor Green
        }
    } else {
        Write-Host "❌ NO META DESCRIPTION FOUND!" -ForegroundColor Red
    }
    
    # Check for empty shell
    if ($html -match '<div id="root"></div>\s*<script') {
        Write-Host "⚠️  WARNING: Detected empty React shell pattern" -ForegroundColor Yellow
        Write-Host "   But if title and description are present above, that's OK!" -ForegroundColor Yellow
    }
    
    # Check for structured data
    if ($html -match 'application/ld\+json') {
        Write-Host "✅ Structured data (JSON-LD) found" -ForegroundColor Green
    } else {
        Write-Host "⚠️  No structured data found" -ForegroundColor Yellow
    }
} catch {
    Write-Host "❌ ERROR: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host ""
Write-Host "================================================" -ForegroundColor Cyan

# Test other pages
$pages = @(
    "/reverse-image-search",
    "/how-it-works",
    "/about"
)

Write-Host ""
Write-Host "2️⃣  Testing Other Pages..." -ForegroundColor Yellow
foreach ($page in $pages) {
    try {
        $response = Invoke-WebRequest -Uri "https://$domain$page" -UserAgent $useragent -TimeoutSec 10
        Write-Host "✅ $page - Status: $($response.StatusCode)" -ForegroundColor Green
    } catch {
        Write-Host "❌ $page - ERROR: $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "3️⃣  Testing Sitemap..." -ForegroundColor Yellow

try {
    $sitemap = Invoke-WebRequest -Uri "https://$domain/sitemap.xml" -TimeoutSec 10
    $urls = ([xml]$sitemap.Content).urlset.url | Measure-Object
    Write-Host "✅ Sitemap found with $($urls.Count) URLs" -ForegroundColor Green
} catch {
    Write-Host "❌ Sitemap ERROR: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host ""
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "4️⃣  Testing robots.txt..." -ForegroundColor Yellow

try {
    $robots = Invoke-WebRequest -Uri "https://$domain/robots.txt" -TimeoutSec 10
    Write-Host "✅ robots.txt found" -ForegroundColor Green
    Write-Host $robots.Content
} catch {
    Write-Host "❌ robots.txt ERROR: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host ""
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "🎯 SUMMARY:" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host "1. If title and description are shown above: ✅ Your site is crawlable!" -ForegroundColor Green
Write-Host "2. Rebuild and deploy: npm run build && vercel --prod" -ForegroundColor Cyan
Write-Host "3. Run this test again after deployment" -ForegroundColor Cyan
Write-Host "4. Request re-indexing in Google Search Console" -ForegroundColor Cyan
Write-Host "5. Wait 2-3 days for Google to recrawl" -ForegroundColor Cyan
Write-Host ""

Write-Host "Google Search Console: https://search.google.com/search-console" -ForegroundColor Blue
