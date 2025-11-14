import Container from "./ui/Container";
import Link from "next/link";
import Image from "next/image";

const items = [
  { slug:"refrigerator", title:"Refrigerator Repair", desc:"Not cooling, ice-maker issues", img:"/images/fridge-repair.jpg" },
  { slug:"washer", title:"Washer Repair", desc:"Will not spin, leaks, noises", img:"/images/washer-repair.jpg" },
  { slug:"dryer", title:"Dryer Repair", desc:"No heat, long cycles", img:"/images/dryer-repair.jpg" },
  { slug:"oven", title:"Oven Repair", desc:"Not heating, temperature issues", img:"/images/oven-repair.jpg" },
  { slug:"stove", title:"Stove Repair", desc:"No heat, sparks, keypad not working", img:"/images/microwave-repair.jpg" },
];

export default function ServicesGrid() {
  return (
    <Container>
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Major appliance services</h2>
          <p className="mt-2 text-[var(--muted)]">Factory trained experts for most brands.</p>
        </div>
        <Link href="/locations" className="text-sm text-[var(--brand)] hover:underline">See service areas</Link>
      </div>

     <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {items.map(it => (
    <Link
      key={it.slug}
      href={`/service/${it.slug}`}  // ✅ обязательно /service/
      className="group overflow-hidden rounded-[var(--radius)] bg-white card-border hover:-translate-y-1 hover:shadow-lg transition"
    >
      <div className="relative h-44 w-full">
        <Image
          src={it.img}
          alt={it.title}
          fill
          sizes="(min-width:1024px) 33vw, 50vw"
          className="object-cover transition group-hover:scale-[1.03]"
        />
        <div className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1 text-xs">On-Dot Appliance Repair</div>
      </div>
      <div className="p-5">
        <div className="text-lg font-semibold">{it.title}</div>
        <div className="mt-1 text-sm text-[var(--muted)]">{it.desc}</div>
        <div className="mt-3 text-sm text-[var(--brand)] group-hover:underline">Learn more →</div>
      </div>
    </Link>
  ))}
</div>

    </Container>
  );
}
