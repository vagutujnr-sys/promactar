import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, ClipboardList, CalendarClock, Phone } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/site-visit")({
  head: () => ({
    meta: [
      { title: "Site Visits | Pro Mactar Civil Construction" },
      {
        name: "description",
        content:
          "Request a site visit from Pro Mactar. We assess road, paving, driveway and tennis court projects on site before quoting.",
      },
      { property: "og:title", content: "Site Visits | Pro Mactar" },
      {
        property: "og:description",
        content: "Book a site assessment for your construction or surface-development project.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.promactar.co.za/site-visit" }],
  }),
  component: SiteVisit,
});

function SiteVisit() {
  return (
    <>
      <PageHeader
        eyebrow="Engage us / Site visits"
        title="Book a site visit"
        intro="We assess each project on site before quoting, so the work is planned around the real conditions of your ground, surfaces and access."
      />

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              Icon: ClipboardList,
              title: "1. Tell us about the site",
              text: "Share the location and the type of work — road construction, paving, a driveway, earthworks or a tennis court.",
            },
            {
              Icon: MapPin,
              title: "2. We assess on site",
              text: "Our team inspects ground conditions, access and surface requirements to determine the right construction approach.",
            },
            {
              Icon: CalendarClock,
              title: "3. You get a clear plan",
              text: "We follow up with a scope and quotation based on what the site actually needs — no unnecessary hold-ups.",
            },
          ].map(({ Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-7">
              <Icon className="h-6 w-6 text-primary" />
              <h2 className="mt-4 text-lg">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>

        <div className="surface-dark mt-10 rounded-2xl p-8 text-center">
          <h2 className="text-2xl text-primary">Ready to arrange a visit?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-asphalt-foreground/75">
            Call us directly or send the details by email. We cover residential, commercial,
            industrial and infrastructure projects across Gauteng.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="tel:+27742878233"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-105"
            >
              <Phone className="h-4 w-4" /> +27 74 287 8233
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-asphalt-foreground transition-colors hover:bg-white/10"
            >
              Email the team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
