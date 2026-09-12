import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/sitemap")({
  head: () => ({
    meta: [
      { title: "Sitemap | Pro Mactar Civil Construction" },
      {
        name: "description",
        content:
          "Browse the Pro Mactar Civil Construction website, including our services, projects, company information and contact pages.",
      },
      { property: "og:title", content: "Sitemap | Pro Mactar" },
      {
        property: "og:description",
        content: "Browse all public pages on the Pro Mactar website.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.promactar.co.za/sitemap" }],
  }),
  component: Sitemap,
});

const pageGroups = [
  {
    title: "Explore Pro Mactar",
    links: [
      { to: "/", label: "Home" },
      { to: "/about", label: "About Us" },
      { to: "/services", label: "Our Services" },
      { to: "/road-construction", label: "Asphalt & Road Construction" },
      { to: "/gallery", label: "Project Gallery" },
    ],
  },
  {
    title: "Start a Conversation",
    links: [
      { to: "/site-visit", label: "Book a Site Visit" },
      { to: "/contact", label: "Get In Touch" },
      { to: "/careers", label: "Careers" },
    ],
  },
  {
    title: "Information",
    links: [
      { to: "/privacy", label: "Privacy Policy" },
      { to: "/terms", label: "Terms & Conditions" },
    ],
  },
] as const;

function Sitemap() {
  return (
    <>
      <PageHeader
        eyebrow="Navigate / Site map"
        title="Find your way around"
        intro="Explore Pro Mactar's construction services, project work, company information and contact options."
      />

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {pageGroups.map((group) => (
            <div key={group.title} className="border-t-4 border-primary pt-5">
              <h2 className="text-xl">{group.title}</h2>
              <ul className="mt-5 space-y-3">
                {group.links.map((page) => (
                  <li key={page.to}>
                    <Link
                      to={page.to}
                      className="inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-foreground"
                    >
                      <ArrowRight className="h-4 w-4" />
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}