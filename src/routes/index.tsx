import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, BarChart3, Megaphone, Radio, Smartphone } from "lucide-react";
import { ContactCTA, SiteLayout } from "@/components/site/Layout";
import { AppShowcase, BusinessModel, Partners } from "@/components/site/Ecosystem";
import { deliverySteps, pageMeta, services } from "@/components/site/content";
export const Route = createFileRoute("/")({
  head: () =>
    pageMeta(
      "A DSP for a connected mobile world",
      "GetHello is a demand-side platform by Sabupps, connecting APAC advertisers with international audiences through mobile applications and digital media.",
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
            <p className="eyebrow text-primary">GetHello · A product of Sabupps</p>
            <h1 className="mt-7 text-5xl font-medium leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Your next audience.
              <br />
              <span className="text-primary">Connected.</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-8 text-white/70">
              A demand-side platform connecting APAC advertisers with international audiences
              through a network of mobile applications and digital media.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="button-primary">
                Start a campaign <ArrowUpRight size={18} />
              </Link>
              <Link to="/solutions" className="button-outline">
                How it works <ArrowRight size={18} />
              </Link>
            </div>
            <p className="mt-10 text-xs tracking-wide text-white/55">
              REAL-TIME MEDIA BUYING / MOBILE APP DISTRIBUTION
            </p>
          </div>
          <div
            className="workflow-demo rounded-2xl border border-white/15 bg-[#142b29] p-6 shadow-2xl sm:p-8"
            aria-label="Ad distribution: APAC advertiser sets a campaign, GetHello DSP bids, a mobile app network distributes ads, international users see ads, campaign results feed optimisation"
          >
            <div className="mb-8 border-b border-white/10 pb-5">
              <span className="text-sm font-medium">From advertiser to audience</span>
              <p className="mt-2 text-xs text-white/50">An illustrative campaign journey</p>
            </div>
            {[
              { icon: Megaphone, label: "01 / DEMAND", title: "APAC enterprises & agencies" },
              { icon: Radio, label: "02 / REAL-TIME BUYING", title: "GetHello DSP" },
              { icon: Smartphone, label: "03 / DISTRIBUTION", title: "Mobile application network" },
              {
                icon: BarChart3,
                label: "04 / REACH & LEARN",
                title: "International users & campaign results",
              },
            ].map((s, i) => (
              <div key={s.label}>
                {i > 0 && <div className="workflow-line" />}
                <div
                  className={`workflow-node ${i === 1 ? "!border-primary/40 !bg-primary/10" : ""}`}
                >
                  <span className="node-icon">
                    <s.icon size={19} />
                  </span>
                  <div>
                    <p className="text-xs text-white/60">{s.label}</p>
                    <p className="mt-1 text-sm">{s.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 px-6 py-6 text-xs tracking-wide text-white/60">
            <span>BUILT FOR ADVERTISERS. CONNECTED TO PEOPLE.</span>
            <span>B2B · APAC enterprises</span>
            <span>B2C · International app users</span>
          </div>
        </div>
      </section>
      <Partners />
      <section className="section-space">
        <div className="section-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">What is GetHello?</p>
              <h2>
                One place to buy.
                <br />
                More ways to reach.
              </h2>
            </div>
            <p>
              GetHello is a demand-side platform (DSP): an automated software tool that advertisers
              and agencies use to buy digital ad space across multiple websites, apps, and media
              channels in real time.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {services.map((s) => (
              <article key={s.number} className="feature-card">
                <span className="eyebrow text-muted-foreground">{s.number} / PLATFORM</span>
                <h3 className="mt-8 text-2xl font-medium tracking-tight">{s.title}</h3>
                <p className="mt-4 leading-7 text-muted-foreground">{s.description}</p>
                <Link
                  to="/solutions"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
                >
                  Explore the platform <ArrowUpRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <BusinessModel />
      <section className="section-space">
        <div className="section-container">
          <p className="eyebrow">How ads reach people</p>
          <h2 className="mt-5 text-4xl font-medium tracking-tight md:text-5xl">
            From campaign brief to app screen.
          </h2>
          <p className="mt-6 max-w-2xl leading-8 text-muted-foreground">
            GetHello combines real-time media buying with mobile application distribution. The DSP
            connects advertiser demand to available placements across participating apps and media
            channels.
          </p>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
      <AppShowcase />
      <ContactCTA />
    </SiteLayout>
  );
}
