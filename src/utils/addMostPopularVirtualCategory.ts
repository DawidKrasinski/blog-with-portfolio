import { Categories } from "@/db/entities/Categories";
import { Posts } from "@/db/entities/Posts";

export function addMostPopularVirtualCategory(
  posts: Posts[],
  category: Categories
): Posts[] {
  const sortedByViews = [...posts].sort((a, b) => {
    const viewsA = a.views ?? 0;
    const viewsB = b.views ?? 0;
    return viewsB - viewsA;
  });

  const top3Ids = new Set(sortedByViews.slice(0, 3).map((p) => p.id));

  const mostPopularPosts = posts.map((post) => {
    if (!top3Ids.has(post.id)) return post;

    const categories = post.categories ?? [];

    return {
      ...post,
      categories: [category, ...categories],
    } as Posts;
  });

  return [...mostPopularPosts].sort((a, b) => {
    const viewsA = a.views ?? 0;
    const viewsB = b.views ?? 0;
    return viewsB - viewsA;
  });
}
