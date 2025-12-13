"use client";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ServicesSection } from "@/components/ServicesSection";
import { useRef } from "react";

export default function Home() {
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
      <ServicesSection />
      <PortfolioSection /> {/* ref */}
      <AboutSection />
      {/* <TestimonialsSection /> */}
      <ContactSection ref={contactSectionRef} />
      <Footer />
    </div>
  );
}
