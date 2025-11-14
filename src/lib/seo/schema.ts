export type Crumb = { name: string; item?: string };

export function jsonLdWebsite(baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: baseUrl,
    name: "Appliance Repair",
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/search?q={query}`,
      "query-input": "required name=query"
    }
  };
}

export function jsonLdOrganization(baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: baseUrl,
    name: "Appliance Repair",
    logo: `${baseUrl}/icons/icon-512.png`
  };
}

export function jsonLdBreadcrumb(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      ...(c.item ? { item: c.item } : {})
    }))
  };
}

export function jsonLdLocalBusiness(opts: {
  name: string;
  city: string;
  state?: string;
  zip?: string;
  phone?: string;
  url: string;
  baseUrl: string;
}) {
  const { name, city, state, zip, phone, url, baseUrl } = opts;
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    url,
    image: [`${baseUrl}/images/hero.jpg`],
    telephone: phone || "+1-000-000-0000",
    areaServed: {
      "@type": "AdministrativeArea",
      name: [city, state, zip].filter(Boolean).join(" ")
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: city,
      addressRegion: state || "",
      postalCode: zip || "",
      addressCountry: "US"
    }
  };
}

export function jsonLdService(opts: {
  serviceName: string;
  area: string;
  url: string;
  providerName?: string;
}) {
  const { serviceName, area, url, providerName = "Appliance Repair" } = opts;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    areaServed: area,
    provider: {
      "@type": "Organization",
      name: providerName
    },
    url
  };
}

export function jsonLdFAQ(faq: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(x => ({
      "@type": "Question",
      name: x.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: x.a
      }
    }))
  };
}
