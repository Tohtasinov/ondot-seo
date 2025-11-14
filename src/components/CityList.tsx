import { LOCATIONS } from "@/lib/locations";

export default function CityList() {
  return (
    <div className="mt-6 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {LOCATIONS.map(loc => (
        <a key={loc.slug} className="text-blue-700 underline" href={`/location/${loc.slug}`}>
          {loc.city}{loc.zip ? ` ${loc.zip}` : ""}
        </a>
      ))}
    </div>
  );
}
