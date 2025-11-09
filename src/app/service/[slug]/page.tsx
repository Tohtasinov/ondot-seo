import type { Metadata } from "next";
import { getServiceBySlug, SERVICES } from "@/lib/services";

export const revalidate = 86400;

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return SERVICES.map(s => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.name,
    description: `Professional ${service.name.toLowerCase()}. Same day service.`
  };
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) return <div className="mx-auto max-w-6xl px-4 py-10">Service not found</div>;
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold">{service.name}</h1>
      <p className="mt-2 text-gray-600">Common issues fixed on first visit. Original parts.</p>
      <div className="mt-6 text-sm">
        <a className="underline" href="/locations">See service areas</a>
      </div>
    </div>
  );
}
