export const profile = {
  name: "Shreedhar Joshi",
  title: "Founding Engineer",
  tagline: "I build full-stack products end to end: Next.js frontends, Go services and Python AI agents.",
  location: "Mumbai, India",
  email: "shreedharjoshi03@gmail.com",
  githubUser: "ShreedharJoshi31",
  resume: "https://drive.google.com/file/d/1W0LJz5Ptc8jGt0iJN1pe6-eE3DlDqZMO/view?usp=drive_link",
  links: [
    { label: "GitHub", href: "https://github.com/ShreedharJoshi31" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/shreedharjoshi03/" },
  ],
};

export const about = [
  "I'm the founding engineer at **Nyayassist**, a legal-AI platform for Indian lawyers. I've built and owned its core product modules (research, case management, translation and meeting assistant), used by **50,000+ lawyers**, across a Next.js frontend, a Go backend and Python AI services.",
  "I own the Razorpay subscription lifecycle, made models and prompts configurable across **54 AI workflow recipes**, and built a second product, NyayTrademark, end to end. Outside work I build developer tools like **DbScope**, a local-first database workbench.",
];

export const focus = [
  "Product modules used by 50,000+ lawyers, across Next.js, Go and Python.",
  "AI workflow infrastructure: per-step models and prompts, cost and token logging.",
  "Payments: subscription lifecycles, entitlements and webhooks.",
];

export type Bullet = string;

export const experience = [
  {
    role: "Founding Engineer",
    company: "Nyayassist",
    summary: "Legal-AI platform for Indian lawyers",
    period: "Jun 2024 — Present",
    groups: [
      {
        name: "Nyayassist (core legal-AI app)",
        bullets: [
          "Built and owned core product modules (**research, case management, translation, meeting assistant**) used by **50,000+ lawyers**, across a Next.js frontend, a Go backend and Python AI services, event-driven via **AWS SNS/SQS**; designed the app's **Redux state architecture**.",
          "Made models and prompts **configurable per step across 54 AI workflow recipes**: per-run overrides scoped with Python contextvars so concurrent runs stay isolated, checks that reject a bad model name or prompt before any paid LLM call, a recipe linter, and per-block cost and token logging to AWS Athena.",
          "Owned the **Razorpay subscription lifecycle** end-to-end (Go + checkout UI): tiered plans, offer and referral codes, invoicing, webhooks, mandate-cancellation handling, and an admin **price-migration tool** that re-prices every plan in one transaction while keeping existing subscribers on their old price.",        ] as Bullet[],
      },
      {
        name: "NyayTrademark (IP Docket)",
        bullets: [
          "Built a **trademark-practice product**: ported a Go backend + Python AI agents into one FastAPI service, React Router SPA, Razorpay billing, per-plan entitlements, device limits and a per-client login portal.",
          "Cut agent (attorney) search on a **6.3M-row** trademark register from **30s+ timeouts to ~5s** with a trigger-maintained denormalized table.",
        ] as Bullet[],
      },
    ],
    stack: [
      "Next.js", "Redux", "React Router", "Go", "Python", "FastAPI", "AWS SNS/SQS", "Athena", "CodeBuild",
      "DynamoDB", "Razorpay", "Auth0",
    ],
  },
];

export const projects = [
  {
    name: "DbScope",
    status: "Open source",
    kind: "Go + React",
    description:
      "Local-first database workbench supporting **12 engines** (including PostgreSQL, MySQL, SQL Server, Oracle, MongoDB, Neo4j): live ERD with inferred foreign keys, read-only-by-construction queries with plans drawn on the map, and **migration risk analysis** (locks, rewrites, current blockers, safer rewrites). Renders 5,000-table schemas at ~30ms/frame.",
    tags: ["Go", "React", "PostgreSQL", "MySQL", "MongoDB", "Neo4j"],
    links: [{ label: "GitHub", href: "https://github.com/ShreedharJoshi31/dbscope" }],
  },
  {
    name: "Rowfall",
    status: "Open source",
    kind: "Go + React",
    description:
      "Multiplayer strategy game you play by writing SQL. Each player writes one SELECT (their **brain**), and every two seconds the server runs it against Postgres views of a shared 64×64 world, as that player's own **read-only Postgres role** with a 150 ms limit. Each returned row is an order for a unit: move, mine, deposit, attack or build. Fog of war, a public leaderboard, and every brain is readable by other players.",
    tags: ["Go", "React", "Vite", "PostgreSQL", "Better Auth"],
    links: [{ label: "GitHub", href: "https://github.com/ShreedharJoshi31/rowfall" }],
  },
  {
    name: "Infantry Management Software",
    status: "Internal",
    kind: "Indian Territorial Army",
    description:
      "Digitized leave approvals and internal communication, cutting leave approvals from **3 days to same-day** for **200+ personnel**.",
    tags: ["Internal tool", "Workflow"],
    links: [],
  },
  {
    name: "Slot Savant",
    status: "Open source",
    kind: "Python + React",
    description:
      "Vehicle movement analysis system for parking lots. **Automatic number plate recognition** with OpenCV logs every entry and exit, verifies vehicles against a registration database before entry, tracks **real-time slot availability**, and gives administrators usage insights behind authenticated access.",
    tags: ["Python", "OpenCV", "React", "Node.js", "Express", "MongoDB"],
    links: [{ label: "GitHub", href: "https://github.com/ShreedharJoshi31/slot-savant" }],
  },
  {
    name: "Heritage Explorer",
    status: "Live",
    kind: "Web app",
    description: "Web app to explore historical sites in Maharashtra and book visit tickets.",
    tags: ["Web app", "Bookings"],
    links: [
      { label: "Live", href: "https://heritage-explorer-31.netlify.app/" },
      { label: "GitHub", href: "https://github.com/ShreedharJoshi31/heritage-explorer" },
    ],
  },
];

export const skills = [
  { group: "Languages", items: ["Go (Golang)", "TypeScript", "Python", "JavaScript", "SQL"] },
  {
    group: "Technologies",
    items: [
      "React", "Next.js", "Redux", "React Router", "Node.js", "Express", "Gin", "FastAPI", "Tailwind",
      "LangGraph", "LangChain", "Auth0", "Docker",
    ],
  },
  {
    group: "Cloud & Databases",
    items: [
      "AWS (SQS/SNS, EC2, CodeBuild, Athena, DynamoDB)", "PostgreSQL", "MySQL", "MongoDB", "Redis", "Qdrant",
    ],
  },
  {
    group: "Concepts",
    items: ["System Design", "RAG", "LLM Agents", "REST APIs", "WebSockets/SSE", "Payment Integration", "CI/CD"],
  },
];

export const education = {
  degree: "B.Tech. in Information Technology",
  school: "Shah and Anchor Kutchhi Engineering College",
  period: "2021 — 2025",
  gpa: "9.0/10",
};
