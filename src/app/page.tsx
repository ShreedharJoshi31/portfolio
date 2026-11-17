import { Clock } from "@/components/clock";
import { Contributions } from "@/components/contributions";
import { RichText } from "@/components/rich-text";
import { Sidebar } from "@/components/sidebar";
import { about, education, experience, focus, profile, projects, skills } from "@/data/resume";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Selected work", count: projects.length },
  { id: "profile", label: "Profile" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const label = "font-mono text-[10px] uppercase tracking-[0.2em]";

function SectionHead({ id, kicker, meta, title, sub }: { id: string; kicker: string; meta?: string; title: string; sub?: string }) {
  const index = String(sections.findIndex((s) => s.id === id) + 1).padStart(2, "0");
  return (
    <div>
      <div className={`${label} flex items-center gap-4 text-muted`}>
        <span className="text-accent">{index}</span>
        <span className="text-foreground">{kicker}</span>
        <span aria-hidden className="h-px flex-1 bg-border" />
        {meta && <span>{meta}</span>}
      </div>
      <h2 className="mt-8 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{title}</h2>
      {sub && <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted">{sub}</p>}
    </div>
  );
}

function SquareLink({ href, children, primary }: { href: string; children: React.ReactNode; primary?: boolean }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`inline-flex items-center justify-between gap-6 px-5 py-3.5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors ${
        primary
          ? "bg-accent text-background hover:bg-accent/85"
          : "border border-border text-foreground hover:border-accent hover:text-accent"
      }`}
    >
      {children}
    </a>
  );
}

