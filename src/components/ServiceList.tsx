import { SERVICES } from "@/lib/services";

export default function ServiceList({ city }: { city?: string }) {
  return (
    <ul className="mt-3 list-disc pl-5">
      {SERVICES.map(s => (
        <li key={s.slug}>
          <a
            className="underline"
            href={city ? `/service/${s.slug}?city=${city}` : `/service/${s.slug}`}
          >
            {s.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
