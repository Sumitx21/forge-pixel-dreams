import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

/** Section heading that reveals with a small pixel/glitch animation in view. */
export function PixelTitle({
  children,
  className,
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  const { ref, shown } = useReveal<HTMLDivElement>(0.4);
  return (
    <div ref={ref}>
      <Tag
        data-shown={shown}
        className={cn("pixel-title font-pixel", className)}
        style={{ ["--glitch-text" as string]: undefined }}
      >
        {children}
      </Tag>
    </div>
  );
}
