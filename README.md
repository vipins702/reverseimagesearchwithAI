# Canonical Checker: Indexability & Canonical Health CLI Tool

## Features
- Checks indexability and canonical correctness for one or many URLs
- Outputs CSV (`index_check.csv`) and JSON summary (`index_check_summary.json`)
- Handles HEAD/GET, meta/header robots, canonical, sitemap, robots.txt, internal links, and more
- Async, robust, safe, and production-ready

## Install
```
pip install aiohttp beautifulsoup4 lxml tqdm
```

## Usage

- Single URL:
   ```
   python canonical_checker.py --input https://example.com/page
   ```
- File of URLs:
   ```
   python canonical_checker.py --input urls.txt
   ```
- Change concurrency, timeout, user-agent:
   ```
   python canonical_checker.py --input urls.txt --concurrency 5 --timeout 15 --user-agent "MyBot/1.0"
   ```
- Specify sitemap:
   ```
   python canonical_checker.py --input urls.txt --sitemap https://example.com/custom-sitemap.xml
   ```
- Verbose output:
   ```
   python canonical_checker.py --input urls.txt --verbose
   ```

## Example `urls.txt`
```
https://checkduplicateimage.online/
https://checkduplicateimage.online/upload
https://checkduplicateimage.online/how-it-works
https://checkduplicateimage.online/about
```

## Example CSV Output
```
outputurl,status,resp_time,noindex_header,noindex_meta,canonical,title_len,meta_desc_len,internal_links,in_sitemap,robots_disallow,notes
https://checkduplicateimage.online/,200,820,,index, follow,https://search.lumi.ing/,75,167,0,TRUE,,Indexable
https://checkduplicateimage.online/about,200,116,,index, follow,https://search.lumi.ing/,75,167,0,TRUE,,canonical_other_domain;no_internal_links
```

## Output Files
- `index_check.csv`: Main results (see columns above)
- `index_check_summary.json`: High-priority issues (canonical mismatches, noindex, not in sitemap, robots blocked)
- `index_check_raw.json`: Raw details for debugging

## Notes
- Fully async: all network I/O uses aiohttp for maximum speed and concurrency
- Handles sitemap index and .gz, caches sitemaps for speed
- Robust robots.txt parsing (async, per-domain)
- Progress bar and verbose logging
- Strict error handling and retry logic
- Designed for Python 3.10+

## Test (optional)
- To run a smoke test (if `tests/test_basic.py` is present):
   ```
   pytest tests/test_basic.py
   ```
