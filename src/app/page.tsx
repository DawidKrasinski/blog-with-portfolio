"use client";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { PortfolioSection } from "@/components/portfolio/PortfolioSection";
import { ServicesSection } from "@/components/portfolio/ServicesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
    </>
  );
}
