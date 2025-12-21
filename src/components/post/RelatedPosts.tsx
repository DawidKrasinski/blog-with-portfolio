import { ArrowRight } from "lucide-react";

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

export default function RelatedPosts() {
  return (
    <div className="mt-16 pt-12 border-t border-gray-800">
      <h2 className="text-3xl mb-8 text-cyan-400">{"{Related Articles}"}</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {relatedPosts.map((post, index) => (
          <article
            key={index}
            className="p-6 bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl hover:border-purple-500/50 transition-all duration-300 group"
          >
            <h3 className="text-lg mb-3 group-hover:text-purple-400 transition-colors">
              {post.title}
            </h3>

            <p className="text-gray-400 text-sm mb-4">{post.description}</p>

            <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm group/btn">
              <span>{"{Read more}"}</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
