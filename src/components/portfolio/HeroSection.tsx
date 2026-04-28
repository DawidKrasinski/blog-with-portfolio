import React from "react";
import { Code2, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import TechCodeMockup from "../editor/TechCodeMockup";
import { MovingBubble } from "../ui/Bubble";
import { useBlogContext } from "@/context/BlogProvider";
import { BackgroundBubbles1 } from "../ui/BackgroundBubbles";

type StatCardProps = {
  number: number | string;
  label: string;
  color: string;
};

const StatCard = ({ number, label, color }: StatCardProps) => (
  <div>
    <div className={`text-3xl ${color}`}>{number}</div>
    <div className="text-gray-500">{label}</div>
  </div>
);

export function HeroSection() {
  const router = useRouter();
  const { contactSectionRef, scrollToSection } = useBlogContext();

  const goToBlog = () => {
    router.push("/blog");
  };

  return (
    <section className="relative min-h-screen flex items-center border-b border-cyan-500/20">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-20"></div>

      <BackgroundBubbles1 />

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-cyan-400 text-sm md:text-base">
              <Code2 className="w-5 h-5 md:w-6 md:h-6" />
              <span className="tracking-wider">{`Cześć! Jestem Dawid Krasinski 👋`}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tigter">
              <span className="bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {`Jestem Frontend Developerem, który zamienia pomysły w szybkie i niezawodne strony internetowe.`}
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-400 leading-relaxed md:pr-32">
              {`Pomagam firmom rosnąć, budując szybkie, nowoczesne i przyjazne strony z użyciem React, Next.js oraz Tailwind.`}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center sm:justify-start">
              <button
                onClick={() => scrollToSection(contactSectionRef)}
                className="px-6 md:px-8 py-3 md:py-4 bg-linear-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/50 text-sm md:text-base"
              >
                {`Skontaktuj się`}
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>

              <button
                onClick={() => goToBlog()}
                className="px-6 md:px-8 py-3 md:py-4 border-2 border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 rounded-lg text-sm md:text-base"
              >
                {`Przejdź do bloga`}
              </button>
            </div>

            {/* Tech stats */}
            <div className="grid grid-cols-2 gap-4 md:flex md:flex-wrap md:gap-8 pt-8 justify-center sm:justify-start">
              <StatCard
                number={"2"}
                label="Projekty demo"
                color="text-cyan-400"
              />
              {/* <StatCard
                number={0}
                label="Satisfied Customer"
                color="text-purple-400"
              /> */}
              <StatCard
                number={"1"}
                label="Rok doświadczenia"
                color="text-fuchsia-400"
              />
              <StatCard
                number={"5+"}
                label="Nauczone technologie"
                color="text-purple-400"
              />
              <StatCard
                number={"500+"}
                label="Godzin nauki"
                color="text-pink-400"
              />
            </div>
          </div>

          <div className="hidden md:block">
            <TechCodeMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
