import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export type SpriteAction = "idle" | "look" | "step" | "raise" | "sit" | "wave";

/**
 * A pixel-art adventurer drawn entirely with SVG rects (crisp, tiny, no assets).
 * Parts are grouped so CSS can animate hair, arms, legs and body independently.
 */
export function PixelSprite({
  action = "idle",
  facing = 1,
  className,
  palette = "hero",
}: {
  action?: SpriteAction;
  facing?: 1 | -1;
  className?: string;
  palette?: "hero" | "npc" | "ember";
}) {
  const skin = "oklch(0.86 0.07 60)";
  const hair =
    palette === "npc"
      ? "oklch(0.72 0.22 340)"
      : palette === "ember"
        ? "oklch(0.86 0.16 88)"
        : "oklch(0.66 0.19 35)";
  const tunic =
    palette === "npc"
      ? "oklch(0.55 0.14 250)"
      : palette === "ember"
        ? "oklch(0.6 0.16 25)"
        : "oklch(0.62 0.16 160)";
  const trim = "oklch(0.83 0.15 195)";
  const boots = "oklch(0.34 0.05 40)";

  return (
    <svg
      viewBox="0 0 16 22"
      shapeRendering="crispEdges"
      data-action={action}
      className={cn("pixel-sprite", className)}
      style={{ ["--facing" as string]: facing }}
      aria-hidden="true"
    >
      <g className="ps-body">
        {/* legs */}
        <g className="ps-leg ps-leg-back">
          <rect x="6" y="16" width="2" height="4" fill={tunic} opacity="0.75" />
          <rect x="6" y="20" width="3" height="2" fill={boots} />
        </g>
        <g className="ps-leg ps-leg-front">
          <rect x="9" y="16" width="2" height="4" fill={tunic} />
          <rect x="8" y="20" width="3" height="2" fill={boots} />
        </g>
        {/* torso */}
        <rect x="5" y="10" width="7" height="6" fill={tunic} />
        <rect x="5" y="13" width="7" height="1" fill={trim} />
        {/* cape */}
        <g className="ps-cape">
          <rect x="4" y="10" width="1" height="7" fill={hair} opacity="0.7" />
        </g>
        {/* arm + sword */}
        <g className="ps-arm">
          <rect x="11" y="11" width="2" height="4" fill={skin} />
          <g className="ps-sword">
            <rect x="12" y="6" width="1" height="6" fill={trim} />
            <rect x="11" y="11" width="3" height="1" fill="oklch(0.86 0.16 88)" />
          </g>
        </g>
        {/* head */}
        <g className="ps-head">
          <rect x="5" y="4" width="7" height="6" fill={skin} />
          <g className="ps-hair">
            <rect x="4" y="2" width="9" height="3" fill={hair} />
            <rect x="4" y="5" width="1" height="4" fill={hair} />
            <rect x="12" y="5" width="1" height="2" fill={hair} />
          </g>
          <g className="ps-eyes">
            <rect x="7" y="6" width="1" height="2" fill="oklch(0.18 0.04 274)" />
            <rect x="10" y="6" width="1" height="2" fill="oklch(0.18 0.04 274)" />
          </g>
        </g>
      </g>
    </svg>
  );
}

const ACTIONS: SpriteAction[] = ["look", "step", "raise", "sit", "wave"];

/** Randomized, charming idle behaviour: mostly idle with occasional tiny actions. */
export function useIdleActions(enabled = true) {
  const [action, setAction] = useState<SpriteAction>("idle");

  useEffect(() => {
    if (!enabled) return;
    let timer: ReturnType<typeof setTimeout>;
    const schedule = () => {
      timer = setTimeout(
        () => {
          const next = ACTIONS[Math.floor(Math.random() * ACTIONS.length)]!;
          setAction(next);
          timer = setTimeout(
            () => {
              setAction("idle");
              schedule();
            },
            next === "sit" ? 2600 : 1500,
          );
        },
        3200 + Math.random() * 4200,
      );
    };
    schedule();
    return () => clearTimeout(timer);
  }, [enabled]);

  return action;
}
