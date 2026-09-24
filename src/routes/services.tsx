import { createFileRoute } from "@tanstack/react-router";
import { GlowBackground, Reveal, SERVICES, WHATSAPP_URL } from "@/components/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Will-Driven Digital Computer Services" },
      {
        name: "description",
        content:
          "Cyber café & internet services, vehicle license renewal, vehicle insurance, vehicle particulars, driver's license, plate number registration, and general printing in Suleja, Niger State.",
      },
      { property: "og:title", content: "Our Services — Will-Driven Digital Computer Services" },
      {
        property: "og:description",
        content:
          "Seven professional services designed to save you time and hassle — from high-speed internet to official vehicle documentation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="relative overflow-hidden pt-28">
      <GlowBackground />
      <section className="relative mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Our services
          </p>
          <h1 className="mt-4 max-w-[22ch] font-display text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl">
            Expert services that save you <span className="text-gradient">time and hassle</span>
          </h1>
          <p className="mt-6 max-w-[56ch] text-lg text-pretty text-muted-foreground">
            We are experts in a wide range of professional services. Walk in, message us, and leave
            with it done.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.num} delay={(i % 3) * 90}>
              <div className="card-3d surface-shadow h-full rounded-2xl border border-border bg-card/80 p-6 backdrop-blur">
                <div className="mb-5 flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-lg bg-primary/15 text-lg text-primary ring-1 ring-primary/25">
                    {s.glyph}
                  </span>
                  <span className="font-display text-xs text-muted-foreground">{s.num}</span>
                </div>
                <h3 className="font-display text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={180}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="card-3d surface-shadow flex h-full flex-col justify-between rounded-2xl border border-primary/40 bg-primary/10 p-6 backdrop-blur"
            >
              <h3 className="font-display text-lg font-semibold">
                Not sure what you need?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Message us on WhatsApp and we will point you to the right service immediately.
              </p>
              <span className="mt-6 inline-flex w-fit rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
                Ask on WhatsApp →
              </span>
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
