"use client";

import Container from "@/components/ui/Container";
import MapEmbed from "@/components/MapEmbed";

export default function CountyMaps() {
  return (
    <div className="bg-white border-t border-black/5">
      <Container className="py-16">
        <h2 className="text-3xl font-semibold text-center">
          Service Areas in Pennsylvania
        </h2>
        <p className="mt-2 text-center text-[var(--muted)] max-w-2xl mx-auto">
          We provide same-day appliance repair across Montgomery County and
          Bucks County, PA. Local certified technicians available near you.
        </p>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          {/* Montgomery County */}
          <div>
            <h3 className="text-xl font-semibold">Montgomery County, PA</h3>
            <p className="mt-2 text-[var(--muted)]">
              We serve all of Montgomery County including Norristown, King of
              Prussia, Lansdale, and surrounding areas.
            </p>
            <div className="mt-5">
              <MapEmbed q="Montgomery County Pennsylvania" zoom={10} />
            </div>
          </div>

          {/* Bucks County */}
          <div>
            <h3 className="text-xl font-semibold">Bucks County, PA</h3>
            <p className="mt-2 text-[var(--muted)]">
              Technicians available across Bucks County including Doylestown,
              Bensalem, Levittown, and nearby towns.
            </p>
            <div className="mt-5">
              <MapEmbed q="Bucks County Pennsylvania" zoom={10} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
