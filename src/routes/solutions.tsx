import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { ContactCTA, PageHero, SiteLayout } from "@/components/site/Layout";
import { pageMeta, services } from "@/components/site/content";
export const Route = createFileRoute("/solutions")({
  head: () =>
    pageMeta(
      "AI Agentic Solutions",
      "Custom AI agents, knowledge assistants, workflow automation, and deployment services from GetHello by Sabupps.",
    ),
  component: SolutionsPage,
});
function SolutionsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="AI Agentic Solutions"
        title="Your business context. Our engineering. Useful AI."
        description="We design and build AI solutions around your processes, people, and systems, from a first use case to an integrated operational workflow."
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
          <p className="eyebrow">Where to begin</p>
          <h2 className="mt-5 text-4xl font-medium tracking-tight">
            Start with the work, not the model.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Customer operations",
                text: "Classify requests, retrieve relevant knowledge, draft responses, and route exceptions to the right person.",
              },
              {
                title: "Internal operations",
                text: "Extract information from documents, coordinate approvals, and keep business systems in sync.",
              },
              {
                title: "Team knowledge",
                text: "Help teams search internal information and turn trusted context into actionable next steps.",
              },
            ].map((x) => (
              <div key={x.title}>
                <h3 className="text-xl font-medium">{x.title}</h3>
                <p className="mt-4 leading-7 text-muted-foreground">{x.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-muted-foreground">
            Illustrative use cases. Scope, integrations, and success criteria are defined with each
            client.
          </p>
        </div>
      </section>
      <ContactCTA />
    </SiteLayout>
  );
}
