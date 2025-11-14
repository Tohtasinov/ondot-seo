import Hero from "@/components/Hero-1";
import BrandStrip from "@/components/BrandStrip";
import Section from "@/components/ui/Section";
import ServicesGrid from "@/components/ServicesGrid";
import WhyUs from "@/components/WhyUs";
import StatsStrip from "@/components/StatsStrip";
import Steps from "@/components/Steps";
import Container from "@/components/ui/Container";
import LeadForm from "@/components/LeadForm";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import ServiceAreas from "@/components/ServiceAreas";
import CallButton from "@/components/CallButton";
import CountyMaps from "@/components/CountyMaps";

export default function HomePage(){
  return (
    <>
      <Hero />
      <BrandStrip />
       <Section id="lead" tone="default">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">Request service</h2>
          <p className="mt-2 text-[var(--muted)]">Tell us about your issue and we will call you back.</p>
          <div className="mt-6"><LeadForm /></div>
        </Container>
      </Section>
      <Section tone="default"><ServicesGrid /></Section>
      
      <Section tone="subtle" className="pt-0"><WhyUs /></Section>
      <StatsStrip />
      <Section tone="default">
        <Steps />
      </Section>
      <Testimonials />
      <CTA />
<CountyMaps />

 <CallButton phone="+17088704053" />
    </>
  );
}
