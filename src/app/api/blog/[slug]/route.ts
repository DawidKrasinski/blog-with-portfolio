import { getDataSource } from "@/db/data-source";
import { Posts } from "@/db/entities/Posts";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  await getDataSource();
  const { slug } = await params;

  const post = await Posts.createQueryBuilder("posts")
    .where("posts.slug = :slug", { slug })
    .getOne();
  if (!post)
    return NextResponse.json({ error: "Post not found" }, { status: 404 });

  const cookieName = `viewed_${slug}`;
  const viewed = req.cookies.get(cookieName);

  if (viewed) {
    console.log("Already counted");
    return NextResponse.json({ message: "Already counted", views: post.views });
  }

  post.views += 1;
  await Posts.save(post);

  const response = NextResponse.json({
    message: "View counted",
    views: post.views,
  });
  response.cookies.set(cookieName, "true", { maxAge: 60 * 60 * 24, path: "/" });

  console.log("View counted");
  return response;
}
