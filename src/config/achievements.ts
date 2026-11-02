export type Achievement = {
  slug: string;
  title: string;
  organization: string;
  year: string;
  periodShort: string;
  periodLong: string;
  details?: string[];
  tech?: string[];
  image?: string;
  gallery?: string[];
  featured?: boolean;
};

export const achievements: Achievement[] = [
  {
    slug: "hire-4-thon-2026",
    title: "Second Place (Runner-Up)",
    organization: "National Level HIRE-4-THON 2026",
    year: "2026",
    periodShort: "Mar 2026",
    periodLong: "March 2026",
    details: [
      "National-level hackathon runner-up with team Unpaid Labors.",
      "Built and demoed Adaptive Automated Quiz Generator (QuizGenAI) under tight 24-hour deadlines.",
      "Awarded software engineering internship opportunity with Dyashin Technosoft in recognition of contract-first architecture and system execution.",
    ],
    tech: ["Python", "React", "FastAPI", "SQLite"],
    image: "/assets/achievements/hire4thon-square.png",
    gallery: [
      "/assets/achievements/hire4thon.png",
    ],
    featured: true,
  },
];

export function getAchievement(slug: string) {
  return achievements.find((item) => item.slug === slug);
}
