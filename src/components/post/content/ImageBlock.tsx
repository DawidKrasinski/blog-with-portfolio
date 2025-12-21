import { Image } from "lucide-react";

export default function ImageBlock() {
  return (
    <div className="relative my-8 group">
      <div className="bg-linear-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-purple-500/30 shadow-2xl shadow-purple-500/20 overflow-hidden">
        {/* Tech-themed illustration mockup */}
        <div className="aspect-video bg-gray-950 rounded-lg border border-cyan-500/20 flex items-center justify-center relative overflow-hidden">
          {/* Animated grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-size-[2rem_2rem] opacity-20"></div>

          {/* Neon glow effects */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>

          {/* Center content */}
          <div className="relative z-10 text-center space-y-4">
            <Image className="w-16 h-16 text-cyan-400 mx-auto" />
            <p className="text-gray-400">
              {"{tech-themed illustration or diagram explaining the concept}"}
            </p>
          </div>
        </div>
      </div>

      {/* Caption */}
      <div className="text-center mt-3 text-sm text-gray-500 italic">
        {"{Figure caption describing what the diagram shows}"}
      </div>
    </div>
  );
}
