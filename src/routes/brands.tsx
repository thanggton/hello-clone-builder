import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { ContactCTA, PageHero, SiteLayout } from "@/components/site/Layout";
import { pageMeta, products } from "@/components/site/content";
export const Route = createFileRoute("/brands")({
  head: () =>
    pageMeta(
      "Workflow Intelligence Products",
      "Explore GetHello product capabilities for workflow development, knowledge intelligence, and workflow insights.",
    ),
  component: ProductsPage,
});
function ProductsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Workflow intelligence products"
        title="A foundation for more intelligent work."
        description="Alongside our custom AI services, GetHello offers workflow intelligence products to help teams develop connected processes and improve how work gets done."
      />
      <section className="section-space">
        <div className="section-container space-y-8">
          {products.map((p) => (
            <article
              key={p.number}
              className="grid gap-10 rounded-xl border border-border bg-card p-8 md:grid-cols-2 md:p-12"
            >
              <div>
                <p className="eyebrow">
                  {p.number} / {p.category}
                </p>
                <h2 className="mt-6 text-3xl font-medium tracking-tight md:text-4xl">{p.title}</h2>
                <p className="mt-5 leading-8 text-muted-foreground">{p.description}</p>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold"
                >
                  Discuss this product <ArrowUpRight size={17} />
                </Link>
              </div>
              <div className="rounded-lg bg-secondary p-7">
                <p className="text-lg font-medium leading-7">{p.useCase}</p>
                <ul className="mt-7 space-y-5">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                      <Check size={18} className="mt-1 shrink-0 text-foreground" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
          <p className="text-sm leading-7 text-muted-foreground">
            Product capabilities are configured to your requirements. Contact us to discuss
            availability, integrations, deployment options, and a demonstration for your workflow.
          </p>
        </div>
      </section>
      <ContactCTA />
    </SiteLayout>
  );
}
