"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/container";
import { LiquidGlassCard } from "@/components/ui/liquid-glass";
import { getOrdinalSuffix } from "@/lib/ordinal";
import { getSessionGitaQuote, DEFAULT_GITA_QUOTE } from "@/lib/gita-quote-session";
import type { GitaQuote } from "@/data/bhagavadGitaQuotes";

export function QuoteVisitorCard() {
  const [quote, setQuote] = useState<GitaQuote>(DEFAULT_GITA_QUOTE);
  const [count, setCount] = useState<number | null>(null);
  const [failed, setFailed] = useState(false);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    // 1. Retrieve or initialize the session quote once on client mount
    setQuote(getSessionGitaQuote());

    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;

    // 2. Check if we already have the count cached in this browser session
    try {
      const cached = sessionStorage.getItem("portfolio_visitor_count");
      if (cached) {
        setCount(Number(cached));
        return;
      }
    } catch {
      // Ignore sessionStorage restrictions if cookies/storage disabled
    }

    // 3. Record visitor count asynchronously
    const recordVisit = async () => {
      try {
        const res = await fetch("/api/visitors", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });
        if (!res.ok) throw new Error("Count failed");
        const data = (await res.json()) as { count: number };
        setCount(data.count);
        try {
          sessionStorage.setItem("portfolio_visitor_count", String(data.count));
        } catch {
          // Ignore
        }
      } catch {
        // Fallback: try reading current count
        try {
          const res = await fetch("/api/visitors");
          if (!res.ok) throw new Error("Fallback failed");
          const data = (await res.json()) as { count: number };
          setCount(data.count);
          try {
            sessionStorage.setItem("portfolio_visitor_count", String(data.count));
          } catch {
            // Ignore
          }
        } catch {
          setFailed(true);
        }
      }
    };

    void recordVisit();
  }, []);

  return (
    <Container>
      <LiquidGlassCard
        glowIntensity="sm"
        shadowIntensity="md"
        borderRadius="18px"
        blurIntensity="md"
        className="animate-in-up-on-view"
      >
        <div className="grid sm:grid-cols-[1fr_auto]">
          <div className="border-b border-border/50 p-6 sm:border-b-0 sm:border-r sm:p-7">
            <span className="text-4xl leading-none text-muted-foreground sm:text-5xl select-none font-serif">&ldquo;</span>
            <p
              suppressHydrationWarning
              className="mt-2 text-sm leading-relaxed text-foreground/90 sm:text-base font-normal"
            >
              {quote.text}
            </p>
            <p
              suppressHydrationWarning
              className="mt-3 text-right text-sm text-muted-foreground"
            >
              — Bhagavad Gita · {quote.chapter}.{quote.verse}
            </p>
          </div>

          <div className="flex min-w-[240px] items-center justify-center p-6 text-center sm:p-7">
            {count !== null ? (
              <p className="text-sm text-muted-foreground sm:text-base">
                You are the{" "}
                <strong className="font-bold text-foreground">
                  {count.toLocaleString()}
                </strong>
                <sup className="ml-0.5 text-xs font-normal">{getOrdinalSuffix(count)}</sup> visitor
              </p>
            ) : failed ? (
              <p className="text-sm text-muted-foreground">Thanks for visiting.</p>
            ) : (
              <p className="text-sm text-muted-foreground">Counting visitors...</p>
            )}
          </div>
        </div>
      </LiquidGlassCard>
    </Container>
  );
}
