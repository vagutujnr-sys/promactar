import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Handshake, Clock, HardHat } from "lucide-react";
import heroRoad from "@/assets/hero-road.jpg";
import paving from "@/assets/paving.jpg";
import driveway from "@/assets/driveway.jpg";
import tennis from "@/assets/tennis-court.jpg";
import asphalt from "@/assets/asphalt.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pro Mactar | Paving & Road Construction in Gauteng" },
      {
        name: "description",
        content:
          "Established 2013, Pro Mactar delivers brick paving, road construction, driveways and tennis courts for residential, commercial and industrial clients.",
      },
      { property: "og:title", content: "Pro Mactar | Where Quality Meets Construction" },
      {
        property: "og:description",
        content:
          "Brick paving, asphalt and road construction, driveways and tennis courts across Gauteng.",
      },
    ],
  }),
  component: Home,
});

const values = [
  { icon: ShieldCheck, title: "Quality", text: "We believe quality should be evident in every stage of our work." },
  { icon: Handshake, title: "Integrity", text: "We conduct our business with honesty, accountability and professionalism." },
  { icon: Clock, title: "Reliability", text: "Our clients need a construction partner they can depend on." },
  { icon: HardHat, title: "Professionalism", text: "We approach our work with discipline, attention to detail and respect for our clients." },
];

function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden surface-dark">
        <img
          src={heroRoad}
          alt="Road roller compacting a newly laid asphalt road at sunset"
          width={1920}
          height={1088}
          className="animate-slow-zoom absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-asphalt via-asphalt/80 to-transparent" />
        <div className="relative mx-auto flex max-w-6xl flex-col justify-center px-4 py-10 md:py-14">
          <p className="animate-rise text-xs font-bold uppercase tracking-[0.35em] text-primary">
            Est. 2013 &middot; Alberton, Gauteng
          </p>
          <h1
            className="animate-rise mt-4 max-w-3xl text-4xl leading-tight md:text-6xl"
            style={{ animationDelay: "120ms" }}
          >
            Building surfaces.
            <span className="block text-primary">Building confidence.</span>
          </h1>
          <p
            className="animate-rise mt-6 max-w-xl text-lg text-asphalt-foreground/80"
            style={{ animationDelay: "240ms" }}
          >
            Road construction, brick paving, tennis courts and domestic &amp; industrial driveways
            for residential, commercial, industrial and infrastructure environments.
          </p>
          <div
            className="animate-rise mt-9 flex flex-wrap gap-3"
            style={{ animationDelay: "360ms" }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-105"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 font-bold uppercase tracking-wide transition-colors hover:border-primary hover:text-primary"
            >
              Our services
            </Link>
          </div>
        </div>
        <div className="road-dashes relative opacity-40" />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">About us</p>
            <h2 className="mt-3 text-3xl md:text-4xl">More than completing a project</h2>
            <p className="mt-5 text-muted-foreground">
              ProMactar is a construction and surface-development company established in 2013,
              providing practical and professional construction solutions across residential,
              commercial, industrial and infrastructure environments, with a particular focus on
              road construction, paving, driveways, tennis courts and related surface works.
            </p>
            <p className="mt-4 text-muted-foreground">
              From preparation and groundwork through to construction, finishing and completion,
              our objective is to deliver work that meets the needs and expectations of our
              clients.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 font-bold uppercase tracking-wide text-primary"
            >
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-5">
                <v.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-3 text-base">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-dark">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">What we do</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Construction solutions</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { img: paving, title: "Brick Paving", text: "Professional paving solutions for residential, commercial and outdoor spaces." },
              { img: driveway, title: "Domestic Driveways", text: "Durable and attractive driveway construction for residential properties." },
              { img: tennis, title: "Tennis Courts", text: "Professional construction and surface development for tennis and recreational facilities." },
            ].map((s) => (
              <article
                key={s.title}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <img
                  src={s.img}
                  alt={s.title}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-5">
                  <h3 className="text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm text-asphalt-foreground/70">{s.text}</p>
                </div>
              </article>
            ))}
          </div>
          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-2 font-bold uppercase tracking-wide text-primary"
          >
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-2">
        <img
          src={asphalt}
          alt="Asphalt being laid by a paver machine with road crew"
          width={1200}
          height={900}
          loading="lazy"
          className="rounded-2xl object-cover"
        />
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">We are into</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Asphalt &amp; road construction</h2>
          <p className="mt-5 text-muted-foreground">
            Building the roads that move people, business and communities. Our asphalt and road
            construction work combines proper site preparation, quality workmanship and precise
            surface finishing to deliver roads designed for dependable everyday performance.
          </p>
          <Link
            to="/road-construction"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-105"
          >
            Explore road works <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="hazard-stripe">
        <div className="bg-asphalt/90 px-4 py-16 text-center text-asphalt-foreground">
          <h2 className="text-3xl md:text-4xl">Where quality meets construction</h2>
          <p className="mx-auto mt-4 max-w-xl text-asphalt-foreground/75">
            Tell us about your surface, driveway, paving or road project and we will advise on the
            right construction approach.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3 font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-105"
          >
            Contact Pro Mactar <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
