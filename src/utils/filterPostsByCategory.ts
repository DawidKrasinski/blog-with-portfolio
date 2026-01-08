import { Posts } from "@/db/entities/Posts";

export function filterPostsByCategory(posts: Posts[], categoryName: string) {
  const popularPosts = posts.filter((post) =>
    post.categories.some((category) => category.name.includes(categoryName))
  );

  return popularPosts;
}
