import { Code2 } from "lucide-react";
import { EditorWindow } from "./EditorWindow";
import { EditorHeader } from "./EditorHeader";
import { CodeBlock } from "./CodeBlock";
import { CodeLine } from "./CodeLine";
import { SyntaxToken } from "./SyntaxToken";
import { FloatingIcon } from "./FloatingIcon";

interface TechCodeMockupProps {
  filename?: string;
  functionName?: string;
  name?: string;
}

export default function TechCodeMockup({
  filename = "profile.tsx",
  functionName = "Profile",
  name = "Your Name",
}: TechCodeMockupProps) {
  const skills = ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind"];

  return (
    <div className="relative">
      <div className="relative z-10">
        <EditorWindow>
          <div className="space-y-4">
            <EditorHeader filename={filename} />

            <CodeBlock>
              <CodeLine number={1}>
                <SyntaxToken type="keyword">const</SyntaxToken>{" "}
                <SyntaxToken type="variable">developer</SyntaxToken>{" "}
                <SyntaxToken type="symbol">=</SyntaxToken>{" "}
                <SyntaxToken type="symbol">&#123;</SyntaxToken>{" "}
              </CodeLine>

              <CodeLine number={2} indent>
                <SyntaxToken type="key">name</SyntaxToken>
                <SyntaxToken type="symbol">:</SyntaxToken>{" "}
                <SyntaxToken type="string">"Dawid Krasiński"</SyntaxToken>
                <SyntaxToken type="symbol">,</SyntaxToken>
              </CodeLine>

              <CodeLine number={3} indent>
                <SyntaxToken type="key">role</SyntaxToken>
                <SyntaxToken type="symbol">:</SyntaxToken>{" "}
                <SyntaxToken type="string">"Full Stack Developer"</SyntaxToken>
                <SyntaxToken type="symbol">,</SyntaxToken>
              </CodeLine>

              <CodeLine number={4} indent>
                <SyntaxToken type="key">skills</SyntaxToken>
                <SyntaxToken type="symbol">:</SyntaxToken>{" "}
                <SyntaxToken type="symbol">[</SyntaxToken>
                {skills.map((element, index) => {
                  if (index < skills.length - 1)
                    return (
                      <span>
                        <SyntaxToken type="string">"{element}"</SyntaxToken>
                        <SyntaxToken type="symbol">,</SyntaxToken>{" "}
                      </span>
                    );
                  return <SyntaxToken type="string">{element}</SyntaxToken>;
                })}
                <SyntaxToken type="symbol">]</SyntaxToken>
                <SyntaxToken type="symbol">,</SyntaxToken>
              </CodeLine>

              <CodeLine number={2}>
                <SyntaxToken type="symbol">&#125;</SyntaxToken>
              </CodeLine>

              <CodeLine number={2}>
                <span className="text-gray-500"></span>
              </CodeLine>

              <CodeLine number={6}>
                <SyntaxToken type="keyword">function</SyntaxToken>{" "}
                <SyntaxToken type="function">showSkills</SyntaxToken>
                <SyntaxToken type="symbol">()</SyntaxToken>{" "}
                <SyntaxToken type="symbol">&#123;</SyntaxToken>
              </CodeLine>
              <CodeLine number={7} indent>
                <SyntaxToken type="variable">console</SyntaxToken>
                <SyntaxToken type="symbol">.</SyntaxToken>
                <SyntaxToken type="function">log</SyntaxToken>
                <SyntaxToken type="symbol">(</SyntaxToken>
                <SyntaxToken type="variable">developer</SyntaxToken>
                <SyntaxToken type="symbol">.</SyntaxToken>
                <SyntaxToken type="key">skills</SyntaxToken>
                <SyntaxToken type="symbol">)</SyntaxToken>
                <SyntaxToken type="symbol">;</SyntaxToken>
              </CodeLine>
              <CodeLine number={8}>
                <SyntaxToken type="symbol">{"}"}</SyntaxToken>
              </CodeLine>
            </CodeBlock>
          </div>
        </EditorWindow>

        <FloatingIcon icon={Code2} />
      </div>
    </div>
  );
}
