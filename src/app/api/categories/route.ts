import { getDataSource } from "@/db/data-source";
import { Categories } from "@/db/entities/Categories";
import { CategoryListItem } from "@/types/CategoryListItem";
import { Color } from "@/types/Color";
import { NextResponse } from "next/server";

const VIRTUAL_CATEGORIES: CategoryListItem[] = [
  {
    name: "Newest",
    color: Color.Cyan,
    type: "virtual",
  },
  {
    name: "Most Popular",
    color: Color.Purple,
    type: "virtual",
  },
];

export async function GET() {
  try {
    await getDataSource();

    const response = await Categories.createQueryBuilder("category")
      .orderBy("category.position", "ASC")
      .getMany();

    const categories: CategoryListItem[] = [
      ...VIRTUAL_CATEGORIES,
      ...(response.map((category) => ({
        name: category.name,
        color: category.color,
        type: "db",
      })) as CategoryListItem[]),
    ];

    return NextResponse.json(categories);
  } catch (error) {
    console.error("cant use get method", error);
    return NextResponse.json({ error: "cant use get method" }, { status: 500 });
  }
}
