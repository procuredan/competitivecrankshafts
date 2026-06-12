# Setup Guide — Competitive Crankshafts

Goal: domain **competitivecrankshafts.com** stays *registered* at your brother's **GoDaddy**, but its **DNS is hosted in your Cloudflare**, and the site deploys from a **GitHub repo** via **Cloudflare Pages**.

Do the steps in order. Total hands-on time is ~20 minutes; the one wait is for nameservers to propagate (minutes to a few hours).

---

## Part 1 — Add the domain to your Cloudflare

1. Log into **dash.cloudflare.com** (your account).
2. Click **Add a site** (or **+ Add** → **Existing domain**).
3. Enter `competitivecrankshafts.com` and continue.
4. Choose the **Free** plan.
5. Cloudflare scans existing DNS records. Since this is a new site, there may be little or nothing — that's fine. (If your brother already has email or anything live on the domain, make sure those records get copied over before switching nameservers. If the domain is brand-new with nothing on it, skip this.)
6. Cloudflare shows you **two nameservers**, e.g.:
   ```
   xena.ns.cloudflare.com
   rob.ns.cloudflare.com
   ```
   **Keep this tab open** — you need these exact values next.

---

## Part 2 — Point GoDaddy at Cloudflare's nameservers

> You'll need access to the **GoDaddy account where the domain is registered** (your brother's). Either log in yourself, or send him the two nameservers and these steps.

1. Log into **godaddy.com** → **My Products** (or **Domain Portfolio**).
2. Click **competitivecrankshafts.com** to open its settings.
3. Find **Nameservers** → **Change** (sometimes under **DNS** → **Nameservers**).
4. Choose **"I'll use my own nameservers" / Enter my own nameservers (advanced)**.
5. Delete GoDaddy's defaults and enter the **two Cloudflare nameservers** from Part 1.
6. **Save.** GoDaddy may warn that this changes DNS hosting — that's expected; confirm.

That's the whole switch. DNS is now managed in Cloudflare.

---

## Part 3 — Wait for activation

- Back in **Cloudflare**, the site will show **"Pending nameserver update"** and flip to **Active** once GoDaddy's change propagates. Usually under an hour, sometimes a few hours.
- Cloudflare emails you when it's active. You can also click **Check nameservers** to nudge it.
- You can do Part 4 (GitHub) while you wait.

---

## Part 4 — Put the site on GitHub

The website files are in the `site/` folder. Push that folder's **contents** to a new repo.

**Option A — GitHub website (no command line):**
1. Go to **github.com** → **New repository** → name it `competitive-crankshafts` → Create.
2. On the repo page, **Add file → Upload files**, drag in everything inside the `site/` folder (index.html, css/, js/, assets/, etc.), and **Commit**.

**Option B — command line:**
```bash
cd site
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/competitive-crankshafts.git
git push -u origin main
```

> Important: upload the **contents** of `site/` to the repo root (so `index.html` is at the top of the repo), not the `site` folder itself. If you do include the `site` folder, just set the build output directory to `site` in Part 5.

---

## Part 5 — Deploy with Cloudflare Pages

1. In **Cloudflare dash** → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Authorize GitHub and pick the `competitive-crankshafts` repo.
3. Build settings — since this is plain static HTML with **no build step**:
   - **Framework preset:** `None`
   - **Build command:** *(leave blank)*
   - **Build output directory:** `/` (or `site` if you uploaded the folder itself)
4. **Save and Deploy.** In ~30 seconds you get a live URL like `competitive-crankshafts.pages.dev`. Open it to confirm the site works.

Every future `git push` to `main` auto-deploys. That's the whole workflow: edit → push → live.

---

## Part 6 — Attach the custom domain

1. In your new **Pages project** → **Custom domains** → **Set up a custom domain**.
2. Enter `competitivecrankshafts.com` → **Continue** → **Activate domain**.
3. Because DNS is already in your Cloudflare (Part 1–3), Pages **auto-creates the records** for you — no manual entry.
4. Repeat for the **www** version: add `www.competitivecrankshafts.com` so both work. (Cloudflare will set up the redirect/record.)
5. SSL provisions automatically — the green padlock appears within a few minutes.

Done. `https://competitivecrankshafts.com` now serves the site, HTTPS included.

---

## Quick reference / troubleshooting

- **Cloudflare stuck on "Pending"?** GoDaddy nameservers aren't fully switched. Re-check Part 2, confirm both Cloudflare nameservers are entered exactly, and wait longer.
- **Site loads on `.pages.dev` but not the real domain?** The domain isn't Active yet (Part 3) or the custom domain isn't attached (Part 6).
- **Changes not showing?** Make sure you pushed to `main`; check the Pages deployment log. Hard-refresh (Cmd/Ctrl+Shift+R).
- **Email on the domain?** If the domain is used for email, ensure MX records were carried into Cloudflare DNS before switching nameservers, or mail will break.

## What requires whose login

- **Your Cloudflare:** Parts 1, 5, 6.
- **Your GitHub:** Part 4.
- **Brother's GoDaddy:** Part 2 only (the nameserver change). Everything else is in your accounts.
