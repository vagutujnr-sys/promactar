import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import paving from "@/assets/paving.jpg";
import driveway from "@/assets/driveway.jpg";
import tennis from "@/assets/tennis-court.jpg";
import industrial from "@/assets/industrial.jpg";
import actual1 from "@/assets/WhatsApp_Image_2026-09-10_at_08.43.29.jpeg";
import actual2 from "@/assets/WhatsApp_Image_2026-09-10_at_08.43.29_1.jpeg";
import actual3 from "@/assets/WhatsApp_Image_2026-09-10_at_08.43.30.jpeg";
import actual4 from "@/assets/WhatsApp_Image_2026-09-10_at_08.43.31_1.jpeg";
import actual5 from "@/assets/WhatsApp_Image_2026-09-10_at_08.43.32_3.jpeg";
import actual6 from "@/assets/WhatsApp_Image_2026-09-10_at_08.43.33.jpeg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Project Gallery | Pro Mactar Construction" },
      {
        name: "description",
        content:
          "A selection of our construction and surface-development works: roads, paving, driveways, tennis courts and industrial surfaces.",
      },
      { property: "og:title", content: "Pro Mactar Project Gallery" },
      {
        property: "og:description",
        content: "A selection of our construction and surface-development works.",
      },
    ],
  }),
  component: Gallery,
});

const shots = [
  { img: actual1, alt: "ProMactar road milling works" },
  { img: actual2, alt: "ProMactar road works with milling machine" },
  { img: actual3, alt: "ProMactar crew preparing a road base" },
  { img: actual4, alt: "ProMactar asphalt compaction works" },
  { img: actual5, alt: "ProMactar asphalt paving crew" },
  { img: actual6, alt: "ProMactar road roller compacting asphalt" },
  { img: paving, alt: "Brick paving being laid" },
  { img: driveway, alt: "Completed residential paved driveway" },
  { img: tennis, alt: "Newly surfaced tennis court" },
  { img: industrial, alt: "Industrial yard surface" },
];

function Gallery() {
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="Project gallery"
        intro="A selection of our construction and surface-development works."
      />

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {shots.map((s) => (
            <img
              key={s.alt}
              src={s.img}
              alt={s.alt}
              width={1200}
              height={900}
              loading="lazy"
              className="w-full break-inside-avoid rounded-2xl object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
          ))}
        </div>

        <div className="mt-12 border-l-4 border-primary bg-card p-6">
          <h2 className="text-lg">Special note</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            The photographs featured in our corporate profile gallery were captured by members of
            our project teams during ongoing works. As a result, image quality and resolution may
            vary. The selection represents only a small sample of the projects and work undertaken
            by the ProMactar Team.
          </p>
        </div>

        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-2 font-bold uppercase tracking-wide text-primary"
        >
          Start your project <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}
