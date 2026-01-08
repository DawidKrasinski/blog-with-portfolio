import AuthorBio from "./sidebar/AuthorBio";
import PopularPosts from "./sidebar/PopularPosts";
import Categories from "./sidebar/Categories";
import { Posts } from "@/db/entities/Posts";

export function Sidebar({ post }: { post: Posts }) {
  return (
    <aside className="space-y-8">
      <AuthorBio />
      <PopularPosts />
      <Categories post={post} />
    </aside>
  );
}
