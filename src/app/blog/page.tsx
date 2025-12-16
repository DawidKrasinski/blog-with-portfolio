"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BlogHero from "@/components/blog/BlogHero";
import BlogList from "@/components/blog/BlogList";

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

  const goToBlogPage = (slug: string) => {
    router.push(`/blog/${slug}`);
  };

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      <BlogHero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        tags={tags}
      />
      <BlogList blogPosts={blogPosts} goToBlogPage={goToBlogPage} />
    </div>
  );
}
