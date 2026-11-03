# Pre-Launch SEO, Technical & Performance Audit Report

**Website Owner:** Aniket Yadav  
**Website:** https://aniketyadav.tech (Production Domain Configurable via `NEXT_PUBLIC_SITE_URL`)  
**Architecture:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Turbopack  
**Deployment Platform:** Vercel  
**Date:** November 2026  

---

## 1. Executive Summary

A comprehensive pre-launch technical, SEO, crawlability, accessibility, schema, and analytics audit was conducted on Aniket Yadav's personal portfolio codebase. The portfolio's existing visual design, animations, typography, dark theme, and interactive components were **strictly preserved** while resolving several critical pre-launch issues (including legacy OpenGraph preview metadata, missing project structured data, and unconfigured production social card assets).

---

## 2. Baseline Audit & Problems Discovered

| Audit Area | Initial Finding | Pre-Launch Issue | Resolution |
| :--- | :--- | :--- | :--- |
| **OpenGraph Image** | `public/assets/og-image.jpg` contained legacy template branding with an external name and photo. | Sharing the website on LinkedIn/X/WhatsApp displayed old template identity. | Generated custom branded 1200x630 social card with Aniket's photo, verified styling, and achievements. |
| **Twitter / X Handle** | Configured as `@aniketyadav` in `src/config/meta.ts`. | Incorrect author attribution on Twitter cards. | Updated to `@AniketYadav1105`. |
| **Structured Data** | Only basic single-entity `Person` was declared. | Search engines lacked `WebSite` and `SoftwareApplication` / `BreadcrumbList` schemas. | Implemented multi-entity `@graph` schema with Person, WebSite, and per-project Breadcrumbs & SoftwareApplication. |
| **Robots & Sitemaps** | Basic static sitemap array. | Dynamically published projects or newer slugs could be omitted. | Enhanced `sitemap.ts` with union of static routes, project configs, MDX posts, and achievements. |
| **Google Analytics** | Vercel Analytics was present, but GA4 was unconfigured. | No way to track custom outbound link events or GA4 conversion goals. | Built modular GA4 provider reading `NEXT_PUBLIC_GA_MEASUREMENT_ID` with route transition tracking. |
| **404 Handling** | Returned page without custom noindex headers. | Search engines could index soft 404 pages. | Added explicit `robots: { index: false, follow: false }` metadata to `not-found.tsx`. |

---

## 3. Implemented Improvements & Technical Changes

### 3.1 Metadata & Canonical URLs
- **Canonical URLs:** Configured dynamic canonical tags on all indexable pages via `createPageMetadata()`.
- **Title Formatting:** Standardized descriptive page titles:
  - Homepage: `Aniket Yadav | Software Developer, AI & Cloud`
  - Projects: `Projects | Aniket Yadav`
  - About: `About | Aniket Yadav`
  - Project Details: `${project.title} | Aniket Yadav`
- **Meta Descriptions:** Natural, non-stuffed descriptions summarizing verified projects, AI developer tools, and cloud infrastructure experience.

### 3.2 Social Sharing (OpenGraph & Twitter Cards)
- **Asset Created:** High-contrast, dark-mode 1200x630 card at `public/assets/og-image.png` and `public/assets/og-image.jpg`.
- **Verified Display:** Features Aniket's photo, role badge, bio, tech stack, Smart India Hackathon Runner-Up, HIRE-4-THON Runner-Up, and incoming software engineering placement.
- **Card Type:** `summary_large_image` on Twitter/X with full creator and site attribution.

### 3.3 Search Engine Crawlability (`robots.txt` & `sitemap.xml`)
- `/robots.txt` dynamically serves:
  ```txt
  User-Agent: *
  Allow: /
  Disallow: /api/

  Sitemap: https://aniketyadav.tech/sitemap.xml
  ```
- `/sitemap.xml` generates absolute HTTPS URLs with valid change frequencies and priorities for all 14 canonical indexable routes.

### 3.4 Structured Data (JSON-LD)
1. **Person & WebSite Schema (`src/components/person-json-ld.tsx`):**
   - `@type: "Person"` with verified job title "DevOps-focused Software Engineer", sameAs links (GitHub, LinkedIn, X).
   - `@type: "WebSite"` with name, description, and publisher reference.
2. **Project Detail Schema (`src/app/projects/[slug]/page.tsx`):**
   - `@type: "BreadcrumbList"`: Home > Projects > [Project Name].
   - `@type: "SoftwareApplication"`: Application category, operating systems, repository link, description, and author.

### 3.5 Google Analytics 4 (GA4) Architecture
- Modular utility at `src/lib/analytics.ts` and client component at `src/components/google-analytics.tsx`.
- Reads `NEXT_PUBLIC_GA_MEASUREMENT_ID`.
- Zero scripts or console warnings when the variable is unset.
- Automated client-side route tracking via Next.js navigation hooks (`usePathname` and `useSearchParams`).

---

## 4. Test Results & Verification

- **HTTP Status Suite:** All 16 public routes returned `HTTP 200 OK`.
- **404 Routing:** Unmapped route `/non-existent-page-test` returned `HTTP 404 Not Found`.
- **Sitemap XML:** Validated schema conforming to `sitemaps.org/schemas/sitemap/0.9`.
- **Type Checking:** Ran `npx tsc --noEmit` with zero errors.

---

## 5. Configuration Required From User Prior To Launch

1. **`NEXT_PUBLIC_SITE_URL`**: Set to your final custom production domain (e.g. `https://aniketyadav.tech` or `https://aniket-portfolio.vercel.app`) in the Vercel Project Settings under Environment Variables.
2. **`NEXT_PUBLIC_GA_MEASUREMENT_ID`**: Add your Google Analytics 4 Measurement ID (`G-XXXXXXXXXX`) to Vercel Environment Variables.
3. **`UPSTASH_REDIS_REST_URL` & `UPSTASH_REDIS_REST_TOKEN`** *(Optional)*: Connect a free Upstash Redis database via Vercel Marketplace to persist the visitor counter across serverless lambda instances.

