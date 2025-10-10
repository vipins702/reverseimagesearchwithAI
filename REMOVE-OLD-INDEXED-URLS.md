# How to Remove Old Indexed URLs from Google

## Problem
Google has indexed old URLs that don't exist in your current website:
- **Old URL 1**: https://checkduplicateimage.online/home.php
- **Old URL 2**: https://checkduplicateimage.online/age_calculator
- **Old URL 3**: https://checkduplicateimage.online/love_calculator
- **Issue**: These are legacy pages from a previous version of your website
- **Status**: Will redirect to correct pages with 301 redirects

---

## ✅ Solution Implemented

### 1. Added 301 Redirects in `vercel.json`
```json
"redirects": [
  {
    "source": "/home.php",
    "destination": "/",
    "permanent": true
  },
  {
    "source": "/age_calculator",
    "destination": "/reverse-image-search",
    "permanent": true
  },
  {
    "source": "/love_calculator",
    "destination": "/reverse-image-search",
    "permanent": true
  },
  {
    "source": "/:path*.php",
    "destination": "/",
    "permanent": true
  }
]
```

This will:
- Redirect `/home.php` to your homepage with a 301 (permanent redirect)
- Redirect `/age_calculator` to `/reverse-image-search` with a 301
- Redirect `/love_calculator` to `/reverse-image-search` with a 301
- Redirect ANY other `.php` file to your homepage
- Tell Google the old URLs have permanently moved

---

## 🔧 Next Steps: Remove from Google Search Console

### Step 1: Request URL Removal
1. Go to **Google Search Console**: https://search.google.com/search-console
2. Select your property: `checkduplicateimage.online`
3. Navigate to **Removals** in the left sidebar
4. Click **New Request**
5. Remove each old URL one by one:
   - `https://checkduplicateimage.online/home.php`
   - `https://checkduplicateimage.online/age_calculator`
   - `https://checkduplicateimage.online/love_calculator`
6. For each URL, select **Remove this URL only**
7. Click **Next** and then **Submit Request**

**Note**: Removal typically takes 1-2 days to process per URL.

### Step 2: Verify the 301 Redirects
After deploying your changes, test each redirect:

1. Visit: https://checkduplicateimage.online/home.php
   - Should redirect to: https://checkduplicateimage.online/
   
2. Visit: https://checkduplicateimage.online/age_calculator
   - Should redirect to: https://checkduplicateimage.online/reverse-image-search
   
3. Visit: https://checkduplicateimage.online/love_calculator
   - Should redirect to: https://checkduplicateimage.online/reverse-image-search

All redirects should return HTTP 301 status code (not 404).

You can use these tools to verify:
- **Redirect Checker**: https://httpstatus.io/
- **Google's URL Inspection Tool** in Search Console

### Step 3: Submit Updated Sitemap
Your sitemap should NOT include `home.php`. Verify this:
1. Visit: https://checkduplicateimage.online/sitemap.xml
2. Ensure `/home.php` is NOT listed
3. In Google Search Console → Sitemaps
4. Re-submit your sitemap: `https://checkduplicateimage.online/sitemap.xml`

---

## 📊 Expected Timeline

| Action | Timeline |
|--------|----------|
| Deploy redirect changes | Immediate (after git push) |
| Google processes removal request | 1-2 days |
| URL removed from search results | 3-7 days |
| Old URL fully de-indexed | 2-4 weeks |

---

## 🔍 How to Check if URLs are Removed

### Method 1: Google Search
Search for each old URL:
- `site:checkduplicateimage.online home.php`
- `site:checkduplicateimage.online age_calculator`
- `site:checkduplicateimage.online love_calculator`

If removed, you should see:
- No results found, OR
- The new redirected page instead

### Method 2: Google Search Console
1. Go to **URL Inspection**
2. Enter each URL to check:
   - `https://checkduplicateimage.online/home.php`
   - `https://checkduplicateimage.online/age_calculator`
   - `https://checkduplicateimage.online/love_calculator`
3. Check the status:
   - ✅ **Good**: "URL is not on Google" or "Redirect"
   - ⚠️ **Still indexed**: "URL is on Google"

---

## 🚨 Prevent Future Issues

### 1. Monitor Your Indexed Pages
Regularly check Google Search Console for unexpected indexed URLs:
- **Coverage Report** → Shows all indexed pages
- **Sitemaps** → Verify only correct URLs are submitted
- **URL Inspection** → Check individual URL status

### 2. Use robots.txt (Already Configured)
Your `robots.txt` is properly set up to allow only valid pages.

### 3. Add Canonical Tags (Already Done)
All your pages have canonical tags pointing to the correct URLs.

---

## 📝 Additional Old URLs to Check

If you find other old/legacy URLs indexed, add them to the redirects:

```json
"redirects": [
  {
    "source": "/old-url.php",
    "destination": "/new-url",
    "permanent": true
  }
]
```

Common legacy patterns to redirect:
- `*.php` files → React routes
- `index.php` → `/`
- `about.php` → `/about`
- `contact.php` → (if you add a contact page)

---

## ✅ Checklist

- [x] Added 301 redirect for `/home.php` in `vercel.json`
- [x] Added 301 redirect for `/age_calculator` in `vercel.json`
- [x] Added 301 redirect for `/love_calculator` in `vercel.json`
- [x] Added wildcard redirect for all `.php` files
- [ ] Commit and push changes to GitHub
- [ ] Verify redirects work on live site (test all 3 URLs)
- [ ] Submit removal request for `/home.php` in Google Search Console
- [ ] Submit removal request for `/age_calculator` in Google Search Console
- [ ] Submit removal request for `/love_calculator` in Google Search Console
- [ ] Re-submit sitemap in Google Search Console
- [ ] Monitor removal progress (check weekly for all 3 URLs)

---

## 🆘 If URL Persists After 4 Weeks

1. **Check redirect is working**: Visit the URL and confirm 301 redirect
2. **Re-submit removal request** in Google Search Console
3. **Check for backlinks**: Old URL might be linked from other sites
4. **Use Google's Removals Tool**: More aggressive removal option

---

**Last Updated**: October 10, 2025  
**Status**: Redirects configured, awaiting deployment
