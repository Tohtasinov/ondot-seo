import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { BASE_URL } from "@/lib/seo/meta";
import { jsonLdOrganization, jsonLdWebsite } from "@/lib/seo/schema";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=GTM-PW7JL94B'+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PW7JL94B');
            `
          }}
        />
      </head>

      <body className="min-h-dvh bg-[var(--bg)] text-[var(--fg)] antialiased">

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PW7JL94B"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur">
          <Container className="flex h-14 items-center justify-between">
            <a href="/" className="font-semibold tracking-tight">
              On-Dot Appliance Repair
            </a>
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
            <div className="py-10 text-sm text-[var(--muted)]">
              © {new Date().getFullYear()} On-Dot Appliance Repair
            </div>
          </Container>
        </footer>
      </body>
    </html>
  );
}
