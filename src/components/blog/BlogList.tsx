"use client";
import BlogCard from "./BlogCard";

interface BlogPost {
  id: number;
  thumbnail: string;
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
  readTime: string;
}

interface BlogListProps {
  blogPosts: BlogPost[];
  goToBlogPage: (slug: string) => void;
}

export default function BlogList({ blogPosts, goToBlogPage }: BlogListProps) {
  return (
    <section className="py-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-160 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} goToBlogPage={goToBlogPage} />
          ))}
        </div>
      </div>
    </section>
  );
}
