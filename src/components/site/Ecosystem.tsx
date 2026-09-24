import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Building2, Users } from "lucide-react";
import { appExamples, partners } from "./content";

export function Partners() {
  return (
    <section className="border-y border-border bg-white py-12" aria-labelledby="partner-heading">
      <div className="section-container">
        <h2 id="partner-heading" className="eyebrow text-center text-muted-foreground">
          Partnered with
        </h2>
        <div className="mx-auto mt-8 grid max-w-3xl gap-6 sm:grid-cols-3">
          {partners.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-20 items-center justify-center gap-4 rounded-lg border border-border px-6 transition-colors hover:bg-secondary"
            >
              <img
                src={p.logo}
                alt={`${p.name} logo`}
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-semibold tracking-tight">{p.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BusinessModel() {
  return (
    <section className="section-space bg-secondary" id="business-model">
      <div className="section-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Our business model</p>
            <h2>
              One platform.
              <br />
              Two sides of the connection.
            </h2>
          </div>
          <p>
            GetHello combines a B2B demand-side platform for APAC enterprises with a B2C focus on
            the people using social applications in international markets.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="feature-card">
            <Building2 size={30} />
            <p className="eyebrow mt-8">B2B / APAC enterprises</p>
            <h3 className="mt-4 text-3xl font-medium">Reach your next audience.</h3>
            <p className="mt-5 leading-8 text-muted-foreground">
              Enterprises and agencies across Asia Pacific use GetHello to plan campaigns and buy
              digital advertising through the DSP. The platform connects their demand to
              participating mobile applications and media inventory.
            </p>
            <Link
              to="/solutions"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold"
            >
              Explore the DSP <ArrowUpRight size={17} />
            </Link>
          </article>
          <article className="feature-card">
            <Users size={30} />
            <p className="eyebrow mt-8">B2C / International app users</p>
            <h3 className="mt-4 text-3xl font-medium">Be part of everyday discovery.</h3>
            <p className="mt-5 leading-8 text-muted-foreground">
              The consumer side centres on people using social apps abroad: making friends,
              chatting, dating, and joining communities. Participating apps connect these everyday
              experiences with advertiser campaigns.
            </p>
            <Link
              to="/brands"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold"
            >
              Explore the app landscape <ArrowUpRight size={17} />
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

export function AppShowcase() {
  return (
    <section className="section-space">
      <div className="section-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">B2C / Social app landscape</p>
            <h2>
              Where conversations
              <br />
              become connections.
            </h2>
          </div>
          <p>
            Chat, friendship, and social discovery are the consumer categories behind our
            international audience focus. Explore apps built around meeting people and starting
            conversations.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {appExamples.map((app) => (
            <article key={app.name} className="product-card">
              <span className="eyebrow text-muted-foreground">{app.category}</span>
              <div
                className="my-8 grid h-20 w-20 place-items-center rounded-2xl text-2xl font-bold"
                style={{ backgroundColor: app.color }}
                aria-hidden="true"
              >
                {app.initial}
              </div>
              <h3 className="text-3xl font-medium">{app.name}</h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">
                {app.description}
              </p>
              <a
                href={app.url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
              >
                View on Google Play
                <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
