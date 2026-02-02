import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-typescript"; // język TypeScript
import "prismjs/themes/prism-tomorrow.css"; // opcjonalny styl, możesz użyć własnego Tailwind

import { CodeBlock } from "@/components/editor/CodeBlock";
import { CodeLine } from "@/components/editor/CodeLine";
import { SyntaxToken, TokenType } from "@/components/editor/SyntaxToken";
import { EditorWindow } from "@/components/editor/EditorWindow";
import { EditorHeader } from "@/components/editor/EditorHeader";

interface DynamicCodeBlockProps {
  content: string[];
  header: string;
}

interface Token {
  content: string;
  type: string;
}

export default function DynamicCodeBlock({
  content,
  header,
}: DynamicCodeBlockProps) {
  const [linesTokens, setLinesTokens] = useState<Token[][]>([]);

  useEffect(() => {
    const newLinesTokens: Token[][] = content.map((line) => {
      const grammar = Prism.languages.typescript;
      const tokens = Prism.tokenize(line, grammar);

      const processedTokens: Token[] = tokens.map((t) => {
        if (typeof t === "string") {
          return { content: t, type: "plain" };
        } else {
          return { content: t.content.toString(), type: t.type || "plain" };
        }
      });

      return processedTokens;
    });

    setLinesTokens(newLinesTokens);
  }, [content]);

  // Mapowanie typów Prism na Twoje typy SyntaxToken
  const mapTokenType = (type: string): TokenType => {
    if (type === "keyword") {
      return "keyword";
    } else if (type === "function" || type === "function-variable") {
      return "function";
    } else if (type === "string" || type === "template-string") {
      return "string";
    } else if (type === "number") {
      return "number";
    } else if (type === "boolean") {
      return "boolean";
    } else if (type === "operator" || type === "punctuation") {
      return "symbol";
    } else if (type === "property") {
      return "key";
    } else if (type === "variable" || type === "constant") {
      return "variable";
    } else if (type === "comment") {
      return "comment";
    } else if (type === "class-name") {
      return "className";
    } else {
      return "plain";
    }
  };

  return (
    <div className="mb-16">
      <EditorWindow>
        <div className="space-y-4">
          <EditorHeader filename={header} />
          <CodeBlock>
            {linesTokens.map((tokens, lineIndex) => (
              <CodeLine key={lineIndex} number={lineIndex + 1}>
                {tokens.map((token, tokenIndex) => (
                  <SyntaxToken key={tokenIndex} type={mapTokenType(token.type)}>
                    {token.content}
                  </SyntaxToken>
                ))}
              </CodeLine>
            ))}
          </CodeBlock>
        </div>
      </EditorWindow>
    </div>
  );
}
