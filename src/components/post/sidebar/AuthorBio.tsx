import { Code2, Github, Linkedin } from "lucide-react";

export default function AuthorBio() {
  return (
    <div className="p-6 bg-linear-to-br from-gray-900 to-gray-800 border border-cyan-500/30 rounded-xl shadow-lg shadow-cyan-500/10">
      <h3 className="text-xl mb-4 text-cyan-400">{"About the Author"}</h3>

      <p className="text-gray-400 mb-4 leading-relaxed">
        I’m 16 years old and currently studying at a sports high school, where I
        combine my love for basketball with my passion for coding. I’ve been
        learning web development for some time and enjoy building modern
        websites.
      </p>
      <p className="text-gray-400 mb-4 leading-relaxed">
        I’m open to collaborating with other developers and I also build
        websites on request for individuals and businesses. This blog is a place
        where I share my knowledge, ideas, and practical tips related to web
        development.{" "}
      </p>
      <p className="text-gray-400 mb-4 leading-relaxed">
        I’d love to hear what you think about my posts — whether they helped you
        or inspired you in any way. If you have feedback, ideas for future
        topics, or are interested in working together, feel free to contact me
        at.{" "}
        <a className="text-cyan-400/90 hover:text-cyan-400" href="/">
          Contact Me
        </a>
      </p>

      <div className="flex gap-3">
        <a
          href="/"
          className="flex items-center justify-center w-10 h-10 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300"
        >
          <Code2 className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
        </a>
        <a
          href="https://github.com/DawidKrasinski"
          className="flex items-center justify-center w-10 h-10 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-purple-500/10 hover:border-purple-500/50 transition-all duration-300"
        >
          <Github className="w-5 h-5 text-gray-400 hover:text-purple-400" />
        </a>

        <a
          href="#"
          className="flex items-center justify-center w-10 h-10 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-pink-500/10 hover:border-pink-500/50 transition-all duration-300"
        >
          <Linkedin className="w-5 h-5 text-gray-400 hover:text-pink-400" />
        </a>
      </div>
    </div>
  );
}
