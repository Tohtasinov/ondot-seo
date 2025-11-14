import Container from "./ui/Container";

export default function StatsStrip() {
  const stats = [
    { k: "15k+", v: "Repairs completed" },
    { k: "4.9★", v: "Average rating" },
    { k: "90d", v: "Warranty" },
    { k: "24/7", v: "Online booking" },
  ];

  return (
    <div className="bg-[#0A1A2F] text-white">
      <Container className="py-14">
        <div className="grid gap-6 text-center sm:grid-cols-2 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.k}
              className="rounded-[var(--radius)] bg-white/10 backdrop-blur-lg p-6 border border-white/10 hover:bg-white/20 transition"
            >
              <div className="text-3xl font-semibold text-white">{s.k}</div>
              <div className="mt-1 text-sm text-white/70">{s.v}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
