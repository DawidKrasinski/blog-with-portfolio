"use client";
import React, { forwardRef, useEffect, useState } from "react";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import { useBlogContext } from "@/context/BlogProvider";
import { BackgroundBubbles1 } from "../ui/BackgroundBubbles";

export const PortfolioSection = forwardRef<HTMLElement>((props, ref) => {
  const { portfolioSectionRef } = useBlogContext();
  const [visibleProjects, setVisibleProjects] = useState(2);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const update = (event: MediaQueryListEvent | MediaQueryList) =>
      setIsMobile(event.matches);
    update(mediaQuery);
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  const projects = [
    {
      name: "FocusTube",
      description:
        "Minimalistyczna wersja YouTube, eliminująca wszystkie rozpraszacze. Bez rekomendacji i filmów shorts.",
      technologies: ["React", "TypeScript", "youtube API"],
      image: "/focusTube.png",
      accentColor: "cyan",
      demoUrl: "https://focus-tube-gilt.vercel.app",
      repoUrl: "https://github.com/DawidKrasinski/focusTube",
    },
    {
      name: "{nazwa projektu}",
      description: "{1–2 zdania o tym, co robi projekt}",
      technologies: ["{tech}", "{tech}", "{tech}", "{tech}"],
      gradient: "from-cyan-500 to-blue-500",
      accentColor: "cyan",
    },
    {
      name: "{nazwa projektu}",
      description: "{1–2 zdania o tym, co robi projekt}",
      technologies: ["{tech}", "{tech}", "{tech}", "{tech}"],
      gradient: "from-purple-500 to-pink-500",
      accentColor: "purple",
    },
    {
      name: "{nazwa projektu}",
      description: "{1–2 zdania o tym, co robi projekt}",
      technologies: ["{tech}", "{tech}", "{tech}", "{tech}"],
      gradient: "from-pink-500 to-rose-500",
      accentColor: "pink",
    },
    {
      name: "{nazwa projektu}",
      description: "{1–2 zdania o tym, co robi projekt}",
      technologies: ["{tech}", "{tech}", "{tech}", "{tech}"],
      gradient: "from-cyan-500 to-teal-500",
      accentColor: "cyan",
    },
    {
      name: "{nazwa projektu}",
      description: "{1–2 zdania o tym, co robi projekt}",
      technologies: ["{tech}", "{tech}", "{tech}", "{tech}"],
      gradient: "from-purple-500 to-indigo-500",
      accentColor: "purple",
    },
    {
      name: "{nazwa projektu}",
      description: "{1–2 zdania o tym, co robi projekt}",
      technologies: ["{tech}", "{tech}", "{tech}", "{tech}"],
      gradient: "from-pink-500 to-purple-500",
      accentColor: "pink",
    },
  ];

  return (
    <section
      ref={portfolioSectionRef}
      className="py-24 border-t border-cyan-500/20 relative"
    >
      <BackgroundBubbles1 />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-4 text-purple-400">
            {`Portfolio`}
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            {`Moje najlepsze projekty`}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {`Zbiór moich nowoczesnych i różnorodnych projektów, które uważam za warte zaprezentowania.`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .slice(0, isMobile ? visibleProjects : projects.length)
            .map((project, index) => (
              <div
                key={index}
                className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                {/* Project thumbnail/header with gradient or image */}
                <div className="relative overflow-hidden h-48 bg-gray-800">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div
                      className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-size-[2rem_2rem] opacity-20"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-24 h-24 border-4 border-white/30 rounded-lg rotate-12 group-hover:rotate-0 transition-transform duration-300"></div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl mb-3">{project.name}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 bg-${project.accentColor}-500/10 border border-${project.accentColor}-500/30 rounded-full text-sm text-${project.accentColor}-400`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/20 transition-all duration-300 flex items-center justify-center gap-2 text-cyan-400"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {`Demo`}
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        {`GitHub`}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Show more button */}
        {isMobile && visibleProjects < projects.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisibleProjects(visibleProjects + 2)}
              className="px-8 py-4 bg-purple-500/10 border border-purple-500/30 rounded-lg hover:bg-purple-500/20 transition-all duration-300 flex items-center gap-3 text-purple-400"
            >
              {`Pokaż więcej`}
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
});
