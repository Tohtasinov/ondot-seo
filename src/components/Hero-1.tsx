import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center opacity-35" />
      <Container className="relative py-24 md:py-32">
        <div className="max-w-2xl text-white">
          <div className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur">Certified technicians</div>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">On-Dot Appliance Repair</h1>
          <p className="mt-4 text-white/85 text-lg">Local licensed pros. Warranty on parts and labor.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#lead"><Button className="bg-blue text-[var(--brand)] text-blue" size="lg">Book now</Button></a>
            <a href="/locations"><Button variant="outline" size="lg">Service areas</Button></a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-white/80">
            <span>★ 4.9 rating</span>
            <span>•</span>
            <span>Warranty up to 90 days</span>
          </div>
        </div>
      </Container>

      <div className="pointer-events-none absolute -bottom-16 left-1/2 h-24 w-[120%] -translate-x-1/2 rounded-[50%] bg-white/90 blur-2xl" />
    </section>
  );
}
