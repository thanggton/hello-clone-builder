import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { ContactCTA, PageHero, SiteLayout } from "@/components/site/Layout";
import { pageMeta, services } from "@/components/site/content";
export const Route = createFileRoute("/solutions")({
  head: () =>
    pageMeta(
      "Demand-Side Platform",
      "Real-time ad buying and mobile application distribution for APAC enterprises and agencies.",
    ),
  component: SolutionsPage,
});
function SolutionsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Demand-Side Platform"
        title="From advertiser demand to mobile audiences."
        description="GetHello automates digital media buying and connects with a mobile application network to distribute advertising across international markets."
      />
      <section className="section-space">
        <div className="section-container grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.number} className="feature-card">
              <span className="eyebrow text-muted-foreground">{s.number}</span>
              <h2 className="mt-6 text-3xl font-medium">{s.title}</h2>
              <p className="mt-5 leading-7 text-muted-foreground">{s.description}</p>
              <ul className="mt-8 space-y-4">
                {s.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm">
                    <Check className="shrink-0" size={17} />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="section-space bg-secondary">
        <div className="section-container">
          <p className="eyebrow">Who we serve</p>
          <h2 className="mt-5 text-4xl font-medium tracking-tight">
            Built for APAC. Connected internationally.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Enterprise advertisers",
                text: "Plan digital advertising around your business goals, audiences, and target markets across APAC and beyond.",
              },
              {
                title: "Agencies",
                text: "Coordinate media buying and campaign delivery for clients through a single demand-side platform.",
              },
              {
                title: "Mobile app publishers",
                text: "Connect available advertising placements in your applications with advertiser demand and international campaigns.",
              },
            ].map((x) => (
              <div key={x.title}>
                <h3 className="text-xl font-medium">{x.title}</h3>
                <p className="mt-4 leading-7 text-muted-foreground">{x.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-muted-foreground">
            Inventory, formats, market availability, and campaign terms are agreed for each
            engagement.
          </p>
        </div>
      </section>
      <ContactCTA />
    </SiteLayout>
  );
}
