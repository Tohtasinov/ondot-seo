import type { Metadata } from "next";
import Link from "next/link";
import { getLocationBySlug, LOCATIONS } from "@/lib/locations";
import ServiceList from "@/components/ServiceList";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import LeadForm from "@/components/LeadForm";

export const revalidate = 86400;

type Params = { slug: string };

export function generateStaticParams() {
  return LOCATIONS.map(l => ({ slug: l.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);
  if (!loc) return {};
  return {
    title: `${loc.city}${loc.zip ? ` ${loc.zip}` : ""} Appliance Repair`,
    description: `Same day appliance repair in ${loc.city}.`,
  };
}

export default async function LocationPage(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);
  if (!loc) return <Container className="py-20">Location not found</Container>;

  const nearby = LOCATIONS
    .filter(l => l.slug !== loc.slug && l.state === loc.state)
    .sort((a, b) => {
      const zip3 = loc.zip?.slice(0, 3) ?? "";
      const aScore = a.zip?.startsWith(zip3) ? 0 : 1;
      const bScore = b.zip?.startsWith(zip3) ? 0 : 1;
      return aScore - bScore;
    })
    .slice(0, 8);

  return (
    <Container className="py-16">
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/locations", label: "Locations" },
          { label: loc.city },
        ]}
      />

      <h1 className="mt-4 text-3xl md:text-5xl font-semibold">
        {loc.city} appliance repair {loc.zip ? `(${loc.zip})` : ""}
      </h1>
      <p className="mt-2 text-[var(--muted)]">
        Professional technicians providing same-day appliance repair in {loc.city}.
      </p>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Popular services in {loc.city}</h2>
        <ServiceList city={loc.city} />
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr,420px]">
        <div>
          <h2 className="text-xl font-semibold">Service area map</h2>
          <p className="mt-2 text-[var(--muted)]">Zoom the map to see coverage around your ZIP.</p>

          <div className="relative mt-4 w-full overflow-hidden rounded-[var(--radius)] card-border" style={{ paddingTop: "56.25%" }}>
            <iframe
              title="Service area map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(`${loc.city} ${loc.state} ${loc.zip ?? ""}`)}&z=12&output=embed`}
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Book a technician in {loc.city}</h2>
          <LeadForm city={loc.city} />

          {nearby.length > 0 && (
            <div className="mt-8 rounded-[var(--radius)] bg-white p-5 card-border">
              <div className="text-lg font-semibold">Also serving nearby ZIPs</div>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {nearby.map(i => (
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
          )}
        </div>
      </div>
    </Container>
  );
}
