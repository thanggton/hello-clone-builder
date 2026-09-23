import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { company } from "./content";

const navLinks = [
  { label: "Solutions", to: "/solutions" as const },
  { label: "Products", to: "/brands" as const },
  { label: "About", to: "/who-we-are" as const },
  { label: "Contact", to: "/contact" as const },
];

function Logo() {
  return (
    <Link to="/" aria-label="GetHello home" className="flex items-center gap-3">
      <span className="logo-mark" aria-hidden="true">
        ✳
      </span>
      <span className="flex flex-col">
        <span className="text-xl font-bold tracking-tight">
          GetHello<span className="text-primary">.</span>
        </span>
        <span className="text-[10px] uppercase tracking-[0.18em] opacity-60">
          A product of Sabupps
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo />
        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="button-primary !min-h-10 !px-5">
            Let’s talk <ArrowUpRight size={16} />
          </Link>
        </nav>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          className="rounded p-2 md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="grid gap-1 border-t border-border px-6 py-4 md:hidden"
        >
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="rounded px-3 py-3 text-sm hover:bg-secondary"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="dark-panel py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
              AI agentic solutions and workflow intelligence. Built around the way your business
              works.
            </p>
            <a
              href={company.website}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm text-primary"
            >
              Meet Sabupps <ArrowUpRight size={15} />
            </a>
          </div>
          <div>
            <h2 className="text-sm font-semibold">Explore</h2>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/careers" className="hover:text-white">
                  Work with us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold">{company.name}</h2>
            <p className="mt-5 text-sm text-white/60">UEN {company.uen}</p>
            <p className="mt-3 text-sm leading-7 text-white/60">{company.address}</p>
            <a className="mt-4 inline-block text-sm text-primary" href={`mailto:${company.email}`}>
              {company.email}
            </a>
          </div>
        </div>
        <div className="mt-14 flex flex-wrap justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50">
          <span>
            © {new Date().getFullYear()} {company.name} All rights reserved.
          </span>
          <span>GetHello is a product of Sabupps.</span>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="dark-panel relative overflow-hidden">
      <div className="hero-grid absolute inset-0 opacity-25" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <p className="eyebrow text-primary">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.08] tracking-tight md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">{description}</p>
        )}
      </div>
    </section>
  );
}

export function ContactCTA() {
  return (
    <section className="border-t border-border bg-secondary py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center">
        <div>
          <p className="eyebrow">Start with one workflow</p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
            What could your team do next?
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Tell us where work gets stuck. We’ll explore how AI can help.
          </p>
        </div>
        <Link to="/contact" className="button-primary shrink-0">
          Discuss your project <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
}
