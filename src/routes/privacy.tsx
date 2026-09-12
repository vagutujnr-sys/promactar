import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Pro Mactar Civil Construction" },
      {
        name: "description",
        content:
          "How Pro Mactar Civil Construction collects, uses and protects information provided through this website and project enquiries.",
      },
      { property: "og:title", content: "Privacy Policy | Pro Mactar" },
      {
        property: "og:description",
        content: "Pro Mactar privacy policy for website visitors and project enquiries.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.promactar.co.za/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <PageHeader
        eyebrow="Legal / Privacy"
        title="Privacy Policy"
        intro="This policy explains how Pro Mactar Civil Construction (Pty) Ltd handles information you provide when you contact us or use this website."
      />

      <section className="mx-auto max-w-3xl px-4 py-20">
        <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h2 className="text-xl text-foreground">1. Who we are</h2>
            <p className="mt-3">
              Pro Mactar Civil Construction (Pty) Ltd, CK Reg No. 2013/035446/07, is a construction
              and surface-development company established in 2013 and based at KG Centre, Van
              Riebeeck Avenue, Alberton 1450, Gauteng, South Africa.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-foreground">2. Information we collect</h2>
            <p className="mt-3">
              When you make a project enquiry, request a site visit or contact us by phone or email,
              we may collect your name, contact details, and any information you choose to share
              about the proposed works (such as the site location, surface type or scope).
            </p>
          </div>

          <div>
            <h2 className="text-xl text-foreground">3. How we use information</h2>
            <p className="mt-3">We use the information you provide to:</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6">
              <li>Respond to enquiries and prepare quotations.</li>
              <li>Plan and carry out site visits and assessments.</li>
              <li>Deliver our construction and surface-development services.</li>
              <li>Keep records required for our business operations.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl text-foreground">4. Sharing of information</h2>
            <p className="mt-3">
              We do not sell your information. We may share it only where necessary to deliver a
              project, with parties directly involved in the works, or where required by law.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-foreground">5. Company registration material</h2>
            <p className="mt-3">
              Registration documentation shown in our corporate profile is included for reference
              and verification purposes only and must not be copied, reproduced or used as an
              official document.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-foreground">6. Contacting us</h2>
            <p className="mt-3">
              To ask about information we hold, or to raise a privacy concern, email
              info@promactar.co.za or call +27 74 287 8233.
            </p>
          </div>
        </div>

        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-2 font-bold uppercase tracking-wide text-primary"
        >
          Contact us
        </Link>
      </section>
    </>
  );
}
