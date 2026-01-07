"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BlogHero from "@/components/blog/BlogHero";
import BlogList from "@/components/blog/BlogList";
import { useBlogContext } from "@/context/BlogProvider";

export default function BlogMainPage() {
  const { posts } = useBlogContext();
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const tags = [
    { name: "Beginner", color: "cyan" },
    { name: "Intermediate", color: "purple" },
    { name: "Advanced", color: "pink" },
    { name: "Object-Oriented Programming", color: "cyan" },
    { name: "Newest", color: "cyan" },
    { name: "Most Popular", color: "purple" },
    { name: "Highlighted", color: "pink" },
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
      <BlogList
        blogPosts={posts}
        goToBlogPage={goToBlogPage}
        tagContent="Most Popular"
        tagBackgroundColor="cyan"
        header="The most impactful posts from my blog."
        subheader="These are the posts that really help others understand coding."
      />

      <BlogList
        blogPosts={posts}
        goToBlogPage={goToBlogPage}
        tagContent="Highlighted"
        tagBackgroundColor="purple"
        header="Highlights from My Journey"
        subheader="Some parts of my learning process I found interesting or tricky — sharing them here."
      />

      <BlogList
        blogPosts={posts}
        goToBlogPage={goToBlogPage}
        tagContent="Newest"
        tagBackgroundColor="pink"
        header="Fresh Notes from My Learning"
        subheader="The newest things I’m discovering in programming — follow along as I figure them out."
      />

      <BlogList
        blogPosts={posts}
        goToBlogPage={goToBlogPage}
        tagContent="More Articles"
        tagBackgroundColor="cyan"
        header="More of My Learning Path"
        subheader="Other things I’ve explored lately — take a peek and maybe learn alongside me."
      />
    </div>
  );
}
