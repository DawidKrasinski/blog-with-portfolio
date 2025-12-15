"use client";
import {
  Calendar,
  Clock,
  Tag,
  ArrowLeft,
  ArrowRight,
  Github,
  Linkedin,
  Image,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function BlogPost() {
  const router = useRouter();
  function goToBlog() {
    router.push(`/blog`);
  }

  const relatedPosts = [
    {
      title: "{related post title}",
      description: "{short related post description}",
    },
    {
      title: "{related post title}",
      description: "{short related post description}",
    },
    {
      title: "{related post title}",
      description: "{short related post description}",
    },
  ];

  const popularPosts = [
    "{popular post title}",
    "{popular post title}",
    "{popular post title}",
    "{popular post title}",
  ];

  const categories = [
    "{category name}",
    "{category name}",
    "{category name}",
    "{category name}",
    "{category name}",
  ];

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      {/* POST HERO SECTION */}
      <section className="relative border-b border-cyan-500/20 overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-10"></div>

        {/* Neon glow effects */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Article Header */}
            <header className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
                <span className="bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {"{headline describing the blog post topic}"}
                </span>
              </h1>

              <p className="text-xl text-gray-400 leading-relaxed">
                {
                  "{short subheadline explaining the core idea or takeaway of the article}"
                }
              </p>

              {/* Meta information with neon accents */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-300">
                    {"{publish date placeholder}"}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-300">
                    {"{estimated reading time placeholder}"}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full">
                  <Tag className="w-4 h-4 text-pink-400" />
                  <span className="text-gray-300">
                    {"{post tags placeholder}"}
                  </span>
                </div>
              </div>
            </header>
          </div>
        </div>
      </section>

      {/* POST CONTENT SECTION */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
          {/* Main Content */}
          <article className="max-w-4xl">
            {/* Article Body */}
            <div className="prose prose-invert max-w-none space-y-8">
              {/* Intro */}
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed text-lg">
                  {
                    "{intro paragraph explaining the problem or topic discussed in the article}"
                  }
                </p>
              </div>

              {/* Section 1 */}
              <div className="space-y-4 pt-8">
                <h2 className="text-3xl text-cyan-400 border-l-4 border-cyan-500 pl-4">
                  {"{section title describing the concept}"}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {"{paragraph expanding on the topic}"}
                </p>
              </div>

              {/* Code Block Section */}
              <div className="relative my-8">
                <div className="bg-linear-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
                  <div className="flex items-center gap-2 pb-4 border-b border-gray-700 mb-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-gray-500 ml-4">
                      {"{terminal-output.tsx}"}
                    </div>
                  </div>
                  <pre className="font-mono text-sm space-y-2 overflow-x-auto">
                    <div className="flex gap-4">
                      <span className="text-gray-600">1</span>
                      <code>
                        <span className="text-purple-400">import</span>{" "}
                        <span className="text-gray-400">{"{"}</span>{" "}
                        <span className="text-cyan-400">{"{Component}"}</span>{" "}
                        <span className="text-gray-400">{"}"}</span>{" "}
                        <span className="text-purple-400">from</span>{" "}
                        <span className="text-green-400">'{"{library}"}'</span>
                      </code>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-gray-600">2</span>
                      <code className="text-gray-500"></code>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-gray-600">3</span>
                      <code>
                        <span className="text-purple-400">export</span>{" "}
                        <span className="text-purple-400">function</span>{" "}
                        <span className="text-yellow-400">
                          {"{FunctionName}"}
                        </span>
                        <span className="text-gray-400">() {"{"}</span>
                      </code>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-gray-600">4</span>
                      <code className="pl-4">
                        <span className="text-purple-400">return</span>{" "}
                        <span className="text-gray-400">{"<"}</span>
                        <span className="text-pink-400">
                          {"{Component}"}
                        </span>{" "}
                        <span className="text-cyan-400">{"{prop}"}</span>
                        <span className="text-pink-400">=</span>
                        <span className="text-green-400">{"{value}"}</span>{" "}
                        <span className="text-gray-400">{"/>"}</span>
                      </code>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-gray-600">5</span>
                      <code>
                        <span className="text-gray-400">{"}"}</span>
                      </code>
                    </div>
                  </pre>
                </div>
              </div>

              {/* Highlighted Insight / Quote */}
              <div className="relative my-8 p-6 bg-linear-to-br from-cyan-500/10 to-purple-500/10 border-l-4 border-pink-500 rounded-r-xl shadow-lg shadow-pink-500/10">
                <div className="text-gray-200 italic text-lg leading-relaxed">
                  {"{important takeaway or key insight from the article}"}
                </div>
              </div>

              {/* Another Section */}
              <div className="space-y-4">
                <h2 className="text-3xl text-purple-400 border-l-4 border-purple-500 pl-4">
                  {"{section title describing a solution or approach}"}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {"{paragraph explaining the solution}"}
                </p>
              </div>

              {/* Bullet List Section */}
              <div className="space-y-4">
                <h2 className="text-3xl text-pink-400 border-l-4 border-pink-500 pl-4">
                  {"{Key Points}"}
                </h2>
                <ul className="space-y-3 pl-6">
                  <li className="text-gray-300 relative before:content-['▹'] before:absolute before:-left-6 before:text-cyan-400 leading-relaxed">
                    {"{bullet point describing a key idea}"}
                  </li>
                  <li className="text-gray-300 relative before:content-['▹'] before:absolute before:-left-6 before:text-purple-400 leading-relaxed">
                    {"{bullet point describing a best practice}"}
                  </li>
                  <li className="text-gray-300 relative before:content-['▹'] before:absolute before:-left-6 before:text-pink-400 leading-relaxed">
                    {"{bullet point describing a common mistake}"}
                  </li>
                </ul>
              </div>

              {/* Image / Diagram Placeholder */}
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
                        {
                          "{tech-themed illustration or diagram explaining the concept}"
                        }
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-3 text-sm text-gray-500 italic">
                  {"{Figure caption describing what the diagram shows}"}
                </div>
              </div>

              {/* Summary Section */}
              <div className="space-y-4 pt-8 border-t border-gray-800">
                <h2 className="text-3xl text-cyan-400 border-l-4 border-cyan-500 pl-4">
                  {"{Summary}"}
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {
                    "{short summary paragraph recapping the main points of the article}"
                  }
                </p>
              </div>
            </div>

            {/* Post Navigation */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <div className="flex flex-col sm:flex-row gap-4 justify-between">
                <button
                  onClick={() => goToBlog()}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-900/50 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <ArrowLeft className="w-5 h-5 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
                  <span className="text-gray-300">{"{Back to blog}"}</span>
                </button>

                <button className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-cyan-500/10 to-purple-500/10 border border-purple-500/30 rounded-lg hover:from-cyan-500/20 hover:to-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group">
                  <span className="text-gray-300">
                    {"{Next article placeholder}"}
                  </span>
                  <ArrowRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Related Posts Section */}
            <div className="mt-16 pt-12 border-t border-gray-800">
              <h2 className="text-3xl mb-8 text-cyan-400">
                {"{Related Articles}"}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((post, index) => (
                  <article
                    key={index}
                    className="p-6 bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl hover:border-purple-500/50 transition-all duration-300 group"
                  >
                    <h3 className="text-lg mb-3 group-hover:text-purple-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {post.description}
                    </p>
                    <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm group/btn">
                      <span>{"{Read more}"}</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </article>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Author Bio */}
            <div className="p-6 bg-linear-to-br from-gray-900 to-gray-800 border border-cyan-500/30 rounded-xl shadow-lg shadow-cyan-500/10">
              <h3 className="text-xl mb-4 text-cyan-400">
                {"{About the Author}"}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {
                  "{short author bio placeholder describing background and expertise}"
                }
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <Github className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-purple-500/10 hover:border-purple-500/50 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-purple-400" />
                </a>
              </div>
            </div>

            {/* Popular Posts */}
            <div className="p-6 bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl">
              <h3 className="text-xl mb-4 text-purple-400">
                {"{Popular Posts}"}
              </h3>
              <div className="space-y-3">
                {popularPosts.map((post, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block text-gray-400 hover:text-purple-400 transition-colors text-sm border-b border-gray-800 pb-3 last:border-0"
                  >
                    {post}
                  </a>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="p-6 bg-gray-900/50 backdrop-blur-sm border border-pink-500/20 rounded-xl">
              <h3 className="text-xl mb-4 text-pink-400">{"{Categories}"}</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className="px-3 py-1.5 bg-pink-500/10 border border-pink-500/30 text-pink-400 rounded-full text-sm hover:bg-pink-500/20 transition-all duration-300"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
