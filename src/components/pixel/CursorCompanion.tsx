import { useEffect, useRef, useState } from "react";

import { PixelSprite, useIdleActions } from "./PixelSprite";
import { useIsMobile } from "@/hooks/use-mobile";

/**
 * A tiny pixel companion pinned to the page corner that leans/looks toward the
 * cursor and drifts back to idle. Disabled on touch devices and reduced motion.
 */
export function CursorCompanion() {
  const isMobile = useIsMobile();
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [facing, setFacing] = useState<1 | -1>(1);
  const [moving, setMoving] = useState(false);
  const action = useIdleActions(!moving);

  useEffect(() => {
    if (isMobile) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let target = { x: 0, y: 0 };
    let current = { x: 0, y: 0 };
    let stopTimer: ReturnType<typeof setTimeout>;

    const onMove = (e: MouseEvent) => {
      const el = wrapRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      target = {
        x: Math.max(-26, Math.min(26, dx * 0.05)),
        y: Math.max(-14, Math.min(14, dy * 0.03)),
      };
      setFacing(dx < 0 ? -1 : 1);
      setMoving(true);
      clearTimeout(stopTimer);
      stopTimer = setTimeout(() => setMoving(false), 600);
    };

    const tick = () => {
      current = {
        x: current.x + (target.x - current.x) * 0.08,
        y: current.y + (target.y - current.y) * 0.08,
      };
      setOffset({ x: Math.round(current.x), y: Math.round(current.y) });
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      clearTimeout(stopTimer);
    };
  }, [isMobile]);

  return (
    <div
      ref={wrapRef}
      className="pointer-events-none fixed bottom-4 left-4 z-40 hidden h-24 w-20 sm:block"
      aria-hidden="true"
    >
      <div
        className="flex h-full w-full items-end justify-center transition-transform duration-150 ease-out"
        style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
      >
        <div className="relative">
          <PixelSprite
            palette="ember"
            facing={facing}
            action={moving ? "step" : action}
            className="h-16 w-auto"
          />
          <span className="sprite-shadow" />
        </div>
      </div>
    </div>
  );
}
