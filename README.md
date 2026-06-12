# Competitive Crankshafts — Website

Static site (plain HTML/CSS/JS) for **competitivecrankshafts.com**, built to deploy on **Cloudflare Pages** from a GitHub repo. Red/white/blue theme matching the shop logo.

## Pages

- **index.html** — home: hero, services (watercraft / snowmobile / moto & ATV), process, photo gallery, about, contact.
- **pricing.html** — full 2026 retail price list (watercraft, snowmobile, motorcycle/ATV, welding).
- **404.html** — not-found page.

## Project structure

```
site/
├── index.html
├── pricing.html
├── 404.html
├── css/styles.css        # red/white/blue theme; brand blue #2f47a4, red #ed1b23
├── js/main.js            # nav toggle, year, form handling
├── assets/
│   ├── favicon.svg
│   └── img/
│       ├── logo.png      # converted from the shop's PDF logo
│       ├── hero-crank.jpg, bench-row.jpg, twin-crank.jpg,
│       ├── triple-crank.jpg, fixture-closeup.jpg, blue-seal-row.jpg, adr-16mm.jpg
└── README.md / SETUP-GUIDE.md
```

No build step — the files here are exactly what gets served.

> Note: a few leftover image-conversion files (`logo_raw-1.png`, `logo-trim.png`, `logo-transparent.png`, `forging-stock.jpg`) may be in `assets/img/` and aren't used by the site. Safe to delete before pushing.

## Run it locally

```bash
cd site
python3 -m http.server 8080   # then open http://localhost:8080
```

## Real content already in place

- **Contact:** 208-297-3344 · Jeffseebold@gmail.com · 507 E 45th Street, Unit 300, Garden City, ID 83714
- **Pricing:** retail prices from the 2026 sheet (dealer/wholesale prices intentionally left off the public site).
- **Photos & logo:** from the shop's own files.

## Make the contact form send

The form shows a "not connected" message until you wire it to a static form service:

1. Sign up at [Formspree](https://formspree.io) (or Web3Forms/Getform), get your endpoint URL.
2. In `index.html`, add it to the form tag:
   ```html
   <form class="contact-form" name="contact" method="POST"
         action="https://formspree.io/f/YOUR_ID" data-static-form>
   ```
   The JS lets the form submit normally once an `action` is present.

---

# Deploying: DNS + GitHub + Cloudflare Pages

See **SETUP-GUIDE.md** for the full walkthrough. Short version: add the domain to your Cloudflare → point GoDaddy's nameservers at Cloudflare → push this folder to GitHub → connect it in Cloudflare Pages (Framework: None, no build command, output `/`) → attach `competitivecrankshafts.com` as the custom domain.
