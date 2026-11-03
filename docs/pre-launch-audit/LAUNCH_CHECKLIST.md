# Pre-Launch Execution & Verification Checklist

**Portfolio Owner:** Aniket Yadav  
**Target Platform:** Vercel  
**Status:** Pre-Launch Verified  

---

## 1. Completed Automatically (Ready in Codebase)

- [x] **Next.js 15 Production Build Passed:** `npm run build` generated static assets with zero errors across all 24 routes.
- [x] **Type Safety & Linting:** TypeScript 5.9 strict type checking passed.
- [x] **Robots.txt (`/robots.txt`):** Configured to allow all search engines while protecting internal `/api/` routes and declaring the dynamic sitemap.
- [x] **XML Sitemap (`/sitemap.xml`):** Generates all 14 public canonical routes with priorities, change frequencies, and valid HTTPS paths.
- [x] **Unique Titles & Descriptions:** Every public route has a unique, descriptive title and non-stuffed meta description.
- [x] **OpenGraph & Twitter Card Images:** Branded 1200x630 social preview image generated and placed at `/assets/og-image.png` and `/assets/og-image.jpg`.
- [x] **Structured Data (JSON-LD):**
  - Schema.org `Person` for Aniket Yadav with verified job title and social links.
  - Schema.org `WebSite` describing the portfolio.
  - Schema.org `BreadcrumbList` on project detail pages.
  - Schema.org `SoftwareApplication` on individual project routes.
- [x] **Custom 404 Page (`/_not-found`):** Styled with back-to-home button and `noindex` header.
- [x] **Image Optimization:** All project mockups, book covers, and achievement photos use Next.js `<Image>` with explicit sizes, lazy loading, and priority flags on hero assets.
- [x] **Google Analytics 4 Module:** Integrated into root layout reading `NEXT_PUBLIC_GA_MEASUREMENT_ID` with route transition tracking.
- [x] **Bhagavad Gita Wisdom Card:** 100% self-contained client-side session persistence. Requires zero database setup on Vercel.

---

## 2. Requires Your Account Configuration on Vercel

When importing your GitHub repository into Vercel, set these environment variables under **Project Settings > Environment Variables**:

| Variable Name | Required? | Purpose | Example Value |
| :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | **Recommended** | Sets the canonical base URL for sitemaps, OpenGraph, and JSON-LD. | `https://aniketyadav.tech` |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional | Your Google Analytics 4 tracking property. | `G-XXXXXXXXXX` |
| `UPSTASH_REDIS_REST_URL` | Optional | Permanent visitor counter persistence across Vercel lambdas. | `https://...upstash.io` |
| `UPSTASH_REDIS_REST_TOKEN` | Optional | Upstash Redis authentication token. | `AX...` |

---

## 3. Post-Deployment Verification (After Pushing to Vercel)

- [ ] **Domain Check:** Verify your custom domain is connected with an active SSL certificate (HTTPS).
- [ ] **Sitemap Submission:**
  1. Open [Google Search Console](https://search.google.com/search-console).
  2. Add your domain property.
  3. Submit `https://YOUR-DOMAIN/sitemap.xml`.
  4. Verify that all 14 pages are discovered without crawl errors.
- [ ] **Bing Webmaster Tools:**
  1. Open [Bing Webmaster Tools](https://www.bing.com/webmasters).
  2. Import your verified domain from Google Search Console.
  3. Verify sitemap indexation.
- [ ] **Social Preview Inspection:**
  - Test your URL in the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) to ensure Aniket's 1200x630 card appears.
  - Test your URL on [Twitter Card Validator / Tweet Composer](https://twitter.com).
- [ ] **Real-Time GA4 Testing:**
  - Visit the live site and check the Google Analytics Realtime Dashboard to confirm events are received.

