"use client";

import { Posts } from "@/db/entities/Posts";
import { createContext, useContext, useEffect, useState } from "react";

export type BlogProvider = {
  posts: Posts[];
};

const BlogContext = createContext<BlogProvider | null>(null);

export default function BlogProvider(props: { children: React.ReactNode }) {
  const [posts, setPosts] = useState<Posts[]>([]);

  async function fetchPosts() {
    const response = await fetch("/api/blog");
    const body = await response.json();
    console.log("GET method response:", body);
    setPosts(body);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <BlogContext.Provider
        value={{
          posts,
        }}
      >
        {props.children}
      </BlogContext.Provider>
    </div>
  );
}

export function useBlogContext() {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useToDoList must be used within a TodoListProvider");
  }
  return context;
}
