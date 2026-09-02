import Script from "next/script";
import { MainSlider } from "@/components/main-slider";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { FeaturesSection } from "@/components/features-section";
import { HomeQuoteBanner } from "@/components/home-quote-banner";
import { WhyChooseUs } from "@/components/why-choose-us";
import { FaqSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { CallToAction } from "@/components/call-to-action";
import { buildFaqJsonLd } from "@/lib/faq-schema";
import { FAQ_ITEMS } from "@/lib/faq-data";

export default function Home() {
  return (
    <main>
      <Script
        id="home-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(FAQ_ITEMS)) }}
      />
      <MainSlider />
      <AboutSection logoMode />
      <ServicesSection />
      <FeaturesSection />
      <HomeQuoteBanner />
      <WhyChooseUs />
      <FaqSection layout="two-columns" />
      <ContactSection />
      <CallToAction />
    </main>
  );
}
