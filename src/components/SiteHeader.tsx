import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, Mail, HardHat, Truck, TrafficCone, PencilRuler } from "lucide-react";
import logo from "@/assets/promactar-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/road-construction", label: "Roads & Asphalt" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

const topLinks = [
  { to: "/site-visit", label: "Site Visits" },
  { to: "/careers", label: "Employment" },
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms & Conditions" },
] as const;

const tradeIcons = [
  { Icon: HardHat, label: "Construction" },
  { Icon: Truck, label: "Roads" },
  { Icon: TrafficCone, label: "Asphalt" },
  { Icon: PencilRuler, label: "Paving" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="surface-dark">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-1.5 text-xs">
          <div className="flex items-center gap-4 text-asphalt-foreground/80">
            <a
              href="tel:+27742878233"
              className="flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <Phone className="h-3.5 w-3.5" /> +27 74 287 8233
            </a>
            <a
              href="mailto:info@promactar.co.za"
              className="hidden items-center gap-1.5 transition-colors hover:text-primary sm:flex"
            >
              <Mail className="h-3.5 w-3.5" /> info@promactar.co.za
            </a>
          </div>


          <div className="flex items-center gap-3 text-asphalt-foreground/80 sm:gap-4">
            {topLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="hidden transition-colors hover:text-primary md:inline"
                activeProps={{ className: "text-primary font-semibold" }}
                activeOptions={{ exact: false }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-105"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main bar (increased height) */}
      <div className="border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
          <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
            <img
              src={logo}
              alt="Pro Mactar Civil Construction"
              className="h-11 w-auto max-w-52 object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-full px-3 py-2 text-sm font-semibold uppercase tracking-wide text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                activeProps={{
                  className:
                    "bg-primary text-primary-foreground shadow-sm hover:bg-primary hover:text-primary-foreground",
                }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+27742878233"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-105"
            >
              <Phone className="h-4 w-4" /> 074 287 8233
            </a>
          </nav>

          <button
            className="lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <nav className="border-t border-border bg-background px-4 pb-4 lg:hidden">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="my-1 block rounded-full px-4 py-3 text-sm font-semibold uppercase tracking-wide"
                activeProps={{ className: "bg-primary text-primary-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-wrap gap-2 border-t border-border pt-4">
              {topLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-foreground/80"
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <a
              href="tel:+27742878233"
              className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-bold uppercase text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> 074 287 8233
            </a>
          </nav>
        )}
      </div>
      <div className="hazard-stripe h-1" />
    </header>
  );
}
