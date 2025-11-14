import Container from "./ui/Container";

export default function TrustBar() {
  return (
    <div className="bg-black text-white">
      <Container className="py-3 flex flex-wrap items-center gap-6 text-sm">
        <div>✅ Same-day service</div>
        <div>🛡 Warranty on parts & labor</div>
        <div>📍 Local licensed technicians</div>
        <div>⭐️ 4.9/5 customer rating</div>
      </Container>
    </div>
  );
}
