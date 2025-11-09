import type { Metadata } from "next";
import { getLocationBySlug, LOCATIONS } from "@/lib/locations";
import { SERVICES } from "@/lib/services";

export const revalidate = 86400;

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return LOCATIONS.map(l => ({ slug: l.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const loc = getLocationBySlug(params.slug);
  if (!loc) return {};
  const title = `${loc.city}${loc.zip ? ` ${loc.zip}` : ""} Appliance Repair`;
  const description = `Same day appliance repair in ${loc.city}.`;
  return { title, description };
}

export default function LocationPage({ params }: Props) {
  const loc = getLocationBySlug(params.slug);
  if (!loc) return <div className="mx-auto max-w-6xl px-4 py-10">Location not found</div>;
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
        <ol className="flex gap-2">
          <li><a className="underline" href="/">Home</a></li>
          <li>/</li>
          <li>Locations</li>
          <li>/</li>
          <li>{loc.city}</li>
        </ol>
      </nav>

      <h1 className="mt-3 text-2xl font-semibold">{loc.city} appliance repair{loc.zip ? ` ${loc.zip}` : ""}</h1>
      <p className="mt-2 text-gray-600">Licensed and insured. Warranty provided.</p>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Popular services in {loc.city}</h2>
        <ul className="mt-3 list-disc pl-5">
          {SERVICES.map(s => (
            <li key={s.slug}><a className="underline" href={`/service/${s.slug}?city=${loc.city}`}>{s.name}</a></li>
          ))}
        </ul>
      </section>
    </div>
  );
}
