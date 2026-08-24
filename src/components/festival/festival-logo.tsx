"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface FestivalLogoProps {
  variant?: "icon" | "full" | "transparent";
  /** Pixel size for both width and height — the logo sources are all square (1:1). */
  size?: number;
  className?: string;
  priority?: boolean;
  alt?: string;
}

/**
 * Branded festival logo. Use:
 *  - variant="icon"        for compact square (navbar crest, footer mark)
 *  - variant="transparent" for logo with green keyed out (overlays, hero watermark)
 *  - variant="full"        for full original logo with green background
 *
 * All logo source files in /public are square (1:1), so we render a square
 * with width = height = size. Do not pass CSS that overrides only one of
 * width/height, or next/image will warn about aspect-ratio distortion.
 */
export function FestivalLogo({
  variant = "icon",
  size = 48,
  className,
  priority = false,
  alt = "Denu Nugoryiyi Za Festival logo",
}: FestivalLogoProps) {
  const src =
    variant === "full"
      ? "/logo-full.png"
      : variant === "transparent"
      ? "/logo-transparent.png"
      : "/logo-icon.png";

  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      priority={priority}
      loading={priority ? "eager" : undefined}
      className={cn("object-contain", className)}
      sizes={`${size}px`}
    />
  );
}
