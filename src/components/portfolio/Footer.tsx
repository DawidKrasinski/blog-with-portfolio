import React from "react";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import { useBlogContext } from "@/context/BlogProvider";

export function Footer() {
  const {
    portfolioSectionRef,
    aboutSectionRef,
    servicesSectionRef,
    contactSectionRef,
    scrollToSection,
  } = useBlogContext();
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/DawidKrasinski",
    },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:example@email.com" },
  ];

  return (
    <footer className="border-t border-cyan-500/20 py-12 relative">
      {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-8">
          {/* Left side - Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              {`© 2025 Dawid Krasinski. Zbudowane z pasją.`}
            </p>
            <p className="hidden md:inline-flex text-sm text-gray-500 mt-2 items-center justify-center md:justify-start gap-1">
              {`Zaprojketowane i napisane przeze mnie.`}
              <Heart className="w-4 h-4 text-pink-400" />{" "}
              {`Z wykorzystaniem React.`}
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:flex-row md:gap-10 md:items-center">
            <button
              onClick={() => scrollToSection(servicesSectionRef)}
              className="rounded-full border border-gray-700 bg-white/5 px-4 py-2 text-sm text-gray-200 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300 md:border-0 md:bg-transparent md:px-0 md:py-0 md:text-gray-400"
            >
              {`Usługi`}
            </button>
            <button
              onClick={() => scrollToSection(portfolioSectionRef)}
              className="rounded-full border border-gray-700 bg-white/5 px-4 py-2 text-sm text-gray-200 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300 md:border-0 md:bg-transparent md:px-0 md:py-0 md:text-gray-400"
            >
              {`Portfolio`}
            </button>
            <button
              onClick={() => scrollToSection(aboutSectionRef)}
              className="rounded-full border border-gray-700 bg-white/5 px-4 py-2 text-sm text-gray-200 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300 md:border-0 md:bg-transparent md:px-0 md:py-0 md:text-gray-400"
            >
              {`O mnie`}
            </button>
            <button
              onClick={() => scrollToSection(contactSectionRef)}
              className="rounded-full border border-gray-700 bg-white/5 px-4 py-2 text-sm text-gray-200 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300 md:border-0 md:bg-transparent md:px-0 md:py-0 md:text-gray-400"
            >
              {`Kontakt`}
            </button>
          </div>

          {/* Right side - Social Links */}
          <div className="flex gap-4 justify-center md:justify-start">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            {`Stworzone z pasją dla użytkowników.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
