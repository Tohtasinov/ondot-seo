import Link from "next/link";
import { LOCATIONS } from "@/lib/locations";

type Props = { currentSlug: string; state: string; zip?: string; limit?: number };

export default function NearbyZips({ currentSlug, state, zip, limit = 8 }: Props) {
  const zip3 = zip?.slice(0, 3) ?? "";
  const items = LOCATIONS
    .filter(l => l.slug !== currentSlug && l.state === state)
    .sort((a, b) => {
      // приоритет тем, у кого совпадают первые 3 цифры ZIP
      const aScore = a.zip?.startsWith(zip3) ? 0 : 1;
      const bScore = b.zip?.startsWith(zip3) ? 0 : 1;
      return aScore - bScore;
    })
    .slice(0, limit);

  if (items.length === 0) return null;

  return (
    <div className="rounded-[var(--radius)] bg-white p-5 card-border">
      <div className="text-lg font-semibold">Also serving nearby ZIPs</div>
      <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(i => (
          <Link
            key={i.slug}
            href={`/location/${i.slug}`}
            className="rounded-[var(--radius)] border border-black/10 px-3 py-2 text-sm hover:bg-slate-50"
          >
            {i.city} {i.zip ? `(${i.zip})` : ""}
          </Link>
        ))}
      </div>
      <div className="mt-4 text-sm">
        Or <Link href="/locations" className="text-[var(--brand)] underline">check another city</Link>
      </div>
    </div>
  );
}
