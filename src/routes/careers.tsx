import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero, SiteLayout } from "@/components/site/Layout";
import { company, pageMeta } from "@/components/site/content";
export const Route = createFileRoute("/careers")({
  head: () =>
    pageMeta(
      "Work with us",
      "Connect with Sabupps about opportunities to work on GetHello’s demand-side platform and mobile advertising network.",
    ),
  component: CareersPage,
});
function CareersPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Work with us"
        title="Build the next connection in digital advertising."
        description="Interested in programmatic advertising, mobile applications, or international audience growth? Get in touch with Sabupps."
      />
      <section className="section-space">
        <div className="section-container max-w-3xl">
          <p className="eyebrow">Connect with the team</p>
          <h2 className="mt-5 text-3xl font-medium">Tell us what you’d like to build.</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            For current opportunities and collaborations, contact us with your background, relevant
            work, and areas of interest. Specific openings and engagement terms are discussed
            directly with the team.
          </p>
          <a
            href={`mailto:${company.email}?subject=GetHello%20-%20Working%20together`}
            className="button-primary mt-8"
          >
            Contact Sabupps <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
