import { Categories } from "@/db/entities/Categories";
import { Posts } from "@/db/entities/Posts";

export function addNewestVirtualCategory(posts: Posts[], category: Categories) {
  const sortedByDate = [...posts].sort((a, b) => {
    if (!a.published_date && !b.published_date) return 0;
    if (!a.published_date) return 1;
    if (!b.published_date) return -1;

    return (
      new Date(b.published_date).getTime() -
      new Date(a.published_date).getTime()
    );
  });

  const top3Ids = new Set(sortedByDate.slice(0, 3).map((p) => p.id));

  const newestPosts = posts.map((post) => {
    if (!top3Ids.has(post.id)) return post;

    const categories = post.categories ?? [];

    return {
      ...post,
      categories: [category, ...categories],
    } as Posts;
  });

  return [...newestPosts].sort((a, b) => {
    if (!a.published_date && !b.published_date) return 0;
    if (!a.published_date) return 1;
    if (!b.published_date) return -1;

    return (
      new Date(b.published_date).getTime() -
      new Date(a.published_date).getTime()
    );
  });
}
