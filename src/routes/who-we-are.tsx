import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ContactCTA, PageHero, SiteLayout } from "@/components/site/Layout";
import { company, pageMeta } from "@/components/site/content";
export const Route = createFileRoute("/who-we-are")({
  head: () =>
    pageMeta(
      "About GetHello",
      "GetHello is a product of SABUPP PTE. LTD., a Singapore company incorporated on 25 November 2022, UEN 202242176K.",
    ),
  component: AboutPage,
});
function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="GetHello by Sabupps"
        title="Connecting businesses, apps, and people."
        description="GetHello is a demand-side platform and a product of Sabupps. Our B2B and B2C model connects APAC enterprises with users of mobile applications in international markets."
      />
      <section className="section-space">
        <div className="section-container grid gap-14 md:grid-cols-2">
          <div>
            <p className="eyebrow">Our focus</p>
            <h2 className="mt-5 text-4xl font-medium tracking-tight">
              Help brands reach
              <br />
              their next audience.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-muted-foreground">
            <p>
              GetHello automates real-time buying of digital ad space across websites, apps, and
              media channels. By connecting with a mobile application network, we help distribute
              advertiser campaigns to users abroad.
            </p>
            <p>
              GetHello brings this focus into the Sabupps ecosystem, alongside its cloud services,
              application development, and advertising operations.
            </p>
            <a
              href={company.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-base font-semibold text-foreground"
            >
              Explore Sabupps <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
      <section className="section-space bg-secondary">
        <div className="section-container">
          <p className="eyebrow">Our approach</p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "B2B: APAC enterprises",
                text: "Enterprises and agencies use the DSP to connect campaign goals with digital media buying and distribution.",
              },
              {
                title: "B2C: international users",
                text: "Our consumer focus spans the people using social discovery, friendship, chat, and dating applications overseas.",
              },
              {
                title: "A connected mobile network",
                text: "Mobile application distribution brings advertiser campaigns into participating app experiences, with results informing ongoing optimisation.",
              },
            ].map((x) => (
              <div key={x.title} className="border-t border-border pt-6">
                <h2 className="text-xl font-medium">{x.title}</h2>
                <p className="mt-4 leading-7 text-muted-foreground">{x.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="section-container grid gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow">The company behind GetHello</p>
            <h2 className="mt-5 text-3xl font-medium">{company.name}</h2>
            <p className="mt-5 leading-7 text-muted-foreground">
              Incorporated in Singapore on 25 November 2022. GetHello is a product of Sabupps; the
              operating legal entity is SABUPP PTE. LTD.
            </p>
          </div>
          <dl className="divide-y divide-border text-sm">
            {[
              ["Registration number (UEN)", company.uen],
              ["Company website", "sabupps.com"],
            ].map(([label, value]) => (
              <div key={label} className="py-5 first:pt-0">
                <dt className="text-muted-foreground">{label}</dt>
                <dd className="mt-2 leading-7">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <ContactCTA />
    </SiteLayout>
  );
}
