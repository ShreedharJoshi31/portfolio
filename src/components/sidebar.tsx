"use client";

import { useEffect, useState } from "react";

type Section = { id: string; label: string; count?: number };
type Link = { label: string; href: string };

export function Sidebar({
  name,
  role,
  sections,
  links,
  resume,
  email,
}: {
  name: string;
  role: string;
  sections: Section[];
  links: Link[];
  resume: string;
  email: string;
}) {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const onScroll = () => {
      // The last section is too short to reach the 35% line, so pin it once the page bottom is reached.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        setActive(sections[sections.length - 1].id);
        return;
      }
      const line = window.innerHeight * 0.35;
      let current = sections[0].id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= line) current = s.id;
      }
      setActive(current);
    };
    const first = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(first);
      window.removeEventListener("scroll", onScroll);
    };
  }, [sections]);

  const activeLabel = sections.find((s) => s.id === active)?.label ?? "";

  return (
    <aside className="fixed bottom-0 left-0 top-12 hidden w-[272px] flex-col border-r border-border bg-background lg:flex">
      <div className="border-b border-border px-5 py-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">File SJ-031</p>
        <p className="mt-3 font-mono text-[15px] font-semibold uppercase tracking-[0.12em]">{name}</p>
        <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">{role}</p>
        <p className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/80">
          <span className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
          Open to roles
        </p>
      </div>

      <nav aria-label="Sections" className="flex-1 p-2">
        <ul>
          {sections.map((s, i) => {
            const isActive = s.id === active;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`flex items-center gap-4 border-l-2 px-3 py-3 font-mono text-xs uppercase tracking-[0.18em] transition-colors ${
                    isActive
                      ? "border-accent bg-surface text-foreground"
                      : "border-transparent text-muted hover:bg-surface/60 hover:text-foreground"
                  }`}
                >
                  <span className={`text-[10px] ${isActive ? "text-accent" : "text-muted/70"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">{s.label}</span>
                  {s.count !== undefined && <span className="text-[10px] text-muted">{s.count}</span>}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-border p-3">
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 border border-border py-3 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors hover:border-accent hover:text-accent"
        >
          Resume ↗
        </a>
        <div className="mt-3 flex justify-around font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
          {links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="py-1 hover:text-accent">
              {l.label} ↗
            </a>
          ))}
          <a href={`mailto:${email}`} className="py-1 hover:text-accent">
            Email
          </a>
        </div>
        <div className="mt-3 flex justify-between border-t border-border pt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
          <span>Section</span>
          <span className="text-foreground">{activeLabel}</span>
        </div>
      </div>
    </aside>
  );
}
