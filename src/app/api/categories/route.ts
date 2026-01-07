import { getDataSource } from "@/db/data-source";
import { Categories } from "@/db/entities/Categories";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await getDataSource();

    const categories = await Categories.createQueryBuilder("category")
      .leftJoinAndSelect("category.post", "post")
      .orderBy("category.position", "ASC")
      .getMany();

    return NextResponse.json(categories);
  } catch (error) {
    console.log("cant use get method", error);
    return NextResponse.json({ error: "cant use get method" }, { status: 500 });
  }
}
