import React, { forwardRef } from "react";
import { ExternalLink, Github } from "lucide-react";

export const PortfolioSection = forwardRef<HTMLElement>((props, ref) => {
  const projects = [
    {
      name: "{project name}",
      description: "{1–2 sentence explanation of what the project does}",
      technologies: ["{tech}", "{tech}", "{tech}", "{tech}"],
      gradient: "from-cyan-500 to-blue-500",
      accentColor: "cyan",
    },
    {
      name: "{project name}",
      description: "{1–2 sentence explanation of what the project does}",
      technologies: ["{tech}", "{tech}", "{tech}", "{tech}"],
      gradient: "from-purple-500 to-pink-500",
      accentColor: "purple",
    },
    {
      name: "{project name}",
      description: "{1–2 sentence explanation of what the project does}",
      technologies: ["{tech}", "{tech}", "{tech}", "{tech}"],
      gradient: "from-pink-500 to-rose-500",
      accentColor: "pink",
    },
    {
      name: "{project name}",
      description: "{1–2 sentence explanation of what the project does}",
      technologies: ["{tech}", "{tech}", "{tech}", "{tech}"],
      gradient: "from-cyan-500 to-teal-500",
      accentColor: "cyan",
    },
    {
      name: "{project name}",
      description: "{1–2 sentence explanation of what the project does}",
      technologies: ["{tech}", "{tech}", "{tech}", "{tech}"],
      gradient: "from-purple-500 to-indigo-500",
      accentColor: "purple",
    },
    {
      name: "{project name}",
      description: "{1–2 sentence explanation of what the project does}",
      technologies: ["{tech}", "{tech}", "{tech}", "{tech}"],
      gradient: "from-pink-500 to-purple-500",
      accentColor: "pink",
    },
  ];

  return (
    <section ref={ref} className="py-24 border-t border-cyan-500/20 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-4 text-purple-400">
            {`Portfolio`}
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            {`Some of My Best Work`}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {`A collection of modern, fast, and responsive websites built with clean code and a strong focus on user experience.`}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              {/* Project thumbnail/header with gradient */}
              <div
                className={`h-48 bg-linear-to-br ${project.gradient} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-size-[2rem_2rem] opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-24 h-24 border-4 border-white/30 rounded-lg rotate-12 group-hover:rotate-0 transition-transform duration-300"></div>
                </div>
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
                  <button className="flex-1 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/20 transition-all duration-300 flex items-center justify-center gap-2 text-cyan-400">
                    <ExternalLink className="w-4 h-4" />
                    {`{button placeholder for live demo}`}
                  </button>
                  <button className="flex-1 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2">
                    <Github className="w-4 h-4" />
                    {`{button placeholder for GitHub}`}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
