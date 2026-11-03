<div align="center">

# Aniket Yadav — Personal Portfolio

**A modern, responsive developer portfolio engineered with Next.js 15 App Router, TypeScript, and Tailwind CSS v4.**  
Showcasing projects in AI development, DevOps automation, cloud infrastructure, and software engineering.

[![Live Website](https://img.shields.io/badge/Live_Website-aniketyadav.tech-10b981?style=for-the-badge&logo=vercel&logoColor=white)](https://aniketyadav.tech)
[![GitHub Repository](https://img.shields.io/badge/GitHub_Repo-Aniket--Portfolio-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AnniiGCP/Aniket-Portfolio)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-aniketyadav9099-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/aniketyadav9099/)
[![X / Twitter](https://img.shields.io/badge/X-@AniketYadav1105-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/AniketYadav1105)

</div>

---

## 📸 Portfolio Preview

<div align="center">
  <img src="public/assets/readme-preview.png" alt="Aniket Yadav Portfolio Preview" width="100%" style="border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1);" />
</div>

---

## 📑 Table of Contents

- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Project Structure](#-project-structure)
- [Routes & Pages](#-routes--pages)
- [Customizing Portfolio Content](#-customizing-portfolio-content)
- [Adding Projects](#-adding-projects)
- [Adding Blog Posts](#-adding-blog-posts)
- [Profile Images & Assets](#-profile-images--assets)
- [Visitor Counter Implementation](#-visitor-counter-implementation)
- [Environment Variables](#-environment-variables)
- [Deployment Guide](#-deployment-guide)
- [SEO & Performance](#-seo--performance)
- [Contact & Connect](#-contact--connect)
- [License](#-license)

---

## 🌟 Project Overview

This repository houses the source code for the personal developer portfolio of **Aniket Yadav** ([@AnniiGCP](https://github.com/AnniiGCP)), an AI and DevOps-focused software developer based in Bengaluru, India.

Built from the ground up for speed, fluid aesthetics, and search visibility, the portfolio features:
- A signature dark-mode **liquid glass** UI design with responsive layout scaling.
- Interactive, data-driven components (GitHub contribution graph, Spotify vinyl widget, dynamic wisdom card, live visitor counter).
- Full-stack developer showcases with macOS window mockups, deep-dive project case studies, and career timelines.
- Strict WCAG 2.2 Level AA accessibility compliance, zero horizontal layout blowout, and 100% pre-rendered static routes.

---

## 🚀 Key Features

| Category | Feature Description |
|---|---|
| **Hero & Dual Slideshow** | Corkboard identity banner with flip transition, verified checkmark badge, quick calendar booking via Cal.com, and email CTA. |
| **Interactive Vinyl Player** | Vinyl record animation playing audio previews (*Apocalypse — Cigarettes After Sex*) with live play/pause disc rotation. |
| **Tech Stack Showcase** | 20+ interactive technology badges categorized across Frontend, Backend, DevOps, Cloud, and Machine Learning. |
| **Experience Timeline** | Detailed roles for Valency Energy (AI/ML Intern) and Allegion (Incoming Graduate Engineer Trainee) with verified skills. |
| **Achievements Section** | Spotlighting national runner-up honors at **HIRE-4-THON 2026** with team gallery and award documentation. |
| **Project Case Studies** | Dedicated deep dives for **CodeBrain AI**, **ArcadeVerse**, **QuizGenAI**, **Guardian AI**, and **Google Cloud Solutions**. |
| **GitHub Contribution Graph** | Canonical emerald green palette calendar matrix with live GitHub GraphQL data and zero-overflow mobile scroll. |
| **Dynamic Gita Wisdom Card** | 201 curated Bhagavad Gita verses dynamically rotating with authentic chapter and verse citations (`— Bhagavad Gita · 2.47`). |
| **Visitor Counter** | Non-intrusive persistent visitor counter displaying total page engagements. |
| **Interactive PDF Resume** | In-browser PDF iframe reader supporting direct text selection, embedded link navigation, and one-click download. |
| **Books & Favourites** | Curated recommendations covering engineering, personal finance, psychology, cinema, and productivity. |
| **Command Palette (`⌘K`)** | Quick-navigation palette with keyboard navigation for instant page switching, theme toggling, and social actions. |
| **Pixel Cursor Pet** | Playful companion sprite (Oneko) tracking cursor movements across desktop screens. |
| **Default Dark Theme** | Enforces a dark mode aesthetic on initial load with seamless toggleable light mode persisted via `next-themes`. |

---

## 🛠️ Tech Stack

### Core Technologies

| Layer | Technology | Version | Purpose |
|---|---|---|---|
| **Framework** | [Next.js](https://nextjs.org/) | `15.5.2` | App Router, Static Site Generation (SSG), Edge API Routes |
| **Runtime** | [React](https://react.dev/) | `19.1.1` | Concurrent rendering, Server & Client Components |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | `5.9.2` | Strict end-to-end type safety |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | `4.1.12` | Modern utility-first CSS styling and fluid spacing |
| **Animation** | [Motion](https://motion.dev/) | `13.4.0` | Performant spring physics, transitions, and hover effects |
| **Icons** | [Phosphor Icons](https://phosphoricons.com/) & [Lucide](https://lucide.dev/) | Latest | Clean, accessible vector iconography |
| **Content** | [MDX](https://mdxjs.com/) | Remote v6 | Rich Markdown documentation with JSX components |
| **Command Palette** | [CMDK](https://cmdk.paco.me/) | `1.1.1` | Accessible `⌘K` keyboard command palette |
| **Theming** | [next-themes](https://github.com/pacocoursey/next-themes) | `0.4.6` | Theme management with dark mode default |
| **Analytics** | [Vercel Web Analytics](https://vercel.com/analytics) | `2.0.1` | Privacy-focused visitor analytics |
| **Speed Insights** | [Vercel Speed Insights](https://vercel.com/docs/speed-insights) | `2.0.0` | Real-world Core Web Vitals telemetry |
| **Deployment** | [Vercel](https://vercel.com/) | Production | Edge network hosting with automated CI/CD git integration |

---

## 🏁 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js:** `v20.x` or later (Node 20+ recommended)
- **Package Manager:** `npm` (v10+), `pnpm` (v9+), or `yarn` (v1.22+)
- **Git:** Latest version

### 1. Clone the Repository

```bash
git clone https://github.com/AnniiGCP/Aniket-Portfolio.git
cd Aniket-Portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a local `.env.local` file by copying the provided example:

```bash
cp .env.example .env.local
```

Populate the values inside `.env.local`:

```env
# GitHub Personal Access Token (for live contribution graph fetching)
GITHUB_TOKEN=your_github_personal_access_token_here

# Base URL for canonical tags, sitemaps, and OpenGraph
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> **Note:** A `GITHUB_TOKEN` is optional for local development. If omitted, the app gracefully falls back to cached contribution data.

### 4. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📜 Available Scripts

| Command | Action |
|---|---|
| `npm run dev` | Starts the Next.js development server with Turbopack / Fast Refresh on `localhost:3000`. |
| `npm run build` | Compiles the production build, runs type checking, and statically pre-renders all 24 routes. |
| `npm start` | Launches the production server locally after running `npm run build`. |
| `npm run lint` | Executes ESLint to check for code quality, syntax errors, and React hooks rules. |

---

## 📂 Project Structure

```
Aniket-Portfolio/
├── content/                    # Long-form MDX content
│   ├── blog/                   # Blog articles and tutorials
│   └── projects/               # Detailed project case studies (CodeBrain, ArcadeVerse, etc.)
├── data/                       # Local data stores
│   └── visitors.json           # Fallback visitor counter data
├── docs/                       # Pre-launch and technical audit documentation
│   ├── portfolio-audit/        # Comprehensive SEO, accessibility, and responsiveness reports
│   └── pre-launch-audit/       # Reference checklist and analytics guides
├── public/                     # Static assets served at root
│   ├── assets/                 # Profile avatars, banners, project covers, and icons
│   │   ├── achievements/       # Hackathon and milestone photos
│   │   ├── books/              # Book cover graphics
│   │   ├── favourites/         # Movie & media posters
│   │   ├── projects/           # High-resolution project mockups
│   │   ├── avatar.jpg          # Primary circular avatar (cream blazer portrait)
│   │   ├── og-image.png        # 1200x630 OpenGraph social preview card
│   │   └── aniket-resume.pdf   # In-app interactive resume document
│   └── oneko/                  # Sprite assets for the Oneko cursor companion
├── src/
│   ├── app/                    # Next.js 15 App Router routes & layouts
│   │   ├── about/              # /about page
│   │   ├── achievements/       # /achievements listing and [slug] routes
│   │   ├── api/                # Edge API routes (/api/github, /api/spotify, /api/visitors)
│   │   ├── books/              # /books reading shelf
│   │   ├── favourites/         # /favourites recommendations
│   │   ├── projects/           # /projects catalog and [slug] case studies
│   │   ├── resume/             # /resume interactive PDF viewer
│   │   ├── work/               # /work career and experience timeline
│   │   ├── favicon.ico         # Root browser favicon
│   │   ├── globals.css         # Global Tailwind v4 styling and animations
│   │   ├── layout.tsx          # Root layout with fonts, JSON-LD, analytics & theme provider
│   │   ├── not-found.tsx       # Custom 404 page
│   │   ├── page.tsx            # Homepage index
│   │   ├── robots.ts           # Dynamic robots.txt generation
│   │   └── sitemap.ts          # Dynamic sitemap.xml generation
│   ├── components/             # Reusable UI components
│   │   ├── landing/            # Homepage sections (Hero, TechStack, Experience, GitHub, GitaCard)
│   │   ├── ui/                 # Liquid glass cards, buttons, badges, tooltips
│   │   ├── command-menu.tsx    # Cmd+K search palette
│   │   ├── cursor-pet.tsx      # Desktop cursor companion
│   │   ├── person-json-ld.tsx  # Schema.org structured data
│   │   └── site-header.tsx     # Navigation header and mobile dock
│   ├── config/                 # Central configuration files for data and site identity
│   │   ├── about.ts            # Bio, philosophy, background timeline
│   │   ├── achievements.ts     # Competitions, hackathons, and awards
│   │   ├── experience.ts       # Work roles, technologies, dates, and locations
│   │   ├── hero.ts             # Name, headline, social links, calendar URL
│   │   ├── meta.ts             # Site metadata, title, descriptions, canonical URL
│   │   ├── navigation.ts       # Main navbar and command menu links
│   │   └── projects.ts         # Project metadata, badges, links, cover images
│   ├── data/                   # Wisdom datasets (201 Bhagavad Gita verses)
│   └── lib/                    # Helper utilities, MDX loaders, GitHub API clients
├── .env.example                # Sample environment configuration
├── .gitignore                  # Git ignore rules protecting secrets and build caches
├── next.config.ts              # Next.js framework configuration
├── package.json                # Project dependencies and script declarations
├── tsconfig.json               # TypeScript compiler configuration
└── README.md                   # Project documentation
```

---

## 🗺️ Routes & Pages

| Route | Page | Description | Rendering |
|---|---|---|---|
| `/` | **Home** | Hero section, tech stack grid, experience, featured projects, GitHub matrix, dynamic quote card. | SSG (Static) |
| `/about` | **About** | Personal narrative, education at KSIT, engineering philosophy, and hobbies. | SSG (Static) |
| `/projects` | **Projects** | Complete showcase of software projects and developer tools with filtering. | SSG (Static) |
| `/projects/[slug]` | **Project Detail** | In-depth case studies with architecture breakdown, features, and direct links. | SSG (Static) |
| `/work` | **Work Experience** | Comprehensive employment history, internships, and enterprise engineering roles. | SSG (Static) |
| `/achievements` | **Achievements** | Hackathon victories, competitive milestones, and community recognition. | SSG (Static) |
| `/achievements/[slug]` | **Achievement Detail** | Dedicated writeup with event photo gallery and prize certificates. | SSG (Static) |
| `/resume` | **Resume** | Embedded responsive PDF document with text selection, in-PDF clicking, and download button. | SSG (Static) |
| `/books` | **Bookshelf** | Reading list of engineering, leadership, and personal growth literature. | SSG (Static) |
| `/favourites` | **Favourites** | Curated collection of movies, TV series, podcasts, and media inspirations. | SSG (Static) |
| `/api/github/contributions` | **Contributions API** | Fetches live year-round GitHub commit activity via GraphQL. | Edge Route |
| `/api/visitors` | **Visitor API** | Increments and retrieves cumulative portfolio visitor count. | Edge Route |
| `/api/spotify/now-playing` | **Audio Preview API** | Provides playback state and preview stream for current track. | Edge Route |
| `/robots.txt` | **Robots Directive** | Directs search engine crawlers and specifies sitemap location. | Edge Route |
| `/sitemap.xml` | **XML Sitemap** | Dynamically indexes all 24 public canonical routes. | Edge Route |

---

## ✏️ Customizing Portfolio Content

All personal content is separated from the UI components. You can customize the portfolio by modifying the files in `src/config/`:

| File | Content Controlled | Configurable Properties |
|---|---|---|
| `src/config/hero.ts` | Hero profile, bio, avatars | `name`, `role`, `headline`, `email`, `socialLinks`, `avatar` |
| `src/config/meta.ts` | Global SEO metadata | `name`, `title`, `description`, `url`, `ogImage` |
| `src/config/experience.ts` | Career and work history | Company name, role, dates, location, bullet points, tech stack |
| `src/config/projects.ts` | Projects list | `title`, `slug`, `description`, `tech`, `href`, `website`, `cover` |
| `src/config/achievements.ts` | Awards & competitions | `title`, `organization`, `year`, `details`, `gallery`, `tech` |
| `src/config/about.ts` | About page content | Personal bio, story, approaches to engineering |
| `src/config/resume.ts` | Resume viewer settings | Resume title, file paths for view/download |
| `src/data/bhagavadGitaQuotes.ts` | Wisdom card collection | 201 authentic Bhagavad Gita teachings with chapter & verse |

---

## ➕ Adding Projects

To add a new project to your portfolio:

1. **Add the project metadata** to `src/config/projects.ts`:

```typescript
{
  slug: "my-new-project",
  title: "My New Project",
  date: "11.2026",
  description: "A concise 1-2 sentence description explaining what the project solves and its tech stack.",
  tech: ["Python", "FastAPI", "React", "Docker"],
  href: "https://github.com/AnniiGCP/my-new-project",
  website: "https://my-new-project.vercel.app",
  featured: true,
  cover: "/assets/projects/my-new-project.png",
  gradient: "from-blue-500/25 via-indigo-500/15 to-violet-500/25",
}
```

2. **Add the project cover image** to `public/assets/projects/my-new-project.png` (recommended resolution: `1200x675` or 16:9 aspect ratio).

3. *(Optional)* **Create a deep-dive case study** in `content/projects/my-new-project.mdx`:

```mdx
---
title: "My New Project"
date: "2026-11-04"
description: "Detailed case study of My New Project."
cover: "/assets/projects/my-new-project.png"
technologies: ["Python", "FastAPI", "React", "Docker"]
github: "https://github.com/AnniiGCP/my-new-project"
website: "https://my-new-project.vercel.app"
---

## Overview

Explain the problem, architecture, implementation highlights, and results here.
```

---

## 📝 Adding Blog Posts

The portfolio includes MDX blog post capabilities located in `content/blog/`.

To publish a new article:
1. Create a `.mdx` file in `content/blog/<slug>.mdx` (e.g., `content/blog/building-devops-pipelines.mdx`).
2. Add the required frontmatter at the top:

```mdx
---
title: "Building Resilient CI/CD Pipelines with GitHub Actions and Docker"
date: "2026-11-04"
description: "A hands-on guide to automating test runs, container builds, and deployment verification."
cover: "/assets/blog/cicd-cover.png"
tags: ["DevOps", "Docker", "CI/CD", "Automation"]
---

Write your article content in Markdown or MDX syntax here...
```

The dynamic sitemap (`sitemap.ts`) will automatically register the new post on your next build.

---

## 🖼️ Profile Images & Assets

Key visual assets stored in `public/assets/`:

| Asset File | Recommended Dimensions | Usage |
|---|---|---|
| `public/assets/avatar.jpg` | 560 × 560 px (1:1) | Primary circular avatar on Hero and About page. |
| `public/assets/profile-blazer.jpg` | High-Res Portrait | Full-length portrait outside Courtyard by Marriott. |
| `public/assets/banner-corkboard.jpg` | 1200 × 400 px | Hero "God's Plan" corkboard header background. |
| `public/assets/og-image.png` | 1200 × 630 px | Primary OpenGraph image for LinkedIn, Twitter, WhatsApp. |
| `public/assets/readme-preview.png` | 1024 × 576 px | GitHub repository README showcase screenshot. |
| `public/assets/aniket-resume.pdf` | Standard A4 / Letter | Live interactive PDF loaded in `/resume`. |
| `public/assets/projects/*.png` | 1200 × 675 px (16:9) | Browser mockups for project cards. |
| `public/assets/achievements/*.jpg` | Variable | Hackathon presentations, team photos, and workstation shots. |

---

## 🔢 Visitor Counter Implementation

- **API Endpoint:** `/api/visitors` (`GET` and `POST`)
- **Local Development:** Reads and writes to `data/visitors.json`.
- **Production Serverless Behavior:** Increments visitor count using persistent HTTP session cookies to ensure individual page reloads do not inflate the tally. If running in a read-only serverless environment without an external database, it falls back to memory persistence with seed data from `data/visitors.json`.
- **Display Component:** Rendered on the homepage within `QuoteVisitorCard` with animated digit increments.

---

## 🔐 Environment Variables

| Variable | Environment | Required | Description |
|---|---|---|---|
| `GITHUB_TOKEN` | Local & Vercel | **Recommended** | GitHub Personal Access Token (PAT) used to fetch contributions via the GraphQL API with 5,000 req/hr quota. |
| `NEXT_PUBLIC_SITE_URL` | Local & Vercel | **Required in Prod** | Base canonical domain (set to `https://aniketyadav.tech` in production). |
| `NEXT_PUBLIC_GA_ID` | Vercel | Optional | Google Analytics 4 Measurement ID (`G-XXXXXXXXXX`). |

> **Security Rule:** Never commit `.env` or `.env.local` to GitHub. The included `.gitignore` protects all `.env*` files automatically.

---

## 🚀 Deployment Guide

### Deploying to Vercel (Recommended)

1. **Push your code to GitHub:** Ensure your latest commits are on the `main` branch.
2. **Import into Vercel:**
   - Go to [vercel.com/new](https://vercel.com/new).
   - Select your repository **`AnniiGCP/Aniket-Portfolio`**.
   - Framework preset will automatically be set to **Next.js**.
3. **Configure Environment Variables:**
   - In the Vercel project configuration, add:
     - `GITHUB_TOKEN`: Your GitHub PAT.
     - `NEXT_PUBLIC_SITE_URL`: `https://aniketyadav.tech`
4. **Deploy:** Click **Deploy**. Vercel will build the project and assign a production URL.
5. **Connect Custom Domain:**
   - Go to **Project Settings** → **Domains**.
   - Add `aniketyadav.tech` and `www.aniketyadav.tech`.
   - Update your domain DNS records:
     - **A Record:** `@` points to `76.76.21.21`
     - **CNAME Record:** `www` points to `cname.vercel-dns.com`

---

## 🔍 SEO & Performance

- **Dynamic Sitemap:** Automatically generated at `/sitemap.xml` with priority ratings and change frequencies.
- **Search Engine Directives:** Clean `/robots.txt` allowing public indexing while disallowing internal `/api/` endpoints.
- **Structured Data (JSON-LD):** Implements Schema.org `Person` and `WebSite` graph entities in `<head>` linking verified profiles (GitHub, LinkedIn, X).
- **Canonical URLs:** Automatic self-referencing canonical tags on every route via `createPageMetadata()`.
- **Social Previews:** 1200x630 OpenGraph and `summary_large_image` Twitter cards with custom branding.
- **Self-Hosted Typography:** Google Geist and Geist Mono fonts loaded with zero layout shift (`CLS: 0.00`).
- **Telemetry:** Built-in Vercel Web Analytics and Speed Insights for real-time visitor and Core Web Vitals telemetry.

---

## 📬 Contact & Connect

- **Portfolio:** [aniketyadav.tech](https://aniketyadav.tech)
- **GitHub:** [@AnniiGCP](https://github.com/AnniiGCP)
- **LinkedIn:** [in/aniketyadav9099](https://linkedin.com/in/aniketyadav9099/)
- **X (Twitter):** [@AniketYadav1105](https://x.com/AniketYadav1105)
- **Email:** [aniketyadav0078@gmail.com](mailto:aniketyadav0078@gmail.com)
- **Schedule a Call:** [Cal.com 15-Minute Chat](https://cal.com/aniket.yadav/let-s-connect-15-min?overlayCalendar=true)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

```
MIT License
Copyright (c) 2026 Aniket Yadav
```

---

<div align="center">
  <p>Built with curiosity, consistency, late nights, and a passion for creating useful software.</p>
  <p><strong>© 2026 Aniket Yadav. All rights reserved.</strong></p>
</div>
