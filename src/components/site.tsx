import { Link } from "@tanstack/react-router";
import ceoPortrait from "@/assets/computer-services.jpg.asset.json";
import { useEffect, useRef, useState, type ReactNode } from "react";

export const WHATSAPP_URL =
  "https://wa.me/2348149917222?text=Hello%20Will-Driven%20Digital%2C%20I%27d%20like%20to%20make%20an%20enquiry.";

export const SERVICES = [
  {
    num: "01",
    title: "Cyber Café & All Internet Services",
    desc: "High-speed browsing, online applications, printing, scanning, and digital support.",
    glyph: "◉",
  },
  {
    num: "02",
    title: "Vehicle License Renewal",
    desc: "Fast and seamless processing for your annual vehicle papers.",
    glyph: "▣",
  },
  {
    num: "03",
    title: "Vehicle Insurance",
    desc: "Reliable coverage options to keep you legally protected on the road.",
    glyph: "⬡",
  },
  {
    num: "04",
    title: "Vehicle Particulars Documents",
    desc: "Complete processing and verification of all vital vehicle documents.",
    glyph: "◈",
  },
  {
    num: "05",
    title: "Driver's License",
    desc: "Assistance with new applications, renewals, and processing requirements.",
    glyph: "▤",
  },
  {
    num: "06",
    title: "Vehicle Plate Number Registration",
    desc: "Official registration services for new and replacement plate numbers.",
    glyph: "◎",
  },
  {
    num: "07",
    title: "General Printing Jobs & More",
    desc: "High-quality document printing, photocopying, laminating, and binding services.",
    glyph: "▦",
  },
];

/* Scroll-reveal wrapper */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function SiteNav() {
  return (
    <nav className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="surface-shadow mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-border bg-card/80 px-4 py-3 backdrop-blur-xl sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-lg bg-primary/15 ring-1 ring-primary/30">
            <span className="size-3 animate-glow-pulse rounded-full bg-primary" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-semibold tracking-tight">
              Will-Driven Digital
            </span>
            <span className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Reg No. 3708848
            </span>
          </span>
        </Link>
        <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <Link to="/" className="transition-colors hover:text-primary [&.active]:text-primary">
            Home
          </Link>
          <Link to="/about" className="transition-colors hover:text-primary [&.active]:text-primary">
            About
          </Link>
          <Link
            to="/services"
            className="transition-colors hover:text-primary [&.active]:text-primary"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="transition-colors hover:text-primary [&.active]:text-primary"
          >
            Contact
          </Link>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="button-lift rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground ring-1 ring-primary/30"
        >
          WhatsApp
        </a>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center text-sm text-muted-foreground sm:flex-row sm:text-left">
        <p>© 2026 Will-Driven Digital Computer Services (Reg No. 3708848). All Rights Reserved.</p>
        <p className="font-medium text-foreground/80">
          Powered by <span className="text-primary">Nocyangel Digital Global</span>
        </p>
      </div>
    </footer>
  );
}

/* CEO portrait */
export function HeroScene() {
  return (
    <figure className="mx-auto w-full max-w-lg">
      <div className="overflow-hidden rounded-lg">
        <img
          src={ceoPortrait.url}
          alt="Chinenye G. Anaele, CEO of Will-Driven Digital Computer Services, wearing red"
          width={768}
          height={768}
          fetchPriority="high"
          className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-[1.025] motion-reduce:transform-none"
        />
      </div>
      <figcaption className="mt-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-border pb-4">
        <p className="font-display text-xl font-semibold text-foreground">Chinenye G. Anaele</p>
        <p className="text-xs font-semibold uppercase text-primary">C.E.O · Will-Driven Digital</p>
      </figcaption>
    </figure>
  );
}

export function GlowBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="animate-glow-pulse absolute inset-x-[12%] top-[18%] h-64 bg-primary/10 blur-[110px]" />
      <div className="absolute right-0 top-0 h-56 w-1/3 bg-amber/10 blur-[110px]" />
      <div className="grid-bg absolute inset-0" />
    </div>
  );
}
