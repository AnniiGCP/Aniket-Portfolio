import { heroConfig } from "@/config/hero";

export const aboutConfig = {
  headline: ["From curiosity and code", "to systems that scale."],
  intro:
    "I'm Aniket Yadav — a **DevOps-focused software engineer** passionate about AI, cloud technologies, and building automated solutions to real-world problems. I build full-stack web applications, AI developer tools, and cloud infrastructure with a focus on reliability, clean architecture, and performance.",
  quote:
    "I believe in learning by building, automating with purpose, and creating technology that solves real-world problems.",
  traits: ["Cloud", "DevOps", "AI Systems", "Curious"] as const,
  traitStyles: {
    Cloud:
      "border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-800/80 dark:bg-sky-950/40 dark:text-sky-300",
    DevOps:
      "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800/80 dark:bg-emerald-950/40 dark:text-emerald-300",
    "AI Systems":
      "border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-800/80 dark:bg-violet-950/40 dark:text-violet-300",
    Curious:
      "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800/80 dark:bg-amber-950/40 dark:text-amber-300",
  },
  meta: [
    { label: "Location", value: heroConfig.location },
    { label: "Status", value: "Pursuing B.E. in Computer Science & Design" },
    { label: "Focus", value: "Cloud · DevOps · AI Developer Tools" },
  ],
  story: {
    title: "How it started",
    paragraphs: [
      "I am currently in my final years studying Computer Science and Design at KS Institute of Technology in Bengaluru. From the beginning, my focus has been on understanding how software systems actually work under the hood — from low-level systems to modern interfaces.",
      "Rather than only following tutorials, I learn by building practical projects. To help cloud learners, I created **ArcadeVerse**, a tracking and analytics platform that has audited over 5,000+ public profiles and served 5,500+ unique visitors.",
      "I love the problem-solving intensity of competitive hackathons. At the National Level HIRE-4-THON 2026 Hackathon, my team (Unpaid Labors) secured **Second Place** with QuizGenAI, an automated assessment engine built with contract-first FastAPI schemas.",
      "I also have an incoming software engineering opportunity with **Allegion** through campus placement. As I prepare for my engineering career, I am diving deep into enterprise cloud infrastructure, CI/CD automation, and intelligent developer assistants like **CodeBrain AI**.",
    ],
  },
  principles: {
    title: "How I approach engineering",
    items: [
      {
        title: "Stay curious, keep learning",
        description:
          "Technology never stands still. I learn by building, exploring, and experimenting.",
      },
      {
        title: "Understand the bigger picture",
        description:
          "Great engineering goes beyond code. Architecture, infrastructure, automation, and reliability matter.",
      },
      {
        title: "Build, ship, improve",
        description:
          "I believe in turning ideas into working products, learning from feedback, and refining along the way.",
      },
      {
        title: "Solve problems that matter",
        description:
          "I focus on practical solutions that simplify workflows and make a meaningful real-world impact.",
      },
    ],
  },
  beyond: {
    title: "Beyond the code",
    paragraphs: [
      "When I step away from code and terminals, you'll find me playing the **acoustic guitar**, reading books on **philosophy and psychology**, journaling, and exploring emerging technologies.",
      "I'm drawn to builders who combine **technical depth** with **clarity**. That's the kind of engineer I want to become.",
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
