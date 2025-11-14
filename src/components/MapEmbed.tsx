"use client";

export default function MapEmbed({
  q,
  zoom = 10,
  className = "",
}: { q: string; zoom?: number; className?: string }) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(q)}&z=${zoom}&output=embed`;
  return (
    <div
      className={`relative w-full overflow-hidden rounded-[var(--radius)] card-border ${className}`}
      style={{ paddingTop: "56.25%" }}
    >
      <iframe
        title={q}
        src={src}
        className="absolute inset-0 h-full w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
