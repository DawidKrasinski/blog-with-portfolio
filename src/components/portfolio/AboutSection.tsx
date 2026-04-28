import React, { forwardRef } from "react";
import { CheckCircle2, Code2 } from "lucide-react";
import { useBlogContext } from "@/context/BlogProvider";
import { BackgroundBubbles2 } from "../ui/BackgroundBubbles";

export const AboutSection = forwardRef<HTMLElement>((props, ref) => {
  const { aboutSectionRef } = useBlogContext();
  const techStack = {
    frontend: ["HTML", "CSS / Tailwind CSS", "JavaScript", "React / Next.js"],
    backend: ["Node.js", "TypeScript", "MySQL", "TypeORM"],
    tools: ["Git & GitHub", "Figma (UI Implementation)", "REST APIs", "Vite"],
  };

  return (
    <section
      ref={aboutSectionRef}
      className="py-24 border-t border-cyan-500/20 relative"
    >
      <BackgroundBubbles2 />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side - Image/Visual */}
          <div className="relative hidden md:block">
            <div className="relative z-10">
              <div className="bg-linear-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-purple-500/30 shadow-2xl shadow-purple-500/20">
                {/* Terminal mockup */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-4 border-b border-gray-700">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-gray-500 ml-4">{`Developer Console`}</div>
                  </div>

                  <div className="space-y-3 font-mono text-sm">
                    <div className="flex gap-2">
                      <span className="text-cyan-400">$</span>
                      <span className="text-gray-300">{`whoami`}</span>
                    </div>
                    <div className="pl-4 text-gray-400">
                      <div>{`1. Dawid Krasinski — Frontend Developer`}</div>
                      <div>{`2. Tworzę nowoczesne, responsywne interfejsy i lubię czysty kod.`}</div>
                      <div>{`3. Ciągle rozwijam umiejętności i poznaję nowe technologie.`}</div>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-cyan-400">$</span>
                      <span className="text-gray-300">{`upgrade --level senior`}</span>
                    </div>
                    <div className="pl-4 text-green-400">
                      {`progress saved: path unlocked`}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-4 bg-purple-500 text-gray-900 px-4 py-2 rounded-lg shadow-lg shadow-purple-500/50 animate-bounce">
                <Code2 className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-block px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full mb-4 text-pink-400 mx-auto md:mx-0">
              {`O mnie`}
            </div>

            <h2 className="text-4xl md:text-5xl">
              {`Cześć, jestem Dawid Krasinski, 17 letni aspirujący Frontend Developer.`}
            </h2>

            <p className="text-xl text-gray-400 leading-relaxed">
              {`Uczę się w szkole sportowej, gdzie łączę koszykówkę z pasją do programowania. Buduję strony i marzę, by tworzyć praktyczne projekty.`}
            </p>

            {/* Tech Stack */}
            <div className="space-y-4 pt-4">
              <h3 className="text-2xl text-purple-400">{`Mój tech stack`}</h3>

              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-500 mb-2">{`Frontend`}</div>
                  <div className="flex flex-wrap gap-2">
                    {techStack.frontend.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-500 mb-2">{`Backend`}</div>
                  <div className="flex flex-wrap gap-2">
                    {techStack.backend.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-lg text-purple-400 flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-500 mb-2">{`Tools & Others`}</div>
                  <div className="flex flex-wrap gap-2">
                    {techStack.tools.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-pink-500/10 border border-pink-500/30 rounded-lg text-pink-400 flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
