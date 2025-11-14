export function Card({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`rounded-[var(--radius)] border border-black/10 bg-white shadow-sm ${className}`}>{children}</div>;
}
export function CardBody({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`p-5 ${className}`}>{children}</div>;
}
export function CardHeader({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`px-5 pt-5 pb-3 border-b border-black/10 ${className}`}>{children}</div>;
}
