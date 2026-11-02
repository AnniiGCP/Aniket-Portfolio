export type Achievement = {
  slug: string;
  title: string;
  organization: string;
  year: string;
  periodShort: string;
  periodLong: string;
  details?: string[];
  image?: string;
  gallery?: string[];
  featured?: boolean;
};

export const achievements: Achievement[] = [
  {
    slug: "hire-4-thon-2026",
    title: "Second Place (Runner-Up)",
    organization: "National Level HIRE-4-THON Hackathon 2026",
    year: "2026",
    periodShort: "Mar 26",
    periodLong: "March 2026",
    details: [
      "Secured Second Place at the National Level HIRE-4-THON 2026 Hackathon with team 'Unpaid Labors'.",
      "Designed and delivered the Adaptive Automated Quiz Generator (QuizGenAI) featuring contract-first API boundaries, timed quiz execution, and real-time developer submission streak heatmaps.",
      "Awarded an internship opportunity with Dyashin Technosoft in recognition of technical architecture, code quality, and real-world system execution.",
    ],
    image: "/assets/achievements/hire4thon.png",
    gallery: [
      "/assets/achievements/hire4thon.png",
    ],
    featured: true,
  },
];

export function getAchievement(slug: string) {
  return achievements.find((item) => item.slug === slug);
}
