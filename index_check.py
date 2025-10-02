import argparse
import csv
import gzip
import re
import sys
import time
from collections import defaultdict
from io import BytesIO
from urllib.parse import urlparse, urljoin

import requests
from bs4 import BeautifulSoup
from lxml import etree
from tqdm import tqdm

USER_AGENT = "Mozilla/5.0 (compatible; IndexCheckBot/1.0; +https://github.com/vipins702/index-check)"
HEADERS = {"User-Agent": USER_AGENT}
RATE_LIMIT = 1.0  # seconds between requests
RETRIES = 2
TIMEOUT = 15
CSV_FIELDS = [
    "url","status","resp_time","noindex_header","noindex_meta","canonical","title_len","meta_desc_len",
    "internal_links","in_sitemap","robots_disallow","notes"
]

def fetch_url(url, method="GET", allow_redirects=True):
    for attempt in range(RETRIES+1):
        try:
            start = time.time()
            resp = requests.request(method, url, headers=HEADERS, timeout=TIMEOUT, allow_redirects=allow_redirects)
            elapsed = round((time.time() - start)*1000)
            return resp, elapsed
        except Exception as e:
            if attempt == RETRIES:
                return None, None
            time.sleep(2)
    return None, None

def get_html_info(resp, base_url):
    soup = BeautifulSoup(resp.text, "lxml")
    # meta robots
    meta_robots = ""
    for tag in soup.find_all("meta", attrs={"name": "robots"}):
        if tag.get("content"):
            meta_robots = tag["content"].strip()
            break
    # canonical
    canonical = ""
    link_tag = soup.find("link", rel="canonical")
    if link_tag and link_tag.get("href"):
        canonical = link_tag["href"].strip()
    # title/meta desc
    title = soup.title.string.strip() if soup.title and soup.title.string else ""
    meta_desc = ""
    desc_tag = soup.find("meta", attrs={"name": "description"})
    if desc_tag and desc_tag.get("content"):
        meta_desc = desc_tag["content"].strip()
    # internal links
    parsed = urlparse(base_url)
    domain = parsed.netloc
    internal_links = set()
    for a in soup.find_all("a", href=True):
        href = a["href"].strip()
        if href.startswith("/") or domain in href:
            internal_links.add(href)
    return meta_robots, canonical, len(title), len(meta_desc), len(internal_links)

def get_x_robots_tag(resp):
    return resp.headers.get("X-Robots-Tag", "")

def fetch_sitemap(base_url):
    sitemap_url = urljoin(base_url, "/sitemap.xml")
    try:
        resp = requests.get(sitemap_url, headers=HEADERS, timeout=TIMEOUT)
        if resp.status_code == 200:
            if sitemap_url.endswith('.gz') or resp.headers.get('Content-Type','').endswith('gzip'):
                with gzip.GzipFile(fileobj=BytesIO(resp.content)) as f:
                    xml = f.read()
            else:
                xml = resp.content
            return xml
    except Exception:
        pass
    return None

def parse_sitemap(xml, url):
    # Handles sitemap index and urlset
    try:
        tree = etree.fromstring(xml)
        ns = tree.nsmap.get(None, "")
        urls = set()
        if tree.tag.endswith("sitemapindex"):
            # Sitemap index: fetch each sitemap
            for sitemap in tree.findall(".//{%s}sitemap" % ns):
                loc = sitemap.find("{%s}loc" % ns)
                if loc is not None and loc.text:
                    sub_xml = fetch_sitemap(loc.text.strip())
                    if sub_xml:
                        urls |= parse_sitemap(sub_xml, url)
        elif tree.tag.endswith("urlset"):
            for urltag in tree.findall(".//{%s}url" % ns):
                loc = urltag.find("{%s}loc" % ns)
                if loc is not None and loc.text:
                    urls.add(loc.text.strip())
        return urls
    except Exception:
        return set()

def check_in_sitemap(base_url, url):
    xml = fetch_sitemap(base_url)
    if not xml:
        return False
    urls = parse_sitemap(xml, url)
    return url.rstrip('/') in (u.rstrip('/') for u in urls)

def check_robots_txt(base_url, path):
    robots_url = urljoin(base_url, "/robots.txt")
    try:
        resp = requests.get(robots_url, headers=HEADERS, timeout=TIMEOUT)
        if resp.status_code == 200:
            lines = resp.text.splitlines()
            user_agent = None
            disallow = []
            for line in lines:
                line = line.strip()
                if line.lower().startswith("user-agent:"):
                    user_agent = line.split(":",1)[1].strip()
                elif line.lower().startswith("disallow:") and user_agent in ("*", USER_AGENT):
                    rule = line.split(":",1)[1].strip()
                    if rule and path.startswith(rule):
                        disallow.append(rule)
            return ", ".join(disallow) if disallow else ""
    except Exception:
        pass
    return ""

def explain_indexability(row):
    notes = []
    if row["status"] and int(row["status"]) >= 400:
        notes.append("Non-200 status")
    if row["noindex_header"] or (row["noindex_meta"] and "noindex" in row["noindex_meta"].lower()):
        notes.append("Noindex present")
    if row["robots_disallow"]:
        notes.append("Disallowed by robots.txt")
    if not row["in_sitemap"]:
        notes.append("Not in sitemap.xml")
    if row["title_len"] < 10:
        notes.append("Short title")
    if row["meta_desc_len"] < 20:
        notes.append("Short meta description")
    return "; ".join(notes) if notes else "Indexable"

def process_url(url):
    parsed = urlparse(url)
    base_url = f"{parsed.scheme}://{parsed.netloc}"
    path = parsed.path or "/"
    # HEAD
    head_resp, head_time = fetch_url(url, method="HEAD")
    # GET
    resp, resp_time = fetch_url(url, method="GET")
    status = resp.status_code if resp else ""
    # X-Robots-Tag
    xrobots = get_x_robots_tag(resp) if resp else ""
    # HTML info
    meta_robots = canonical = title_len = meta_desc_len = internal_links = ""
    if resp and resp.status_code == 200 and resp.text:
        meta_robots, canonical, title_len, meta_desc_len, internal_links = get_html_info(resp, base_url)
    # Sitemap
    in_sitemap = check_in_sitemap(base_url, url)
    # Robots.txt
    robots_disallow = check_robots_txt(base_url, path)
    # Notes
    row = {
        "url": url,
        "status": status,
        "resp_time": resp_time,
        "noindex_header": xrobots,
        "noindex_meta": meta_robots,
        "canonical": canonical,
        "title_len": title_len,
        "meta_desc_len": meta_desc_len,
        "internal_links": internal_links,
        "in_sitemap": in_sitemap,
        "robots_disallow": robots_disallow,
        "notes": ""
    }
    row["notes"] = explain_indexability(row)
    return row

def main():
    parser = argparse.ArgumentParser(description="Indexability Health-Check Tool")
    parser.add_argument("input", help="URL or file of URLs (one per line)")
    args = parser.parse_args()
    # Read URLs
    if re.match(r'^https?://', args.input):
        urls = [args.input]
    else:
        with open(args.input) as f:
            urls = [line.strip() for line in f if line.strip()]
    # Process
    results = []
    for url in tqdm(urls, desc="Checking URLs"):
        row = process_url(url)
        results.append(row)
        print(f"{url}: {row['notes']}")
        time.sleep(RATE_LIMIT)
    # Write CSV
    with open("index_check.csv", "w", newline='', encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=CSV_FIELDS)
        writer.writeheader()
        for row in results:
            writer.writerow(row)
    print("\nResults saved to index_check.csv")

if __name__ == "__main__":
    main()
