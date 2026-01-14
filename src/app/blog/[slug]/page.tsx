"use client";

import PostContent from "@/components/post/PostContent";
import PostHero from "@/components/post/PostHero";
import { useBlogContext } from "@/context/BlogProvider";
import { Sidebar } from "@/components/post/Sidebar";
import { use } from "react";
import { Footer } from "@/components/portfolio/Footer";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default function BlogPostPage({ params }: PageProps) {
  const { slug } = use(params);
  const { posts } = useBlogContext();
  const post = posts.find((post) => post.slug === slug);

  if (!post) return <div></div>;

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      <PostHero post={post} />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
          <PostContent post={post} />
          <Sidebar post={post} />
        </div>
      </div>
      {/* <Footer
              handleScrollFn={scrollToSection}
              servicesSectionRef={servicesSectionRef}
              portfolioSectionRef={portfolioSectionRef}
              aboutSectionRef={aboutSectionRef}
              contactSectionRef={contactSectionRef}
            /> */}
    </div>
  );
}
