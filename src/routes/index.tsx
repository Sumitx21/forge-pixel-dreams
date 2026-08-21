import { createFileRoute } from "@tanstack/react-router";

import { CursorCompanion } from "@/components/pixel/CursorCompanion";
import { FinalPortal } from "@/components/pixel/FinalPortal";
import { Fireflies } from "@/components/pixel/Fireflies";
import { GameSelect } from "@/components/pixel/GameSelect";
import { HeroScene } from "@/components/pixel/HeroScene";
import { LivingWorld } from "@/components/pixel/LivingWorld";
import { PixelButton } from "@/components/pixel/PixelButton";
import { Showcase } from "@/components/pixel/Showcase";
import { WhyPixel } from "@/components/pixel/WhyPixel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PixelForge — A Living Pixel-Art Game World" },
      {
        name: "description",
        content:
          "PixelForge is an animated pixel-art showcase: explore a living game world, choose your adventure from four indie titles, and step through the portal.",
      },
      { property: "og:title", content: "PixelForge — A Living Pixel-Art Game World" },
      {
        property: "og:description",
        content:
          "Where every pixel tells a story. Animated pixel-art scenes, an interactive game select screen, and worlds that never stop moving.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="crt-noise" aria-hidden="true" />
      <CursorCompanion />

      <header className="sticky top-0 z-30 border-b-2 border-border bg-background/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="font-pixel text-xs text-primary sm:text-sm">
            PIXEL<span className="text-magenta">FORGE</span>
          </a>
          <ul className="hidden gap-7 text-sm font-medium text-muted-foreground sm:flex">
            {[
              ["World", "#world"],
              ["Games", "#games"],
              ["Why Pixel", "#why"],
              ["Gallery", "#gallery"],
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} className="nav-link transition-colors hover:text-primary">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative isolate overflow-hidden border-b-2 border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <span className="inline-block border-2 border-lime/50 px-3 py-1 font-pixel text-[0.55rem] text-lime">
              INDIE PIXEL SHOWCASE
            </span>
            <h1 className="mt-6 font-pixel text-glow glitch text-3xl leading-tight sm:text-5xl lg:text-6xl">
              PIXELFORGE
            </h1>
            <p className="mt-5 font-pixel text-xs text-magenta sm:text-sm">
              Where every pixel tells a story.
            </p>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Step into worlds built from tiny pixels, unforgettable characters, dangerous
              dungeons, strange creatures, and impossible adventures.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <PixelButton href="#world">EXPLORE THE WORLD →</PixelButton>
              <PixelButton href="#games" variant="accent">
                DISCOVER GAMES
              </PixelButton>
            </div>
            <p className="mt-7 font-pixel text-[0.55rem] text-muted-foreground">
              <span className="press-start text-gold">PRESS START</span> TO BEGIN
            </p>
          </div>

          <div className="glow-border relative bg-surface p-2">
            <HeroScene />
          </div>
        </div>
        <Fireflies count={14} className="opacity-60" />
      </section>

      <LivingWorld />
      <GameSelect />
      <WhyPixel />
      <Showcase />
      <FinalPortal />

      {/* Footer */}
      <footer id="footer" className="relative mx-auto max-w-6xl px-5 py-14 text-center">
        <p className="font-pixel text-sm text-primary">
          PIXEL<span className="text-magenta">FORGE</span>
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          Made for people who still love pixels.
        </p>
        <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-pixel text-[0.55rem] text-muted-foreground">
          {[
            ["Home", "#top"],
            ["Games", "#games"],
            ["About", "#why"],
            ["Contact", "#footer"],
          ].map(([label, href], i) => (
            <li key={href} className="flex items-center gap-3">
              {i > 0 && <span aria-hidden="true">·</span>}
              <a href={href} className="transition-colors hover:text-primary">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}
