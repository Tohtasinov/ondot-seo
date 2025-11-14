"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import Marquee from "react-fast-marquee";

const brands = [
  
  { src: "/logos/LG-logo.png", alt: "LG" },
  { src: "/logos/Maytag-logo.png", alt: "LG" },
  { src: "/logos/Thermador_Logo.jpg", alt: "LG" },
  { src: "/logos/Whirlpool.png", alt: "LG" },
  { src: "/logos/bosch-logo.svg", alt: "LG" },
  { src: "/logos/samsung-logo.png", alt: "LG" },
  { src: "/logos/subzero-logo.png", alt: "LG" },
  { src: "/logos/viking.png", alt: "LG" },
];

export default function BrandStrip() {
  return (
    <div className="relative overflow-hidden bg-white border-t border-black/5">
      <Container className="py-10">
        <div className="text-center text-sm text-[var(--muted)] mb-5">
          We service most major brands
        </div>

        <Marquee
          gradient={true}
          gradientWidth={80}
          speed={40}             // скорость
          pauseOnHover={true}    // останавливается при наведении
          direction="left"
        >
          {brands.map((b, i) => (
            <div
  key={i}
  className="mx-10 flex h-16 w-32 items-center justify-center opacity-90 hover:opacity-100 transition"
>
  <Image
    src={b.src}
    alt={b.alt}
    width={120}
    height={60}
    className="object-contain"
  />
</div>

          ))}
        </Marquee>
      </Container>
    </div>
  );
}
