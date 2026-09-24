import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { PageHero, SiteLayout } from "@/components/site/Layout";
import { company, pageMeta } from "@/components/site/content";
export const Route = createFileRoute("/contact")({
  head: () =>
    pageMeta(
      "Contact",
      "Discuss DSP campaigns and mobile app distribution with GetHello by Sabupps. Contact yori@sabupps.com.",
    ),
  component: ContactPage,
});
function ContactPage() {
  const [prepared, setPrepared] = useState(false);
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `GetHello enquiry: ${data.get("interest")}`;
    const body = `Name: ${data.get("name")}\nWork email: ${data.get("email")}\nCompany: ${data.get("company")}\n\n${data.get("message")}`;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  }
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Let’s connect"
        title="Where do you want to reach next?"
        description="Tell us about your advertising goals, APAC business, international audiences, or mobile application network."
      />
      <section className="section-space">
        <div className="section-container grid gap-16 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="eyebrow">Contact GetHello</p>
            <h2 className="mt-5 text-3xl font-medium">A conversation starts here.</h2>
            <p className="mt-5 leading-7 text-muted-foreground">
              For campaign enquiries, DSP demonstrations, and publisher partnerships, contact the
              Sabupps team.
            </p>
            <a
              href={`mailto:${company.email}`}
              className="mt-8 inline-flex items-center gap-2 text-xl font-medium underline decoration-border underline-offset-8"
            >
              {company.email}
              <ArrowUpRight size={18} />
            </a>
            <div className="mt-12 border-t border-border pt-8">
              <h3 className="font-semibold">{company.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">UEN {company.uen}</p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Registered address
              </p>
              <p className="mt-3 max-w-sm text-sm leading-7">{company.address}</p>
              <a
                href={company.website}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm underline underline-offset-4"
              >
                sabupps.com <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
          <form
            onSubmit={prepareEmail}
            className="rounded-xl border border-border bg-secondary p-6 sm:p-10"
          >
            <h2 className="text-2xl font-medium">Tell us what you have in mind.</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <Field label="Your name" name="name" required />
              <Field label="Work email" name="email" type="email" required />
              <Field label="Company" name="company" />
              <div>
                <label htmlFor="interest" className="form-label">
                  I’m interested in
                </label>
                <select id="interest" name="interest" className="form-input">
                  <option>DSP campaigns for APAC enterprises</option>
                  <option>Agency media buying</option>
                  <option>Mobile app distribution</option>
                  <option>Partnerships</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <label htmlFor="message" className="form-label mt-6">
              Your campaign or partnership
            </label>
            <textarea
              id="message"
              name="message"
              required
              maxLength={4000}
              rows={5}
              className="form-input"
              placeholder="Which markets, audiences, and campaign goals would you like to discuss?"
            />
            <p className="mt-4 text-xs leading-6 text-muted-foreground">
              This form prepares a draft in your email app. Review and send it there. You can also
              email us directly.
            </p>
            <button type="submit" className="button-primary mt-6">
              Prepare email <ArrowUpRight size={17} />
            </button>
            {prepared && (
              <p role="status" className="mt-5 text-sm leading-7">
                Your email app was requested. Your enquiry has not been sent by this website. If no
                draft appeared, email{" "}
                <a href={`mailto:${company.email}`} className="underline">
                  {company.email}
                </a>{" "}
                directly.
              </p>
            )}
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="form-label">
        {label}
        {required ? " *" : ""}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={200}
        className="form-input"
        autoComplete={name === "name" ? "name" : name === "email" ? "email" : "organization"}
      />
    </div>
  );
}
