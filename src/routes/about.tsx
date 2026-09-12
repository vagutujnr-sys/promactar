import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import owner from "@/assets/chris.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Pro Mactar | Construction & Surface Development" },
      {
        name: "description",
        content:
          "Established in 2013, Pro Mactar delivers durable, functional and safe surfaces with quality workmanship and sound planning.",
      },
      { property: "og:title", content: "About Pro Mactar" },
      {
        property: "og:description",
        content: "Our background, mission, vision and operational approach to construction.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.promactar.co.za/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us / Overview"
        title="Building surfaces. Building confidence."
        intro="ProMactar is a construction and surface-development company established in 2013, providing practical and professional construction solutions across residential, commercial, industrial and infrastructure environments."
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-0 pt-20 md:grid-cols-[0.8fr_1.2fr] md:items-center">
        <div className="flex justify-center md:justify-start">
          <img
            src={owner}
            alt="Chris, owner of Pro Mactar Civil Construction"
            width={800}
            height={1000}
            loading="lazy"
            className="h-[320px] w-full max-w-[360px] rounded-2xl object-contain object-center md:h-[420px]"
          />
        </div>
        <div>
          <h2 className="text-3xl">Background</h2>
          <p className="mt-5 text-muted-foreground">
            Our experience spans a range of construction and surface-development requirements, with
            a particular focus on road construction, paving, driveways, tennis courts and related
            surface works.
          </p>
          <p className="mt-4 text-muted-foreground">
            We understand that successful construction is about more than simply completing a
            project. It is about creating surfaces and structures that are durable, functional,
            safe and built to perform. At ProMactar, we approach every project with attention to
            detail, sound planning and a commitment to quality workmanship.
          </p>
          <p className="mt-4 text-muted-foreground">
            From preparation and groundwork through to construction, finishing and completion, our
            objective is to deliver work that meets the needs and expectations of our clients.
          </p>
        </div>
      </section>

      <section className="surface-dark">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 pb-0 pt-20 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl text-primary">Our Mission</h2>
            <p className="mt-4 text-asphalt-foreground/80">
              To deliver professional construction solutions through quality workmanship,
              responsible project execution and a commitment to client satisfaction.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl text-primary">Our Vision</h2>
            <p className="mt-4 text-asphalt-foreground/80">
              To be a trusted and respected construction and surface-development company,
              recognised for quality workmanship, dependable service and lasting results.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
          Our operational approach
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl md:text-4xl">
          Practical construction experience, professional service
        </h2>
        <p className="mt-5 max-w-3xl text-muted-foreground">
          We work to understand the requirements of each project before determining the appropriate
          construction approach. Whether the requirement is a new road, a paved area, a driveway or
          another surface-development project, we focus on delivering a solution that balances
          quality, functionality, durability and value. Our processes reduce processing time and
          eliminate unnecessary hold-ups.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Quality", "We believe quality should be evident in every stage of our work."],
            ["Integrity", "We conduct our business with honesty, accountability and professionalism."],
            ["Reliability", "Our clients need a construction partner they can depend on."],
            ["Professionalism", "We approach our work with discipline, attention to detail and respect for our clients."],
          ].map(([title, text]) => (
            <div key={title} className="border-t-4 border-primary bg-card p-6">
              <h3 className="text-lg">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>

        <Link
          to="/services"
          className="mt-10 inline-flex items-center gap-2 font-bold uppercase tracking-wide text-primary"
        >
          See what we do <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}
