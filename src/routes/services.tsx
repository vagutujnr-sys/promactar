import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import paving from "@/assets/paving.jpg";
import earthworks from "@/assets/earthworks.jpg";
import driveway from "@/assets/driveway.jpg";
import tennis from "@/assets/tennis-court.jpg";
import industrial from "@/assets/industrial.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | Brick Paving, Driveways & Tennis Courts" },
      {
        name: "description",
        content:
          "Brick paving, earthworks and site preparation, domestic driveways, tennis courts and industrial surfaces by Pro Mactar.",
      },
      { property: "og:title", content: "Pro Mactar Services" },
      {
        property: "og:description",
        content:
          "Construction and surface-development services for residential, commercial, industrial and infrastructure clients.",
      },
    ],
  }),
  component: Services,
});

const services = [
  {
    img: paving,
    title: "Brick Paving",
    text: "Professional paving solutions for residential, commercial and outdoor spaces.",
  },
  {
    img: earthworks,
    title: "Earthworks & Site Preparation",
    text: "Professional paving solutions for residential, commercial and outdoor spaces.",
  },
  {
    img: driveway,
    title: "Domestic Driveways",
    text: "Durable and attractive driveway construction for residential properties.",
  },
  {
    img: tennis,
    title: "Tennis Courts",
    text: "Professional construction and surface development for tennis and recreational facilities.",
  },
  {
    img: industrial,
    title: "Industrial Driveways & Surfaces",
    text: "Practical, hard-wearing surfaces designed for demanding industrial environments.",
  },
];

function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Our services / What we do"
        title="Construction solutions"
        intro="At ProMactar, we provide a range of construction and surface-development services designed to meet the needs of residential, commercial, industrial and infrastructure clients."
      />

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card"
            >
              <img
                src={s.img}
                alt={s.title}
                width={1200}
                height={900}
                loading="lazy"
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="border-t-4 border-primary p-6">
                <h2 className="text-lg">{s.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            </article>
          ))}
          <div className="flex flex-col justify-center rounded-2xl surface-dark p-8">
            <h2 className="text-2xl">Asphalt &amp; road construction</h2>
            <p className="mt-3 text-sm text-asphalt-foreground/75">
              Building the roads that move people, business and communities.
            </p>
            <Link
              to="/road-construction"
              className="mt-6 inline-flex items-center gap-2 font-bold uppercase tracking-wide text-primary"
            >
              Learn more <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
