# Analytics & Search Console Setup Guide

**Owner:** Aniket Yadav  
**Applicable Services:** Google Analytics 4 (GA4), Google Search Console, Bing Webmaster Tools, Upstash Redis  

---

## 1. Google Analytics 4 (GA4)

### 1.1 How It Works
The portfolio includes a lightweight, privacy-focused GA4 component (`src/components/google-analytics.tsx`) that mounts only when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is present:
- If the environment variable is not defined, no external scripts or trackers load.
- Automatically tracks page views across single-page client transitions (Next.js App Router).

### 1.2 Setup Instructions
1. Go to [Google Analytics](https://analytics.google.com/).
2. Click **Admin > Data Streams > Web**.
3. Enter your portfolio website URL (e.g. `https://aniketyadav.tech`) and Stream Name (e.g. `Aniket Yadav Portfolio`).
4. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`).
5. In **Vercel**:
   - Go to your Project > **Settings** > **Environment Variables**.
   - Add Key: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - Add Value: `G-XXXXXXXXXX`
   - Check all environments (Production, Preview, Development) and click **Save**.
6. Redeploy or trigger a new Git commit.

### 1.3 How to Verify Real-Time Events
1. In Google Analytics, navigate to **Reports > Realtime**.
2. Open your live website in a private browser window.
3. You will immediately see:
   - Active users: 1
   - Event count by event name: `page_view`
   - Page location matching the route visited.

---

## 2. Google Search Console Setup

1. Open [Google Search Console](https://search.google.com/search-console).
2. Choose **URL prefix** and enter your production URL: `https://aniketyadav.tech`.
3. **Verification Options:**
   - **Method A (DNS TXT Record - Recommended):** Add the provided TXT record at your domain registrar (GoDaddy, Namecheap, Cloudflare).
   - **Method B (HTML Tag):** If preferred, copy the verification code and we can place it into the `<head>` in `src/app/layout.tsx`.
4. Once verified, go to **Sitemaps** on the left menu:
   - Enter `sitemap.xml` in the "Add a new sitemap" input.
   - Click **Submit**. Status will show **Success**.

---

## 3. Bing Webmaster Tools Setup

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters).
2. Sign in with your Google or Microsoft account.
3. Click **Import from Google Search Console**.
4. Authorize access. Bing will automatically verify your domain ownership and import your sitemap without needing any manual DNS changes!

---

## 4. Visitor Counter Persistence on Vercel

### Background
The Bhagavad Gita wisdom card uses browser-side `sessionStorage` and `localStorage`, which requires **zero database setup** and works out of the box on Vercel.

The **Visitor Counter** (`/api/visitors`) reads from `data/visitors.json` when running locally. However, Vercel functions run in an ephemeral serverless environment where file writes do not persist permanently across different lambdas.

### How to Persist Count on Vercel (100% Free):
The codebase already has native support for **Upstash Redis**:
1. In your **Vercel Dashboard**:
   - Go to the **Storage** tab.
   - Click **Create Database** > Select **Upstash Redis** (or install the free Upstash integration from the Vercel Marketplace).
2. Connect it to your portfolio project.
3. Vercel will automatically populate:
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`
4. The visitor API in `src/lib/visitor-store.ts` will immediately detect these variables and atomically track real-time visitor counts permanently!

