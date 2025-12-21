"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PostNavigation() {
  const router = useRouter();

  return (
    <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
      <button onClick={() => router.push("/blog")} className="flex gap-2">
        <ArrowLeft /> Back to blog
      </button>
      <button className="flex gap-2">
        Next article <ArrowRight />
      </button>
    </div>
  );
}
