import { TokenType } from "@/components/editor/SyntaxToken";

export const mapTokenType = (type: string): TokenType => {
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
