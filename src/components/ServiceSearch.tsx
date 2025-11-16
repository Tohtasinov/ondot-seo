"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Item = { slug: string; name: string; desc: string };

export default function ServiceSearch({ items }: { items: Item[] }) {
  const [q, setQ] = useState("");

  const imgMap: Record<string, string> = {
    dryer: "/images/dryer-repair.jpg",
    washer: "/images/washer-repair.jpg",
    refrigerator: "/images/fridge-repair.jpg",
    oven: "/images/oven-repair.jpg",
    stove: "/images/appliance-repair-team-stockcake.jpg",
  };

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return items.filter(i => {
      if (!query) return true;
      return (
        i.name.toLowerCase().includes(query) ||
        i.desc.toLowerCase().includes(query)
      );
    });
  }, [items, q]);

  const total = filtered.length;

  return (
    <div className="rounded-[var(--radius)] bg-white p-5 md:p-6 card-border">
      {/* поиск */}
      <div className="relative">
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Search by appliance (e.g. washer, oven)"
          className="h-11 w-full rounded-[var(--radius)] border border-black/10 px-4 outline-none focus:ring-2 focus:ring-sky-300"
        />
        {q && (
          <button
            onClick={() => setQ("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400 hover:text-gray-700"
          >
            ✕
          </button>
        )}
      </div>

      <div className="mt-4 text-sm text-[var(--muted)]">
        {total} service{total === 1 ? "" : "s"} found
      </div>

      {/* сетка */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map(i => (
          <Link
            key={i.slug}
            href={`/service/${i.slug}`}
            className="group relative overflow-hidden rounded-[var(--radius)] bg-white card-border hover:-translate-y-1 hover:shadow-lg transition"
          >
            {/* фото */}
            <div className="relative h-40 w-full">
              <Image
                src={imgMap[i.slug] || "/images/default.jpg"}
                alt={i.name}
                fill
                sizes="(min-width:1024px) 25vw, 50vw"
                className="object-cover transition group-hover:scale-[1.03]"
              />
              <div className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1 text-xs">
                On-Dot Appliance Repair
              </div>
            </div>

            {/* текст */}
            <div className="p-4">
              <div className="text-lg font-semibold">{i.name}</div>
              <div className="mt-1 text-sm text-[var(--muted)] line-clamp-2">{i.desc}</div>
              <div className="mt-3 text-sm text-[var(--brand)] group-hover:underline">
                View details →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
