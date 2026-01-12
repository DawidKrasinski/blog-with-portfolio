"use client";
import { Posts } from "@/db/entities/Posts";
import BlogCard from "./BlogCard";

interface BlogListProps {
  blogPosts: Posts[];
  tagContent?: string;
  tagBackgroundColor?: "cyan" | "purple" | "pink";
  header?: string;
  subheader?: string;
  goToBlogPage: (slug: string) => void;
}

export default function BlogList({
  blogPosts,
  tagContent,
  tagBackgroundColor,
  header,
  subheader,
  goToBlogPage,
}: BlogListProps) {
  return (
    <section
      className={`${
        !tagContent && !tagBackgroundColor && !header && !subheader
          ? ""
          : "py-24"
      }  relative`}
    >
      {/* Background decorative blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-160 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          {tagBackgroundColor === "cyan" ? (
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-4 text-cyan-400">
              {tagContent}
            </div>
          ) : tagBackgroundColor === "purple" ? (
            <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-4 text-purple-400">
              {tagContent}
            </div>
          ) : tagBackgroundColor === "pink" ? (
            <div className="inline-block px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full mb-4 text-pink-400">
              {tagContent}
            </div>
          ) : (
            <div></div>
          )}
          <h2 className="text-4xl md:text-5xl mb-4">
            {header ? header : null}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {subheader ? subheader : null}
          </p>
        </div>
      </div>

      {/* Blog grid */}
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} goToBlogPage={goToBlogPage} />
          ))}
        </div>
      </div>
    </section>
  );
}
