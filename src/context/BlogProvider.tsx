"use client";

import { Categories } from "@/db/entities/Categories";
import { Posts } from "@/db/entities/Posts";
import { createContext, useContext, useEffect, useState } from "react";

export type BlogProvider = {
  posts: Posts[];
  categories: Categories[];
};

const BlogContext = createContext<BlogProvider | null>(null);

export default function BlogProvider(props: { children: React.ReactNode }) {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [categories, setCategories] = useState<Categories[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsRes, categoriesRes] = await Promise.all([
          fetch("/api/blog"),
          fetch("/api/categories"),
        ]);

        const postsData = await postsRes.json();
        const categoriesData = await categoriesRes.json();

        console.log(postsData);
        console.log(categoriesData);

        setPosts(postsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <BlogContext.Provider
      value={{
        posts,
        categories,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
}

export function useBlogContext() {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlogContext must be used within a BlogProvider");
  }
  return context;
}
