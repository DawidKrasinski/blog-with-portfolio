type TokenType =
  | "keyword"
  | "variable"
  | "function"
  | "string"
  | "symbol"
  | "key"
  | "number"
  | "boolean"
  | "plain"
  | "comment";

const styles: Record<TokenType, string> = {
  keyword: "text-purple-400",
  variable: "text-blue-400",
  string: "text-orange-400",
  function: "text-yellow-400",
  symbol: "text-gray-400",
  key: "text-cyan-400",
};

export function SyntaxToken({
  type,
  children,
}: {
  type: TokenType;
  children: React.ReactNode;
}) {
  return <span className={styles[type]}>{children}</span>;
}
