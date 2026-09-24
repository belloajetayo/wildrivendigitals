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
    </div>
  );
}
