import { PixelTitle } from "./PixelTitle";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

const pillars = [
  {
    glyph: "♥",
    title: "CHARACTER",
    desc: "Every pixel can have personality.",
    color: "text-magenta",
  },
  {
    glyph: "⚔",
    title: "ADVENTURE",
    desc: "Small worlds can hold enormous stories.",
    color: "text-primary",
  },
  { glyph: "★", title: "NOSTALGIA", desc: "Some styles never get old.", color: "text-gold" },
];

export function WhyPixel() {
  const { ref, shown } = useReveal<HTMLDivElement>(0.3);

  return (
    <section id="why" className="relative border-b-2 border-border overflow-hidden">
      <div className="pixel-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-5xl px-5 py-20 text-center">
        <PixelTitle className="text-lg text-magenta sm:text-2xl">WHY PIXEL?</PixelTitle>
        <div ref={ref} className="mt-14 grid gap-10 sm:grid-cols-3">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              data-shown={shown}
              className="pillar"
              style={{ transitionDelay: `${i * 140}ms` }}
            >
              <span className={cn("pillar-glyph font-pixel", p.color)}>{p.glyph}</span>
              <h3 className="mt-6 font-pixel text-[0.7rem] text-foreground">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
