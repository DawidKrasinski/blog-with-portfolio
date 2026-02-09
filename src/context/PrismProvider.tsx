import Prism from "prismjs";
import { useMemo } from "react";
import "prismjs/components/prism-typescript";

export function usePrism(
  lines: string[] | undefined,
  language: keyof typeof Prism.languages = "typescript"
) {
  return useMemo(() => {
    if (!lines || lines.length === 0) return [];

    const grammar = Prism.languages[language];
    if (!grammar) return [];

    return lines.map((line) =>
      Prism.tokenize(line, grammar).map((t) =>
        typeof t === "string"
          ? { content: t, type: "plain" }
          : {
              content: Array.isArray(t.content)
                ? t.content.join("")
                : String(t.content),
              type: t.type ?? "plain",
            }
      )
    );
  }, [JSON.stringify(lines), language]);
}
