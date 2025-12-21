"use client";

import PostHero from "./PostHero";
import PostContent from "./PostContent";
import Sidebar from "./Sidebar";

export default function BlogPost() {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      <PostHero />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
          <PostContent />
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
