import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "FAQ - Appliance Repair",
  description: "Answers to common questions about our appliance repair services.",
};

const faqs = [
  {
    q: "Which appliances do you repair",
    a: "We repair most major home appliances, including refrigerators, freezers, washers, dryers, dishwashers, ovens, ranges, microwaves and more.",
  },
  {
    q: "Do you offer same day service",
    a: "In most areas we can offer same day or next day appointments, depending on availability and time of day when you contact us.",
  },
  {
    q: "Is there a service call fee",
    a: "Yes, there is a diagnostic or service call fee that covers the technician visiting your home and inspecting the appliance. If you approve the repair, this fee is usually applied toward the total cost.",
  },
  {
    q: "Do you provide a warranty on repairs",
    a: "Yes, we provide a warranty on parts and labor. Terms may vary by job, but usually it is up to 90 days. Details are confirmed by the technician before starting the repair.",
  },
  {
    q: "Which brands do you work with",
    a: "We work with most popular brands, including LG, Samsung, Whirlpool, GE, Maytag, Bosch, KitchenAid and others.",
  },
  {
    q: "Do I need to remove anything before the technician arrives",
    a: "Please clear the area around the appliance and remove items from inside if possible. This helps the technician start diagnostics faster and work safely.",
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-slate-50">
        <Container className="py-14 md:py-20">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { label: "FAQ" },
            ]}
          />
          <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
            Frequently asked questions
          </h1>
          <p className="mt-3 text-[var(--muted)] max-w-2xl">
            Answers to common questions about scheduling, pricing and warranty for appliance repair.
          </p>
        </Container>
      </section>

      <Container className="py-12">
        <div className="space-y-6">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="rounded-[var(--radius)] bg-white p-5 md:p-6 card-border"
            >
              <h2 className="text-lg md:text-xl font-semibold">{item.q}</h2>
              <p className="mt-2 text-[var(--muted)]">{item.a}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
