import React from "react";
import { Code, Smartphone, Zap, Database, Globe, Palette } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Code,
      color: "cyan",
      title: "Website Development",
      description:
        "Building fast and modern websites using React, Next.js and Tailwind, helping your business stand out online.",
    },
    {
      icon: Smartphone,
      color: "purple",
      title: "Responsive Mobile Design",
      description:
        "Creating mobile-first layouts that look great on every device, improving user experience and conversions.",
    },
    {
      icon: Zap,
      color: "pink",
      title: "Performance Optimization",
      description:
        "Optimizing loading speed, images and code structure to ensure your website loads fast and performs smoothly.",
    },
    {
      icon: Database,
      color: "cyan",
      title: "Backend & Database Setup",
      description:
        "Setting up MySQL databases and simple backend features using TypeScript and TypeORM to support your website’s functionality.",
    },
    {
      icon: Globe,
      color: "purple",
      title: "SEO-Friendly Development",
      description:
        "Building websites with clean HTML structure, fast performance and proper meta setup to improve online visibility.",
    },
    {
      icon: Palette,
      color: "pink",
      title: "Figma to Frontend",
      description:
        "Turning Figma designs into pixel-perfect, fully functional websites using React and Tailwind.",
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
    <section className="py-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-160 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-4 text-cyan-400">
            {`Services`}
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            {`Crafting Modern Web Experiences`}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {`I combine modern technologies with thoughtful design to create solutions that work.`}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = getColorClasses(service.color);

            return (
              <div
                key={index}
                className={`p-6 bg-gray-900/50 backdrop-blur-sm border ${colors.border} rounded-xl hover:bg-gray-900/80 transition-all duration-300 group hover:shadow-xl ${colors.glow}`}
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
}
