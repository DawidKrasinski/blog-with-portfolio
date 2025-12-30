import { Posts } from "@/db/entities/Posts";
import { Calendar, Clock, Tag } from "lucide-react";

export default function PostMeta({ post }: { post: Posts }) {
  return (
    <div className="flex flex-wrap items-center gap-4 pt-4">
      <div className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
        <Calendar className="w-4 h-4 text-cyan-400" />
        <span className="text-gray-300">
          {post.published_date
            ?.toString()
            .split("T")[0]
            .split("-")
            .reverse()
            .join(".")}
        </span>
      </div>

      <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full">
        <Clock className="w-4 h-4 text-purple-400" />
        <span className="text-gray-300">{post.reading_time}</span>
      </div>

      <div className="flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full">
        <Tag className="w-4 h-4 text-pink-400" />
        <span className="text-gray-300">{"{tags}"}</span>
      </div>
    </div>
  );
}
