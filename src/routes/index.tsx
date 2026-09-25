import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import {
  GlowBackground,
  HeroScene,
  Reveal,
  SERVICES,
  WHATSAPP_URL,
} from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Will-Driven Digital Computer Services — Cyber Café & Vehicle Services, Suleja" },
      {
        name: "description",
        content:
          "Experience the future of connectivity with our integrated digital and vehicle services, all at your fingertips. Cyber café, vehicle license renewal, insurance, driver's license and plate registration in Suleja, Niger State.",
      },
      { property: "og:title", content: "Will-Driven Digital Computer Services" },
      {
        property: "og:description",
        content:
          "Integrated digital and vehicle services, all at your fingertips — Suleja, Niger State. We are here to serve you better.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content: "https://wildrivendigitals.lovable.app/chinenye-g-anaele.jpg",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content: "https://wildrivendigitals.lovable.app/chinenye-g-anaele.jpg",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <header className="relative flex min-h-[92svh] items-center overflow-hidden pt-28 pb-16">
        <GlowBackground />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="order-2 lg:order-1">
            <HeroScene />
          </div>
          <div className="order-1 lg:order-2">
            <p className="animate-rise mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="size-1.5 animate-glow-pulse rounded-full bg-primary" />
              Reg No. 3708848 · Suleja, Niger State
            </p>
            <h1
              className="animate-rise max-w-[16ch] font-display text-5xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl"
              style={{ animationDelay: "120ms" }}
            >
              Experience the <span className="text-gradient">future of connectivity</span>
            </h1>
            <p
              className="animate-rise mt-6 max-w-[48ch] text-lg text-pretty text-muted-foreground"
              style={{ animationDelay: "240ms" }}
            >
              Integrated digital and vehicle services, all at your fingertips. We are here to serve
              you better.
            </p>
            <div
              className="animate-rise mt-9 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "360ms" }}
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="button-lift rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground ring-1 ring-primary/30"
              >
                Contact Us on WhatsApp
              </a>
              <Link
                to="/services"
                className="button-lift rounded-lg border border-border bg-card/80 px-6 py-3 text-sm font-medium text-foreground backdrop-blur"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT PREVIEW */}
      <section className="border-t border-border px-6 py-24">
        <Reveal className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="max-w-[20ch] font-display text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl">
            Your comprehensive hub for modern internet and administrative services
          </h2>
          <div>
            <p className="max-w-[56ch] text-lg leading-relaxed text-pretty text-muted-foreground">
              Nocyangel Digital Global presents Will-Driven Digital Computer Services — bridging the
              gap between digital convenience and essential administrative services, so you get
              things done quickly and accurately.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-transform hover:translate-x-1"
            >
              More about us →
            </Link>
          </div>
        </Reveal>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              What we do
            </p>
            <h2 className="mt-3 max-w-[22ch] font-display text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl">
              Seven services, one trusted counter
            </h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((s, i) => (
              <Reveal key={s.num} delay={i * 80}>
                <Link to="/services" className="card-3d surface-shadow block h-full rounded-2xl border border-border bg-card/80 p-6 backdrop-blur">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="grid size-11 place-items-center rounded-lg bg-primary/15 text-lg text-primary ring-1 ring-primary/25">
                      {s.glyph}
                    </span>
                    <span className="font-display text-xs text-muted-foreground">{s.num}</span>
                  </div>
                  <h3 className="font-display text-base font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link
              to="/services"
              className="button-lift inline-flex items-center gap-2 rounded-lg border border-border bg-card/80 px-6 py-3 text-sm font-medium backdrop-blur"
            >
              View all 7 services →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="relative overflow-hidden border-t border-border px-6 py-24">
        <GlowBackground />
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl">
            Ready when you are — <span className="text-gradient">we are here to serve you better</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[46ch] text-muted-foreground">
            Call, chat, or visit our office at V.I.O Office, Suleja, Niger State for prompt,
            professional service.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="button-lift rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground ring-1 ring-primary/30"
            >
              Chat on WhatsApp
            </a>
            <Link
              to="/contact"
              className="button-lift rounded-lg border border-border bg-card/80 px-6 py-3 text-sm font-medium backdrop-blur"
            >
              Contact & Location
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
