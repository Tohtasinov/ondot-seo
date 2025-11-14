import Container from "./ui/Container";

export default function Testimonials() {
  const items = [
    { n: "Alex P.",  c: "Dryer fixed same day. Tech was on time and professional." },
    { n: "Maria L.", c: "Refrigerator cooling again in one visit. Fair pricing." },
    { n: "John D.",  c: "Washer leak diagnosed quickly. Clean work and polite." },
  ];
  return (
    <div className="bg-slate-50 p-10">
      <Container>
        <h2 className="text-2xl md:text-3xl font-semibold">What customers say</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map(x => (
            <div key={x.n} className="rounded-[var(--radius)] border border-black/10 bg-white p-5 shadow-sm">
              <div className="text-sm text-amber-500">★★★★★</div>
              <p className="mt-2">{x.c}</p>
              <div className="mt-3 text-sm text-[var(--muted)]">— {x.n}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
