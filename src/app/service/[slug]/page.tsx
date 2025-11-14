import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import LeadForm from "@/components/LeadForm";
import { getServiceBySlug, SERVICES } from "@/lib/services";
import { BASE_URL } from "@/lib/seo/meta";
import { jsonLdBreadcrumb, jsonLdService } from "@/lib/seo/schema";
import MapEmbed from "@/components/MapEmbed";

export const revalidate = 86400;
export const dynamicParams = true;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.name} | Appliance Repair`,
    description: `Professional ${service.name.toLowerCase()}. Same-day service by certified technicians.`,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return <Container className="py-20 text-center">Service not found</Container>;
  }

  // Фото для hero
  const photoMap: Record<string, string> = {
    dryer: "/images/dryer-repair.jpg",
    washer: "/images/washer-repair.jpg",
    refrigerator: "/images/fridge-repair.jpg",
    oven: "/images/oven-repair.jpg",
    stove: "/images/microwave-repair.jpg",
  };
  const imageSrc = photoMap[slug] || "/images/default.jpg";

  // Детали по услугам
  const details: Record<string, { issues: string[]; tips: string }> = {
    refrigerator: {
      issues: [
        "Not cooling properly or warm interior",
        "Leaking water or ice maker malfunction",
        "Unusual noise or constant running",
        "Door seals not closing tightly",
      ],
      tips: "Keep condenser coils clean and avoid overloading the fridge.",
    },
    washer: {
      issues: [
        "Not spinning or draining water",
        "Water leaks from hose or pump",
        "Unusual noise during spin cycle",
        "Stops mid-cycle or won’t start",
      ],
      tips: "Avoid overloading and check pockets for objects before washing.",
    },
    dryer: {
      issues: [
        "No heat or clothes take too long to dry",
        "Drum not spinning",
        "Burning smell or excessive vibration",
        "Error codes on the display",
      ],
      tips: "Clean lint filter regularly to prevent overheating.",
    },
    oven: {
      issues: [
        "Oven not heating or uneven temperature",
        "Gas oven won’t ignite or smell of gas",
        "Display or control panel not responding",
        "Self-cleaning function not working",
      ],
      tips: "Avoid using foil on the bottom surface to maintain airflow.",
    },
    stove: {
      issues: [
        "Runs but not heating",
        "Door latch or safety switch problems",
        "Keypad or touch screen unresponsive",
        "Sparks or burning smell inside cavity",
      ],
      tips: "Do not operate the microwave empty and keep it clean to prevent arcing.",
    },
  };

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Фото фоном */}
        <Image
          src={imageSrc}
          alt={service.name}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />

        {/* Затемняющий слой поверх фото */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Контент поверх затемнения */}
        <Container className="relative py-28 text-white">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Common {service.name.toLowerCase()} issues
          </h2>
          <ul className="mt-4 list-disc pl-6 text-white/90 leading-relaxed">
            {(details[slug]?.issues || []).map(i => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-white/80 italic">
            Tip: {details[slug]?.tips}
          </p>
        </Container>
      </section>

      {/* CONTENT */}
      <Container className="py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Why choose us</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {[
            { icon: "⚡", title: "Same-day service", desc: "Fast scheduling with local dispatch." },
            { icon: "🛠", title: "Certified techs", desc: "Licensed and insured professionals." },
            { icon: "🧾", title: "Warranty included", desc: "Up to 90 days on parts and labor." },
          ].map(f => (
            <div key={f.title} className="rounded-[var(--radius)] bg-white p-6 card-border">
              <div className="text-2xl">{f.icon}</div>
              <div className="mt-2 font-semibold">{f.title}</div>
              <div className="text-[var(--muted)] mt-1">{f.desc}</div>
            </div>
          ))}
        </div>

        <div id="book" className="mt-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Book {service.name}</h2>
          <p className="mt-2 text-[var(--muted)]">
            Fill out the form and we will call you back within minutes.
          </p>
          <div className="mt-6">
            <LeadForm service={service.name} />
          </div>
        </div>

        {/* Service Areas (counties) */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Service Areas in Pennsylvania</h2>

          <div className="grid gap-10 md:grid-cols-2">
            {/* Montgomery County */}
            <div>
              <h3 className="text-xl font-semibold">Montgomery County, PA</h3>
              <p className="mt-2 text-[var(--muted)]">
                We provide appliance repair throughout Montgomery County, Pennsylvania including Norristown, King of Prussia, and nearby areas.
              </p>
              <div className="mt-4">
                <MapEmbed q="Montgomery County Pennsylvania" zoom={10} />
              </div>
            </div>

            {/* Bucks County */}
            <div>
              <h3 className="text-xl font-semibold">Bucks County, PA</h3>
              <p className="mt-2 text-[var(--muted)]">
                Same-day appliance repair also available across Bucks County, PA including Doylestown, Bensalem, and surrounding towns.
              </p>
              <div className="mt-4">
                <MapEmbed q="Bucks County Pennsylvania" zoom={10} />
              </div>
            </div>
          </div>
        </div>

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              jsonLdBreadcrumb([
                { name: "Home", item: `${BASE_URL}/` },
                { name: "Services", item: `${BASE_URL}/services` },
                { name: service.name },
              ])
            ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              jsonLdService({
                serviceName: service.name,
                area: "United States",
                url: `${BASE_URL}/service/${slug}`,
              })
            ),
          }}
        />
      </Container>
    </>
  );
}
