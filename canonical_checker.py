#!/usr/bin/env python3
"""
canonical_checker.py

Production-grade, async CLI tool for indexability & canonical health checks.

Usage:
  python canonical_checker.py --input urls.txt [--concurrency 5 --timeout 15 --user-agent "MyBot/1.0" --sitemap https://example.com/sitemap.xml]

Outputs:
  - index_check.csv
  - index_check_summary.json
  - index_check_raw.json

Requirements:
  - Python 3.10+
  - pip install -r requirements.txt
"""
import aiofiles
import argparse
import asyncio
import aiohttp
import ssl
import csv
import json
import sys
import time
from urllib.parse import urlparse, urljoin
from bs4 import BeautifulSoup
from typing import Set


# Global caches
robots_cache = {}
sitemap_cache = {}

def normalize_url(url: str) -> str:
    """Normalize URL for comparison (remove trailing slash, lowercase scheme/host)."""
    parsed = urlparse(url)
    return parsed._replace(scheme=parsed.scheme.lower(), netloc=parsed.netloc.lower(), path=parsed.path.rstrip('/')).geturl()
from tqdm import tqdm
from typing import List, Dict, Any, Optional
import gzip
import io
import re
import socket
import logging
import urllib.robotparser

# --- Config ---
DEFAULT_UA = "CanonicalChecker/1.0 (+https://checkduplicateimage.online/)"
DEFAULT_CONCURRENCY = 3
DEFAULT_TIMEOUT = 10
RETRIES = 3
CSV_FIELDS = [
    "outputurl","status","resp_time","noindex_header","noindex_meta","canonical","title_len","meta_desc_len",
    "internal_links","in_sitemap","robots_disallow","notes"
]

# --- Helper Functions ---
def parse_args():
    parser = argparse.ArgumentParser(description="Canonical & Indexability Checker")
    parser.add_argument('--input', required=True, help='URL or file of URLs (one per line)')
    parser.add_argument('--output', default='index_check.csv', help='CSV output file')
    parser.add_argument('--concurrency', type=int, default=DEFAULT_CONCURRENCY, help='Concurrent requests (default 3)')
    parser.add_argument('--timeout', type=int, default=DEFAULT_TIMEOUT, help='Timeout per request (seconds, default 10)')
    parser.add_argument('--user-agent', default=DEFAULT_UA, help='User-Agent string')
    parser.add_argument('--sitemap', default=None, help='Sitemap URL (optional)')
    parser.add_argument('--verbose', action='store_true', help='Verbose output')
    return parser.parse_args()

def load_urls(input_arg: str) -> List[str]:
    if re.match(r'^https?://', input_arg):
        return [input_arg.strip()]
    with open(input_arg, encoding='utf-8') as f:
        return [line.strip() for line in f if line.strip() and not line.startswith('#')]


async def check_robots_txt(base_url, path, user_agent, session, verbose=False):
    parsed = urlparse(base_url)
    robots_url = f"{parsed.scheme}://{parsed.netloc}/robots.txt"
    if robots_url in robots_cache:
        rp = robots_cache[robots_url]
    else:
        try:
            async with session.get(robots_url, headers={"User-Agent": user_agent}, timeout=DEFAULT_TIMEOUT, ssl=False) as resp:
                txt = await resp.text(errors='ignore')
                rp = urllib.robotparser.RobotFileParser()
                rp.set_url(robots_url)
                rp.parse(txt.splitlines())
                robots_cache[robots_url] = rp
        except Exception as e:
            if verbose:
                print(f"[WARN] Could not fetch robots.txt: {e}")
            return ""
    allowed = rp.can_fetch(user_agent, path)
    return "Disallowed" if not allowed else ""

sitemap_cache = {}
async def fetch_sitemap(url, session, verbose=False):
    if url in sitemap_cache:
        return sitemap_cache[url]
    try:
        async with session.get(url, timeout=DEFAULT_TIMEOUT, ssl=False) as resp:
            if resp.status == 200:
                if url.endswith('.gz') or resp.headers.get('Content-Type','').endswith('gzip'):
                    content = await resp.read()
                    xml = gzip.decompress(content)
                else:
                    xml = await resp.read()
                sitemap_cache[url] = xml
                return xml
    except Exception as e:
        if verbose:
            print(f"[WARN] Could not fetch sitemap: {e}")
    return None
