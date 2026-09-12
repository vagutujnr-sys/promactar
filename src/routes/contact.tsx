import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Globe, FileText } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Get In Touch | Pro Mactar Civil Construction" },
      {
        name: "description",
        content:
          "Contact Pro Mactar in Alberton, Gauteng: +27 74 287 8233 or info@promactar.co.za for paving and road construction enquiries.",
      },
      { property: "og:title", content: "Get In Touch | Pro Mactar" },
      {
        property: "og:description",
        content: "KG Centre, Van Riebeeck Avenue, Alberton 1450, Gauteng ZA.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.promactar.co.za/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Let's talk about your project"
        intro="Reach the ProMactar team by phone or email, or visit our office in Alberton."
      />

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-20 md:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-7">
          <MapPin className="h-6 w-6 text-primary" />
          <h2 className="mt-4 text-lg">Physical Address</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            KG Centre
            <br />
            Van Riebeeck Avenue
            <br />
            Alberton 1450
            <br />
            Gauteng ZA
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-7">
          <Phone className="h-6 w-6 text-primary" />
          <h2 className="mt-4 text-lg">Cell / Mobile</h2>
          <a
            href="tel:+27742878233"
            className="mt-2 inline-block text-sm font-semibold text-foreground hover:text-primary"
          >
            +27 74 287 8233
          </a>
        </div>

        <div className="rounded-2xl border border-border bg-card p-7">
          <Mail className="h-6 w-6 text-primary" />
          <h2 className="mt-4 text-lg">Email Address</h2>
          <div className="mt-2 flex flex-col text-sm">
            <a href="mailto:info@promactar.co.za" className="hover:text-primary">
              info@promactar.co.za
            </a>
            <a href="mailto:promactar@gmail.com" className="hover:text-primary">
              promactar@gmail.com
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="surface-dark rounded-2xl p-8">
            <Globe className="h-6 w-6 text-primary" />
            <h2 className="mt-4 text-xl">www.promactar.co.za</h2>
            <p className="mt-3 text-sm text-asphalt-foreground/75">
              Pro Mactar Civil Construction (Pty) Ltd
              <br />
              Registration Number: 2013/035446/07
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
