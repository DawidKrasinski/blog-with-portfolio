import { getDataSource } from "@/db/data-source";
import { Posts } from "@/db/entities/Posts";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await getDataSource();
    const posts = await Posts.createQueryBuilder("task").getMany();

    return NextResponse.json(posts);
  } catch (error) {
    console.log("cant use get method", error);
    return NextResponse.json({ error: "cant use get method" }, { status: 500 });
  }
}
