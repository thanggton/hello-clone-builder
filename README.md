# GetHello by Sabupps

GetHello is a product of SABUPP PTE. LTD. The website presents custom AI agentic solutions and workflow intelligence product capabilities.

## Local development

Use Node.js 22.12+ and Bun. Install the committed dependency versions:

```sh
bun install --frozen-lockfile
bun run dev
```

Open the URL printed by Vite. Before committing:

```sh
bun run lint
bunx tsc --noEmit
bun run build
```

## Website content

- `src/components/site/content.ts`: company details, services, product capabilities, and metadata helper.
- `src/components/site/Layout.tsx`: responsive navigation, footer, and shared sections.
- `src/routes/`: TanStack file routes. The existing `/brands` URL now presents products; `/solutions` presents services.
- `src/styles.css`: site styling.

The contact form opens an email draft addressed to `yori@sabupps.com`. It does not send email or persist submissions. A configured email application is required; the direct email link provides an alternative.

## Editorial references

Company name, UEN (202242176K), incorporation date (25 November 2022), and registered address were supplied in the SABUPP corporate profile. The company website, https://sabupps.com, supplies the contact email and parent-company context. https://pulsarai-sg.com was used as a reference for presenting enterprise AI services, not as a source of GetHello customers, performance figures, partnerships, or certifications.

The product portfolio uses descriptive capability categories rather than unconfirmed product names, pricing, or launch dates. Confirm commercial availability and deployment details with the Sabupps team.
