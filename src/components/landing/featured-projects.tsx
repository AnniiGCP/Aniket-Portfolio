import { ProjectsGrid } from "@/components/projects-grid";
import { projects } from "@/config/projects";

export function FeaturedProjects() {
  // Exactly the two flagship projects required by user: 1st ArcadeVerse, 2nd CodeBrain AI
  const featured = projects.filter(
    (p) => p.slug === "arcadeverse" || p.slug === "codebrain-ai"
  );

  return <ProjectsGrid items={featured} showViewAll />;
}
