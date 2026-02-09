"use client";

import PostContent from "@/components/post/PostContent";
import PostHero from "@/components/post/PostHero";
import { useBlogContext } from "@/context/BlogProvider";
import { Sidebar } from "@/components/post/Sidebar";
import { use, useEffect } from "react";
import { handlePageLoad } from "@/utils/handlePageLoad";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default function BlogPostPage({ params }: PageProps) {
  const { slug } = use(params);
  const { posts } = useBlogContext();
  const post = posts.find((post) => post.slug === slug);

  useEffect(() => {
    if (!post) return;
    handlePageLoad(post.slug);
  }, [post]);

  if (!post) return <div></div>;

  return (
    <>
      <PostHero post={post} />
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
          <PostContent post={post} />
          <Sidebar post={post} />
        </div>
      </div>
    </>
  );
}
