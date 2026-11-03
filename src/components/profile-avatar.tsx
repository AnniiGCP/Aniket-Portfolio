"use client";

import Image from "next/image";
import { heroConfig } from "@/config/hero";
import { cn } from "@/lib/utils";

export function ProfileAvatar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "group relative size-24 shrink-0 overflow-hidden rounded-full border-2 border-background shadow-md bg-muted",
        className,
      )}
    >
      <Image
        src={heroConfig.avatar}
        alt={`${heroConfig.name} profile`}
        fill
        sizes="96px"
        className="size-full rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
        priority
      />
    </div>
  );
}
