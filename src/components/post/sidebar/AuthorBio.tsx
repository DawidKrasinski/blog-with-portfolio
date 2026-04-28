import { Code2, Github, Linkedin } from "lucide-react";

export default function AuthorBio() {
  return (
    <div className="p-6 bg-linear-to-br from-gray-900 to-gray-800 border border-cyan-500/30 rounded-xl shadow-lg shadow-cyan-500/10">
      <h3 className="text-xl mb-4 text-cyan-400">{"O autorze"}</h3>

      <p className="text-gray-400 mb-4 leading-relaxed">
        Mam 16 lat i uczę się w szkole sportowej, gdzie łączę miłość do
        koszykówki z pasją do programowania. Uczę się tworzenia stron i lubię
        budować nowoczesne serwisy.
      </p>
      <p className="text-gray-400 mb-4 leading-relaxed">
        Jestem otwarty na współpracę z innymi programistami i tworzę strony na
        zamówienie dla osób i firm. Ten blog to miejsce, gdzie dzielę się
        wiedzą, pomysłami i praktycznymi wskazówkami dotyczącymi tworzenia
        stron.
      </p>
      <p className="text-gray-400 mb-4 leading-relaxed">
        Chętnie usłyszę, co myślisz o moich wpisach — czy pomogły lub
        zainspirowały Cię. Jeśli masz feedback, pomysły na przyszłe tematy lub
        chcesz współpracować, skontaktuj się ze mną.
      </p>

      <div className="flex gap-3">
        <a
          href="/"
          aria-label="Strona główna portfolio autora"
          className="flex items-center justify-center w-10 h-10 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300"
        >
          <Code2
            aria-hidden="true"
            className="w-5 h-5 text-gray-400 hover:text-cyan-400"
          />
        </a>
        <a
          href="https://github.com/DawidKrasinski"
          aria-label="Profil GitHub autora"
          className="flex items-center justify-center w-10 h-10 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-purple-500/10 hover:border-purple-500/50 transition-all duration-300"
        >
          <Github
            aria-hidden="true"
            className="w-5 h-5 text-gray-400 hover:text-purple-400"
          />
        </a>

        <a
          href="#"
          aria-label="Profil LinkedIn autora"
          className="flex items-center justify-center w-10 h-10 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-pink-500/10 hover:border-pink-500/50 transition-all duration-300"
        >
          <Linkedin
            aria-hidden="true"
            className="w-5 h-5 text-gray-400 hover:text-pink-400"
          />
        </a>
      </div>
    </div>
  );
}
