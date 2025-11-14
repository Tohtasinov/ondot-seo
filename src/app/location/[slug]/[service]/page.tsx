import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import LeadForm from "@/components/LeadForm";
import { LOCATIONS, getLocationBySlug } from "@/lib/locations";
import { SERVICES, getServiceBySlug } from "@/lib/services";
import { BASE_URL } from "@/lib/seo/meta";
import { jsonLdBreadcrumb, jsonLdLocalBusiness, jsonLdService } from "@/lib/seo/schema";

export const revalidate = 86400;

type Props = { params: Promise<{ slug: string; service: string }> };

export function generateStaticParams() {
  const out: { slug: string; service: string }[] = [];
  for (const l of LOCATIONS) for (const s of SERVICES) out.push({ slug: l.slug, service: s.slug });
  return out;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, service } = await params;
  const loc = getLocationBySlug(slug);
  const srv = getServiceBySlug(service);
  if (!loc || !srv) return {};
  return {
    title: `${srv.name} in ${loc.city}${loc.zip ? ` ${loc.zip}` : ""} | Appliance Repair`,
    description: `Same-day ${srv.name.toLowerCase()} in ${loc.city}. Licensed technicians. Warranty on parts and labor.`,
  };
}

export default async function CityServicePage({ params }: Props) {
  const { slug, service } = await params;
  const loc = getLocationBySlug(slug);
  const srv = getServiceBySlug(service);
  if (!loc || !srv) return <Container className="py-20">Not found</Container>;

  const photoMap: Record<string, string> = {
    dryer: "/images/dryer-repair.jpg",
    washer: "/images/washer-repair.jpg",
    refrigerator: "/images/fridge-repair.jpg",
    oven: "/images/oven-repair.jpg",
    microwave: "/images/microwave-repair.jpg",
  };
  const imageSrc = photoMap[service] || "/images/default.jpg";

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--brand)]/92" />
        <Image src={imageSrc} alt={`${srv.name} in ${loc.city}`} fill sizes="100vw" className="object-cover opacity-35" />
        <Container className="relative py-28 text-black">
          <div className="max-w-3xl">
            <div className="inline-block rounded-full bg-black/10 px-3 py-1 text-xs backdrop-blur">
              Serving {loc.city}{loc.zip ? ` ${loc.zip}` : ""}
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
              {srv.name} in {loc.city}{loc.zip ? ` ${loc.zip}` : ""}
            </h1>
            <p className="mt-4 text-black/85 text-lg">
              Local licensed technicians. Same-day appointments. Warranty on parts and labor.
            </p>
          </div>
        </Container>
      </section>

      <Container className="py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr,420px]">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">About {srv.name.toLowerCase()} in {loc.city}</h2>
            <p className="mt-3 text-[var(--muted)]">
              We provide professional {srv.name.toLowerCase()} across {loc.city} and nearby neighborhoods.
            </p>
            <h2 className="mt-12 text-2xl md:text-3xl font-semibold">Common issues</h2>
            <ul className="mt-4 list-disc pl-6 text-[var(--muted)] leading-relaxed">
              <li>No power or won’t start</li>
              <li>Unusual noise or vibration</li>
              <li>Poor performance, overheating or leaks</li>
              <li>Door won’t close, error codes, flashing lights</li>
            </ul>
          </div>

          <aside className="lg:sticky lg:top-24 h-max">
            <div className="rounded-[var(--radius)] bg-white p-1 card-border">
              <div className="rounded-[calc(var(--radius)-6px)] bg-slate-50 p-5">
                <h3 className="text-xl font-semibold">Book {srv.name}</h3>
                <p className="mt-1 text-[var(--muted)]">Tell us about your issue and we will call you back.</p>
              </div>
              <div className="p-5">
                <LeadForm city={loc.city} service={srv.name} />
              </div>
            </div>
          </aside>
        </div>
         <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(
        jsonLdBreadcrumb([
          { name: "Home", item: `${BASE_URL}/` },
          { name: "Locations", item: `${BASE_URL}/locations` },
          { name: loc.city, item: `${BASE_URL}/location/${loc.slug}` },
          { name: srv.name }
        ])
      )
    }}
  />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(
        jsonLdService({
          serviceName: `${srv.name} in ${loc.city}${loc.zip ? ` ${loc.zip}` : ""}`,
          area: `${loc.city}${loc.zip ? ` ${loc.zip}` : ""}`,
          url: `${BASE_URL}/location/${loc.slug}/${srv.slug || service}`
        })
      )
    }}
  />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(
        jsonLdLocalBusiness({
          name: "Appliance Repair",
          city: loc.city,
          state: loc.state,
          zip: loc.zip,
          phone: "+1-000-000-0000",
          url: `${BASE_URL}/location/${loc.slug}`,
          baseUrl: BASE_URL
        })
      )
    }}
  />
      </Container>
    </>
  );
}
