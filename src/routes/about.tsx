import { createFileRoute, Link } from "@tanstack/react-router";
import { GlowBackground, Reveal, WHATSAPP_URL } from "@/components/site";
import secondaryPortrait from "@/assets/chinenye-portrait-secondary.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Will-Driven Digital Computer Services" },
      {
        name: "description",
        content:
          "Nocyangel Digital Global presents Will-Driven Digital Computer Services — your comprehensive hub for modern internet solutions, official documentation, and vehicle registration services in Suleja, Niger State.",
      },
      { property: "og:title", content: "About Us — Will-Driven Digital Computer Services" },
      {
        property: "og:description",
        content:
          "We bridge the gap between digital convenience and essential administrative services, ensuring you get things done quickly and accurately.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    title: "Speed",
    desc: "We know your time matters. Most requests are processed the same day you walk in.",
  },
  {
    title: "Accuracy",
    desc: "Official documents done right the first time — no rejected applications, no repeat trips.",
  },
  {
    title: "Trust",
    desc: "A registered business (Reg No. 3708848) operating from the V.I.O Office in Suleja.",
  },
];

function AboutPage() {
  return (
    <div className="relative overflow-hidden pt-28">
      <GlowBackground />
      <section className="relative mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">About us</p>
          <h1 className="mt-4 max-w-[20ch] font-display text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl">
            Digital convenience meets <span className="text-gradient">essential services</span>
          </h1>
          <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-pretty text-muted-foreground">
            Nocyangel Digital Global presents Will-Driven Digital Computer Services, your
            comprehensive hub for modern internet solutions, official documentation, and vehicle
            registration services. We bridge the gap between digital convenience and essential
            administrative services, ensuring you get things done quickly and accurately.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 100}>
              <div className="card-3d h-full rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
                <h3 className="font-display text-lg font-semibold text-primary">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="holo-card grid overflow-hidden rounded-2xl sm:grid-cols-[220px_1fr]">
            <img
              src={secondaryPortrait.url}
              alt="Chinenye G. Anaele at Will-Driven Digital Computer Services"
              className="h-72 w-full object-cover object-top sm:h-full"
            />
            <div className="flex flex-col items-start justify-center p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Leadership
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold">Chinenye G. Anaele</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                C.E.O / Contact Person — Will-Driven Digital Computer Services
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-6 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground ring-1 ring-primary/40 transition-transform hover:scale-[1.04]"
              >
                Chat with us
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <Link to="/services" className="text-sm font-semibold text-primary hover:underline">
            Explore our services →
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