def parse_sitemap(xml, session, base_url, verbose=False):
    try:
        from lxml import etree
        tree = etree.fromstring(xml)
        ns = tree.nsmap.get(None, "")
        urls = set()
        if tree.tag.endswith("sitemapindex"):
            for sitemap in tree.findall(".//{%s}sitemap" % ns):
                loc = sitemap.find("{%s}loc" % ns)
                if loc is not None and loc.text:
                    sub_url = loc.text.strip()
                    urls.add(sub_url)
        elif tree.tag.endswith("urlset"):
            for urltag in tree.findall(".//{%s}url" % ns):
                loc = urltag.find("{%s}loc" % ns)
                if loc is not None and loc.text:
                    urls.add(loc.text.strip())
        return urls
    except Exception as e:
        if verbose:
            print(f"[WARN] Could not parse sitemap: {e}")
        return set()

async def check_sitemap(url, sitemap_url, session, verbose=False):
    to_check = [sitemap_url]
    seen = set()
    while to_check:
        sm_url = to_check.pop()
        if sm_url in seen:
            continue
        seen.add(sm_url)
        xml = await fetch_sitemap(sm_url, session, verbose)
        if not xml:
            continue
        urls = parse_sitemap(xml, session, sm_url, verbose)
        if any(u.endswith('.xml') for u in urls) and sm_url.endswith('sitemapindex.xml'):
            to_check.extend(urls)
        else:
            for u in urls:
                if normalize_url(u) == normalize_url(url):
                    return "TRUE"
    return "FALSE"

async def fetch(session, url, method="GET", timeout=DEFAULT_TIMEOUT, user_agent=DEFAULT_UA, allow_redirects=True, verbose=False):
    headers = {"User-Agent": user_agent}
    for attempt in range(RETRIES):
        try:
            start = time.time()
            async with session.request(method, url, headers=headers, timeout=timeout, allow_redirects=allow_redirects, ssl=False) as resp:
                if method == "HEAD":
                    await resp.read()
                    elapsed = int((time.time() - start)*1000)
                    return resp.status, resp.headers, b"", elapsed, str(resp.url)
                else:
                    content = await resp.read()
                    elapsed = int((time.time() - start)*1000)
                    return resp.status, resp.headers, content, elapsed, str(resp.url)
        except (aiohttp.ClientError, asyncio.TimeoutError, ssl.SSLError, socket.gaierror) as e:
            if verbose:
                print(f"[WARN] {method} {url} attempt {attempt+1} failed: {e}")
            await asyncio.sleep(2 ** attempt)
    return None, {}, b"", 0, url

# --- Async Fetching ---
async def fetch_url(session: aiohttp.ClientSession, url: str, timeout: int) -> Dict[str, Any]:
    result = {'url': url, 'status': None, 'resp_time': None, 'headers': {}, 'body': None, 'error': None}
    try:
        start = time.time()
        async with session.get(url, timeout=timeout, allow_redirects=True) as resp:
            result['status'] = resp.status
            result['headers'] = dict(resp.headers)
            result['body'] = await resp.text(errors='replace')
            result['resp_time'] = int((time.time() - start)*1000)
    except Exception as e:
        result['error'] = str(e)
    return result

# --- Main Check Logic ---
def analyze_html(html: str, url: str) -> Dict[str, Any]:

    soup = BeautifulSoup(html, 'lxml')
    meta_robots = ''
    canonical = ''
    title_len = 0
    meta_desc_len = 0
    internal_links = 0
    try:
        robots_tag = soup.find('meta', attrs={'name': re.compile('robots', re.I)})
        if robots_tag and robots_tag.get('content'):
            meta_robots = robots_tag['content']
        can_tag = soup.find('link', rel='canonical')
        if can_tag and can_tag.get('href'):
            canonical = can_tag['href']
        title = soup.title.string if soup.title else ''
        title_len = len(title.strip()) if title else 0
        desc = soup.find('meta', attrs={'name': 'description'})
        meta_desc_len = len(desc['content'].strip()) if desc and desc.get('content') else 0
        parsed = urlparse(url)
        for a in soup.find_all('a', href=True):
            href = a['href']
            if href.startswith('/') or parsed.netloc in href:
                internal_links += 1
    except Exception:
        pass
    return {
        'noindex_meta': meta_robots,
        'canonical': canonical,
        'title_len': title_len,
        'meta_desc_len': meta_desc_len,
        'internal_links': internal_links
    }

