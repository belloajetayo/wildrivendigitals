import { Link } from "@tanstack/react-router";
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
        if (entry.isIntersecting) {
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
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
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
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground ring-1 ring-primary/40 transition-transform hover:scale-[1.04]"
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

/* Mouse-tilting 3D scene with orbiting holographic documents */
export function HeroScene() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      className="scene-3d relative mx-auto h-[420px] w-full max-w-md lg:h-[540px]"
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        setTilt({
          x: ((e.clientY - r.top) / r.height - 0.5) * -10,
          y: ((e.clientX - r.left) / r.width - 0.5) * 14,
        });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <div
        className="preserve-3d absolute inset-0 transition-transform duration-300 ease-out"
        style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        <div className="preserve-3d animate-orbit absolute inset-0">
          {/* Driver's license card */}
          <div className="animate-floaty absolute left-1/2 top-1/2 w-64 -translate-x-1/2 -translate-y-1/2">
            <div className="holo-card rounded-xl p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                  Driver's License
                </span>
                <span className="size-2 animate-glow-pulse rounded-full bg-primary" />
              </div>
              <div className="flex items-center gap-3">
                <div className="size-12 rounded-md bg-primary/20 ring-1 ring-primary/30" />
                <div className="flex-1 space-y-1.5">
                  <div className="h-1.5 w-3/4 rounded-full bg-foreground/30" />
                  <div className="h-1.5 w-1/2 rounded-full bg-foreground/15" />
                  <div className="h-1.5 w-2/3 rounded-full bg-foreground/15" />
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-[9px] uppercase tracking-widest text-muted-foreground">
                <span>Class B</span>
                <span className="text-primary">Valid ✓</span>
                <span>FRSC</span>
              </div>
            </div>
          </div>

          {/* Plate number card */}
          <div
            className="animate-floaty absolute right-0 top-6 w-52"
            style={{ animationDelay: "-3s", transform: "translateZ(90px)" }}
          >
            <div className="holo-card rounded-lg p-4">
              <div className="mb-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-amber">
                Plate Registration
              </div>
              <div className="rounded-md bg-background/80 px-3 py-2 text-center font-display text-xl font-semibold tracking-[0.28em] text-foreground ring-1 ring-amber/50">
                KUJ·204·XY
              </div>
            </div>
          </div>

          {/* Vehicle particulars card */}
          <div
            className="animate-floaty absolute bottom-4 left-0 w-48"
            style={{ animationDelay: "-5s", transform: "translateZ(-60px)" }}
          >
            <div className="holo-card rounded-lg p-4">
              <div className="mb-3 flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                <span>Vehicle Particulars</span>
                <span className="text-primary">✓</span>
              </div>
              <div className="space-y-2">
                <div className="h-1.5 w-full rounded-full bg-foreground/20" />
                <div className="h-1.5 w-4/5 rounded-full bg-foreground/10" />
                <div className="h-1.5 w-3/5 rounded-full bg-foreground/10" />
                <div className="h-1.5 w-2/3 rounded-full bg-primary/30" />
              </div>
            </div>
          </div>

          {/* Insurance seal */}
          <div
            className="animate-floaty absolute bottom-16 right-4"
            style={{ animationDelay: "-1.5s", transform: "translateZ(50px)" }}
          >
            <div className="holo-card grid size-24 place-items-center rounded-full">
              <span className="text-center text-[9px] font-semibold uppercase tracking-[0.25em] text-primary">
                Insured
                <br />✓
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GlowBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="animate-glow-pulse absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/15 blur-[130px]" />
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-amber/10 blur-[120px]" />
      <div className="grid-bg absolute inset-0" />
    </div>
  );
}
