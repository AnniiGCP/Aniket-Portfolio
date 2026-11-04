"use client";

import Image from "next/image";
import { TechBadge } from "@/components/ui/tech-icon-pill";
import { Code, Plus } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { experience, type ExperienceItem } from "@/config/experience";
import { cn } from "@/lib/utils";

function ExperienceCard({
  job,
  delay,
  open,
  onToggle,
}: {
  job: ExperienceItem;
  delay: number;
  open: boolean;
  onToggle: () => void;
}) {
  const hasDetails = Boolean(job.details?.length);

  return (
    <article
      className="animate-in-up-on-view border-b border-border py-7 first:border-t"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="grid gap-4 sm:grid-cols-[28px_48px_minmax(0,1fr)_auto] sm:items-start">
        <div className="hidden justify-center pt-1 sm:flex">
          <span className="size-2 rounded-full bg-secondary/25" />
        </div>
        <div className="relative flex size-11 items-center justify-center overflow-hidden rounded-xl border border-border bg-background/80 shadow-sm">
          {job.image ? (
            <Image
              src={job.image}
              alt={job.company}
              fill
              sizes="44px"
              className="object-contain p-1.5"
            />
          ) : (
            <Code className="size-5 text-secondary" />
          )}
        </div>
        <div className="min-w-0 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-2xl font-bold tracking-tight">{job.company}</h3>
            {job.working && (
              <div className="flex items-center gap-1 rounded-md border border-green-300 bg-green-500/10 px-2 py-1 text-xs">
                <div className="size-2 animate-pulse rounded-full bg-green-500" />
                <span>Working</span>
              </div>
            )}
          </div>
          <div>
            <p className="text-xl font-bold tracking-tight">{job.role}</p>
            <p className="mt-1 text-base text-secondary">
              Opportunity
              <span className="mx-2 text-border">|</span>
              <span className="md:hidden">{job.periodShort}</span>
              <span className="hidden md:inline">{job.periodLong}</span>
            </p>
          </div>
        </div>
        <div className="flex items-start justify-between gap-4 sm:justify-end">
          <p className="text-sm text-secondary sm:hidden">{job.locationShort}</p>
          {hasDetails && (
            <button
              type="button"
              onClick={onToggle}
              aria-expanded={open}
              aria-controls={`experience-${job.company}`}
              aria-label={open ? `Collapse ${job.company} details` : `Expand ${job.company} details`}
              className="inline-flex size-8 shrink-0 items-center justify-center rounded-md text-secondary transition-colors hover:bg-muted hover:text-foreground"
            >
              <Plus
                className={cn(
                  "size-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  open ? "-rotate-45 text-foreground" : "rotate-0"
                )}
              />
            </button>
          )}
        </div>
      </div>

      {/* Smooth fluid collapsible accordion */}
      {hasDetails && (
        <div
          id={`experience-${job.company}`}
          className={cn(
            "grid transition-[grid-template-rows,opacity,margin] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
            open
              ? "grid-rows-[1fr] opacity-100 mt-5"
              : "grid-rows-[0fr] opacity-0 mt-0 pointer-events-none"
          )}
        >
          <div className="overflow-hidden">
            <div className="space-y-5 pb-1 sm:ml-[76px]">
              <div className="space-y-2 text-base leading-relaxed text-foreground">
                {job.details?.map((detail) => (
                  <p key={detail}>{detail}</p>
                ))}
              </div>
              {job.tech && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {job.tech.map((item) => (
                    <TechBadge key={item} name={item} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

export function ExperienceSection({
  limit,
  showAllLink = false,
}: {
  limit?: number;
  showAllLink?: boolean;
}) {
  const [openJob, setOpenJob] = useState<string | null>(null);
  const items = limit ? experience.slice(0, limit) : experience;

  return (
    <Container>
      <SectionHeading title="Experience" uppercase />
      <div>
        {items.map((job, index) => (
          <ExperienceCard
            key={job.company}
            job={job}
            delay={(index + 1) * 0.05}
            open={openJob === job.company}
            onToggle={() =>
              setOpenJob((current) => (current === job.company ? null : job.company))
            }
          />
        ))}
      </div>
      {showAllLink && experience.length > (limit ?? experience.length) && (
        <Link
          href="/work"
          className="mt-5 inline-flex text-sm text-secondary transition-colors hover:text-foreground"
        >
          Show all work experiences
        </Link>
      )}
    </Container>
  );
}
