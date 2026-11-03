"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CalendarBlank,
  EnvelopeSimple,
  FileText,
  GithubLogo,
  LinkedinLogo,
  MediumLogo,
  SealCheck,
  XLogo,
} from "@phosphor-icons/react";
import { ProfileAvatar } from "@/components/profile-avatar";
import { Container } from "@/components/container";
import { RotatingTitle } from "@/components/landing/rotating-title";
import { SpotifyLastPlayed } from "@/components/landing/spotify-last-played";
import { TimezoneWidget } from "@/components/landing/timezone-widget";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { heroConfig, socialLinks } from "@/config/hero";
import { cn } from "@/lib/utils";

const iconMap = {
  x: XLogo,
  linkedin: LinkedinLogo,
  github: GithubLogo,
  medium: MediumLogo,
  mail: EnvelopeSimple,
  resume: FileText,
};

const HERO_BANNERS = [
  {
    src: "/assets/banner-corkboard.jpg",
    alt: "God's Plan — What's Your Plan corkboard banner",
  },
  {
    src: "/assets/gods-plan-banner.jpeg",
    alt: "Virat Kohli God's Plan banner",
  },
];

export function Hero() {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % HERO_BANNERS.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Container className="pt-4 sm:pt-0">
      <div className="flex flex-col gap-5">
        {/* Cinematic Hero Slideshow Banner - Clean with No Side L-Brackets */}
        <div className="relative aspect-[3/1] w-full overflow-hidden rounded-xl border border-foreground/15 bg-black/40 shadow-sm">
          {HERO_BANNERS.map((banner, index) => (
            <div
              key={banner.src}
              className={cn(
                "absolute inset-0 size-full transition-opacity duration-1000 ease-in-out",
                currentBanner === index
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0 pointer-events-none"
              )}
            >
              <Image
                src={banner.src}
                alt={banner.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 640px) 100vw, 720px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          ))}

          {/* Subtle Navigation Dots for Manual Switching */}
          <div className="absolute bottom-2.5 right-2.5 z-20 flex items-center gap-1.5 rounded-full bg-black/45 px-2 py-1 backdrop-blur-xs">
            {HERO_BANNERS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentBanner(idx)}
                aria-label={`Switch to banner ${idx + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  currentBanner === idx
                    ? "w-4 bg-white"
                    : "w-1.5 bg-white/50 hover:bg-white/80"
                )}
              />
            ))}
          </div>
        </div>

        <TimezoneWidget className="-mt-3 self-end" />

        <div className="-mt-14 flex items-end gap-4">
          <div className="relative z-30 shrink-0 rounded-full bg-background p-1">
            <ProfileAvatar />
          </div>
        </div>

        <div className="min-w-0">
          <h1 className="flex items-center gap-2 text-3xl font-bold tracking-tight sm:text-4xl">
            {heroConfig.name}
            <SealCheck
              className="size-6 shrink-0 text-[#1D9BF0] sm:size-7"
              weight="fill"
              aria-label="Verified"
            />
          </h1>
          <RotatingTitle />
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <Link
              href={heroConfig.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3.5 py-1.5 text-xs font-medium text-background transition-opacity hover:opacity-90 sm:text-sm"
            >
              <CalendarBlank className="size-3.5 sm:size-4" weight="bold" />
              Book a call
            </Link>
            <Link
              href={`mailto:${heroConfig.email}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted sm:text-sm"
            >
              <EnvelopeSimple className="size-3.5 sm:size-4" weight="bold" />
              Email me
            </Link>
          </div>
        </div>

        <p className="max-w-xl text-sm leading-relaxed text-secondary sm:text-base">
          {heroConfig.bio}
        </p>

        <div className="flex flex-wrap gap-0.5">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            const external = link.href.startsWith("http") || link.href.startsWith("mailto:");

            return (
              <Tooltip key={link.name} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    href={link.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    aria-label={link.name}
                    className="flex items-center gap-2 p-1 text-secondary transition-colors hover:text-foreground"
                  >
                    <Icon className="size-5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p className="text-xs">{link.name}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>

        <SpotifyLastPlayed />
      </div>
    </Container>
  );
}
