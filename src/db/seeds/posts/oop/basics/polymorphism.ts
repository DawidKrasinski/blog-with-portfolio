import { SectionType } from "../../../../entities/Sections";
import { SeedPostInput } from "../../../seedPost";

export const polymorphism: SeedPostInput = {
  slug: "polymorphism",
  headline: "Polymorphism in Object-Oriented Programming",
  subheadline: "One interface, many behaviors",
  intro:
    "Polymorphism is often described as “many forms,” which is correct — but not very useful on its own. In practice, polymorphism is what allows you to write flexible code that does not care about concrete types, only about behavior. It is the natural result of good abstraction, not a feature you bolt on at the end.",
  relatedPostSlugs: ["introduction-to-oop"],
  summary:
    "This post introduces polymorphism as a practical design tool. You’ll learn the difference between compile-time and runtime polymorphism, get an intuitive introduction to the Liskov Substitution Principle, and see real-life analogies that make polymorphism easy to recognize and apply.",
  readingTime: "10 min",
  publishedDate: new Date("2025-12-26"),
  sections: [
    {
      header: "What Polymorphism Really Is",
      type: SectionType.SECTION,
      content: [
        "Polymorphism allows different objects to respond to the same message in different ways.",
        "The key idea is that the caller does not need to know *which concrete type* it is working with.",
        "If you find yourself writing large `if` or `switch` statements based on type, polymorphism is usually the missing piece.",
      ],
    },
    {
      header: "A Simple Intuition",
      type: SectionType.SECTION,
      content: [
        "Think about a remote control with a single `power` button.",
        "That button works for a TV, a radio, or a projector — but each device reacts differently.",
        "The user presses the same button. The behavior depends on the object.",
        "That is polymorphism.",
      ],
    },
    {
      header: "Compile-Time vs Runtime Polymorphism",
      type: SectionType.SECTION,
      content: [
        "Polymorphism comes in different forms, depending on when the decision about behavior is made.",
        "Understanding this distinction helps clarify what polymorphism really means in OOP.",
      ],
    },
    {
      header: "Compile-Time Polymorphism",
      type: SectionType.SECTION,
      content: [
        "Compile-time polymorphism is resolved before the program runs.",
        "It usually appears as method overloading or operator overloading.",
        "The compiler decides which implementation to use based on method signatures and types.",
        "This form of polymorphism improves readability but does not provide true behavioral flexibility.",
      ],
    },
    {
      header: "Example: Compile-Time Polymorphism",
      type: SectionType.CODE_BLOCK,
      content: [
        "class Printer {",
        "  print(value: string): void;",
        "  print(value: number): void;",
        "  print(value: any): void {",
        "    console.log(value);",
        "  }",
        "}",
      ],
    },
    {
      header: "Runtime Polymorphism",
      type: SectionType.SECTION,
      content: [
        "Runtime polymorphism is resolved while the program is running.",
        "The exact method implementation is chosen based on the actual object, not its declared type.",
        "This is the form of polymorphism that enables extensible, decoupled systems.",
      ],
    },
    {
      header: "Example: Runtime Polymorphism",
      type: SectionType.CODE_BLOCK,
      content: [
        "interface Shape {",
        "  area(): number;",
        "}",
        "",
        "class Rectangle implements Shape {",
        "  constructor(private width: number, private height: number) {}",
        "",
        "  area(): number {",
        "    return this.width * this.height;",
        "  }",
        "}",
        "",
        "class Circle implements Shape {",
        "  constructor(private radius: number) {}",
        "",
        "  area(): number {",
        "    return Math.PI * this.radius * this.radius;",
        "  }",
        "}",
      ],
    },
    {
      header: "Why This Is Polymorphism",
      type: SectionType.SECTION,
      content: [
        "Both `Rectangle` and `Circle` respond to the same message: `area()`.",
        "Code using `Shape` does not need to change when a new shape is added.",
        "This is the essence of open, extensible design.",
      ],
    },
    {
      header: "Liskov Substitution Principle (Introduction)",
      type: SectionType.SECTION,
      content: [
        "The Liskov Substitution Principle (LSP) states that objects of a subtype must be usable wherever objects of the base type are expected.",
        "In simpler terms: replacing one object with another should not break the program.",
        "LSP is not about inheritance syntax — it is about behavioral compatibility.",
      ],
    },
    {
      header: "LSP in Plain Language",
      type: SectionType.SECTION,
      content: [
        "If your code expects a `Shape`, any implementation of `Shape` must behave like a shape.",
        "It must not surprise the caller, throw unexpected errors, or violate assumptions.",
        "When LSP is violated, polymorphism becomes dangerous instead of powerful.",
      ],
    },
    {
      header: "A Real-Life Analogy for LSP",
      type: SectionType.SECTION,
      content: [
        "Imagine a power socket that promises 230V electricity.",
        "Any device plugged into it expects that contract to be honored.",
        "If one socket sometimes delivers 400V, it technically fits the shape — but it breaks the system.",
        "That socket violates LSP.",
      ],
    },
    {
      header: "Polymorphism vs Conditionals",
      type: SectionType.SECTION,
      content: [
        "Beginners often simulate polymorphism using conditionals based on type or flags.",
        "This approach centralizes behavior and makes change expensive.",
        "Polymorphism distributes behavior to where it belongs: the objects themselves.",
      ],
    },
    {
      header: "When Polymorphism Works Best",
      type: SectionType.BULLET_LIST,
      content: [
        "When behavior varies but intent stays the same",
        "When new variants are expected over time",
        "When code depends on abstractions",
        "When combined with encapsulation and composition",
      ],
    },
    {
      header: "Common Polymorphism Mistakes",
      type: SectionType.BULLET_LIST,
      content: [
        "Using inheritance without behavioral substitutability",
        "Breaking LSP by throwing errors or disabling methods",
        "Leaking concrete types into high-level code",
        "Overengineering polymorphism where variation is unlikely",
      ],
    },
    {
      header: "Core Takeaways",
      type: SectionType.BULLET_LIST,
      content: [
        "Polymorphism allows one interface to have many behaviors.",
        "Compile-time polymorphism is limited; runtime polymorphism is transformative.",
        "LSP defines when polymorphism is safe.",
        "Good polymorphism eliminates conditionals.",
        "Polymorphism emerges naturally from good design.",
      ],
    },
    {
      header: "Closing Thought",
      type: SectionType.SECTION,
      content: [
        "Polymorphism is not a trick — it is a consequence.",
        "When encapsulation, abstraction, and composition are done well, polymorphism appears almost automatically.",
        "At that point, your system becomes easier to extend than to break.",
      ],
    },
  ],
  categoryNames: ["Beginner", "Object-Oriented Programming"],
};
