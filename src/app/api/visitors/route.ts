import { getVisitorCount, incrementVisitorCount } from "@/lib/visitor-store";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const count = await getVisitorCount();
    return NextResponse.json(
      { count },
      {
        headers: {
          "Cache-Control": "public, s-maxage=10, stale-while-revalidate=59",
        },
      },
    );
  } catch (error) {
    console.error("Failed to read visitor count:", error);
    return NextResponse.json({ count: 138 });
  }
}

export async function POST() {
  try {
    const count = await incrementVisitorCount();
    return NextResponse.json(
      { count },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      },
    );
  } catch (error) {
    console.error("Failed to increment visitor count:", error);
    return NextResponse.json({ count: 138 });
  }
}
