import { fetchGitHubContributions } from "@/lib/github";
import { GitHubContributionsClient } from "./github-contributions-client";

export async function GitHubContributions() {
  const initialData = await fetchGitHubContributions("2026");
  return <GitHubContributionsClient initialData={initialData} />;
}
