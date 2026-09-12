import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import logo from "@/assets/promactar-logo.png";

export function SiteFooter() {
  return (
    <footer className="surface-dark">
      <div className="hazard-stripe h-1" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <img
            src={logo}
            alt="Pro Mactar Civil Construction logo"
            className="h-16 w-auto max-w-64 object-contain"
            loading="lazy"
          />
          <p className="mt-4 max-w-xs text-sm text-asphalt-foreground/70">
            Construction and surface-development since 2013. Road construction, brick paving,
            tennis courts, domestic and industrial driveways.
          </p>
          <p className="mt-4 text-xs uppercase tracking-widest text-asphalt-foreground/50">
            CK Reg No. 2013/035446/07
          </p>
        </div>

        <div>
          <h3 className="text-sm tracking-widest">Pages</h3>
          <ul className="mt-4 space-y-2 text-sm text-asphalt-foreground/75">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Our Services" },
              { to: "/road-construction", label: "Asphalt & Road Construction" },
              { to: "/gallery", label: "Project Gallery" },
              { to: "/contact", label: "Get In Touch" },
              { to: "/sitemap", label: "Sitemap" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm tracking-widest">Get In Touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-asphalt-foreground/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                KG Centre, Van Riebeeck Avenue
                <br />
                Alberton 1450, Gauteng ZA
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-primary" />
              <a href="tel:+27742878233" className="hover:text-primary">
                +27 74 287 8233
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span className="flex flex-col">
                <a href="mailto:info@promactar.co.za" className="hover:text-primary">
                  info@promactar.co.za
                </a>
                <a href="mailto:promactar@gmail.com" className="hover:text-primary">
                  promactar@gmail.com
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Globe className="h-4 w-4 shrink-0 text-primary" />
              www.promactar.co.za
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-asphalt-foreground/50">
        <div>© {new Date().getFullYear()} Pro Mactar Civil Construction (Pty) Ltd. All rights reserved.</div>
        <div className="mt-2 uppercase tracking-[0.2em] text-asphalt-foreground/40">
          Developed by CodemathPHP
        </div>
      </div>
    </footer>
  );
}
