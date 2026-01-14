import { welcomeToTheBlog } from "./posts/general/welcomeToTheBlog";
import { abstraction } from "./posts/oop/basics/abstraction";
import { encapsulation } from "./posts/oop/basics/encapsulation";
import { inheritance } from "./posts/oop/basics/inheritance";
import { introductionToOOP } from "./posts/oop/basics/introductionToOOP";
import { polymorphism } from "./posts/oop/basics/polymorphism";
import { seedCategories } from "./seedCategories";
import { seedPost } from "./seedPost";

const posts = [
  welcomeToTheBlog,
  introductionToOOP,
  encapsulation,
  abstraction,
  inheritance,
  polymorphism,
];

(async () => {
  await seedCategories();

  for (const post of posts) {
    await seedPost(post);
  }
})();
