import { Github, Linkedin } from "lucide-react";

export default function AuthorBio() {
  return (
    <div className="p-6 bg-linear-to-br from-gray-900 to-gray-800 border border-cyan-500/30 rounded-xl shadow-lg shadow-cyan-500/10">
      <h3 className="text-xl mb-4 text-cyan-400">{"{About the Author}"}</h3>

      <p className="text-gray-400 mb-4 leading-relaxed">
        {"{short author bio describing background and expertise}"}
      </p>

      <div className="flex gap-3">
        <a
          href="#"
          className="flex items-center justify-center w-10 h-10 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300"
        >
          <Github className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
        </a>

        <a
          href="#"
          className="flex items-center justify-center w-10 h-10 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-purple-500/10 hover:border-purple-500/50 transition-all duration-300"
        >
          <Linkedin className="w-5 h-5 text-gray-400 hover:text-purple-400" />
        </a>
      </div>
    </div>
  );
}
