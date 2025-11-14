import Container from "./ui/Container";
import Button from "./ui/Button";

export default function CTA() {
  return (
    <div className="bg-[#0A1A2F] from-[var(--primary)] to-slate-800 text-white ">
      <Container className="py-10 md:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="text-2xl font-semibold">Need help today?</div>
          <div className="mt-1 text-white/80">Book a same-day visit or get a quick quote.</div>
        </div>
        <div className="flex gap-3">
          <a href="#lead"><Button className="border-white/30 text-black hover:opacity-90" size="lg">Book now</Button></a>
          <a href="/locations"><Button variant="outline" className="border-white/30 text-white hover:bg-white/10" size="lg">See areas</Button></a>
        </div>
      </Container>
    </div>
  );
}
