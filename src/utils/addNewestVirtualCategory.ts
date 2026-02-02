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

  const newestIds = new Set(sortedByDate.slice(0, 3).map((p) => p.id));

  return posts.map((post) => {
    if (!newestIds.has(post.id)) return post;

    const categories = post.categories ?? [];
    if (categories.some((c) => c.id === category.id)) return post;

    return {
      ...post,
      categories: [category, ...categories],
    } as Posts;
  });
}
