"use client";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/portfolio/Footer";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { PortfolioSection } from "@/components/portfolio/PortfolioSection";
import { ServicesSection } from "@/components/portfolio/ServicesSection";
import { useRef } from "react";

export default function Home() {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}
