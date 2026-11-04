import { NextRequest, NextResponse } from "next/server";
import { fetchGitHubContributions } from "@/lib/github";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const yearParam = searchParams.get("year") ?? "2026";

  const data = await fetchGitHubContributions(yearParam);
  if (!data) {
    return NextResponse.json(
      { error: "Failed to fetch GitHub contributions" },
      { status: 500 },
    );
  }

  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=3600",
    },
  });
}
