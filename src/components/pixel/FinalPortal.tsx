import portalArt from "@/assets/portal.png";

import { Fireflies } from "./Fireflies";
import { PixelButton } from "./PixelButton";
import { PixelSprite, useIdleActions } from "./PixelSprite";
import { PixelTitle } from "./PixelTitle";

export function FinalPortal() {
  const action = useIdleActions(true);

  return (
    <section id="enter" className="relative isolate overflow-hidden border-b-2 border-border">
      <img
        src={portalArt}
        alt="Pixel-art glowing portal on a dark cliff under a starry sky"
        loading="lazy"
        width={1280}
        height={768}
        className="pixelated portal-bg"
      />
      <div className="portal-glow" aria-hidden="true" />
      <Fireflies count={16} color="var(--primary)" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-5 py-24 text-center sm:py-32">
        <PixelTitle className="text-glow text-base leading-relaxed text-foreground sm:text-2xl">
          YOUR NEXT ADVENTURE IS WAITING.
        </PixelTitle>
        <p className="mt-6 text-base text-muted-foreground sm:text-lg">All it takes is one step.</p>
        <div className="mt-10">
          <PixelButton href="#games" variant="start">
            ENTER PIXELFORGE →
          </PixelButton>
        </div>
        <div className="relative mt-12">
          <PixelSprite action={action} className="h-24 w-auto sm:h-28" />
          <span className="sprite-shadow" />
        </div>
      </div>
    </section>
  );
}
