"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { achievements, type Achievement } from "@/config/achievements";
import { experience, type ExperienceItem } from "@/config/experience";
import { TechBadge } from "@/components/ui/tech-icon-pill";

type FeaturedItem =
  | {
      type: "experience";
      title: string;
      subtitle: string;
      period: string;
      location: string;
      image: string;
      details: string[];
      tech: string[];
      href: string;
    }
  | {
      type: "achievement";
      title: string;
      subtitle: string;
      period: string;
      location: string;
      image: string;
      details: string[];
      tech: string[];
      href: string;
    };

function experienceToFeatured(item: ExperienceItem): FeaturedItem {
  return {
    type: "experience",
    title: item.company,
    subtitle: item.role,
    period: item.periodLong,
    location: item.locationLong.trim(),
    image: item.image ?? "/assets/allegion-logo.png",
    details: item.details ?? [],
    tech: item.tech ?? [],
    href: "/work",
  };
}

function achievementToFeatured(item: Achievement): FeaturedItem {
  return {
    type: "achievement",
    title: item.organization,
    subtitle: item.title,
    period: item.periodLong,
    location: "Achievement",
    image: item.image ?? "/assets/achievements/hire4thon-square.png",
    details: item.details ?? [],
    tech: item.tech ?? ["Python", "React", "FastAPI", "SQLite"],
    href: `/achievements/${item.slug}`,
  };
}

function FeaturedExperienceItem({
  item,
  delay,
}: {
  item: FeaturedItem;
  delay: number;
}) {
  return (
    <article
      className="animate-in-up-on-view py-7"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="grid gap-4 sm:grid-cols-[88px_minmax(0,1fr)_auto] sm:items-start">
        <Link
          href={item.href}
          className="relative size-16 overflow-hidden rounded-xl bg-muted/60 shadow-sm transition-transform hover:scale-[1.02] border border-border/60"
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="64px"
            className="object-cover"
          />
        </Link>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2.5">
            <Link
              href={item.href}
              className="text-2xl font-bold tracking-tight text-foreground transition-colors hover:text-secondary"
            >
              {item.title}
            </Link>
          </div>
          <p className="mt-1 text-xl text-foreground">{item.subtitle}</p>
        </div>

        <div className="text-left text-base text-secondary sm:min-w-[190px] sm:text-right sm:text-lg">
          <p>{item.period}</p>
          <p className="mt-1">{item.location}</p>
        </div>
      </div>

      {item.tech.length > 0 && (
        <div className="mt-7">
          <h3 className="text-xl font-bold tracking-tight text-foreground">
            Technologies
          </h3>
          <div className="mt-3.5 flex flex-wrap gap-2.5">
            {item.tech.map((tech) => (
              <TechBadge key={`${item.title}-${tech}`} name={tech} />
            ))}
          </div>
        </div>
      )}

      {item.details.length > 0 && (
        <ul className="mt-6 space-y-2 text-lg leading-relaxed text-secondary">
          {item.details.map((detail) => (
            <li key={detail} className="flex gap-2">
              <span className="mt-[0.65em] size-1.5 shrink-0 bg-secondary/70" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export function FeaturedExperienceSection() {
  const featuredItems: FeaturedItem[] = [
    experienceToFeatured(experience[0]), // Allegion (Experience)
    achievementToFeatured(achievements[0]), // National Level HIRE-4-THON 2026 (Hackathon Achievement)
  ];

  return (
    <Container>
      <div className="mb-8">
        <p className="text-sm text-secondary">Featured</p>
        <h2 className="mt-1 text-3xl font-bold tracking-tight text-foreground">
          Experience
        </h2>
      </div>

      <div className="space-y-6">
        {featuredItems.map((item, index) => {
          const itemId = `${item.type}-${item.title}`;

          return (
            <FeaturedExperienceItem
              key={itemId}
              item={item}
              delay={0.08 + index * 0.08}
            />
          );
        })}
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/work"
          className="rounded-lg border border-border bg-card px-5 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted"
        >
          Show all work experiences
        </Link>
        <Link
          href="/achievements"
          className="rounded-lg border border-border bg-card px-5 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted"
        >
          View all achievements
        </Link>
      </div>
    </Container>
  );
}
