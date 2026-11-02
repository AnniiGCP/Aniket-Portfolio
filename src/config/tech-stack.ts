export type TechItem = {
  name: string;
  icon: string;
};

export const techStack: TechItem[] = [
  // Programming Languages
  { name: "Python", icon: "/assets/icons/python.svg" },
  { name: "Java", icon: "/assets/icons/java.svg" },
  { name: "C", icon: "/assets/icons/c.svg" },
  { name: "TypeScript", icon: "/assets/icons/typescript.svg" },
  { name: "JavaScript", icon: "/assets/icons/javascript.svg" },
  { name: "Bash", icon: "/assets/icons/bash.svg" },

  // Frontend & UI
  { name: "React", icon: "/assets/icons/react.svg" },
  { name: "Next.js", icon: "/assets/icons/nextjs.svg" },
  { name: "Tailwind CSS", icon: "/assets/icons/tailwindcss.svg" },

  // Backend & APIs
  { name: "FastAPI", icon: "/assets/icons/fastapi.svg" },
  { name: "Node.js", icon: "/assets/icons/nodejs.svg" },
  { name: "Express", icon: "/assets/icons/express.svg" },

  // Databases & Vector Stores
  { name: "PostgreSQL", icon: "/assets/icons/postgresql.svg" },
  { name: "MongoDB", icon: "/assets/icons/mongodb.svg" },
  { name: "SQLite", icon: "/assets/icons/sqlite.svg" },
  { name: "FAISS", icon: "meta" },

  // Cloud Platforms
  { name: "AWS", icon: "/assets/icons/aws.svg" },
  { name: "Microsoft Azure", icon: "/assets/icons/azure.svg" },
  { name: "Google Cloud", icon: "/assets/icons/googlecloud.svg" },

  // DevOps & Infrastructure
  { name: "Linux", icon: "/assets/icons/linux.svg" },
  { name: "Docker", icon: "/assets/icons/docker.svg" },
  { name: "Kubernetes", icon: "/assets/icons/kubernetes.svg" },
  { name: "Terraform", icon: "/assets/icons/terraform.svg" },
  { name: "Ansible", icon: "/assets/icons/ansible.svg" },
  { name: "Jenkins", icon: "/assets/icons/jenkins.svg" },
  { name: "Azure DevOps", icon: "/assets/icons/azuredevops.svg" },
  { name: "Git", icon: "/assets/icons/git.svg" },
  { name: "GitHub", icon: "/assets/icons/github.svg" },
  { name: "Vercel", icon: "/assets/icons/vercel.svg" },

  // AI & ML
  { name: "PyTorch", icon: "/assets/icons/pytorch.svg" },
];
