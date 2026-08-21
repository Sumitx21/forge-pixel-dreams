import { useMemo } from "react";

import { cn } from "@/lib/utils";

/** Cheap CSS-only floating particles (fireflies / dust motes). */
export function Fireflies({
  count = 18,
  className,
  color = "var(--gold)",
}: {
  count?: number;
  className?: string;
  color?: string;
}) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: (i * 37) % 100,
        top: (i * 61) % 100,
        delay: (i % 9) * 0.7,
        dur: 7 + (i % 5) * 2.4,
        size: 2 + (i % 3),
      })),
    [count],
  );

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      {dots.map((d, i) => (
        <span
          key={i}
          className="firefly"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            background: color,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.dur}s`,
          }}
        />
      ))}
    </div>
  );
}
