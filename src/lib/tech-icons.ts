export const techIconMap: Record<string, string> = {
  // Languages
  Python: "/assets/icons/python.svg",
  Java: "/assets/icons/java.svg",
  C: "/assets/icons/c.svg",
  JavaScript: "/assets/icons/javascript.svg",
  TypeScript: "/assets/icons/typescript.svg",
  Bash: "/assets/icons/bash.svg",
  Shell: "/assets/icons/bash.svg",

  // Frontend
  React: "/assets/icons/react.svg",
  "Next.js": "/assets/icons/nextjs.svg",
  HTML: "/assets/icons/html.svg",
  CSS: "/assets/icons/css.svg",
  "Tailwind CSS": "/assets/icons/tailwindcss.svg",

  // Backend
  "Node.js": "/assets/icons/nodejs.svg",
  Express: "/assets/icons/express.svg",
  FastAPI: "/assets/icons/fastapi.svg",
  Pydantic: "pydantic",
  SQLAlchemy: "sqlalchemy",
  WebSockets: "socketdotio",

  // Databases
  PostgreSQL: "/assets/icons/postgresql.svg",
  MongoDB: "/assets/icons/mongodb.svg",
  SQLite: "/assets/icons/sqlite.svg",
  FAISS: "meta",

  // Cloud & Infrastructure
  AWS: "/assets/icons/aws.svg",
  "Amazon Web Services": "/assets/icons/aws.svg",
  EC2: "/assets/icons/aws.svg",
  S3: "/assets/icons/aws.svg",
  Lambda: "/assets/icons/aws.svg",
  Azure: "/assets/icons/azure.svg",
  "Microsoft Azure": "/assets/icons/azure.svg",
  "Azure DevOps": "/assets/icons/azuredevops.svg",
  "Google Cloud": "/assets/icons/googlecloud.svg",
  "Google Cloud Platform": "/assets/icons/googlecloud.svg",
  GCP: "/assets/icons/googlecloud.svg",

  // DevOps & Tooling
  Linux: "/assets/icons/linux.svg",
  Git: "/assets/icons/git.svg",
  GitHub: "/assets/icons/github.svg",
  Docker: "/assets/icons/docker.svg",
  Jenkins: "/assets/icons/jenkins.svg",
  Kubernetes: "/assets/icons/kubernetes.svg",
  Terraform: "/assets/icons/terraform.svg",
  Ansible: "/assets/icons/ansible.svg",
  "CI/CD": "/assets/icons/jenkins.svg",
  Vercel: "/assets/icons/vercel.svg",

  // AI & ML
  PyTorch: "/assets/icons/pytorch.svg",
  LangChain: "langchain",
  "Tree-sitter": "/assets/icons/c.svg",
  "Whisper STT": "/assets/icons/python.svg",
  DistilBERT: "/assets/icons/pytorch.svg",
  "Machine Learning": "/assets/icons/pytorch.svg",
};

export function getTechIcon(tech: string): string | null {
  if (techIconMap[tech]) return techIconMap[tech];
  const normalized = tech.trim();
  if (techIconMap[normalized]) return techIconMap[normalized];
  return null;
}
