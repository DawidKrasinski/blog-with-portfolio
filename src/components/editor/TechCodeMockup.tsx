import { Code2 } from "lucide-react";
import { EditorWindow } from "./EditorWindow";
import { EditorHeader } from "./EditorHeader";
import { CodeBlock } from "./CodeBlock";
import { CodeLine } from "./CodeLine";
import { SyntaxToken } from "./SyntaxToken";
import { FloatingIcon } from "./FloatingIcon";
import { usePrism } from "@/context/PrismProvider";
import { mapTokenType } from "@/utils/mapTokenType";

interface TechCodeMockupProps {
  filename?: string;
  functionName?: string;
  name?: string;
}

export default function TechCodeMockup({
  filename = "profile.tsx",
}: TechCodeMockupProps) {
  const code = [
    `const developer = {`,
    `  name: "Dawid Krasiński",`,
    `  role: "Full Stack Developer",`,
    `  skills: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind"],`,
    `}`,
    ``,
    `function showSkills() {`,
    `  console.log(developer.skills);`,
    `}`,
  ];

  const linesTokens = usePrism(code, "typescript");

  return (
    <div className="relative">
      <div className="relative z-10">
        <EditorWindow>
          <div className="space-y-4">
            <EditorHeader filename={filename} />

            <CodeBlock>
              {linesTokens.map((tokens, lineIndex) => (
                <CodeLine
                  key={lineIndex}
                  number={lineIndex + 1}
                  indent={code[lineIndex].startsWith("  ")}
                >
                  {tokens.map((token, tokenIndex) => (
                    <SyntaxToken
                      key={tokenIndex}
                      type={mapTokenType(token.type)}
                    >
                      {token.content}
                    </SyntaxToken>
                  ))}
                </CodeLine>
              ))}
            </CodeBlock>
          </div>
        </EditorWindow>

        <FloatingIcon icon={Code2} />
      </div>
    </div>
  );
}
