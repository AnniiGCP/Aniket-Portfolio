"use client";

import Image from "next/image";
import { getTechIcon } from "@/lib/tech-icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface TechIconPillProps {
  name: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function TechIconPill({ name, size = "md", className }: TechIconPillProps) {
  const icon = getTechIcon(name);
  if (!icon) return null;

  const iconSrc = icon.startsWith("/") ? icon : `https://cdn.simpleicons.org/${icon}`;

  const containerSizes = {
    sm: "size-7 rounded-md p-1",
    md: "size-9 rounded-lg p-1.5",
    lg: "size-10 rounded-xl p-2",
  };

  const imgSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          role="img"
          aria-label={name}
          tabIndex={0}
          className={cn(
            "flex items-center justify-center border border-border/80 bg-background/90 shadow-sm transition-all hover:scale-105 hover:border-foreground/30 hover:bg-muted focus:outline-none focus:ring-1 focus:ring-ring dark:bg-card/90",
            containerSizes[size],
            className
          )}
        >
          <Image
            src={iconSrc}
            alt={name}
            width={imgSizes[size]}
            height={imgSizes[size]}
            className="size-full object-contain"
            unoptimized
          />
        </div>
      </TooltipTrigger>
      <TooltipContent side="top">
        <p className="font-medium text-xs">{name}</p>
      </TooltipContent>
    </Tooltip>
  );
}

export function TechBadge({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const icon = getTechIcon(name);
  const iconSrc = icon ? (icon.startsWith("/") ? icon : `https://cdn.simpleicons.org/${icon}`) : null;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-card/60 px-2.5 py-1 text-xs font-medium text-foreground transition-all hover:border-foreground/30 hover:bg-muted/60",
        className
      )}
    >
      {iconSrc && (
        <Image
          src={iconSrc}
          alt={name}
          width={15}
          height={15}
          className="size-3.5 shrink-0 object-contain"
          unoptimized
        />
      )}
      <span>{name}</span>
    </div>
  );
}
