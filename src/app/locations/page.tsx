import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import { LOCATIONS } from "@/lib/locations";
import LocationSearch from "@/components/LocationSearch";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Service areas",
  description: "Find appliance repair near you. Search by city or ZIP.",
};

export default function LocationsPage() {
  // Передаем только нужные поля в клиент
  const data = LOCATIONS.map(l => ({
    city: l.city,
    state: l.state,
    zip: l.zip || "",
    slug: l.slug,
  }));

  return (
    <>
      <section className="bg-gradient-to-b from-white to-slate-50">
        <Container className="py-14 md:py-20">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Locations" }]} />
          <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">Service areas</h1>
          <p className="mt-3 text-[var(--muted)]">
            Enter your city or ZIP. We add new areas regularly.
          </p>
        </Container>
      </section>

      <Container className="py-12">
        <LocationSearch items={data} />
      </Container>
    </>
  );
}