export default function Home() {
  const job = experience[0];

  return (
    <>
      <a href="#overview" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-14 focus:z-50 focus:bg-accent focus:px-3 focus:py-2 focus:text-background">
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-40 flex h-12 items-center justify-between border-b border-border bg-background/90 px-4 font-mono text-[11px] uppercase tracking-[0.18em] backdrop-blur sm:px-6">
        <div className="flex items-center gap-4">
          <span className="font-semibold text-accent">{profile.name}</span>
          <span className="hidden text-muted sm:inline">Engineer log / 2026</span>
        </div>
        <Clock />
      </header>

      <Sidebar
        name={profile.name}
        role="Software engineer"
        sections={sections}
        links={profile.links}
        resume={profile.resume}
        email={profile.email}
      />

      <main className="grid-bg min-h-screen pt-12 lg:pl-[272px]">
        <section id="overview" className="scroll-mt-12 border-b border-border px-5 py-16 sm:px-12 lg:py-20">
          <div className="grid items-start gap-12 xl:grid-cols-[1fr_304px]">
            <div>
              <h1 className="font-mono text-5xl font-bold uppercase leading-none tracking-tight sm:text-7xl xl:text-[88px]">
                Shreedhar
                <br />
                Joshi
              </h1>
              <p className={`${label} mt-6 text-[11px] text-accent`}>Software engineer · full-stack</p>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80 sm:text-xl">{profile.tagline}</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <SquareLink href="#work" primary>
                  View the work ↓
                </SquareLink>
                <SquareLink href={profile.resume}>Resume ↗</SquareLink>
              </div>
            </div>

            <aside className="border border-border bg-background/80">
              <div className={`${label} flex items-center justify-between border-b border-border px-4 py-3 text-muted`}>
                <span>Profile</span>
                <span className="flex items-center gap-1.5 text-accent">
                  <span className="size-1.5 rounded-full bg-accent" /> Active
                </span>
              </div>
              <dl className="divide-y divide-border text-sm">
                {[
                  ["Name", profile.name],
                  ["Role", `${job.role}, ${job.company}`],
                  ["Based", profile.location],
                  ["Degree", `B.Tech IT · GPA ${education.gpa}`],
                  ["Stack", "Go / Next.js / Python"],
                ].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[84px_1fr] px-4 py-3">
                    <dt className={`${label} pt-0.5 text-muted`}>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="border-t border-border px-4 py-4">
                <p className={`${label} text-muted`}>Side project</p>
                <a
                  href={projects[0].links[0].href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 flex items-center justify-between font-medium hover:text-accent"
                >
                  {projects[0].name} <span className="text-accent">↗</span>
                </a>
                <p className="mt-2 text-sm text-muted">Local-first database workbench for 12 engines.</p>
              </div>
            </aside>
          </div>
          <Contributions user={profile.githubUser} label={label} />
        </section>

        <section id="experience" className="scroll-mt-12 border-b border-border px-5 py-20 sm:px-12">
          <SectionHead
            id="experience"
            kicker="Experience"
            meta={experience[0].period}
            title="Software engineer at a legal-AI company."
            sub="Two products, one used by 50,000+ lawyers, built across a Next.js frontend, a Go backend and Python AI services."
          />
          <article className="mt-14 grid gap-4 border-t border-border pt-8 md:grid-cols-[184px_1fr]">
            <div>
              <p className="font-mono text-sm text-muted">{job.period}</p>
              <p className={`${label} mt-2 flex items-center gap-1.5 text-accent`}>
                <span className="size-1.5 rounded-full bg-accent" /> Current
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                {job.role} · <span className="text-accent">{job.company}</span>
              </h3>
              <p className="mt-1 text-sm italic text-muted">{job.summary}</p>
              {job.groups.map((g) => (
                <div key={g.name} className="mt-8">
                  <p className={`${label} text-foreground`}>{g.name}</p>
                  <ul className="mt-4 space-y-3.5 leading-relaxed text-muted">
                    {g.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3">
                        <span aria-hidden className="mt-2.5 size-1.5 shrink-0 bg-accent" />
                        <span>
                          <RichText text={b} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <p className={`${label} mt-6 leading-loose text-muted`}>{job.stack.join(" / ")}</p>
            </div>
          </article>
        </section>

        <section id="work" className="scroll-mt-12 border-b border-border px-5 py-20 sm:px-12">
          <SectionHead
            id="work"
            kicker="Selected work"
            meta={`${projects.length} projects`}
            title="From internal tools to developer tooling."
            sub="A database workbench, an administration system for the Indian Territorial Army, and a heritage booking site."
          />
          <ol className="mt-14 border-t border-border">
            {projects.map((p, i) => (
              <li key={p.name} className="grid gap-5 border-b border-border py-8 md:grid-cols-[112px_1fr_176px]">
                <div>
                  <p className="font-mono text-xs text-muted">{String(i + 1).padStart(3, "0")}</p>
                  <p className={`${label} mt-2 flex items-center gap-1.5 text-accent`}>
                    <span className={`size-1.5 rounded-full ${p.status === "Live" ? "bg-accent" : "border border-accent"}`} />
                    {p.status}
                  </p>
                </div>
                <div>
                  <h3 className="font-mono text-lg font-semibold uppercase tracking-wide">
                    {p.name} <span className="ml-2 text-[11px] font-normal normal-case tracking-normal text-muted">{p.kind}</span>
                  </h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                    <RichText text={p.description} />
                  </p>
                  <p className={`${label} mt-4 text-muted/80`}>{p.tags.join(" / ")}</p>
                </div>
                <div className="flex flex-col gap-2">
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`${label} flex items-center justify-between border border-border px-4 py-3 text-foreground/80 transition-colors hover:border-accent hover:text-accent`}
                    >
                      {l.label === "Live" ? "Live demo" : "Source"}
                      <span>{l.label === "Live" ? "↗" : "</>"}</span>
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="profile" className="scroll-mt-12 border-b border-border px-5 py-20 sm:px-12">
          <SectionHead
            id="profile"
            kicker="Profile"
            meta={profile.location}
            title="I own features from the database to the checkout screen."
            sub="Product engineering across Go, TypeScript and Python, with payments and AI agents in production."
          />
          <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_360px]">
            <div className="space-y-5 leading-relaxed text-foreground/75">
              {about.map((p, i) => (
                <p key={i}>
                  <RichText text={p} />
                </p>
              ))}
            </div>
            <div>
              <p className={`${label} text-foreground`}>Current focus</p>
              <ul className="mt-4 divide-y divide-border border-y border-border">
                {focus.map((f) => (
                  <li key={f} className="flex gap-3 py-3.5 text-sm text-foreground/80">
                    <span aria-hidden className="mt-1.5 size-1.5 shrink-0 bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <div className={`${label} flex items-center justify-between border-b border-border pb-4`}>
              <span className="text-[11px] font-semibold text-foreground">Capabilities</span>
              <span className="text-muted">Grouped by layer</span>
            </div>
            <dl className="divide-y divide-border border-b border-border">
              {skills.map((s) => (
                <div key={s.group} className="grid gap-2 py-5 md:grid-cols-[184px_1fr]">
                  <dt className={`${label} pt-1 text-muted`}>{s.group}</dt>
                  <dd className="text-foreground/85">{s.items.join(" / ")}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="education" className="scroll-mt-12 border-b border-border px-5 py-20 sm:px-12">
          <SectionHead id="education" kicker="Education" meta={education.period} title="Academic background." />
          <div className="mt-14 grid gap-4 border-y border-border py-8 md:grid-cols-[184px_1fr]">
            <p className="font-mono text-sm text-muted">{education.period}</p>
            <div>
              <h3 className="text-lg font-semibold">{education.degree}</h3>
              <p className="mt-1 text-muted">{education.school}</p>
              <p className={`${label} mt-3 text-accent`}>GPA {education.gpa}</p>
            </div>
          </div>
        </section>

        <section id="contact" className="flex min-h-[60vh] scroll-mt-12 flex-col justify-between px-5 pb-10 pt-20 sm:px-12">
          <div className="flex flex-wrap items-end justify-between gap-10">
            <div>
              <h2 className="max-w-md text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Open to full-stack and backend roles.
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-muted">
                If you need someone who can own a feature from the schema to the UI, and the payments in between, I&apos;d like to
                hear from you.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <SquareLink href={`mailto:${profile.email}`} primary>
                Start a conversation ↗
              </SquareLink>
              <SquareLink href={profile.resume}>Resume ↗</SquareLink>
            </div>
          </div>

          <footer className={`${label} mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-muted`}>
            <div className="flex flex-wrap gap-6">
              {profile.links.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="hover:text-accent">
                  {l.label} ↗
                </a>
              ))}
              <a href={`mailto:${profile.email}`} className="hover:text-accent">
                Email
              </a>
            </div>
            <p>© 2026 {profile.name} · {profile.location}</p>
          </footer>
        </section>
      </main>
    </>
  );
}
