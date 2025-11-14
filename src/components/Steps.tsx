import Container from "./ui/Container";

export default function Steps(){
  const steps = [
    { n:"1", t:"Tell us the issue", d:"Describe the problem or pick a service" },
    { n:"2", t:"Schedule a visit", d:"Choose a convenient same-day window" },
    { n:"3", t:"We repair it", d:"Tech arrives, diagnoses, repairs with warranty" },
  ];
  return (
    <Container >
      <h2 className="text-2xl md:text-3xl font-semibold">How it works</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {steps.map(s=>(
          <div key={s.n} className="rounded-[var(--radius)] bg-white p-5 card-border">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand)] text-white">{s.n}</div>
            <div className="mt-3 font-semibold">{s.t}</div>
            <div className="mt-1 text-[var(--muted)]">{s.d}</div>
          </div>
        ))}
      </div>
    </Container>
  );
}
