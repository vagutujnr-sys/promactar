import { createFileRoute, Link } from "@tanstack/react-router";
import { HardHat, Truck, Mail, Users } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Employment & Careers | Pro Mactar Civil Construction" },
      {
        name: "description",
        content:
          "Pro Mactar welcomes skilled construction, paving and road-building professionals. Submit your details for current and future opportunities.",
      },
      { property: "og:title", content: "Employment | Pro Mactar" },
      {
        property: "og:description",
        content: "Join Pro Mactar — construction and surface-development work across Gauteng.",
      },
    ],
  }),
  component: Careers,
});

function Careers() {
  return (
    <>
      <PageHeader
        eyebrow="Engage us / Employment"
        title="Work with Pro Mactar"
        intro="We're a construction and surface-development team building roads, paving, driveways and tennis courts. Skilled, dependable people are central to the quality we deliver."
      />

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <HardHat className="h-6 w-6 text-primary" />
            <h2 className="mt-4 text-xl">Who we look for</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              We're interested in people with experience in road construction, asphalt surfacing,
              brick paving, earthworks and site preparation, as well as tennis court and driveway
              construction. Reliability, attention to detail and pride in quality workmanship matter
              to us as much as technical skill.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <Truck className="h-6 w-6 text-primary" />
            <h2 className="mt-4 text-xl">The work</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Projects span residential, commercial, industrial and infrastructure environments.
              Our process focuses on proper site preparation, quality workmanship and precise
              surface finishing, with reduced processing time and no unnecessary hold-ups.
            </p>
          </div>
        </div>

        <div className="surface-dark mt-8 rounded-2xl p-8">
          <Users className="h-6 w-6 text-primary" />
          <h2 className="mt-4 text-2xl text-primary">Submit your details</h2>
          <p className="mt-3 max-w-2xl text-sm text-asphalt-foreground/80">
            Send your CV and a short note on your experience to the email below. We keep details on
            file for current openings and future opportunities, and we'll be in touch when a
            suitable role comes up.
          </p>
          <a
            href="mailto:info@promactar.co.za?subject=Employment%20enquiry"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-105"
          >
            <Mail className="h-4 w-4" /> info@promactar.co.za
          </a>
          <p className="mt-4 text-xs text-asphalt-foreground/60">
            Prefer to call? Reach us on +27 74 287 8233 during working hours.
          </p>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Want to talk about a project instead?{" "}
          <Link to="/contact" className="font-bold uppercase tracking-wide text-primary">
            Go to contact
          </Link>
        </p>
      </section>
    </>
  );
}
