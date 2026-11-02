export type ExperienceItem = {
  company: string;
  role: string;
  periodShort: string;
  periodLong: string;
  locationShort: string;
  locationLong: string;
  working?: boolean;
  details?: string[];
  tech?: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Allegion",
    role: "Incoming Software Engineer",
    periodShort: "Upcoming",
    periodLong: "Incoming Opportunity (~₹7.5 LPA)",
    locationShort: "Bengaluru, IN",
    locationLong: "Bengaluru, Karnataka, India",
    working: false,
    details: [
      "Received campus placement software engineering job offer with joining timeline scheduled upon degree completion.",
      "Focusing on enterprise software engineering, secure infrastructure systems, and scalable product engineering.",
    ],
    tech: ["Software Engineering", "Systems Design", "Cloud Infrastructure", "Java", "Python"],
  },
  {
    company: "Dyashin Technosoft",
    role: "Software Engineering Intern (Hackathon Awarded)",
    periodShort: "2026",
    periodLong: "Awarded via HIRE-4-THON 2026",
    locationShort: "Bengaluru, IN",
    locationLong: "Bengaluru, Karnataka, India",
    working: false,
    details: [
      "Awarded internship opportunity following 2nd Place achievement at the National Level HIRE-4-THON Hackathon.",
      "Collaborated on automated assessment algorithms, full-stack web applications, and developer productivity tooling.",
    ],
    tech: ["React", "FastAPI", "Web Architecture", "REST APIs", "Python"],
  },
];
