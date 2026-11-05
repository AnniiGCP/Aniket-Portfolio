# Search Engine Identity Audit & Correction Report

**Website:** [https://aniketyadav.tech](https://aniketyadav.tech)  
**Target Identity:** Aniket Yadav — Software Developer | Cloud & DevOps | AI & Developer Tooling  
**Institution:** KS Institute of Technology, Bengaluru  
**Audit Date:** November 2026  
**Status:** Codebase Audit & Assets Fixed; Ready for Production Deployment & Engine Recrawl  

---

## 1. Executive Summary & Root Cause Analysis

### 1.1 The Issue
A search query for **"Aniket Yadav"** on Brave Search returned:
- **Title:** `Aniket Yadav | Portfolio Website | Developer`
- **Description:** `Aniket Yadav is a Developer and is a B.Tech student at G.L. Bajaj Institute of Technology and Management`
- **Favicon:** Blurry, indistinct thumbnail image.

### 1.2 Root Cause Investigation
1. **Codebase & Git History Audit:**  
   A full regex and git log traversal across all branches and commits proved that **neither "Bajaj" nor "Portfolio Website | Developer" has ever existed anywhere in this repository**.
2. **Domain Historical Precedence:**  
   The domain `aniketyadav.tech` was previously owned and hosted by another individual of the same name (a B.Tech student at G.L. Bajaj Institute of Technology and Management) prior to its current registration and deployment by Aniket Yadav (KS Institute of Technology, Bengaluru).
3. **Brave Search Web Crawler Lag:**  
   Unlike DuckDuckGo and Yahoo (which primarily license Bing's search index), **Brave Search operates its own independent web crawler (`Bravebot`) and index**. Brave's crawler has long TTLs (time-to-live) and lower re-crawl frequencies on low-traffic custom domains. As a result, Brave has been serving a cached historical snapshot from the previous domain owner.
4. **Favicon Rendering Artifact:**  
   Previously, `src/app/icon.png` was a 64×64 pixel portrait photo. When search engines downsampled this 64px photo to 16×16px for search results, it rendered as an unidentifiable, blurry blob.

---

## 2. Technical Remediation Implemented

### 2.1 Metadata & Canonical Anchoring
All global and route-level metadata has been updated to reflect Aniket's verified professional identity:

| Field | Production Value |
| :--- | :--- |
| **Site Name** | `Aniket Yadav` |
| **Title** | `Aniket Yadav \| Software Developer \| Cloud & DevOps` |
| **Meta Description** | `Explore Aniket Yadav's portfolio featuring software development, AI projects, cloud technologies, DevOps learning, technical projects and engineering work.` |
| **Author / Creator** | `Aniket Yadav` |
| **Canonical URL** | `https://aniketyadav.tech/` |
| **Locale** | `en_IN` |

### 2.2 Vector & Raster Favicon Suite
Replaced all existing icon references with a clean, high-contrast, modern "AY" monogram icon designed specifically for crisp 16×16, 32×32, and high-DPI displays:

- **`public/favicon.ico` & `src/app/favicon.ico`**: Multi-resolution ICO (16x16, 32x32, 48x48, 64x64)
- **`public/icon.svg` & `src/app/icon.svg`**: Scalable SVG vector icon (dark obsidian `#080b0f`, emerald tech border `#10b981`, bold `#f0f6fc` AY typography)
- **`public/icon.png` & `src/app/icon.png`**: 32×32 RGBA crisp display icon
- **`public/apple-icon.png` & `public/apple-touch-icon.png`**: 180×180 high-resolution touch icon

### 2.3 Rich Schema.org Structured Data (`Person` & `WebSite`)
Located in `src/components/person-json-ld.tsx`, the application embeds unambiguous JSON-LD linked data directly in the HTML `<head>`:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://aniketyadav.tech/#person",
      "name": "Aniket Yadav",
      "url": "https://aniketyadav.tech",
      "jobTitle": "Software Developer | Cloud & DevOps | AI & Developer Tooling",
      "description": "Explore Aniket Yadav's portfolio featuring software development, AI projects, cloud technologies, DevOps learning, technical projects and engineering work.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "KS Institute of Technology",
        "location": {
          "@type": "PostalAddress",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "addressCountry": "IN"
        }
      },
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "degree",
          "name": "Bachelor of Engineering in Computer Science and Design",
          "recognizedBy": {
            "@type": "EducationalOrganization",
            "name": "KS Institute of Technology"
          }
        }
      ],
      "sameAs": [
        "https://github.com/AnniiGCP",
        "https://www.linkedin.com/in/aniketyadav9099/",
        "https://x.com/AniketYadavDev"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://aniketyadav.tech/#website",
      "url": "https://aniketyadav.tech",
      "name": "Aniket Yadav — Portfolio",
      "publisher": { "@id": "https://aniketyadav.tech/#person" },
      "inLanguage": "en-US"
    }
  ]
}
```

### 2.4 Pixel Pet Replacement
- Replaced the puppy sprite with the authentic **pixel cat** sprite sheet (`cat.png` and `pixel-cat-sleep.png`) at `public/oneko/`.
- Preserved the character name **"Pixel"**, wake prompt (`"Wake up Pixel"`), click/hover wake interactions, 32×32 grid, and smooth responsive positioning.

---

## 3. Search Engine Verification Matrix

| Search Engine | Crawler Identity | Index Source | Expected Recrawl Behavior | Action Required |
| :--- | :--- | :--- | :--- | :--- |
| **Google** | Googlebot | Google Web Index | Crawls `sitemap.xml` automatically; high recrawl rate. | Submit via Google Search Console URL inspection |
| **Bing** | Bingbot | Microsoft Bing Index | Supports IndexNow protocol for instant notification. | Submit sitemap via Bing Webmaster Tools & trigger IndexNow ping |
| **Brave** | Bravebot | Independent Brave Index | Long crawl cycles for personal sites; cached historical data. | Submit feedback / ping Brave Search re-crawl |
| **DuckDuckGo** | DuckDuckBot | Bing Index + DDG partner feeds | Inherits Bing index updates within 24-48 hours. | Automatically updated once Bing re-indexes the domain |
| **Yahoo** | Yahoo! Slurp | Powered by Microsoft Bing | Follows Bing index updates. | Automatically updated once Bing re-indexes the domain |

---

## 4. Post-Deployment Acceleration Steps for the Owner

Once these changes are pushed to GitHub and Vercel finishes the production deployment:

### Step 1: Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console).
2. Enter `https://aniketyadav.tech/` in the top **URL Inspection** bar.
3. Click **Request Indexing**. Googlebot will usually re-fetch within 6–24 hours.

### Step 2: Bing Webmaster Tools & IndexNow
1. Go to [bing.com/webmasters](https://www.bing.com/webmasters).
2. Add your site and verify via DNS or meta tag.
3. Submit `https://aniketyadav.tech/sitemap.xml`.
4. Use the **URL Submission** tool to submit `https://aniketyadav.tech/` for immediate crawling.

### Step 3: Brave Search Update
1. Perform the search `Aniket Yadav` on [search.brave.com](https://search.brave.com/).
2. Click the three dots (or feedback link) next to the `aniketyadav.tech` search result.
3. Select **Report outdated or incorrect result** and enter:
   > *"The domain aniketyadav.tech has been completely redeveloped. The current title is 'Aniket Yadav | Software Developer | Cloud & DevOps' and the owner is Aniket Yadav from KS Institute of Technology, Bengaluru. Please clear the historical cache and re-crawl the live URL."*
4. Bravebot will re-queue the page and purge the stale record.

