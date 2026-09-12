import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Pro Mactar Civil Construction" },
      {
        name: "description",
        content:
          "Terms and conditions governing use of the Pro Mactar website and enquiries for construction and surface-development services.",
      },
      { property: "og:title", content: "Terms & Conditions | Pro Mactar" },
      {
        property: "og:description",
        content: "Terms governing website use and project enquiries with Pro Mactar.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.promactar.co.za/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <>
      <PageHeader
        eyebrow="Legal / Terms"
        title="Terms & Conditions"
        intro="These terms govern use of this website and enquiries made to Pro Mactar Civil Construction (Pty) Ltd."
      />

      <section className="mx-auto max-w-3xl px-4 py-20">
        <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h2 className="text-xl text-foreground">1. Use of this website</h2>
            <p className="mt-3">
              This website provides information about Pro Mactar, our services and our project
              work. Content is provided for general information and may be updated without notice.
              You may not copy, reproduce or misuse any material for commercial purposes without our
              consent.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-foreground">2. Enquiries and quotations</h2>
            <p className="mt-3">
              Information you submit when contacting us is used to respond to your enquiry and, where
              relevant, to prepare a quotation. Any quotation is subject to site inspection, final
              scope agreement and written acceptance.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-foreground">3. Services</h2>
            <p className="mt-3">
              Our services include road construction, asphalt surfacing, brick paving, earthworks
              and site preparation, domestic and industrial driveways, and tennis courts. The final
              approach and deliverables for each project are confirmed in a separate written
              agreement.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-foreground">4. Project gallery images</h2>
            <p className="mt-3">
              Photographs in our gallery were captured by members of our project teams during ongoing
              works. Image quality and resolution may vary, and the selection represents only a small
              sample of our work. All images are authentic Pro Mactar pictures.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-foreground">5. Registration documentation</h2>
            <p className="mt-3">
              Company registration documentation is included for reference and verification only. It
              must not be copied, reproduced, printed, altered, distributed, or presented as an
              official document. Obtain original documentation from the relevant issuing authority
              where official verification is required.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-foreground">6. Liability</h2>
            <p className="mt-3">
              While we strive to keep information accurate, this website is provided on an "as is"
              basis. To the extent permitted by law, Pro Mactar accepts no liability for loss
              arising from reliance on website content outside of a written project agreement.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-foreground">7. Governing law</h2>
            <p className="mt-3">
              These terms are governed by the laws of the Republic of South Africa.
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
