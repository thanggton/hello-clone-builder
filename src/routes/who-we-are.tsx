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
        title="Technology with a clear job to do."
        description="GetHello is a product of Sabupps, focused on AI agentic solutions and workflow intelligence for businesses."
      />
      <section className="section-space">
        <div className="section-container grid gap-14 md:grid-cols-2">
          <div>
            <p className="eyebrow">Our focus</p>
            <h2 className="mt-5 text-4xl font-medium tracking-tight">
              Help people do
              <br />
              their best work.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-muted-foreground">
            <p>
              We build AI agents, connected workflows, and practical tools that support the way
              teams operate. Our work starts with understanding a business process and finding where
              intelligence can make it more useful.
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
                title: "Business context first",
                text: "Choose a real process and define what success looks like before choosing the technology.",
              },
              {
                title: "People stay in control",
                text: "Design clear permissions, review points, and escalation paths into the workflow.",
              },
              {
                title: "Built to improve",
                text: "Make outcomes visible so teams can evaluate what works and refine what comes next.",
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
              ["Registered address", company.address],
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
