"use client";

import { Footer } from "@/components/portfolio/Footer";
import { Categories } from "@/db/entities/Categories";
import { Posts } from "@/db/entities/Posts";
import { addMostPopularVirtualCategory } from "@/utils/addMostPopularVirtualCategory";
import { addNewestVirtualCategory } from "@/utils/addNewestVirtualCategory";
import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  RefObject,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export type BlogProvider = {
  posts: Posts[];
  categories: Categories[];
  servicesSectionRef: RefObject<HTMLElement | null>;
  portfolioSectionRef: RefObject<HTMLElement | null>;
  aboutSectionRef: RefObject<HTMLElement | null>;
  contactSectionRef: RefObject<HTMLElement | null>;
  scrollToSection: (Ref: React.RefObject<HTMLElement | null>) => void;
};

const BlogContext = createContext<BlogProvider | null>(null);

export default function BlogProvider(props: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [posts, setPosts] = useState<Posts[]>([]);
  const [categories, setCategories] = useState<Categories[]>([]);
  const servicesSectionRef = useRef<HTMLElement | null>(null);
  const portfolioSectionRef = useRef<HTMLElement | null>(null);
  const aboutSectionRef = useRef<HTMLElement | null>(null);
  const contactSectionRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (Ref: React.RefObject<HTMLElement | null>) => {
    const scroll = () => {
      Ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    if (pathname === "/") {
      scroll();
    } else {
      router.push("/");

      setTimeout(() => {
        scroll();
      }, 100);
    }
  };

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

  const postsWithNewestAndMostPopularCategories = useMemo(() => {
    if (!posts.length || !categories.length) return posts;

    const newestCategory = categories.find(
      (category) => category.name === "Newest"
    );
    const mostPopularCategory = categories.find(
      (category) => category.name === "Most Popular"
    );
    if (!newestCategory || !mostPopularCategory) return posts;

    const postsWithMostPopular = addMostPopularVirtualCategory(
      posts,
      newestCategory
    );
    return addNewestVirtualCategory(postsWithMostPopular, mostPopularCategory);
  }, [posts, categories]);

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen overflow-hidden">
      <BlogContext.Provider
        value={{
          posts: postsWithNewestAndMostPopularCategories,
          categories,
          servicesSectionRef,
          portfolioSectionRef,
          aboutSectionRef,
          contactSectionRef,
          scrollToSection,
        }}
      >
        {props.children}
        <Footer />
      </BlogContext.Provider>
    </div>
  );
}

export function useBlogContext() {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlogContext must be used within a BlogProvider");
  }
  return context;
}
