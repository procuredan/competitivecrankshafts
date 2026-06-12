# Competitive Crankshafts — Website

Static, SEO-optimized site (plain HTML/CSS/JS) for **competitivecrankshafts.com**, built to deploy on **Cloudflare Pages** from a GitHub repo. Red/white/blue theme matching the shop logo.

## Pages

- **index.html** — home: hero, services, makes serviced, process, local SEO + map, gallery, FAQ teaser, contact.
- **watercraft.html** — Watercraft & PWC crank rebuilding (keyword + model content).
- **snowmobile.html** — Snowmobile crank rebuilding.
- **motorcycle-atv.html** — Motorcycle & ATV crank rebuilding.
- **pricing.html** — full 2026 retail price list (watercraft, snowmobile, moto/ATV, welding).
- **faq.html** — FAQ with FAQPage structured data.
- **send-your-core.html** — mail-in how-to with HowTo structured data.
- **404.html** — not-found page.

## SEO features built in

- Unique title, meta description, and canonical on every page.
- Open Graph + Twitter Card tags.
- JSON-LD structured data: LocalBusiness (AutoRepair) with NAP, WebSite, Service, BreadcrumbList, FAQPage, HowTo.
- `sitemap.xml`, `robots.txt`, `site.webmanifest`.
- Semantic headings (one H1/page), descriptive image alt text, width/height + lazy-loading on images.
- Internal linking between home, service pages, pricing, FAQ, and the mail-in guide.
- Embedded Google map + local/service-area copy for Garden City / Boise.

## Project structure

```
site/
├── *.html                # 8 pages
├── css/styles.css        # red/white/blue theme; brand blue #2f47a4, red #ed1b23
├── js/main.js            # nav toggle, year, form handling
├── sitemap.xml, robots.txt, site.webmanifest
├── assets/favicon.svg
└── assets/img/           # logo + crankshaft photos
```

No build step — what's in this folder is exactly what gets served. (The pages were generated from a script, but the repo only needs these static files.)

## Run locally

```bash
cd site
python3 -m http.server 8080   # open http://localhost:8080
```

## To finish later (optional)

- **Contact form:** add a [Formspree](https://formspree.io) endpoint as the form `action` in each page to receive submissions (currently shows a "not connected" notice).
- **Social links:** Facebook/Instagram in the footer are `#` placeholders — add real URLs (also add them to the LocalBusiness `sameAs` in index.html for SEO).
- **Single-crank card image** (`card-single.jpg`) is low-resolution (200px); swap a larger version for a crisper card.
- **Business hours / founding year:** add to the page and LocalBusiness schema when ready.
- **Google Business Profile:** create/claim one with the same NAP for local SEO.

## Deploy: DNS + GitHub + Cloudflare Pages

DNS is already live on Cloudflare. See **SETUP-GUIDE.md**: push this folder to GitHub → connect in Cloudflare Pages (Framework: None, no build command, output `/`) → attach `competitivecrankshafts.com` as the custom domain.
