export type ExperienceItem = {
  company: string;
  role: string;
  periodShort: string;
  periodLong: string;
  locationShort: string;
  locationLong: string;
  working?: boolean;
  image?: string;
  details?: string[];
  tech?: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Allegion",
    role: "Incoming Graduate Engineer Trainee (GET)",
    periodShort: "Expected 2027",
    periodLong: "Campus Placement Offer",
    locationShort: "Bengaluru, IN",
    locationLong: "Bengaluru, Karnataka, India",
    working: false,
    image: "/assets/allegion-logo.png",
    details: [
      "Selected through campus placement for an incoming Graduate Engineer Trainee (GET) role upon graduation.",
      "Focused on developing skills in cloud infrastructure, enterprise systems, Azure DevOps, CI/CD automation and reliable software engineering.",
    ],
    tech: ["Azure", "Azure DevOps", "CI/CD", "Java", "Python", "Linux"],
  },
  {
    company: "Dyashin Technosoft",
    role: "Software Engineering Intern",
    periodShort: "2026",
    periodLong: "Awarded via HIRE-4-THON 2026",
    locationShort: "Bengaluru, IN",
    locationLong: "Bengaluru, Karnataka, India",
    working: false,
    image: "/assets/dyashin-logo.png",
    details: [
      "Awarded software engineering internship recognition following 2nd Place finish at the National Level HIRE-4-THON 2026 Hackathon.",
      "Engineered automated quiz generation algorithms, contract-first schema validation, and responsive interactive web interfaces.",
    ],
    tech: ["FastAPI", "React", "Python", "SQLite"],
  },
];
