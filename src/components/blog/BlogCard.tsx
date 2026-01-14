"use client";
import { Color } from "@/db/entities/Categories";
import { Posts } from "@/db/entities/Posts";
import { getTagColorClasses } from "@/utils/getTagColorClasses";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogCardProps {
  post: Posts;
  goToBlogPage: (slug: string) => void;
}

export default function BlogCard({ post, goToBlogPage }: BlogCardProps) {
  return (
    <article
      onClick={() => goToBlogPage(post.slug)}
      className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group hover:shadow-xl hover:shadow-cyan-500/20 flex flex-col"
    >
      {/* Thumbnail */}
      <div className="relative h-48 bg-linear-to-br from-gray-900 to-gray-800 p-6 border-b border-gray-800">
        <div className="space-y-2 font-mono text-xs">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            </div>
            <div className="text-gray-500">{`TypeScript`}</div>
          </div>
        </div>
        {/* <div className="absolute -bottom-4 right-4 bg-cyan-500 text-gray-900 px-3 py-1.5 rounded-lg shadow-lg shadow-cyan-500/50 text-xs">
          Dawid Krasiński
        </div> */}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 space-y-4">
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>
              {post.published_date
                ?.toString()
                .split("T")[0]
                .split("-")
                .reverse()
                .join(".")}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.reading_time}</span>
          </div>
        </div>

        <h3 className="text-2xl group-hover:text-cyan-400 transition-colors">
          {post.headline}
        </h3>

        <p className="text-gray-400 leading-relaxed">{post.subheadline}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          {post.categories.map((tag, idx) => (
            <span
              key={idx}
              className={`text-xs px-3 py-1 border rounded-full ${getTagColorClasses(
                tag.color
              )}`}
            >
              {tag.name}
            </span>
          ))}
        </div>

        <button className="mt-auto flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors pt-2 group/btn">
          <span>Read more</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </article>
  );
}
