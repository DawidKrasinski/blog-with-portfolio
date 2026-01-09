"use client";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/portfolio/Footer";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { PortfolioSection } from "@/components/portfolio/PortfolioSection";
import { ServicesSection } from "@/components/portfolio/ServicesSection";
import { useRef } from "react";

export default function Home() {
  const servicesSectionRef = useRef<HTMLElement | null>(null);
  const portfolioSectionRef = useRef<HTMLElement | null>(null);
  const aboutSectionRef = useRef<HTMLElement | null>(null);
  const contactSectionRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (Ref: React.RefObject<HTMLElement | null>) => {
    if (Ref == null) return;
    Ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      <HeroSection
        contactSectionRef={contactSectionRef}
        handleScrollFn={scrollToSection}
      />
      <ServicesSection ref={servicesSectionRef} />
      <PortfolioSection ref={portfolioSectionRef} /> {/* ref */}
      <AboutSection ref={aboutSectionRef} />
      {/* <TestimonialsSection /> */}
      <ContactSection ref={contactSectionRef} />
      <Footer
        handleScrollFn={scrollToSection}
        servicesSectionRef={servicesSectionRef}
        portfolioSectionRef={portfolioSectionRef}
        aboutSectionRef={aboutSectionRef}
        contactSectionRef={contactSectionRef}
      />
    </div>
  );
}
