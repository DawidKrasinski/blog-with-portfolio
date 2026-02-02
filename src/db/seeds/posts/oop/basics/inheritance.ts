import { SectionType } from "../../../../entities/Sections";
import { SeedPostInput } from "../../../seedPost";

export const inheritance: SeedPostInput = {
  slug: "inheritance-powerful-and-dangerous",
  headline: "Inheritance in Object-Oriented Programming",
  subheadline: "Powerful, tempting, and easy to misuse",
  intro:
    "Inheritance is one of the most recognizable features of Object-Oriented Programming — and one of the most abused. It promises reuse, structure, and elegance. In practice, it often delivers rigidity, hidden coupling, and fragile systems. Understanding when inheritance helps — and when it hurts — is a critical step toward senior-level design thinking.",
  relatedPostSlugs: ["introduction-to-oop"],
  summary:
    "This post explores inheritance as a double-edged sword. You’ll learn the difference between IS-A and HAS-A relationships, why composition is often safer than inheritance, and how to recognize situations where inheritance actively damages your design.",
  readingTime: "11 min",
  publishedDate: new Date("2025-12-28"),
  sections: [
    {
      header: "What Inheritance Actually Does",
      type: SectionType.SECTION,
      content: [
        "Inheritance allows one class to reuse and extend the behavior of another.",
        "A subclass automatically acquires the state and behavior of its parent class.",
        "This sounds efficient — and it can be — but it also creates a strong, permanent relationship between classes.",
        "Once inheritance is introduced, changes in the parent ripple down to all children, whether they want it or not.",
      ],
    },
    {
      header: "IS-A vs HAS-A",
      type: SectionType.SECTION,
      content: [
        "The most important question when considering inheritance is: *Is this really an IS-A relationship?*",
        "IS-A means substitution must make sense. If `B` extends `A`, then `B` should be usable everywhere `A` is expected.",
        "HAS-A describes composition: an object *contains* another object instead of being one.",
        "Confusing these two leads to brittle and misleading designs.",
      ],
    },
    {
      header: "A Misleading IS-A Example",
      type: SectionType.CODE_BLOCK,
      content: [
        "class Bird {",
        "  fly(): void {",
        '    console.log("Flying");',
        "  }",
        "}",
        "",
        "class Penguin extends Bird {",
        "  fly(): void {",
        '    throw new Error("Penguins cannot fly");',
        "  }",
        "}",
      ],
    },
    {
      header: "Why This Is Wrong",
      type: SectionType.SECTION,
      content: [
        "A penguin is biologically a bird — but not behaviorally.",
        "Inheritance models *behavioral* compatibility, not conceptual similarity.",
        "If a subclass has to disable or override core behavior, the IS-A relationship is broken.",
        "This is a classic example of inheritance violating the Liskov Substitution Principle.",
      ],
    },
    {
      header: "Composition: HAS-A Instead of IS-A",
      type: SectionType.SECTION,
      content: [
        "Composition means building behavior by *combining* objects rather than extending them.",
        "Instead of inheriting behavior, you delegate work to contained objects.",
        "This keeps relationships flexible and avoids deep, rigid hierarchies.",
      ],
    },
    {
      header: "The Same Example Using Composition",
      type: SectionType.CODE_BLOCK,
      content: [
        "interface FlyBehavior {",
        "  fly(): void;",
        "}",
        "",
        "class CanFly implements FlyBehavior {",
        "  fly(): void {",
        '    console.log("Flying");',
        "  }",
        "}",
        "",
        "class CannotFly implements FlyBehavior {",
        "  fly(): void {",
        '    console.log("Cannot fly");',
        "  }",
        "}",
        "",
        "class Bird {",
        "  constructor(private flyBehavior: FlyBehavior) {}",
        "",
        "  fly(): void {",
        "    this.flyBehavior.fly();",
        "  }",
        "}",
      ],
    },
    {
      header: "Why Composition Is Safer",
      type: SectionType.SECTION,
      content: [
        "Behavior can change without changing the class hierarchy.",
        "New behaviors can be introduced without modifying existing classes.",
        "Objects depend on abstractions, not concrete parents.",
        "This aligns naturally with encapsulation and abstraction.",
      ],
    },
    {
      header: "When Inheritance Is a Good Fit",
      type: SectionType.BULLET_LIST,
      content: [
        "When there is a true IS-A relationship",
        "When subclasses are fully substitutable for the base class",
        "When shared behavior is stable and unlikely to change",
        "When the hierarchy is shallow and intentional",
      ],
    },
    {
      header: "When Inheritance Is a Mistake",
      type: SectionType.BULLET_LIST,
      content: [
        "When inheritance is used only to reuse code",
        "When subclasses override most parent behavior",
        "When changes in the base class frequently break children",
        "When hierarchies grow deep and complex",
        "When behavior differences are orthogonal",
      ],
    },
    {
      header: "Inheritance Is a Commitment",
      type: SectionType.SECTION,
      content: [
        "Inheritance is not just reuse — it is a long-term design commitment.",
        "Once clients depend on a class hierarchy, it becomes very difficult to undo.",
        "This is why experienced developers default to composition and reach for inheritance only when the design truly demands it.",
      ],
    },
    {
      header: "Core Takeaways",
      type: SectionType.BULLET_LIST,
      content: [
        "Inheritance is powerful but rigid.",
        "IS-A is about behavioral substitutability, not similarity.",
        "HAS-A (composition) is usually more flexible.",
        "Inheritance should model stable, fundamental relationships.",
        "When in doubt, prefer composition.",
      ],
    },
    {
      header: "What Comes Next",
      type: SectionType.SECTION,
      content: [
        "With inheritance understood, the final OOP pillar remains: polymorphism.",
        "Next, we’ll explore how polymorphism emerges naturally from good abstraction and composition — without complex hierarchies.",
      ],
    },
  ],
  categoryNames: ["Beginner", "Object-Oriented Programming"],
};
