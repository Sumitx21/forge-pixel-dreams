import galVillage from "@/assets/gal-village.png";
import galCyber from "@/assets/gal-cyber.png";
import galSpace from "@/assets/gal-space.png";
import galForest from "@/assets/gal-forest.png";
import galDesert from "@/assets/gal-desert.png";
import galSnow from "@/assets/gal-snow.png";

import { PixelTitle } from "./PixelTitle";

const scenes = [
  { src: galVillage, label: "MEDIEVAL VILLAGE" },
  { src: galCyber, label: "CYBERPUNK CITY" },
  { src: galSpace, label: "SPACE STATION" },
  { src: galForest, label: "HAUNTED FOREST" },
  { src: galDesert, label: "DESERT RUINS" },
  { src: galSnow, label: "SNOW PEAK" },
];

export function Showcase() {
  return (
    <section id="gallery" className="relative border-b-2 border-border py-20">
      <div className="mx-auto max-w-6xl px-5">
        <PixelTitle className="text-lg text-primary sm:text-2xl">
          FROM ONE PIXEL TO A WORLD
        </PixelTitle>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
          Six worlds, one tileset away from each other. Hover to stop the reel.
        </p>
      </div>

      <div className="marquee mt-12">
        <div className="marquee-track">
          {[...scenes, ...scenes].map((s, i) => (
            <figure key={i} className="reel-card scanlines-soft">
              <img
                src={s.src}
                alt={`${s.label.toLowerCase()} pixel-art scene`}
                loading="lazy"
                width={768}
                height={576}
                className="pixelated h-full w-full object-cover"
              />
              <figcaption className="reel-label font-pixel">{s.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
