export const company = {
  name: "SABUPP PTE. LTD.",
  brand: "Sabupps",
  uen: "202242176K",
  website: "https://sabupps.com",
  email: "yori@sabupps.com",
  address: "260B Ang Mo Kio Street 21, #18-153, Kebun Baru Court, Singapore 562260",
};

export const services = [
  {
    number: "01",
    title: "Custom AI agents",
    description:
      "Purpose-built agents that understand your business context, use your tools, and take action within clearly defined boundaries.",
    features: [
      "Agent architecture and tool integration",
      "Multi-step task planning and execution",
      "Human review for consequential actions",
    ],
  },
  {
    number: "02",
    title: "Knowledge & AI assistants",
    description:
      "Connect your documents and business knowledge to assistants that help teams find answers and move work forward.",
    features: [
      "Knowledge retrieval and source references",
      "Document processing and structured extraction",
      "Access-aware integration with your systems",
    ],
  },
  {
    number: "03",
    title: "Intelligent workflow automation",
    description:
      "Bring rules, AI decisions, and human approvals into one connected process across your existing applications.",
    features: [
      "CRM, help desk, and internal tool integrations",
      "Approval routing and exception handling",
      "Execution history and operational visibility",
    ],
  },
  {
    number: "04",
    title: "Deployment & continuous improvement",
    description:
      "Take a focused pilot into everyday operations with evaluation, monitoring, and an improvement plan built around your goals.",
    features: [
      "Use-case discovery and pilot design",
      "Quality, cost, and reliability evaluation",
      "Deployment support and ongoing iteration",
    ],
  },
];

export const products = [
  {
    number: "01",
    title: "Workflow development",
    category: "BUILD & ORCHESTRATE",
    description:
      "Create intelligent workflows that connect triggers, AI agents, business rules, and human approvals.",
    features: [
      "Reusable workflow steps and integrations",
      "Decision routing and approval checkpoints",
      "Execution traces for debugging and refinement",
    ],
    useCase: "From an incoming request to a reviewed, completed task.",
  },
  {
    number: "02",
    title: "Knowledge intelligence",
    category: "CONNECT & UNDERSTAND",
    description: "Make business knowledge useful inside the workflows where your team needs it.",
    features: [
      "Document ingestion and retrieval",
      "Contextual answers with source references",
      "Knowledge-assisted task execution",
    ],
    useCase: "From scattered documents to answers grounded in your business.",
  },
  {
    number: "03",
    title: "Workflow insights",
    category: "OBSERVE & IMPROVE",
    description:
      "Understand how work moves, where exceptions happen, and which steps need attention.",
    features: [
      "Workflow activity and outcome visibility",
      "Bottleneck and exception review",
      "Feedback loops for ongoing improvement",
    ],
    useCase: "From process activity to a clearer next improvement.",
  },
];

export const deliverySteps = [
  {
    title: "Discover",
    text: "Map your workflow, data, constraints, and the outcome that matters.",
  },
  { title: "Build", text: "Develop a focused pilot with your systems and real working scenarios." },
  {
    title: "Validate",
    text: "Evaluate quality, permissions, handoffs, and failure handling together.",
  },
  { title: "Evolve", text: "Deploy, observe, and improve as your operational needs grow." },
];

export function pageMeta(title: string, description: string) {
  return {
    meta: [
      { title: `${title} — GetHello by Sabupps` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} — GetHello by Sabupps` },
      { property: "og:description", content: description },
    ],
  };
}
