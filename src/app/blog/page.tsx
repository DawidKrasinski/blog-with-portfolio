"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BlogHero from "@/components/blog/BlogHero";
import BlogList from "@/components/blog/BlogList";
import { useBlogContext } from "@/context/BlogProvider";
import { filterPostsByCategory } from "@/utils/filterPostsByCategory";

export default function BlogMainPage() {
  const { posts, categories } = useBlogContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCategories, setSearchCategories] = useState<string[]>([]);

  const router = useRouter();

  const goToBlogPage = (slug: string) => {
    router.push(`/blog/${slug}`);
  };

  const changeSearchCategories = (tagName: string) => {
    setSearchCategories((prev) =>
      prev.includes(tagName)
        ? prev.filter((category) => category !== tagName)
        : [...prev, tagName]
    );
  };

  return !searchQuery && searchCategories.length === 0 ? (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      <BlogHero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        tags={categories}
        changeSearchCategories={changeSearchCategories}
        searchCategories={searchCategories}
      />
      <BlogList
        blogPosts={filterPostsByCategory(posts, "Most Popular")}
        goToBlogPage={goToBlogPage}
        tagContent="Most Popular"
        tagBackgroundColor="cyan"
        header="The most impactful posts from my blog."
        subheader="These are the posts that really help others understand coding."
      />

      <BlogList
        blogPosts={filterPostsByCategory(posts, "Highlighted")}
        goToBlogPage={goToBlogPage}
        tagContent="Highlighted"
        tagBackgroundColor="purple"
        header="Highlights from My Journey"
        subheader="Some parts of my learning process I found interesting or tricky — sharing them here."
      />

      <BlogList
        blogPosts={filterPostsByCategory(posts, "Newest")}
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
  ) : (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      <BlogHero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        tags={categories}
        changeSearchCategories={changeSearchCategories}
        searchCategories={searchCategories}
      />
      <BlogList
        blogPosts={posts.filter(
          (post) =>
            post.slug.includes(searchQuery) &&
            post.categories.filter((category) =>
              searchCategories.includes(category.name)
            )
        )}
        goToBlogPage={goToBlogPage}
      />
    </div>
  );
}
