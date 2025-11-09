import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.example.com"),
  title: { default: "Appliance Repair", template: "%s | Appliance Repair" },
  description: "Same day appliance repair. Factory trained, licensed and insured."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <header className="border-b">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <a href="/" className="font-semibold">Appliance Repair</a>
            <nav className="text-sm gap-4 hidden sm:flex">
              <a href="/service/refrigerator">Refrigerator</a>
              <a href="/service/washer">Washer</a>
              <a href="/service/dryer">Dryer</a>
              <a href="/locations">Locations</a>
            </nav>
            <a href="#lead" className="rounded bg-black px-4 py-2 text-white">Book now</a>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-16 border-t">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600">
            © {new Date().getFullYear()} Appliance Repair
          </div>
        </footer>
      </body>
    </html>
  );
}
