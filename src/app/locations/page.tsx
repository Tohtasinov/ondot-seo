import { LOCATIONS } from "@/lib/locations";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service areas",
  description: "Cities and ZIP codes we serve."
};

export default function LocationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold">Service areas</h1>
      <div className="mt-6 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {LOCATIONS.map(loc => (
          <a key={loc.slug} className="text-blue-700 underline" href={`/location/${loc.slug}`}>
            {loc.city}{loc.zip ? ` ${loc.zip}` : ""}
          </a>
        ))}
      </div>
    </div>
  );
}
