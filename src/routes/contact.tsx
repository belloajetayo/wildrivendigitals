import { createFileRoute } from "@tanstack/react-router";
import { GlowBackground, Reveal, WHATSAPP_URL } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location — Will-Driven Digital Computer Services" },
      {
        name: "description",
        content:
          "Visit us at V.I.O Office, Suleja, Niger State, Nigeria. Call or WhatsApp +234 814 991 7222, or email anaeleimma77@gmail.com for prompt, professional service.",
      },
      { property: "og:title", content: "Contact & Location — Will-Driven Digital Computer Services" },
      {
        property: "og:description",
        content:
          "Get in touch today or visit our office for prompt, professional service — V.I.O Office, Suleja, Niger State.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const CHANNELS = [
  {
    label: "Phone / WhatsApp",
    value: "+234 814 991 7222",
    href: "tel:+2348149917222",
    accent: false,
  },
  {
    label: "Email",
    value: "anaeleimma77@gmail.com",
    href: "mailto:anaeleimma77@gmail.com",
    accent: true,
  },
  {
    label: "Office Address",
    value: "V.I.O Office, Suleja, Niger State, Nigeria",
    accent: false,
  },
  {
    label: "C.E.O / Contact Person",
    value: "Chinenye G. Anaele",
    accent: true,
  },
];

function ContactPage() {
  return (
    <div className="relative overflow-hidden pt-28">
      <GlowBackground />
      <section className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Contact & location
            </p>
            <h1 className="mt-4 max-w-[18ch] font-display text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl">
              Get in touch, or <span className="text-gradient">visit our office</span>
            </h1>
            <p className="mt-6 max-w-[46ch] text-lg text-pretty text-muted-foreground">
              Prompt, professional service — walk in during working hours or reach us instantly on
              WhatsApp.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="button-lift rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground ring-1 ring-primary/30"
              >
                Contact Us on WhatsApp
              </a>
              <a
                href="tel:+2348149917222"
                className="button-lift rounded-lg border border-border bg-card/80 px-6 py-3 text-sm font-medium backdrop-blur"
              >
                Call +234 814 991 7222
              </a>
              <a
                href="mailto:anaeleimma77@gmail.com"
                className="button-lift rounded-lg border border-border bg-card/80 px-6 py-3 text-sm font-medium backdrop-blur"
              >
                Email Us
              </a>
            </div>
          </Reveal>

          <div className="space-y-4">
            {CHANNELS.map((c, i) => (
              <Reveal key={c.label} delay={i * 90}>
                <div className="card-3d surface-shadow flex items-center gap-4 rounded-xl border border-border bg-card/80 p-5 backdrop-blur">
                  <span
                    className={`size-2.5 animate-glow-pulse rounded-full ${
                      c.accent ? "bg-amber" : "bg-primary"
                    }`}
                  />
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {c.label}
                    </div>
                    {c.href ? (
                      <a href={c.href} className="text-base font-medium hover:text-primary">
                        {c.value}
                      </a>
                    ) : (
                      <div className="text-base font-medium">{c.value}</div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MAP & DIRECTIONS */}
      <section className="relative border-t border-border px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Find us
              </p>
              <h2 className="mt-3 max-w-[24ch] font-display text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl">
                V.I.O Office, <span className="text-gradient">Suleja, Niger State</span>
              </h2>
            </div>
            <p className="text-muted-foreground">
              We are right at the V.I.O Office in Suleja — walk in during working hours and get your
              documents sorted the same day. Tap the map for turn-by-turn directions.
            </p>
          </Reveal>

          <Reveal>
            <div className="surface-shadow overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Map — V.I.O Office, Suleja, Niger State, Nigeria"
                src={`https://www.google.com/maps/embed/v1/place?key=${
                  import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY"] ?? ""
                }&q=place_id:ChIJIS-BFu7VTRARx0wzR6ORzkg&zoom=16`}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[360px] w-full border-0 sm:h-[440px]"
              />
            </div>
          </Reveal>

          {/* CTA BAND */}
          <Reveal className="mt-16 text-center">
            <h2 className="mx-auto max-w-[26ch] font-display text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl">
              Skip the queue — <span className="text-gradient">we are here to serve you better</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[52ch] text-pretty text-muted-foreground">
              License renewal, insurance, particulars, driver's license or printing — message us now
              and we will have everything ready before you arrive.
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
              <a
                href="tel:+2348149917222"
                className="button-lift rounded-lg border border-border bg-card/80 px-6 py-3 text-sm font-medium backdrop-blur"
              >
                Call +234 814 991 7222
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=9.197846,7.1771417"
                target="_blank"
                rel="noreferrer"
                className="button-lift rounded-lg border border-border bg-card/80 px-6 py-3 text-sm font-medium backdrop-blur"
              >
                Get Directions
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

