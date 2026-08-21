import { useCallback, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type Burst = { id: number; x: number; y: number };

/** Arcade-style button: flickers on hover, spits pixel particles on click. */
export function PixelButton({
  children,
  href,
  variant = "primary",
  className,
  onClick,
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "accent" | "start";
  className?: string;
  onClick?: () => void;
}) {
  const [bursts, setBursts] = useState<Burst[]>([]);

  const spark = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setBursts((b) => [...b, { id, x: e.clientX - r.left, y: e.clientY - r.top }]);
    setTimeout(() => setBursts((b) => b.filter((x) => x.id !== id)), 700);
  }, []);

  const classes = cn(
    "btn-pixel relative overflow-hidden",
    variant === "accent" && "btn-pixel-accent",
    variant === "start" && "btn-pixel-start",
    className,
  );

  const inner = (
    <>
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      {bursts.map((b) => (
        <span key={b.id} className="burst" style={{ left: b.x, top: b.y }} aria-hidden="true">
          {Array.from({ length: 8 }, (_, i) => (
            <i key={i} style={{ ["--a" as string]: `${i * 45}deg` }} />
          ))}
        </span>
      ))}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={(e) => {
          spark(e);
          onClick?.();
        }}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      onClick={(e) => {
        spark(e);
        onClick?.();
      }}
    >
      {inner}
    </button>
  );
}
