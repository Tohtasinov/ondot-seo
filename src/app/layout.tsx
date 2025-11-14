import type { Metadata } from "next";
import "./globals.css";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { jsonLdOrganization, jsonLdWebsite } from "@/lib/seo/schema";
import { BASE_URL } from "@/lib/seo/meta";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.example.com"),
  title: { default: "On-Dot Appliance Repair", template: "%s | On-Dot Appliance Repair" },
  description: "On-Dot Appliance Repair. Factory trained, licensed and insured.",
  icons: { icon: "/icons/logo.jpeg", shortcut: "/icons/logo.jpeg", apple: "/icons/logo.jpeg" },
  manifest: "/manifest.webmanifest",
  
};
<meta name="google-site-verification" content="y3pqytaN263ay_kSwVg78ZgLjDxu8ri1AY74Y9otHh8" />

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-[var(--bg)] text-[var(--fg)] antialiased">
        <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur">
          <Container className="flex h-14 items-center justify-between">
            <a href="/" className="font-semibold tracking-tight">On-Dot Appliance Repair</a>
            <nav className="hidden gap-6 text-sm text-[var(--fg)]/80 sm:flex">
              <a href="/service/refrigerator" className="hover:text-black">Refrigerator</a>
              <a href="/service/washer" className="hover:text-black">Washer</a>
              <a href="/service/dryer" className="hover:text-black">Dryer</a>
              <a href="/service/oven" className="hover:text-black">Oven</a>
              <a href="/service/stove" className="hover:text-black">Stove</a>
              
            </nav>
            <Link href="/services" className="hover:text-black">Services</Link>

            <a href="#lead"><Button>Book now</Button></a>
          </Container>
        </header>

        <main>{children}</main>
         <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite(BASE_URL)) }}
  />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization(BASE_URL)) }}
  />
        

        <footer className="mt-20 border-t border-black/10">
          <Container>
            <div className="py-10 text-sm text-[var(--muted)]">© {new Date().getFullYear()} On-Dot Appliance Repair</div>
          </Container>
        </footer>
      </body>
    </html>
  );
}
