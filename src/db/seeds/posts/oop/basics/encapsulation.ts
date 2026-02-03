import { SectionType } from "../../../../entities/Sections";
import { SeedPostInput } from "../../../seedPost";

export const encapsulation: SeedPostInput = {
  slug: "encapsulation",
  headline: "Encapsulation in Object-Oriented Programming",
  subheadline:
    "Controlling access, protecting invariants, and designing clear public APIs",
  codeHeader: [`if (stateIsInvalid) {`, `  throw new Error();`, `}`],
  intro:
    "Encapsulation is often explained as “making fields private and adding getters and setters.” That explanation is simple — and dangerously incomplete. Encapsulation is not about hiding things for the sake of hiding them. It is about control, responsibility, and designing objects that cannot be misused.",
  relatedPostSlugs: ["introduction-to-oop"],
  summary:
    "This post explains encapsulation as a core design principle of OOP. You’ll learn why implementation details should be hidden, how to think about a class’s public API, and when getters and setters help — or actively harm — your design.",
  readingTime: "10 min",
  publishedDate: new Date("2025-12-25"),
  sections: [
    {
      header: "What Encapsulation Really Means",
      type: SectionType.SECTION,
      content: [
        "Encapsulation means that an object controls access to its own state. Nothing outside the object should be able to change its internal data arbitrarily.",
        "This is not about secrecy. It is about *guarantees*. An encapsulated object guarantees that its state is always valid according to its own rules.",
        "In other words: encapsulation is how an object defends itself against incorrect usage — including usage by future you.",
      ],
    },
    {
      header: "Hiding Implementation Details",
      type: SectionType.SECTION,
      content: [
        "One of the most important consequences of encapsulation is hiding implementation details.",
        "When you use an object, you should not care *how* it does its job. You should only care *what* it promises to do.",
        "This separation allows you to change internal logic without breaking the rest of the system. If callers rely on internals, refactoring becomes nearly impossible.",
        "A good mental model is a vending machine: you press buttons and receive products. You do not — and should not — know how the machine works inside.",
      ],
    },
    {
      header: "Encapsulation and the Public API of a Class",
      type: SectionType.SECTION,
      content: [
        "Every class has a **public API** — the set of methods and properties that the outside world is allowed to use.",
        "This API is a contract. Once other parts of your system depend on it, changing it becomes expensive.",
        "Encapsulation forces you to be intentional: what do I expose, and what do I keep private?",
        "A small, well-designed public API is one of the strongest indicators of high-quality OOP design.",
      ],
    },
    {
      header: "A Well-Encapsulated Example",
      type: SectionType.CODE_BLOCK,
      content: [
        "class Temperature {",
        "  private celsius: number;",
        "",
        "  constructor(celsius: number) {",
        "    this.celsius = celsius;",
        "  }",
        "",
        "  toFahrenheit(): number {",
        "    return (this.celsius * 9) / 5 + 32;",
        "  }",
        "",
        "  increaseBy(delta: number): void {",
        "    this.celsius += delta;",
        "  }",
        "}",
      ],
    },
    {
      header: "Why This Is Encapsulation",
      type: SectionType.SECTION,
      content: [
        "Notice that the internal representation (Celsius) is hidden.",
        "If you later decide to store temperature in Kelvin, the rest of the system does not need to change — only this class does.",
        "This is the real power of encapsulation: freedom to evolve implementation without breaking consumers.",
      ],
    },
    {
      header: "Getters and Setters: The Subtle Trap",
      type: SectionType.SECTION,
      content: [
        "Getters and setters are often taught as the *definition* of encapsulation. In reality, they can easily destroy it.",
        "If every private field has a public getter and setter, you have not encapsulated anything — you have only added ceremony.",
        "The key question is not “should I add a getter?” but “does this operation make sense as part of the object’s responsibility?”",
      ],
    },
    {
      header: "When Getters and Setters Make Sense",
      type: SectionType.BULLET_LIST,
      content: [
        "When reading data is meaningful but writing it freely would break invariants",
        "When setting a value requires validation or side effects",
        "When you want to expose a derived or computed value",
        "When the object must stay in control of how its state changes",
      ],
    },
    {
      header: "When Getters and Setters Are a Bad Idea",
      type: SectionType.BULLET_LIST,
      content: [
        "When they simply expose internal fields without rules",
        "When they encourage procedural-style manipulation of objects",
        "When they turn objects into passive data containers",
        "When they exist only because “that’s how OOP works”",
      ],
    },
    {
      header: "A Bad Encapsulation Example",
      type: SectionType.CODE_BLOCK,
      content: [
        "class User {",
        "  private age: number;",
        "",
        "  getAge(): number {",
        "    return this.age;",
        "  }",
        "",
        "  setAge(age: number): void {",
        "    this.age = age;",
        "  }",
        "}",
      ],
    },
    {
      header: "Why This Is a Problem",
      type: SectionType.SECTION,
      content: [
        "This class does not protect itself at all.",
        "Any code can set an invalid age, and the class has no say in the matter.",
        "A better design would expose behavior such as `increaseAge()` or enforce rules inside the setter.",
      ],
    },
    {
      header: "Encapsulation as a Design Tool",
      type: SectionType.SECTION,
      content: [
        "Encapsulation is not a rule — it is a lens.",
        "It forces you to think about responsibility, misuse, and future changes.",
        "Well-encapsulated objects are easier to reason about, easier to test, and harder to break.",
      ],
    },
    {
      header: "Core Takeaways",
      type: SectionType.BULLET_LIST,
      content: [
        "Encapsulation is about control, not hiding.",
        "Implementation details should be invisible to consumers.",
        "A class’s public API is a long-term contract.",
        "Getters and setters are tools, not defaults.",
        "Objects should defend their own invariants.",
      ],
    },
    {
      header: "What Comes Next",
      type: SectionType.SECTION,
      content: [
        "Encapsulation is the foundation of all other OOP principles.",
        "Next, we’ll explore abstraction — how to design objects that expose intent instead of mechanics.",
        "Once encapsulation is solid, higher-level design becomes dramatically easier.",
      ],
    },
  ],
  categoryNames: ["Beginner", "Object-Oriented Programming"],
};
