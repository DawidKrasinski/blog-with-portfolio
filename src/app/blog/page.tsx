"use client";
import { Search, Tag, Calendar, Clock, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BlogMainPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const tags = [
    { name: "{tag name placeholder}", color: "cyan" },
    { name: "{tag name placeholder}", color: "purple" },
    { name: "{tag name placeholder}", color: "pink" },
    { name: "{tag name placeholder}", color: "cyan" },
    { name: "{tag name placeholder}", color: "purple" },
  ];

  const blogPosts = [
    {
      id: 1,
      thumbnail: "code-1",
      title: "{article title}",
      excerpt:
        "{2-3 sentence excerpt describing what the article is about and why readers should care about this topic}",
      tags: ["{tag}", "{tag}"],
      date: "{publish date}",
      readTime: "{read time}",
    },
    {
      id: 2,
      thumbnail: "code-2",
      title: "{article title}",
      excerpt:
        "{2-3 sentence excerpt describing what the article is about and why readers should care about this topic}",
      tags: ["{tag}", "{tag}"],
      date: "{publish date}",
      readTime: "{read time}",
    },
    {
      id: 3,
      thumbnail: "code-3",
      title: "{article title}",
      excerpt:
        "{2-3 sentence excerpt describing what the article is about and why readers should care about this topic}",
      tags: ["{tag}", "{tag}", "{tag}"],
      date: "{publish date}",
      readTime: "{read time}",
    },
    {
      id: 4,
      thumbnail: "code-4",
      title: "{article title}",
      excerpt:
        "{2-3 sentence excerpt describing what the article is about and why readers should care about this topic}",
      tags: ["{tag}", "{tag}"],
      date: "{publish date}",
      readTime: "{read time}",
    },
    {
      id: 5,
      thumbnail: "code-5",
      title: "{article title}",
      excerpt:
        "{2-3 sentence excerpt describing what the article is about and why readers should care about this topic}",
      tags: ["{tag}"],
      date: "{publish date}",
      readTime: "{read time}",
    },
    {
      id: 6,
      thumbnail: "code-6",
      title: "{article title}",
      excerpt:
        "{2-3 sentence excerpt describing what the article is about and why readers should care about this topic}",
      tags: ["{tag}", "{tag}"],
      date: "{publish date}",
      readTime: "{read time}",
    },
  ];

  function goToBlogPage(slug: string) {
    router.push(`/blog/${slug}`);
  }

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
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      {/* Blog Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden border-b border-cyan-500/20">
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-20"></div>

        {/* Neon glow effects */}
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl">
              <span className="bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {"{headline introducing the blog and its purpose}"}
              </span>
            </h1>

            <p className="text-xl text-gray-400">
              {"{subheadline describing what topics the blog covers}"}
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="{search for article...}"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300 text-gray-100 placeholder-gray-500"
                />
              </div>
            </div>

            {/* Tag Chips */}
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

      {/* Blog List Section */}
      <section className="py-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-160 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group hover:shadow-xl hover:shadow-cyan-500/20"
              >
                {/* Thumbnail - Code Editor Mockup */}
                <div className="relative h-48 bg-linear-to-br from-gray-900 to-gray-800 p-6 border-b border-gray-800">
                  <div className="space-y-2 font-mono text-xs">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-gray-500">{`{code-${post.id}.tsx}`}</div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-gray-600">1</span>
                      <span>
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-cyan-400">{"{var}"}</span>{" "}
                        <span className="text-pink-400">=</span>{" "}
                        <span className="text-green-400">{"{val}"}</span>
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-gray-600">2</span>
                      <span className="text-gray-500"></span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-gray-600">3</span>
                      <span>
                        <span className="text-purple-400">function</span>{" "}
                        <span className="text-yellow-400">{"{fn}"}</span>
                        <span className="text-gray-400">()</span>
                      </span>
                    </div>
                  </div>

                  {/* Floating tech badge */}
                  <div className="absolute -bottom-4 right-4 bg-cyan-500 text-gray-900 px-3 py-1.5 rounded-lg shadow-lg shadow-cyan-500/50 text-xs">
                    {"{tech}"}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-400 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Button */}
                  <button
                    onClick={() => goToBlogPage("123")}
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors pt-2 group/btn"
                  >
                    <span>{"{Read more}"}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
