import { siteConfig } from "@/config/meta";

export type ContributionDay = {
  date: string;
  count: number;
  level: number;
  weekday: number;
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

export async function fetchGitHubContributions(year = "2026"): Promise<CalendarData | null> {
  const token =
    process.env.GITHUB_TOKEN ??
    process.env.GH_TOKEN ??
    process.env.GITHUB_PAT;

  const username = siteConfig.githubUsername || "AnniiGCP";

  let fromDate: string | undefined;
  let toDate: string | undefined;
  const isHistorical = year !== "2026" && year !== "last";

  if (year === "2025") {
    fromDate = "2025-01-01T00:00:00Z";
    toDate = "2025-12-31T23:59:59Z";
  } else if (year === "2024") {
    fromDate = "2024-01-01T00:00:00Z";
    toDate = "2024-12-31T23:59:59Z";
  }

  // When querying the rolling past year (matching GitHub profile view), omit from/to to get full 52-53 weeks
  const query = isHistorical
    ? `
      query($login: String!, $from: DateTime, $to: DateTime) {
        user(login: $login) {
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
    `
    : `
      query($login: String!) {
        user(login: $login) {
          contributionsCollection {
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

  const variables: Record<string, string | undefined> = { login: username };
  if (isHistorical) {
    variables.from = fromDate;
    variables.to = toDate;
  }

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
        variables,
      }),
      next: { revalidate: 1800 },
    });

    if (!res.ok) {
      console.warn(`GitHub GraphQL failed with status ${res.status}`);
      return null;
    }

    const json = await res.json();
    const cal = json?.data?.user?.contributionsCollection?.contributionCalendar;
    if (!cal) {
      console.warn("No contributionCalendar found in GitHub response:", json);
      return null;
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

    return {
      total: cal.totalContributions,
      year,
      weeks,
      monthLabels,
    };
  } catch (err) {
    console.error("fetchGitHubContributions error:", err);
    return null;
  }
}
