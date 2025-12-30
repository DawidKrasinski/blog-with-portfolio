import AuthorBio from "./sidebar/AuthorBio";
import PopularPosts from "./sidebar/PopularPosts";
import Categories from "./sidebar/Categories";

export function Sidebar() {
  return (
    <aside className="space-y-8">
      <AuthorBio />
      <PopularPosts />
      <Categories />
    </aside>
  );
}
