import React from "react";
import { Code2, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import TechCodeMockup from "../editor/TechCodeMockup";
import { MovingBubble } from "../ui/Bubble";

type Props = {
  handleScrollFn: (Ref: React.RefObject<HTMLElement | null>) => void;
  contactSectionRef: React.RefObject<HTMLElement | null>;
};

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

export function HeroSection(props: Props) {
  const router = useRouter();

  const goToBlog = () => {
    router.push("/blog");
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden border-b border-cyan-500/20">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-20"></div>

      {/* Neon glow effects */}

      <MovingBubble
        animationSpeed={500}
        direction="left"
        startX={100}
        className="absolute top-1/4 -right-48 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
      />
      <MovingBubble
        animationSpeed={350}
        startX={0}
        className="absolute bottom-1/4 -left-48 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-cyan-400">
              <Code2 className="w-6 h-6" />
              <span className="tracking-wider">{`Hey there! I'm Dawid Krasinski 👋`}</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl">
              <span className="bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {`I’m a Frontend Developer turning ideas into fast and reliable websites.`}
              </span>
            </h1>

            <p className="text-2xl text-gray-400 pr-32">
              {`I help businesses grow by building fast, modern, and user-friendly websites using react, next js and tailwind.`}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => props.handleScrollFn(props.contactSectionRef)}
                className="px-8 py-4 bg-linear-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 rounded-lg flex items-center gap-2 shadow-lg shadow-cyan-500/50"
              >
                {`Contact me`}
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => goToBlog()}
                className="px-8 py-4 border-2 border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 rounded-lg"
              >
                {`Visit my blog`}
              </button>
            </div>

            {/* Tech stats */}
            <div className="flex gap-8 pt-8">
              <StatCard
                number={1}
                label="Demo Project Built"
                color="text-cyan-400"
              />
              {/* <StatCard
                number={0}
                label="Satisfied Customer"
                color="text-purple-400"
              /> */}
              <StatCard
                number={1}
                label="Year Of Experience"
                color="text-fuchsia-400"
              />
              <StatCard
                number={"5+"}
                label="Technologies Learned"
                color="text-purple-400"
              />
              <StatCard
                number={"500+"}
                label="Hours Spent Learning"
                color="text-pink-400"
              />
            </div>
          </div>

          <TechCodeMockup />
        </div>
      </div>
    </section>
  );
}
