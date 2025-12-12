import React from "react";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Github, label: "{GitHub}", href: "#" },
    { icon: Linkedin, label: "{LinkedIn}", href: "#" },
    { icon: Twitter, label: "{Twitter}", href: "#" },
    { icon: Mail, label: "{Email}", href: "#" },
  ];

  return (
    <footer className="border-t border-cyan-500/20 py-12 relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left side - Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              {`© 2025 Dawid Krasinski. Built with passion and clean code.`}
            </p>
            <p className="text-sm text-gray-500 mt-2 flex items-center justify-center md:justify-start gap-1">
              {`Designed and developed by me.`}
              <Heart className="w-4 h-4 text-pink-400" /> {`Powered by React`}
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="flex gap-8">
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              {`Services`}
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              {`Portfolio`}
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              {`About`}
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              {`Contact`}
            </a>
          </div>

          {/* Right side - Social Links */}
          <div className="flex gap-4">
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
            {`Built with passion, for users.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
