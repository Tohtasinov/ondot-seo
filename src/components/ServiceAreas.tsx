import Container from "@/components/ui/Container";

type Props = {
  mapSrc: string;
  locationTitle: string;
  phone: string;
  email: string;
  supportPhone?: string;
};

export default function ServiceAreas({
  mapSrc,
  locationTitle,
  phone,
  email,
  supportPhone,
}: Props) {
  return (
    <div className="bg-white">
      <Container className="py-12 md:py-16">
        <div className="rounded-[var(--radius)] card-border overflow-hidden">
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              src={mapSrc}
              title="Service Areas Map"
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <InfoCard label="Our location" value={locationTitle} />
          <InfoCard label="Phone number" value={phone} href={`tel:${phone.replace(/[^\d+]/g, "")}`} />
          <InfoCard
            label="E-mail"
            value={email}
            href={`mailto:${email}`}
            className="lg:px-6" // добавил чуть шире карточку
          />
          <InfoCard
            label="Support 24/7"
            value={supportPhone || phone}
            href={`tel:${(supportPhone || phone).replace(/[^\d+]/g, "")}`}
          />
        </div>
      </Container>
    </div>
  );
}

function InfoCard({
  label,
  value,
  href,
  className = "",
}: {
  label: string;
  value: string;
  href?: string;
  className?: string;
}) {
  return (
    <div className={`rounded-[var(--radius)] bg-white p-6 card-border overflow-hidden ${className}`}>
      <div className="text-xs tracking-wide text-[var(--muted)]">{label.toUpperCase()}</div>
      {href ? (
        <a
          href={href}
          className="mt-2 block text-lg font-semibold text-[var(--brand)] hover:underline break-all"
        >
          {value}
        </a>
      ) : (
        <div className="mt-2 text-lg font-semibold">{value}</div>
      )}
    </div>
  );
}
