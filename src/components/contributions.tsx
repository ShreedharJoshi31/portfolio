import { cacheLife } from "next/cache";

type Day = { date: string; level: number; row: number; col: number };

// GitHub has no unauthenticated JSON API for the contribution calendar, so this parses
// the public HTML fragment the profile page itself loads.
async function fetchContributions(user: string) {
  "use cache";
  cacheLife("days");
  const res = await fetch(`https://github.com/users/${user}/contributions`);
  if (!res.ok) throw new Error(`GitHub contributions returned ${res.status}`);
  const html = await res.text();

  const days: Day[] = [];
  for (const m of html.matchAll(/<td[^>]*ContributionCalendar-day[^>]*>/g)) {
    const tag = m[0];
    const date = tag.match(/data-date="([^"]+)"/)?.[1];
    const level = tag.match(/data-level="(\d)"/)?.[1];
    const pos = tag.match(/contribution-day-component-(\d+)-(\d+)/);
    if (date && level && pos) days.push({ date, level: Number(level), row: Number(pos[1]), col: Number(pos[2]) });
  }
  if (days.length === 0) throw new Error("GitHub contributions markup changed: no days parsed");

  let total = 0;
  for (const m of html.matchAll(/>(\d+) contributions? on /g)) total += Number(m[1]);
  return { days, total };
}

const levelClass = ["bg-white/[0.04]", "bg-accent/25", "bg-accent/50", "bg-accent/75", "bg-accent"];

export async function Contributions({ user, label }: { user: string; label: string }) {
  let data: Awaited<ReturnType<typeof fetchContributions>>;
  try {
    data = await fetchContributions(user);
  } catch (err) {
    console.error("[contributions]", err);
    return null;
  }
  const weeks = Math.max(...data.days.map((d) => d.col)) + 1;

  return (
    <div className="mt-14 border border-border bg-background/80">
      <div className={`${label} flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-3 text-muted`}>
        <span>Activity / GitHub</span>
        <a href={`https://github.com/${user}`} target="_blank" rel="noreferrer" className="hover:text-accent">
          @{user} ↗
        </a>
      </div>
      <div className="overflow-x-auto p-4">
        <div
          className="grid min-w-[620px] grid-flow-col gap-[3px]"
          style={{ gridTemplateColumns: `repeat(${weeks}, minmax(0, 1fr))` }}
        >
          {data.days.map((d) => (
            <div
              key={d.date}
              title={d.date}
              className={`aspect-square ${levelClass[d.level]}`}
              style={{ gridRow: d.row + 1, gridColumn: d.col + 1 }}
            />
          ))}
        </div>
      </div>
      <div className={`${label} flex flex-wrap items-center justify-between gap-2 border-t border-border px-4 py-3 text-muted`}>
        <span>
          <span className="text-accent">{data.total.toLocaleString("en-US")}</span> contributions / last 12 months
        </span>
        <span className="flex items-center gap-1">
          Less
          {levelClass.map((c) => (
            <span key={c} className={`size-2.5 ${c}`} />
          ))}
          More
        </span>
      </div>
    </div>
  );
}
