import Link from "next/link";
import { Code2, House } from "lucide-react";

export default function BlogHeader() {
  return (
    <nav className="sticky top-0 z-50 border-b border-cyan-500/20 bg-gray-950/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <Code2 className="h-6 w-6 text-cyan-400" />
          <span className="text-xl font-semibold bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Developer Name
          </span>
        </div>

        <Link
          href="/"
          aria-label="Back to home"
          className="group flex items-center gap-2 rounded-md px-4 py-2 text-gray-400 transition-colors hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
        >
          <House className="h-5 w-5" />
          <span>Back to Home</span>
        </Link>
      </div>
    </nav>
  );
}
