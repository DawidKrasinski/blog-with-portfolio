import { abstraction } from "./posts/oop/basics/abstraction";
import { encapsulation } from "./posts/oop/basics/encapsulation";
import { inheritance } from "./posts/oop/basics/inheritance";
import { introductionToOOP } from "./posts/oop/basics/introductionToOOP";
import { polymorphism } from "./posts/oop/basics/polymorphism";
import { seedCategories } from "./seedCategories";
import { seedPost } from "./seedPost";

(async () => {
  await seedCategories();
  await seedPost(introductionToOOP);
  await seedPost(encapsulation);
  await seedPost(abstraction);
  await seedPost(inheritance);
  await seedPost(polymorphism);
})();
