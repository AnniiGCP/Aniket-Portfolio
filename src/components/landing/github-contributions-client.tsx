"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/config/meta";
import { cn } from "@/lib/utils";
import type { CalendarData } from "@/lib/github";

const CELL = 13;
const GAP = 4;
const WEEK_STEP = CELL + GAP;

// Canonical GitHub emerald green contribution levels
const LEVEL_COLORS = [
  "bg-muted/40 dark:bg-[#161b22] border border-black/5 dark:border-white/[0.04]", // Level 0 (None)
  "bg-[#9be9a8] dark:bg-[#0e4429]", // Level 1
  "bg-[#40c463] dark:bg-[#006d32]", // Level 2
  "bg-[#30a14e] dark:bg-[#26a641]", // Level 3
  "bg-[#216e39] dark:bg-[#39d353]", // Level 4
];

function formatDateTooltip(dateStr: string): string {
  if (!dateStr) return "";
  const [y, m, d] = dateStr.split("-").map(Number);
  const date = new Date(y!, m! - 1, d!);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function GitHubContributionsClient({ initialData }: { initialData: CalendarData | null }) {
  const [tooltip, setTooltip] = useState<{
    text: string;
    x: number;
    y: number;
  } | null>(null);

  const weeks = initialData?.weeks ?? [];
  const monthLabels = initialData?.monthLabels ?? [];
  const total = initialData?.total ?? 0;
  const gridWidth = weeks.length * WEEK_STEP;

  return (
    <Container>
      {/* Header - Simple and Clean without any year selector */}
      <SectionHeading title="GitHub Activity" uppercase />

      {/* Grid sitting directly on page background */}
      <div className="relative mt-6" onMouseLeave={() => setTooltip(null)}>
        {/* Single shared lightweight tooltip instead of 364 Radix instances */}
        {tooltip && (
          <div
            role="tooltip"
            className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-full rounded border border-border/80 bg-popover px-2.5 py-1 text-xs text-popover-foreground shadow-md transition-opacity duration-75"
            style={{
              left: `${tooltip.x}px`,
              top: `${tooltip.y}px`,
            }}
          >
            <p>{tooltip.text}</p>
          </div>
        )}

        <div className="overflow-x-auto pb-1 scrollbar-thin">
          <div style={{ minWidth: `${gridWidth}px` }}>
            {/* Month Labels */}
            <div className="relative mb-3 h-4 text-[11px] font-medium tracking-wider text-secondary uppercase">
              {monthLabels.map(({ month, weekIndex }) => (
                <span
                  key={`${month}-${weekIndex}`}
                  className="absolute whitespace-nowrap"
                  style={{ left: `${weekIndex * WEEK_STEP}px` }}
                >
                  {month}
                </span>
              ))}
            </div>

            {/* Contribution Weeks Grid */}
            <div className="flex" style={{ gap: `${GAP}px` }}>
              {weeks.map((week, weekIndex) => (
                <div
                  key={weekIndex}
                  className="flex flex-col"
                  style={{ gap: `${GAP}px` }}
                >
                  {week.map((day, dayIndex) => {
                    const countText = `${day.count} ${
                      day.count === 1 ? "contribution" : "contributions"
                    } on ${formatDateTooltip(day.date)}`;

                    return (
                      <div
                        key={day.date || `${weekIndex}-${dayIndex}`}
                        tabIndex={0}
                        aria-label={countText}
                        title={countText}
                        onMouseEnter={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          setTooltip({
                            text: countText,
                            x: rect.left + rect.width / 2,
                            y: rect.top - 6,
                          });
                        }}
                        onFocus={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          setTooltip({
                            text: countText,
                            x: rect.left + rect.width / 2,
                            y: rect.top - 6,
                          });
                        }}
                        onBlur={() => setTooltip(null)}
                        className={cn(
                          "rounded-[3px] transition-all duration-150 hover:scale-110 hover:ring-1 hover:ring-foreground/40",
                          day.level < 0
                            ? "bg-transparent"
                            : LEVEL_COLORS[day.level] ?? LEVEL_COLORS[0]
                        )}
                        style={{ width: CELL, height: CELL }}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Metadata row */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4 text-[11px] font-medium tracking-wider text-secondary">
          <p className="uppercase">
            <span className="text-foreground font-semibold">{total}</span> CONTRIBUTIONS · 2025–26
          </p>
          <div className="flex items-center gap-1.5 select-none">
            <span className="uppercase">Less</span>
            {LEVEL_COLORS.map((color, i) => (
              <div
                key={i}
                className={cn("rounded-[3px]", color)}
                style={{ width: CELL, height: CELL }}
              />
            ))}
            <span className="uppercase">More</span>
          </div>
        </div>

        {/* Profile Link */}
        <div className="mt-2">
          <Link
            href={`https://github.com/${siteConfig.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-secondary transition-colors hover:text-foreground font-mono"
          >
            @{siteConfig.githubUsername}
          </Link>
        </div>
      </div>
    </Container>
  );
}
