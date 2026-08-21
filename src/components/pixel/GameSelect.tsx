import { useState } from "react";

import artStarbound from "@/assets/game-starbound.png";
import artKnight from "@/assets/game-pixelknight.png";
import artRunner from "@/assets/game-neonrunner.png";
import artForest from "@/assets/game-foresttales.png";

import { Fireflies } from "./Fireflies";
import { PixelSprite } from "./PixelSprite";
import { PixelTitle } from "./PixelTitle";
import { cn } from "@/lib/utils";

const games = [
  {
    title: "STARBOUND",
    genre: "SCI-FI / EXPLORATION",
    desc: "Drift beyond the stars and discover worlds nobody has ever seen.",
    art: artStarbound,
    palette: "npc" as const,
    tint: "oklch(0.72 0.22 340 / 0.35)",
  },
  {
    title: "PIXEL KNIGHT",
    genre: "ACTION / RPG",
    desc: "Raise your sword. Enter the dungeon. Don't die.",
    art: artKnight,
    palette: "hero" as const,
    tint: "oklch(0.86 0.16 88 / 0.3)",
  },
  {
    title: "NEON RUNNER",
    genre: "CYBERPUNK / ARCADE",
    desc: "Run faster. Dodge harder. Survive the neon night.",
    art: artRunner,
    palette: "ember" as const,
    tint: "oklch(0.83 0.15 195 / 0.35)",
  },
  {
    title: "FOREST TALES",
    genre: "ADVENTURE / FANTASY",
    desc: "Something ancient is waking beneath the forest.",
    art: artForest,
    palette: "hero" as const,
    tint: "oklch(0.88 0.2 130 / 0.28)",
  },
];

export function GameSelect() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="games" className="relative border-y-2 border-border bg-background/60">
      <div className="pixel-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <PixelTitle className="text-lg text-primary sm:text-2xl">CHOOSE YOUR ADVENTURE</PixelTitle>
          <span className="font-pixel text-[0.55rem] text-muted-foreground">
            04 SLOTS · SELECT ONE
          </span>
        </div>

        <div className="scrollbar-none -mx-5 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
          {games.map((g) => {
            const on = active === g.title;
            return (
              <article
                key={g.title}
                onMouseEnter={() => setActive(g.title)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(g.title)}
                onBlur={() => setActive(null)}
                tabIndex={0}
                data-on={on}
                className="game-slot w-[78vw] flex-none snap-center sm:w-auto"
              >
                <div className="game-art scanlines-soft">
                  <img
                    src={g.art}
                    alt={`${g.title} pixel-art key art`}
                    loading="lazy"
                    width={768}
                    height={576}
                    className="pixelated aspect-[4/3] w-full object-cover"
                  />
                  <span className="game-tint" style={{ background: g.tint }} aria-hidden="true" />
                  <Fireflies count={8} className="game-parts" color="var(--primary)" />
                  <div className="game-actor">
                    <PixelSprite
                      palette={g.palette}
                      action={on ? "step" : "idle"}
                      className="h-14 w-auto"
                    />
                    <span className="sprite-shadow" />
                  </div>
                  <span className={cn("game-play font-pixel", on && "is-on")}>PLAY →</span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h3 className="game-name font-pixel text-[0.7rem]">{g.title}</h3>
                  <span className="w-fit border border-lime/50 px-2 py-1 font-pixel text-[0.5rem] text-lime">
                    {g.genre}
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground">{g.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-2 text-center font-pixel text-[0.5rem] text-muted-foreground sm:hidden">
          ← SWIPE TO BROWSE →
        </p>
      </div>
    </section>
  );
}
