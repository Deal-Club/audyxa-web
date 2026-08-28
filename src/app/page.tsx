import { MainSlider } from "@/components/main-slider";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { FeaturesSection } from "@/components/features-section";
import { ProjectsShowcase } from "@/components/projects-showcase";
import { WhyChooseUs } from "@/components/why-choose-us";
import { FaqSection } from "@/components/faq-section";
import { ClientsSection } from "@/components/clients-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { NewsSection } from "@/components/news-section";
import { ContactSection } from "@/components/contact-section";
import { CallToAction } from "@/components/call-to-action";

export default function Home() {
  return (
    <main>
      <MainSlider />
      <AboutSection />
      <ServicesSection />
      <FeaturesSection />
      <ProjectsShowcase />
      <WhyChooseUs />
      <FaqSection />
      <ClientsSection />
      <TestimonialSection />
      <NewsSection />
      <ContactSection />
      <CallToAction />
    </main>
  );
}