def explain_indexability(row: Dict[str, Any]) -> str:
    notes = []
    if row.get('noindex_header') or ('noindex' in (row.get('noindex_meta') or '').lower()):
        notes.append('noindex')
    if row.get('status') and int(row['status']) >= 400:
        notes.append('not_found')
    if row.get('robots_disallow'):
        notes.append('robots_disallow')
    if row.get('in_sitemap') == 'FALSE':
        notes.append('not_in_sitemap')
    if row.get('canonical') and not row['canonical'].startswith(row['outputurl']):
        notes.append('canonical_other_domain')
    if row.get('internal_links') == 0:
        notes.append('no_internal_links')
    return ';'.join(notes) if notes else 'Indexable'

# --- Main Async Runner ---
async def main():
    args = parse_args()
    urls = load_urls(args.input)
    sitemap_urls = []
    if args.sitemap:
        sitemap_urls.append(args.sitemap)
    elif urls:
        parsed = urlparse(urls[0])
        sitemap_urls.append(f"{parsed.scheme}://{parsed.netloc}/sitemap.xml")
    connector = aiohttp.TCPConnector(limit=args.concurrency, family=0)
    timeout = aiohttp.ClientTimeout(total=args.timeout)
    results = []
    raw_results = []
    summary = []
    async with aiohttp.ClientSession(connector=connector, timeout=timeout, headers={'User-Agent': args.user_agent}) as session:
        tasks = []
        for url in urls:
            tasks.append(fetch_url(session, url, args.timeout))
        for coro in tqdm(asyncio.as_completed(tasks), total=len(tasks), desc="Checking URLs"):
            res = await coro
            raw_results.append(res)
            row = {
                'outputurl': res['url'],
                'status': res['status'],
                'resp_time': res['resp_time'],
                'noindex_header': '',
                'noindex_meta': '',
                'canonical': '',
                'title_len': '',
                'meta_desc_len': '',
                'internal_links': '',
                'in_sitemap': '',
                'robots_disallow': '',
                'notes': ''
            }
            if res['status']:
                # X-Robots-Tag header
                xrobots = res['headers'].get('x-robots-tag', '')
                if 'noindex' in xrobots.lower():
                    row['noindex_header'] = xrobots
                # HTML analysis
                if res['body']:
                    html_info = analyze_html(res['body'], res['url'])
                    row.update(html_info)
                # Sitemap
                row['in_sitemap'] = 'TRUE' if res['url'].rstrip('/') in sitemap_urls or res['url'] in sitemap_urls else 'FALSE'
                # Robots.txt (async check)
                parsed_url = urlparse(res['url'])
                robots_disallow = await check_robots_txt(f"{parsed_url.scheme}://{parsed_url.netloc}", parsed_url.path, args.user_agent, session, args.verbose)
                row['robots_disallow'] = 'TRUE' if robots_disallow else ''
                # Notes
                row['notes'] = explain_indexability(row)
            else:
                row['notes'] = res['error'] or 'fetch_failed'
            results.append(row)
    # Write CSV
    fieldnames = ['outputurl','status','resp_time','noindex_header','noindex_meta','canonical','title_len','meta_desc_len','internal_links','in_sitemap','robots_disallow','notes']
    with open(args.output, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for row in results:
            writer.writerow(row)
    # Write summary JSON (high-priority issues)
    for row in results:
        if row['notes'] != 'Indexable':
            summary.append(row)
    with open('index_check_summary.json', 'w', encoding='utf-8') as f:
        json.dump(summary, f, indent=2)
    # Write raw JSON
    with open('index_check_raw.json', 'w', encoding='utf-8') as f:
        json.dump(raw_results, f, indent=2)
    print(f"\nDone. Results: {args.output}, index_check_summary.json, index_check_raw.json")

if __name__ == '__main__':
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("Aborted.")
