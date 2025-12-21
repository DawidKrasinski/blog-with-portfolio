import PostMeta from "./PostMeta";

export default function PostHero() {
  return (
    <section className="relative border-b border-cyan-500/20 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-10"></div>

      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl leading-tight bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {"{headline describing the blog post topic}"}
          </h1>

          <p className="text-xl text-gray-400">
            {"{short subheadline explaining the core idea or takeaway}"}
          </p>

          <PostMeta />
        </div>
      </div>
    </section>
  );
}
