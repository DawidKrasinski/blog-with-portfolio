import React, { forwardRef } from "react";
import { Code, Smartphone, Zap, Database, Globe, Palette } from "lucide-react";
import { MovingBubble } from "../ui/Bubble";
import { useBlogContext } from "@/context/BlogProvider";
import {
  BackgroundBubbles1,
  BackgroundBubbles2,
} from "../ui/BackgroundBubbles";

export const ServicesSection = forwardRef<HTMLElement>((props, ref) => {
  const { servicesSectionRef } = useBlogContext();
  const services = [
    {
      icon: Code,
      color: "cyan",
      title: "Website Development",
      description:
        "Budowanie szybkich i nowoczesnych stron w React, Next.js i Tailwind, aby Twoja firma wyróżniała się online.",
    },
    {
      icon: Smartphone,
      color: "purple",
      title: "Responsive Mobile Design",
      description:
        "Tworzenie mobile-first layoutów, które wyglądają świetnie na każdym urządzeniu i poprawiają doświadczenie użytkownika.",
    },
    {
      icon: Zap,
      color: "pink",
      title: "Performance Optimization",
      description:
        "Optymalizacja prędkości ładowania, obrazów i struktury kodu, aby strona działała szybko i płynnie.",
    },
    {
      icon: Database,
      color: "cyan",
      title: "Backend & Database Setup",
      description:
        "Konfiguracja baz MySQL i prostych backendowych funkcji w TypeScript i TypeORM, aby wspierać działanie strony.",
    },
    {
      icon: Globe,
      color: "purple",
      title: "SEO-Friendly Development",
      description:
        "Budowa stron z czystą strukturą HTML, szybką wydajnością i poprawną meta konfiguracją, aby lepiej pozycjonować się w wyszukiwarkach.",
    },
    {
      icon: Palette,
      color: "pink",
      title: "Figma to Frontend",
      description:
        "Przenoszenie projektów z Figma do działającego frontendu w React i Tailwind.",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: {
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/30",
        icon: "text-cyan-400",
        glow: "shadow-cyan-500/50",
      },
      purple: {
        bg: "bg-purple-500/10",
        border: "border-purple-500/30",
        icon: "text-purple-400",
        glow: "shadow-purple-500/50",
      },
      pink: {
        bg: "bg-pink-500/10",
        border: "border-pink-500/30",
        icon: "text-pink-400",
        glow: "shadow-pink-500/50",
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section ref={servicesSectionRef} className="py-24 relative">
      <BackgroundBubbles2 />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-4 text-cyan-400">
            {`Usługi`}
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            {`Tworzę nowoczesne strony internetowe`}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {`Łączę nowoczesne technologie z przemyślanym designem, aby dostarczyć działające rozwiązania.`}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = getColorClasses(service.color);

            return (
              <div
                key={index}
                className={`p-6 bg-gray-900/50 backdrop-blur-sm border ${colors.border} rounded-xl hover:bg-gray-900/80 transition-all duration-300 group ${colors.glow}`}
              >
                <div
                  className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <h3 className="text-xl mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});
