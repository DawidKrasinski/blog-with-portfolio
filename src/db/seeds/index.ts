import { testArticle } from "./posts/testArticle";
import { seedPost } from "./seedPost";

(async () => {
  await seedPost(testArticle);
})();
