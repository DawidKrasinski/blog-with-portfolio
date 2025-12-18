"use client";
import { Search, Tag } from "lucide-react";

type TagType = { name: string; color: string };

interface BlogHeroProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  tags: TagType[];
}

export default function BlogHero({
  searchQuery,
  setSearchQuery,
  tags,
}: BlogHeroProps) {
  const getTagColorClasses = (color: string) => {
    const colors = {
      cyan: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20",
      purple:
        "bg-purple-500/10 border-purple-500/30 text-purple-400 hover:bg-purple-500/20",
      pink: "bg-pink-500/10 border-pink-500/30 text-pink-400 hover:bg-pink-500/20",
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden border-b border-cyan-500/20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-20"></div>
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl">
            <span className="bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {"Advanced Concepts, Beginner Perspective."}
            </span>
          </h1>
          <p className="text-xl text-gray-400">
            {
              "From one beginner to another: I learn advanced ideas and share them in an easy-to-understand way."
            }
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="search for article..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300 text-gray-100 placeholder-gray-500"
              />
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {tags.map((tag, index) => (
              <button
                key={index}
                className={`px-4 py-2 border rounded-full transition-all duration-300 ${getTagColorClasses(
                  tag.color
                )}`}
              >
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  <span>{tag.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
