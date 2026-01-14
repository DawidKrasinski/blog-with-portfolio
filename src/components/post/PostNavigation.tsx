"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PostNavigation() {
  const router = useRouter();

  return (
    <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
      <button
        onClick={() => router.push("/blog")}
        className="flex gap-2 group/btn"
      >
        <ArrowLeft className="group-hover/btn:-translate-x-1 transition-transform" />{" "}
        Back to blog
      </button>
      <button className="flex gap-2 group/btn">
        Next article{" "}
        <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
