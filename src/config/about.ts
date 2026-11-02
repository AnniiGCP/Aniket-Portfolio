import { heroConfig } from "@/config/hero";

export const aboutConfig = {
  headline: ["From curious foundations", "to resilient software systems."],
  intro:
    "I'm Aniket Yadav — a **software engineer** and **computer science student** passionate about building practical software products, AI-powered developer tools, and reliable cloud-based applications. I care about the intersection where code meets automated infrastructure: clean APIs, robust systems, and developer-first workflows.",
  quote:
    "I believe great things are done by a series of small, consistent engineering choices brought together.",
  traits: ["Curious", "Builder", "Disciplined", "Adaptable"] as const,
  traitStyles: {
    Curious:
      "border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-800/80 dark:bg-sky-950/40 dark:text-sky-300",
    Builder:
      "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800/80 dark:bg-emerald-950/40 dark:text-emerald-300",
    Disciplined:
      "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800/80 dark:bg-amber-950/40 dark:text-amber-300",
    Adaptable:
      "border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-800/80 dark:bg-violet-950/40 dark:text-violet-300",
  },
  meta: [
    { label: "Location", value: heroConfig.location },
    { label: "Degree", value: "B.E. Computer Science & Design" },
    { label: "Focus", value: "Cloud · DevOps · AI Systems" },
  ],
  story: {
    title: "How it started",
    paragraphs: [
      "My journey in computer science began with an innate fascination for how reliable software systems function beneath the surface. Pursuing Computer Science and Design at KS Institute of Technology in Bengaluru opened doors to understanding both rigorous software architecture and user-centric problem solving.",
      "Early on, I built full-stack prototypes, explored Linux environments, and mastered cloud automation across AWS, Google Cloud, and Azure. Experiencing real production constraints inspired me to build **ArcadeVerse** — a cloud analytics platform that has processed over 4,987 public profiles and served 5,486+ unique visitors.",
      "Competitive hackathons cemented my commitment to high-velocity shipping. At the **National Level HIRE-4-THON 2026 Hackathon**, our team secured **Second Place** by architecting an API-first automated quiz generation engine with real-time submission streak visualizers.",
      "Today, I focus heavily on **developer productivity tools and AI systems** — such as **CodeBrain AI**, an automated codebase understanding, AST analysis, and CI/CD remediation assistant. I am continuously exploring how intelligent automation can eliminate friction for developers worldwide.",
    ],
  },
  principles: {
    title: "How I engineer",
    items: [
      {
        title: "Embrace the systems mindset",
        description:
          "Software doesn't live in a vacuum. I prioritize reliable deployment pipelines, containerization, and clean architectural boundaries.",
      },
      {
        title: "Ship with purpose",
        description:
          "A working prototype in the hands of real users provides more insight than weeks of theoretical design.",
      },
      {
        title: "Protect simplicity & security",
        description:
          "Clean, type-safe API contracts and disciplined credential protection are non-negotiable fundamentals.",
      },
      {
        title: "Stay deeply curious",
        description:
          "Technology evolves rapidly. I learn by building, inspecting source code, and breaking down real-world engineering challenges.",
      },
    ],
  },
  beyond: {
    title: "Beyond the screen",
    paragraphs: [
      "When I am not writing code or experimenting with cloud infrastructure, you will find me playing guitar, reading, journaling, and exploring emerging technologies.",
      "I value continuous personal development, thoughtful craftsmanship, and the journey of building meaningful software.",
    ],
  },
  connectLinks: [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/aniketyadav9099/",
      icon: "linkedin" as const,
    },
    {
      name: "GitHub",
      href: "https://github.com/AnniiGCP",
      icon: "github" as const,
    },
    {
      name: "Email",
      href: "mailto:aniketyadav0078@gmail.com",
      icon: "mail" as const,
    },
  ],
};
