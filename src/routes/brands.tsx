import { createFileRoute } from "@tanstack/react-router";
import { ContactCTA, PageHero, SiteLayout } from "@/components/site/Layout";
import { AppShowcase, BusinessModel } from "@/components/site/Ecosystem";
import { pageMeta } from "@/components/site/content";
export const Route = createFileRoute("/brands")({
  head: () =>
    pageMeta(
      "Mobile Apps & Audiences",
      "Explore GetHello’s B2C focus on international social app users, with Hiyo, BFF, and Yubo as independent category examples.",
    ),
  component: AppsPage,
});
function AppsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Mobile apps & audiences"
        title="Every connection starts with a hello."
        description="GetHello’s B2C focus is on people who use social applications in international markets: to chat, discover someone new, find friendship, and build community."
      />
      <AppShowcase />
      <BusinessModel />
      <ContactCTA />
    </SiteLayout>
  );
}
