import { useMemo } from "react";

import { Fireflies } from "./Fireflies";
import { PixelSprite, useIdleActions } from "./PixelSprite";
import { useScrollProgress } from "@/hooks/use-reveal";

function PixelCloud({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={className} style={style} aria-hidden="true">
      <div className="pixel-cloud" />
    </div>
  );
}

function Bird({ delay, top, dur }: { delay: number; top: string; dur: number }) {
  return (
    <svg
      className="bird"
      viewBox="0 0 9 5"
      shapeRendering="crispEdges"
      style={{ top, animationDelay: `${delay}s`, animationDuration: `${dur}s` }}
      aria-hidden="true"
    >
      <g className="bird-wings" fill="oklch(0.28 0.04 274)">
        <rect x="0" y="1" width="2" height="1" />
        <rect x="2" y="2" width="2" height="1" />
        <rect x="4" y="3" width="1" height="1" />
        <rect x="5" y="2" width="2" height="1" />
        <rect x="7" y="1" width="2" height="1" />
      </g>
    </svg>
  );
}

export function HeroScene({ interactive = true }: { interactive?: boolean }) {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const action = useIdleActions(interactive);

  const grass = useMemo(
    () => Array.from({ length: 60 }, (_, i) => ({ left: (i * 100) / 60, delay: (i % 7) * 0.24 })),
    [],
  );

  const par = progress * 100;

  return (
    <div
      ref={ref}
      className="hero-scene scanlines-soft"
      style={{ ["--par" as string]: par }}
      role="img"
      aria-label="Animated pixel-art scene: a small adventurer stands on a grassy cliff overlooking a sunset valley, lake and drifting clouds"
    >
      <div className="hs-sky" />
      <div className="hs-stars" style={{ transform: "translateY(calc(var(--par) * 0.10px))" }} />
      <div className="hs-sun" />

      <div className="hs-layer" style={{ transform: "translateY(calc(var(--par) * 0.16px))" }}>
        <PixelCloud className="hs-cloud hs-cloud-1" />
        <PixelCloud className="hs-cloud hs-cloud-2" />
        <PixelCloud className="hs-cloud hs-cloud-3" />
        <Bird delay={2} top="24%" dur={19} />
        <Bird delay={11} top="34%" dur={24} />
      </div>

      {/* far mountains */}
      <svg
        className="hs-mountains hs-mountains-far"
        viewBox="0 0 320 90"
        preserveAspectRatio="none"
        shapeRendering="crispEdges"
        style={{ transform: "translateY(calc(var(--par) * 0.30px))" }}
        aria-hidden="true"
      >
        <polygon points="0,90 40,38 78,90" fill="oklch(0.3 0.07 300)" />
        <polygon points="55,90 110,26 170,90" fill="oklch(0.27 0.07 295)" />
        <polygon points="150,90 215,40 275,90" fill="oklch(0.3 0.07 300)" />
        <polygon points="250,90 300,32 320,90" fill="oklch(0.26 0.07 292)" />
      </svg>

      {/* near hills + treeline */}
      <svg
        className="hs-mountains hs-hills"
        viewBox="0 0 320 70"
        preserveAspectRatio="none"
        shapeRendering="crispEdges"
        style={{ transform: "translateY(calc(var(--par) * 0.56px))" }}
        aria-hidden="true"
      >
        <polygon points="0,70 60,26 130,70" fill="oklch(0.24 0.06 200)" />
        <polygon points="100,70 190,18 280,70" fill="oklch(0.21 0.06 195)" />
        <polygon points="240,70 320,30 320,70" fill="oklch(0.23 0.06 200)" />
      </svg>

      {/* lake */}
      <div className="hs-water" style={{ transform: "translateY(calc(var(--par) * 0.42px))" }}>
        <div className="hs-water-shimmer" />
      </div>

      <Fireflies count={20} className="hs-flies" />

      {/* foreground cliff */}
      <div className="hs-cliff" style={{ transform: "translateY(calc(var(--par) * -0.22px))" }}>
        <div className="hs-grass">
          {grass.map((g, i) => (
            <span
              key={i}
              className="grass-blade"
              style={{ left: `${g.left}%`, animationDelay: `${g.delay}s` }}
            />
          ))}
        </div>
        <div className="hs-hero-figure">
          <PixelSprite action={action} className="h-28 w-auto sm:h-36" />
          <span className="sprite-shadow" />
        </div>
      </div>
    </div>
  );
}
