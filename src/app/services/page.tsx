import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceSearch from "@/components/ServiceSearch";
import { SERVICES } from "@/lib/services";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Appliance Repair Services",
  description: "Explore all appliance repair services: refrigerator, washer, dryer, oven, and microwave repair.",
};

export default function ServicesPage() {
  const data = SERVICES.map(s => ({
    slug: s.slug,
    name: s.name,
    desc: s.desc,
  }));

  return (
    <>
      <section className="bg-gradient-to-b from-white to-slate-50">
        <Container className="py-14 md:py-20">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Services" }]} />
          <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
            Appliance repair services
          </h1>
          <p className="mt-3 text-[var(--muted)]">
            Select a service below or search for the appliance you need help with.
          </p>
        </Container>
      </section>

      <Container className="py-12">
        <ServiceSearch items={data} />
      </Container>
    </>
  );
}
