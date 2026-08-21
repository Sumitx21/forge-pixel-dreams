import worldArt from "@/assets/world-wide.png";

import { Fireflies } from "./Fireflies";
import { PixelSprite } from "./PixelSprite";
import { PixelTitle } from "./PixelTitle";
import { useScrollProgress } from "@/hooks/use-reveal";

export function LivingWorld() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();

  return (
    <section id="world" className="relative overflow-hidden border-b-2 border-border">
      <div className="mx-auto max-w-6xl px-5 pt-20 text-center">
        <PixelTitle className="text-lg text-gold sm:text-2xl">THE WORLD IS ALIVE</PixelTitle>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Torches flicker, water moves, travellers walk the road. Nothing here is a
          screenshot.
        </p>
      </div>

      <div
        ref={ref}
        className="world-stage scanlines-soft mt-12"
        style={{ ["--par" as string]: progress * 100 }}
      >
        <img
          src={worldArt}
          alt="Wide pixel-art valley at sunset with a river and a distant castle"
          loading="lazy"
          width={1920}
          height={768}
          className="pixelated world-bg"
        />
        <div className="world-haze" aria-hidden="true" />
        <div className="world-clouds" aria-hidden="true">
          <div className="pixel-cloud world-cloud-a" />
          <div className="pixel-cloud world-cloud-b" />
        </div>
        <div className="world-water" aria-hidden="true" />
        <Fireflies count={22} className="opacity-80" />

        {/* flickering torches */}
        <span className="torch" style={{ left: "18%" }} aria-hidden="true" />
        <span className="torch" style={{ left: "63%", animationDelay: "0.4s" }} aria-hidden="true" />

        {/* rising smoke */}
        <span className="smoke" style={{ left: "72%" }} aria-hidden="true" />
        <span className="smoke" style={{ left: "74%", animationDelay: "1.6s" }} aria-hidden="true" />

        {/* travellers */}
        <div className="walker walker-hero">
          <PixelSprite action="step" className="h-14 w-auto sm:h-20" />
          <span className="sprite-shadow" />
        </div>
        <div className="walker walker-npc">
          <PixelSprite palette="npc" facing={-1} action="step" className="h-10 w-auto sm:h-14" />
          <span className="sprite-shadow" />
        </div>
        <div className="walker walker-critter">
          <PixelSprite palette="ember" action="step" className="h-7 w-auto sm:h-9" />
        </div>
      </div>
    </section>
  );
}
