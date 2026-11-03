import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export type ContributionDay = {
  date: string;
  count: number;
  level: number; // 0 to 4
  weekday: number; // 0 to 6 (Sun to Sat)
};

export type MonthLabel = {
  month: string;
  weekIndex: number;
};

export type CalendarData = {
  total: number;
  year: string;
  weeks: ContributionDay[][];
  monthLabels: MonthLabel[];
};

const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";

function getLevel(count: number, levelStr?: string): number {
  if (levelStr === "FOURTH_QUARTILE") return 4;
  if (levelStr === "THIRD_QUARTILE") return 3;
  if (levelStr === "SECOND_QUARTILE") return 2;
  if (levelStr === "FIRST_QUARTILE") return 1;
  if (count >= 11) return 4;
  if (count >= 7) return 3;
  if (count >= 4) return 2;
  if (count >= 1) return 1;
  return 0;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const yearParam = searchParams.get("year") ?? "2026";

  const token =
    process.env.GITHUB_TOKEN ??
    process.env.GH_TOKEN ??
    process.env.GITHUB_PAT;

  let fromDate: string | undefined;
  let toDate: string | undefined;

  if (yearParam === "2026" || yearParam === "last") {
    // Rolling last year (365 days) ending today
    // This provides the full 53-week Nov -> Nov range seen on GitHub's active profile
    const now = new Date();
    const oneYearAgo = new Date();
    oneYearAgo.setDate(now.getDate() - 364);
    fromDate = oneYearAgo.toISOString();
    toDate = now.toISOString();
  } else if (yearParam === "2025") {
    fromDate = "2025-01-01T00:00:00Z";
    toDate = "2025-12-31T23:59:59Z";
  } else if (yearParam === "2024") {
    fromDate = "2024-01-01T00:00:00Z";
    toDate = "2024-12-31T23:59:59Z";
  }

  // Use viewer query to fetch authenticated data including private contributions
  const query = `
    query($from: DateTime, $to: DateTime) {
      viewer {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                contributionLevel
                weekday
              }
            }
          }
        }
      }
    }
  `;

  try {
    const res = await fetch(GITHUB_GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "aniket-portfolio",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({
        query,
        variables: {
          from: fromDate,
          to: toDate,
        },
      }),
      next: { revalidate: 1800 },
    });

    if (!res.ok) {
      throw new Error(`GitHub API error: ${res.statusText}`);
    }

    const json = await res.json();
    const cal =
      json?.data?.viewer?.contributionsCollection?.contributionCalendar;

    if (!cal) {
      throw new Error("No calendar data returned");
    }

    interface GQLDay {
      date: string;
      contributionCount: number;
      contributionLevel: string;
      weekday: number;
    }
    interface GQLWeek {
      contributionDays: GQLDay[];
    }

    const weeks: ContributionDay[][] = cal.weeks.map((w: GQLWeek) =>
      w.contributionDays.map((d: GQLDay) => ({
        date: d.date,
        count: d.contributionCount,
        level: getLevel(d.contributionCount, d.contributionLevel),
        weekday: d.weekday,
      }))
    );

    // Month labels based on the first day of each month in the weeks
    const monthLabels: MonthLabel[] = [];
    let lastMonth = "";

    weeks.forEach((week, weekIndex) => {
      for (const day of week) {
        if (!day.date) continue;
        const d = new Date(day.date);
        const m = d.toLocaleString("en", { month: "short" });
        if (m !== lastMonth) {
          if (
            monthLabels.length === 0 ||
            weekIndex - monthLabels[monthLabels.length - 1]!.weekIndex >= 3
          ) {
            monthLabels.push({ month: m, weekIndex });
            lastMonth = m;
          }
          break;
        }
      }
    });

    const responseData: CalendarData = {
      total: cal.totalContributions,
      year: yearParam,
      weeks,
      monthLabels,
    };

    return NextResponse.json(responseData, {
      headers: {
        "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=3600",
      },
    });
  } catch (error) {
    console.error("Failed to fetch contributions from GitHub API:", error);
    return NextResponse.json(
      { error: "Failed to fetch contribution data" },
      { status: 500 }
    );
  }
}
