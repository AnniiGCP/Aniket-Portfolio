export type Project = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tech: string[];
  href: string;
  website?: string;
  featured?: boolean;
  cover?: string;
  gradient: string;
};

export const projects: Project[] = [
  {
    slug: "codebrain-ai",
    title: "CodeBrain AI",
    date: "10.2026",
    description:
      "An AI-powered developer tool designed to help developers understand, document, analyze and improve existing codebases through intelligent AST analysis, vector RAG, and CI/CD diagnostic integration.",
    tech: ["Python", "FastAPI", "React 19", "TypeScript", "Tree-sitter", "FAISS", "Docker"],
    href: "https://github.com/AnniiGCP/CodeBrain",
    website: "https://codebrain-dev.vercel.app/",
    featured: true,
    cover: "/assets/projects/codebrain.png",
    gradient: "from-blue-500/25 via-indigo-500/15 to-violet-500/25",
  },
  {
    slug: "arcadeverse",
    title: "ArcadeVerse",
    date: "09.2026",
    description:
      "An independent analytics platform calculating Google Cloud Arcade points, tracking cohort milestones, and projecting swag tier readiness with 5,486+ visitors and 4,987+ profiles analyzed.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Express", "MongoDB", "Vercel"],
    href: "https://github.com/AnniiGCP/arcadeverse-dev",
    website: "https://arcadeverse.vercel.app",
    featured: true,
    cover: "/assets/projects/arcadeverse.png",
    gradient: "from-emerald-500/25 via-green-500/15 to-lime-500/25",
  },
  {
    slug: "quizgen-ai",
    title: "QuizGenAI",
    date: "08.2026",
    description:
      "🥈 2nd Prize Winner — An AI-powered dynamic assessment and quiz generation platform built with contract-first FastAPI, Pydantic validation, and structured LLM inference orchestration.",
    tech: ["FastAPI", "React", "SQLite", "Pydantic", "SQLAlchemy", "LLM APIs"],
    href: "https://github.com/AnniiGCP/QuizGenAI",
    featured: true,
    cover: "/assets/projects/quizgenai.png",
    gradient: "from-amber-500/25 via-orange-500/15 to-yellow-500/25",
  },
  {
    slug: "guardian-ai",
    title: "Guardian AI",
    date: "05.2026",
    description:
      "A real-time threat detection platform for child online grooming identification using local Whisper STT, dual-path NLP classification (DistilBERT + LLM), and WebSockets alerts.",
    tech: ["FastAPI", "PyTorch", "DistilBERT", "Whisper STT", "WebSockets", "PostgreSQL"],
    href: "https://github.com/AnniiGCP/Guardian-AI",
    featured: true,
    cover: "/assets/projects/guardian-ai.png",
    gradient: "from-violet-500/25 via-purple-500/15 to-fuchsia-500/25",
  },
  {
    slug: "google-cloud-solutions",
    title: "Google Cloud Solutions",
    date: "06.2025",
    description:
      "A curated collection of 100+ production-ready Bash automation scripts covering GCP Compute Engine, Kubernetes (GKE), BigQuery, Cloud Run, and VPC networking.",
    tech: ["Shell", "Bash", "Google Cloud CLI", "BigQuery", "Kubernetes", "Terraform"],
    href: "https://github.com/AnniiGCP/Google-Cloud-Arcade",
    cover: "/assets/projects/google-cloud.png",
    gradient: "from-sky-500/20 via-cyan-500/15 to-blue-500/20",
  },
  {
    slug: "drivzo",
    title: "Drivzo",
    date: "03.2025",
    description:
      "A driver marketplace platform concept connecting customers and commercial transporters with verified drivers based on route requirements and schedule availability.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    href: "https://github.com/AnniiGCP",
    cover: "/assets/projects/drivzo.png",
    gradient: "from-rose-500/20 via-pink-500/15 to-red-500/20",
  },
];
