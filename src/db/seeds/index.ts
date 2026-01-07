import { testArticle } from "./posts/testArticle";
import { seedCategories } from "./seedCategories";
import { seedPost } from "./seedPost";

(async () => {
  await seedCategories();
  await seedPost(testArticle);
})();
