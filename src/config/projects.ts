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
    slug: "vectorforge-ai",
    title: "VECTORFORGE AI",
    date: "11.2026",
    description:
      "A custom-built Java vector database and local Retrieval-Augmented Generation (RAG) engine featuring HNSW, KD-Tree, Brute Force search, real-time PCA visualization, and Ollama inference.",
    tech: ["Java", "Spring Boot", "React", "Vector DB", "Ollama", "HNSW"],
    href: "https://github.com/AnniiGCP/VECTORFORGE-AI",
    featured: true,
    cover: "/assets/projects/vectorforge-ai.png",
    gradient: "from-cyan-500/25 via-blue-500/15 to-indigo-500/25",
  },
  {
    slug: "codebrain-ai",
    title: "CodeBrain AI",
    date: "10.2026",
    description:
      "An AI-powered developer tool designed to help developers understand, document, analyze and improve existing codebases through intelligent AST analysis, vector RAG, and CI/CD diagnostic integration.",
    tech: ["Python", "FastAPI", "React", "TypeScript", "Docker", "FAISS"],
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
      "An independent analytics platform calculating Google Cloud Arcade points, tracking cohort milestones, and projecting swag tier readiness with 5,500+ visitors and 5,000+ profiles analyzed.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Vercel"],
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
    tech: ["FastAPI", "React", "SQLite", "Pydantic", "SQLAlchemy", "Python"],
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
    tech: ["FastAPI", "PyTorch", "Python", "PostgreSQL", "Docker"],
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
    tech: ["Bash", "Google Cloud", "Kubernetes", "Terraform", "Linux"],
    href: "https://github.com/AnniiGCP/Google-Cloud-Arcade",
    cover: "/assets/projects/google-cloud.png",
    gradient: "from-sky-500/20 via-cyan-500/15 to-blue-500/20",
  },
];
