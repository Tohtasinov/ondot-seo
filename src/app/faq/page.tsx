import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { jsonLdBreadcrumb } from "@/lib/seo/schema";

export const metadata = {
  title: "FAQ",
  description: "Frequently asked questions about appliance repair."
};

export default function FAQPage() {
  const file = path.join(process.cwd(), "src/content/faq", "general.mdx");
  const src = fs.readFileSync(file, "utf8");
  const { content } = matter(src);

 return (
  <div className="mx-auto max-w-3xl px-4 py-10 prose">
    <h1>FAQ</h1>
    <MDXRemote source={content} />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Do you offer same-day service?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes, in most areas we provide same-day repairs if you call before 2 PM." }
              },
              {
                "@type": "Question",
                "name": "What brands do you repair?",
                "acceptedAnswer": { "@type": "Answer", "text": "LG, Samsung, Whirlpool, GE, Bosch and others." }
              },
              {
                "@type": "Question",
                "name": "Do repairs include warranty?",
                "acceptedAnswer": { "@type": "Answer", "text": "Up to 180 days on parts and labor." }
              }
            ]
          }
        ),
      }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          jsonLdBreadcrumb([
            { name: "Home", item: "/" },
            { name: "FAQ", item: "/faq" },
          ])
        ),
      }}
    />
  </div>
);
}
