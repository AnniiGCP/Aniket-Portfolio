import { heroConfig } from "@/config/hero";

export const aboutConfig = {
  headline: ["Engineering systems,", "solving problems with purpose."],
  intro:
    "I'm Aniket Yadav — a **Computer Science and Design student** based in Bengaluru. I build full-stack web applications, work on AI-powered developer acceleration tools, and explore cloud infrastructure and DevOps automation.",
  quote:
    "You are what you believe in. You become that which you believe you can become. — Bhagavad Gita",
  traits: ["Curious", "Builder", "Disciplined", "Systems-First"] as const,
  traitStyles: {
    Curious:
      "border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-800/80 dark:bg-sky-950/40 dark:text-sky-300",
    Builder:
      "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800/80 dark:bg-emerald-950/40 dark:text-emerald-300",
    Disciplined:
      "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800/80 dark:bg-amber-950/40 dark:text-amber-300",
    "Systems-First":
      "border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-800/80 dark:bg-violet-950/40 dark:text-violet-300",
  },
  meta: [
    { label: "Location", value: heroConfig.location },
    { label: "Degree", value: "B.E. Computer Science & Design (2027)" },
    { label: "Focus", value: "Cloud · DevOps · AI Developer Tools" },
  ],
  story: {
    title: "How it started",
    paragraphs: [
      "I am currently in my final years studying Computer Science and Design at KS Institute of Technology in Bengaluru. From the beginning, my focus has been on understanding how software systems actually work under the hood — from system calls and container boundaries to modern frontend interfaces.",
      "Rather than only following tutorials, I learn by building practical projects. To help cloud learners, I created ArcadeVerse, a tracking and analytics platform that has audited over 4,987 public profiles and served 5,486+ unique visitors.",
      "I love the problem-solving intensity of competitive hackathons. At the National Level HIRE-4-THON 2026 Hackathon, my team (Unpaid Labors) secured Second Place (Runner-Up) with QuizGenAI, an automated assessment engine built with contract-first FastAPI schemas. This achievement led to an internship opportunity with Dyashin Technosoft.",
      "I also have an incoming software engineering opportunity with Allegion through campus placement (~₹7.5 LPA). As I prepare for my engineering career, I am diving deep into enterprise cloud infrastructure, Azure DevOps, CI/CD automation, and intelligent developer assistants like CodeBrain AI.",
    ],
  },
  principles: {
    title: "How I think about engineering",
    items: [
      {
        title: "Understand the system end-to-end",
        description:
          "Code is only one piece of the puzzle. Clean API contracts, reliable build pipelines, and resilient deployment environments matter just as much.",
      },
      {
        title: "Build to solve actual problems",
        description:
          "Practical projects that handle real user input teach more about edge cases and defensive design than theoretical exercises.",
      },
      {
        title: "Embrace discipline and fundamentals",
        description:
          "Strong computer science fundamentals, clear documentation, and consistent Git discipline make large systems maintainable.",
      },
      {
        title: "Stay curious and humble",
        description:
          "Technologies and frameworks evolve constantly. The most important skill is learning quickly and writing clear, robust code.",
      },
    ],
  },
  beyond: {
    title: "Beyond the screen",
    paragraphs: [
      "When I step away from code and terminals, I enjoy playing the acoustic guitar, reading books on philosophy and psychology, journaling, and exploring emerging technologies.",
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
      name: "X",
      href: "https://x.com/AniketYadav1105",
      icon: "x" as const,
    },
    {
      name: "Email",
      href: "mailto:aniketyadav0078@gmail.com",
      icon: "mail" as const,
    },
  ],
};
