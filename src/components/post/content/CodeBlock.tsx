import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-typescript"; // język TypeScript
import "prismjs/themes/prism-tomorrow.css"; // opcjonalny styl, możesz użyć własnego Tailwind

import { CodeBlock } from "@/components/editor/CodeBlock";
import { CodeLine } from "@/components/editor/CodeLine";
import { SyntaxToken } from "@/components/editor/SyntaxToken";
import { EditorWindow } from "@/components/editor/EditorWindow";
import { EditorHeader } from "@/components/editor/EditorHeader";
import { CodeToken } from "@/types/CodeToken";
import { usePrism } from "@/context/PrismProvider";
import { mapTokenType } from "@/utils/mapTokenType";

interface DynamicCodeBlockProps {
  content: string[];
  header: string;
}

export default function DynamicCodeBlock({
  content,
  header,
}: DynamicCodeBlockProps) {
  const linesTokens = usePrism(content, "typescript");

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
