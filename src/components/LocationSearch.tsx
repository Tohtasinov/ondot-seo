"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Item = { city: string; state: string; zip: string; slug: string };

export default function LocationSearch({ items }: { items: Item[] }) {
  const [q, setQ] = useState("");
  const [state, setState] = useState<string>("ALL");

  const states = useMemo(() => {
    const s = Array.from(new Set(items.map(i => i.state).filter(Boolean))).sort();
    return ["ALL", ...s];
  }, [items]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return items
      .filter(i => (state === "ALL" ? true : i.state === state))
      .filter(i => {
        if (!query) return true;
        const hay = `${i.city} ${i.state} ${i.zip}`.toLowerCase();
        return hay.includes(query);
      })
      .sort((a, b) => a.city.localeCompare(b.city));
  }, [items, q, state]);

  const total = filtered.length;

  return (
    <div className="rounded-[var(--radius)] bg-white p-5 md:p-6 card-border">
      <div className="grid gap-3 md:grid-cols-[1fr,200px]">
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Search city or ZIP"
          className="h-11 rounded-[var(--radius)] border border-black/10 px-4 outline-none focus:ring-2 focus:ring-sky-300"
        />
        <select
          value={state}
          onChange={e => setState(e.target.value)}
          className="h-11 rounded-[var(--radius)] border border-black/10 px-3 outline-none focus:ring-2 focus:ring-sky-300"
        >
          {states.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="mt-4 text-sm text-[var(--muted)]">
        {total} result{total === 1 ? "" : "s"}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map(i => (
          <Link
            key={i.slug}
            href={`/location/${i.slug}`}
            className="rounded-[var(--radius)] border border-black/10 bg-white p-4 hover:shadow-md transition"
          >
            <div className="text-base font-semibold">{i.city}</div>
            <div className="mt-1 text-sm text-[var(--muted)]">
              {i.state} {i.zip ? `· ${i.zip}` : ""}
            </div>
            <div className="mt-3 text-sm text-[var(--brand)]">Open service page →</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
