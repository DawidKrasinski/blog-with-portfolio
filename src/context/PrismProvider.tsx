"use client";

import { useEffect, useState } from "react";
import Prism from "prismjs";
import { CodeToken } from "@/types/CodeToken";

type PrismLineTokens = CodeToken[][];

export const usePrism = (
  lines: string[],
  language: keyof typeof Prism.languages = "typescript"
) => {
  const [tokens, setTokens] = useState<PrismLineTokens>([]);

  useEffect(() => {
    const grammar = Prism.languages[language];
    if (!grammar) return;

    const processed: PrismLineTokens = lines.map((line) => {
      const rawTokens = Prism.tokenize(line, grammar);

      return rawTokens.map((t): CodeToken => {
        if (typeof t === "string") {
          return { content: t, type: "plain" };
        }

        return {
          content: Array.isArray(t.content)
            ? t.content.map(String).join("")
            : String(t.content),
          type: t.type ?? "plain",
        };
      });
    });

    setTokens(processed);
  }, [lines, language]);

  return tokens;
};
