import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import roadMilling from "@/assets/WhatsApp_Image_2026-09-10_at_08.43.29_1.jpeg";
import asphaltCrew from "@/assets/WhatsApp_Image_2026-09-10_at_08.43.31_1.jpeg";
import roadPrep from "@/assets/WhatsApp_Image_2026-09-10_at_08.43.30.jpeg";

export const Route = createFileRoute("/road-construction")({
  head: () => ({
    meta: [
      { title: "Asphalt & Road Construction | Pro Mactar" },
      {
        name: "description",
        content:
          "Road construction, asphalt surfacing and road base preparation built for dependable everyday performance.",
      },
      { property: "og:title", content: "Asphalt & Road Construction | Pro Mactar" },
      {
        property: "og:description",
        content: "Building the roads that move people, business and communities.",
      },
    ],
  }),
  component: Roads,
});

const items = [
  {
    img: roadMilling,
    title: "Road Construction",
    text: "Construction of new roads and access routes from groundwork through to completed surfacing.",
  },
  {
    img: asphaltCrew,
    title: "Asphalt Surfacing",
    text: "Professional asphalt application to create smooth, durable and functional road surfaces.",
  },
  {
    img: roadPrep,
    title: "Road Base & Preparation",
    text: "Preparing and developing the underlying layers required to support a strong finished surface.",
  },
];

function Roads() {
  return (
    <>
      <PageHeader
        eyebrow="We are into"
        title="Asphalt & road construction"
        intro="Building the roads that move people, business and communities."
      />

      <section className="mx-auto max-w-4xl px-4 py-20">
        <h2 className="text-3xl">Proper site preparation</h2>
        <p className="mt-5 text-muted-foreground">
          At ProMactar, we are into the construction and development of durable road surfaces that
          connect communities, support businesses and keep infrastructure moving. Our asphalt and
          road construction work combines proper site preparation, quality workmanship and precise
          surface finishing to deliver roads designed for dependable everyday performance.
        </p>
      </section>

      <section className="surface-dark">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-20 md:grid-cols-3">
          {items.map((i) => (
            <article
              key={i.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img
                src={i.img}
                alt={i.title}
                width={1200}
                height={900}
                loading="lazy"
                className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-lg">{i.title}</h3>
                <p className="mt-2 text-sm text-asphalt-foreground/70">{i.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 text-center">
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-105"
        >
          View our project gallery <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}
