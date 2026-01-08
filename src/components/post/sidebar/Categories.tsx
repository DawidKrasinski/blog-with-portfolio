"use client";

import { useBlogContext } from "@/context/BlogProvider";
import { Posts } from "@/db/entities/Posts";

export default function Categories({ post }: { post: Posts }) {
  const { categories } = useBlogContext();
  return (
    <div className="p-6 bg-gray-900/50 backdrop-blur-sm border border-pink-500/20 rounded-xl">
      <h3 className="text-xl mb-4 text-pink-400">{"Categories"}</h3>
      <div className="flex flex-wrap gap-2">
        {post.categories.map((category, index) => (
          <button
            key={index}
            className="px-3 py-1.5 bg-pink-500/10 border border-pink-500/30 text-pink-400 rounded-full text-sm hover:bg-pink-500/20 transition-all duration-300"
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}
