import { Color } from "./Color";

export type CategoryListItem = {
  name: string;
  color: Color;
  type: "db" | "virtual";
};
