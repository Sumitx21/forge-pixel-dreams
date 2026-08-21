import { createFileRoute } from "@tanstack/react-router";

import heroArt from "@/assets/hero-adventurer.png";
import artStarbound from "@/assets/game-starbound.png";
import artKnight from "@/assets/game-pixelknight.png";
import artRunner from "@/assets/game-neonrunner.png";
import artForest from "@/assets/game-foresttales.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PixelForge — Pixel-Art Game Showcase" },
      {
        name: "description",
        content:
          "PixelForge is an indie showcase for pixel-art games — nostalgic classics and modern pixel adventures, from Starbound to Forest Tales.",
      },
      { property: "og:title", content: "PixelForge — Pixel-Art Game Showcase" },
      {
        property: "og:description",
        content:
          "Small pixels. Big adventures. Discover the charm of pixel games at PixelForge.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const games = [
  {
    title: "STARBOUND",
    desc: "Explore strange worlds beyond the stars.",
    genre: "SPACE SANDBOX",
    art: artStarbound,
  },
  {
    title: "PIXEL KNIGHT",
    desc: "Fight monsters, collect loot, become a legend.",
    genre: "ACTION RPG",
    art: artKnight,
  },
  {
    title: "NEON RUNNER",
    desc: "Race through a futuristic pixel city.",
    genre: "ENDLESS RUNNER",
    art: artRunner,
  },
  {
    title: "FOREST TALES",
    desc: "An enchanting adventure hidden among the trees.",
    genre: "ADVENTURE",
    art: artForest,
  },
];

const features = [
  { title: "NOSTALGIC", desc: "Classic visual style with modern ideas.", glyph: "◆" },
  { title: "CREATIVE", desc: "Gameplay and imagination come first.", glyph: "✦" },
  { title: "TIMELESS", desc: "Pixel art never truly goes out of style.", glyph: "▲" },
];

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className="sticky top-0 z-30 border-b-2 border-border bg-background/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="font-pixel text-xs text-primary sm:text-sm">
            PIXEL<span className="text-magenta">FORGE</span>
          </a>
          <ul className="hidden gap-7 text-sm font-medium text-muted-foreground sm:flex">
            {[
              ["Games", "#games"],
              ["Why Pixels", "#why"],
              ["Contact", "#footer"],
            ].map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="transition-colors hover:text-primary"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="scanlines relative isolate overflow-hidden border-b-2 border-border"
      >
        <div className="star-field absolute inset-0 -z-10 opacity-70" aria-hidden="true" />
        <div className="pixel-grid absolute inset-0 -z-10" aria-hidden="true" />
        <div
          className="absolute -top-24 left-1/2 -z-10 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-magenta/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:py-28 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <span className="inline-block border-2 border-lime/50 px-3 py-1 font-pixel text-[0.55rem] text-lime">
              INDIE PIXEL SHOWCASE
            </span>
            <h1 className="mt-6 font-pixel text-glow text-3xl leading-tight sm:text-5xl lg:text-6xl">
              PIXELFORGE
            </h1>
            <p className="mt-5 font-pixel text-xs text-magenta sm:text-sm">
              Small pixels. Big adventures.
            </p>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Discover the charm of pixel games — from nostalgic classics to modern
              indie adventures.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#games" className="btn-pixel">
                EXPLORE GAMES
              </a>
              <a href="#why" className="btn-pixel btn-pixel-accent">
                LEARN MORE
              </a>
            </div>
          </div>

          <div className="animate-float glow-border scanlines relative bg-surface p-2">
            <img
              src={heroArt}
              alt="Pixel-art adventurer standing on a cliff in a colorful 16-bit landscape"
              width={1280}
              height={896}
              className="pixelated w-full"
            />
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section id="games" className="border-b-2 border-border">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-pixel text-lg text-primary sm:text-2xl">
              FEATURED GAMES
            </h2>
            <span className="font-pixel text-[0.55rem] text-muted-foreground">
              04 TITLES
            </span>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {games.map((game) => (
              <article
                key={game.title}
                className="glow-border group flex flex-col bg-card hover:-translate-y-1"
              >
                <div className="scanlines relative overflow-hidden border-b-2 border-border">
                  <img
                    src={game.art}
                    alt={`${game.title} pixel-art key art`}
                    loading="lazy"
                    width={768}
                    height={576}
                    className="pixelated aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h3 className="font-pixel text-[0.7rem] text-foreground group-hover:text-primary">
                    {game.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {game.desc}
                  </p>
                  <span className="w-fit border border-lime/50 px-2 py-1 font-pixel text-[0.5rem] text-lime">
                    {game.genre}
                  </span>
                  <button type="button" className="btn-pixel mt-auto w-full text-[0.6rem]">
                    VIEW GAME
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Pixel Games */}
      <section id="why" className="relative border-b-2 border-border">
        <div className="pixel-grid absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-5 py-20 text-center">
          <h2 className="font-pixel text-lg text-magenta sm:text-2xl">
            WHY PIXEL GAMES?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Pixel games prove that great games don't need cutting-edge graphics. With
            clever design, memorable characters, creative worlds, and beautiful pixel
            art, developers can create experiences that stay with players for years.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="glow-border bg-card p-6 hover:-translate-y-1">
                <span className="animate-twinkle block font-pixel text-base text-gold">
                  {f.glyph}
                </span>
                <h3 className="mt-4 font-pixel text-[0.65rem] text-primary">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="mx-auto max-w-6xl px-5 py-14 text-center">
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
