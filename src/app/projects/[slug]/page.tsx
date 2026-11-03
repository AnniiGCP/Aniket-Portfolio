import { TechBadge } from "@/components/ui/tech-icon-pill";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GithubLogo, Globe } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/container";
import { MdxContent } from "@/components/mdx-content";
import { LiquidGlassCard } from "@/components/ui/liquid-glass";
import { projects } from "@/config/projects";
import { siteConfig } from "@/config/meta";
import { getProjectPost, getProjectPosts } from "@/lib/mdx";
import { createPageMetadata, pageTitle } from "@/lib/metadata";

export async function generateStaticParams() {
  const posts = await getProjectPosts();
  const slugs = new Set([...projects.map((project) => project.slug), ...posts.map((post) => post.slug)]);
  return Array.from(slugs).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getProjectPost(slug);
  const project = projects.find((item) => item.slug === slug);
  if (!post && !project) return {};
  return createPageMetadata({
    title: pageTitle(post?.title ?? project?.title ?? "Project"),
    description: post?.description ?? project?.description ?? "",
    path: `/projects/${slug}`,
    type: "article",
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getProjectPost(slug);
  const project = projects.find((item) => item.slug === slug);
  if (!post && !project) notFound();

  const title = post?.title ?? project?.title ?? "";
  const description = post?.description ?? project?.description ?? "";
  const date = post?.date ?? project?.date ?? "";
  const cover = post?.cover ?? project?.cover;
  const tech = post?.tech ?? project?.tech ?? [];
  const repoHref = project?.href;
  const websiteHref = project?.website;


  const projectUrl = `${siteConfig.url}/projects/${slug}`;
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteConfig.url },
      { "@type": "ListItem", "position": 2, "name": "Projects", "item": `${siteConfig.url}/projects` },
      { "@type": "ListItem", "position": 3, "name": title, "item": projectUrl }
    ]
  };

  const projectLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": title,
    "description": description,
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "All",
    "url": projectUrl,
    ...(cover ? { "image": cover.startsWith("http") ? cover : `${siteConfig.url}${cover}` } : {}),
    ...(repoHref ? { "codeRepository": repoHref } : {}),
    "author": {
      "@type": "Person",
      "name": siteConfig.name,
      "url": siteConfig.url
    }
  };

  return (
    <div className="space-y-8 pb-16 pt-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectLd) }} />
      <Container>
        <Link href="/projects" className="text-sm text-secondary hover:text-primary">
          ← Back to projects
        </Link>
        <p className="mt-4 font-mono text-xs text-muted-foreground">{date}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">{title}</h1>
        <p className="mt-3 text-secondary">{description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {websiteHref && (
            <Link
              href={websiteHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-1.5 text-sm transition-colors hover:bg-muted"
            >
              <Globe className="size-4" />
              Visit site
            </Link>
          )}
          {repoHref && (
            <Link
              href={repoHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-1.5 text-sm transition-colors hover:bg-muted"
            >
              <GithubLogo className="size-4" />
              GitHub
            </Link>
          )}
        </div>
        {tech.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2.5">
            {tech.map((item) => (
              <TechBadge key={item} name={item} />
            ))}
          </div>
        )}
        {cover && (
          <LiquidGlassCard
            glowIntensity="sm"
            shadowIntensity="md"
            borderRadius="18px"
            blurIntensity="md"
            className="relative mt-8 aspect-[16/9]"
          >
            <Image
              src={cover}
              alt={`${title} cover`}
              fill
              sizes="(max-width: 768px) 100vw, 720px"
              className="object-cover object-top"
            />
          </LiquidGlassCard>
        )}
        <article className="prose prose-neutral dark:prose-invert mt-8 max-w-none">
          {post ? (
            <MdxContent source={post.content} />
          ) : (
            <>
              <h2>Overview</h2>
              <p>{description}</p>

              {tech.length > 0 && (
                <>
                  <h2>Tech Stack</h2>
                  <ul>
                    {tech.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {(websiteHref || repoHref) && (
                <>
                  <h2>Links</h2>
                  <ul>
                    {websiteHref && (
                      <li>
                        <a href={websiteHref}>Live site</a>
                      </li>
                    )}
                    {repoHref && (
                      <li>
                        <a href={repoHref}>Repository</a>
                      </li>
                    )}
                  </ul>
                </>
              )}
            </>
          )}
        </article>
      </Container>
    </div>
  );
}
