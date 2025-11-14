import Container from "./ui/Container";

export default function WhyUs() {
  const feats = [
    { icon: "⚡", t: "Fast scheduling", d: "Same-day and next-day availability in most areas" },
    { icon: "🛡", t: "Warranty included", d: "Up to 90 days on parts and labor" },
    { icon: "🧰", t: "Most brands & models", d: "LG, Samsung, Whirlpool, GE, Bosch and others" },
  ];

  return (
    <div className="bg-[#0A1A2F] text-white">
      <Container className="py-16">
        <h2 className="text-3xl font-semibold">Why homeowners choose us</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {feats.map((f) => (
            <div
              key={f.t}
              className="rounded-[var(--radius)] bg-white/10 backdrop-blur-lg p-6 border border-white/10 hover:bg-white/20 transition"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{f.icon}</div>
                <div>
                  <div className="font-semibold text-white">{f.t}</div>
                  <div className="mt-1 text-white/70">{f.d}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
