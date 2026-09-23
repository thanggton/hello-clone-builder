import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Database, GitBranch, Sparkles } from "lucide-react";
import { ContactCTA, SiteLayout } from "@/components/site/Layout";
import { deliverySteps, pageMeta, products, services } from "@/components/site/content";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta(
      "AI that moves work forward",
      "GetHello, a product of Sabupps, builds custom AI agentic solutions and workflow intelligence products for business teams.",
    ),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <section className="dark-panel relative isolate overflow-hidden">
        <div className="hero-grid absolute inset-0 opacity-30" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.2fr_1fr] lg:py-32">
          <div>
            <p className="eyebrow flex items-center gap-3 text-primary">
              <span className="h-2 w-2 rounded-full bg-primary" />
              GetHello · A product of Sabupps
            </p>
            <h1 className="mt-7 text-5xl font-medium leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Intelligence that
              <br />
              moves work
              <br />
              <span className="text-primary">forward.</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-8 text-white/65">
              We build AI agents that work with your people, connect to your systems, and turn
              complex workflows into purposeful action.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="button-primary">
                Build with us <ArrowUpRight size={18} />
              </Link>
              <Link to="/brands" className="button-outline">
                Explore products <ArrowRight size={18} />
              </Link>
            </div>
            <p className="mt-10 text-xs tracking-wide text-white/45">
              CUSTOM AI SOLUTIONS &nbsp; / &nbsp; WORKFLOW INTELLIGENCE
            </p>
          </div>
          <div
            className="workflow-demo rounded-2xl border border-white/15 bg-[#142b29] p-6 shadow-2xl sm:p-8"
            aria-label="Illustrative AI workflow: business request, knowledge and context, agent plan, human approval, completed action"
          >
            <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
              <span className="text-sm font-medium">A smarter path from ask to action</span>
              <span className="rounded-full border border-primary/30 px-2 py-1 text-[10px] text-primary">
                ILLUSTRATION
              </span>
            </div>
            <div className="workflow-node">
              <span className="node-icon">
                <GitBranch size={19} />
              </span>
              <div>
                <p className="text-xs text-white/45">01 / TRIGGER</p>
                <p className="mt-1 text-sm">A new business request</p>
              </div>
            </div>
            <div className="workflow-line" />
            <div className="workflow-node">
              <span className="node-icon">
                <Database size={19} />
              </span>
              <div>
                <p className="text-xs text-white/45">02 / CONTEXT</p>
                <p className="mt-1 text-sm">Your knowledge. Your systems.</p>
              </div>
            </div>
            <div className="workflow-line" />
            <div className="workflow-node !border-primary/40 !bg-primary/10">
              <span className="node-icon !bg-primary !text-[#102522]">
                <Sparkles size={19} />
              </span>
              <div>
                <p className="text-xs text-primary">03 / REASON & ACT</p>
                <p className="mt-1 text-sm">An agent builds the next step</p>
              </div>
            </div>
            <div className="workflow-line" />
            <div className="flex items-center gap-3 rounded-lg border border-dashed border-white/20 px-4 py-3">
              <span className="h-2 w-2 rounded-full bg-amber-300" />
              <p className="text-xs text-white/70">Human approval where it matters</p>
            </div>
            <div className="workflow-line" />
            <div className="flex items-center gap-3 text-sm text-primary">
              <Check size={18} />
              Action completed. Outcome recorded.
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 px-6 py-6 text-xs tracking-wide text-white/50">
            <span>DESIGNED AROUND YOUR BUSINESS</span>
            <span>Connected systems</span>
            <span>Human oversight</span>
            <span>Continuous improvement</span>
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="section-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">What we do</p>
              <h2>
                From AI potential
                <br />
                to practical capability.
              </h2>
            </div>
            <p>
              GetHello combines bespoke engineering with workflow intelligence products. Start with
              a specific business challenge, then build the right solution around it.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {services.map((s) => (
              <article key={s.number} className="feature-card">
                <span className="eyebrow text-muted-foreground">{s.number} / SOLUTIONS</span>
                <h3 className="mt-8 text-2xl font-medium tracking-tight">{s.title}</h3>
                <p className="mt-4 leading-7 text-muted-foreground">{s.description}</p>
                <Link
                  to="/solutions"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
                >
                  Explore solution <ArrowUpRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space bg-secondary">
        <div className="section-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Product capabilities</p>
              <h2>
                Build. Connect.
                <br />
                Keep improving.
              </h2>
            </div>
            <p>
              Explore our workflow intelligence products for developing, running, and improving
              AI-enabled business processes. Discuss the right configuration for your use case.
            </p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {products.map((p) => (
              <article key={p.number} className="product-card">
                <span className="eyebrow text-muted-foreground">{p.category}</span>
                <div className="my-8 flex h-24 items-center gap-3" aria-hidden="true">
                  <span className="product-tile">{p.number}</span>
                  <span className="h-px flex-1 bg-border" />
                  <span className="product-tile !bg-foreground !text-background">
                    <ArrowUpRight />
                  </span>
                </div>
                <h3 className="text-2xl font-medium">{p.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">
                  {p.description}
                </p>
                <Link
                  to="/brands"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold"
                >
                  Explore capabilities <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="section-container">
          <p className="eyebrow">How we work</p>
          <h2 className="mt-5 text-4xl font-medium tracking-tight md:text-5xl">
            A clear path to useful AI.
          </h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {deliverySteps.map((s, i) => (
              <div key={s.title} className="border-t border-border pt-6">
                <span className="text-sm text-muted-foreground">0{i + 1}</span>
                <h3 className="mt-8 text-2xl font-medium">{s.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </SiteLayout>
  );
}
