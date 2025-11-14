import Container from "@/components/ui/Container";

export default function BackgroundHero() {
  return (
    <section
      className="relative"
      style={{
        backgroundImage: 'url("/images/hero.jpg")', // поменяй имя файла если другое
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <Container className="relative py-20 md:py-28">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">Same-day appliance repair</h1>
          <p className="mt-4 text-white/80 text-lg">Local licensed technicians. Warranty on parts & labor.</p>
          <div className="mt-8 flex gap-3">
            <a href="#lead" className="inline-flex items-center justify-center rounded-[var(--radius)] px-4 py-2 text-sm font-medium bg-white text-black">
              Book now
            </a>
            <a href="/locations" className="inline-flex items-center justify-center rounded-[var(--radius)] px-4 py-2 text-sm font-medium border border-white/40 text-white hover:bg-white/10">
              Service areas
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
