export const headerNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
] as const;

export const moreNav = [
  { label: "Work", href: "/work" },
  { label: "Achievements", href: "/achievements" },
  { label: "Resume", href: "/resume" },
  { label: "Favourites", href: "/favourites" },
  { label: "Books", href: "/books" },
] as const;

export const footerNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Work", href: "/work" },
  { label: "Achievements", href: "/achievements" },
  { label: "Resume", href: "/resume" },
  { label: "Favourites", href: "/favourites" },
  { label: "Books", href: "/books" },
] as const;

export const commandItems = [
  ...footerNav.map((item) => ({ label: item.label, href: item.href })),
  { label: "LinkedIn", href: "https://linkedin.com/in/aniketyadav9099/", external: true },
  { label: "GitHub", href: "https://github.com/AnniiGCP", external: true },
  { label: "Email", href: "mailto:aniketyadav0078@gmail.com", external: true },
  { label: "CodeBrain Live", href: "https://codebrain-dev.vercel.app/", external: true },
  { label: "Arcadeverse Live", href: "https://arcadeverse.vercel.app", external: true },
];
