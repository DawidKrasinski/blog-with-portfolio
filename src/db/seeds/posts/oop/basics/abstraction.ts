import { SectionType } from "../../../../entities/Sections";
import { SeedPostInput } from "../../../seedPost";

export const abstraction: SeedPostInput = {
  slug: "abstraction",
  headline: "Abstraction in Object-Oriented Programming",
  subheadline: "Exposing intent, not implementation",
  intro:
    "Abstraction is one of the most powerful — and most misunderstood — ideas in Object-Oriented Programming. It is often confused with simplification, or treated as a purely academic concept. In reality, abstraction is a practical tool for managing complexity, enabling change, and writing code that survives long-term evolution.",
  relatedPostIds: [],
  summary:
    "This post explains abstraction as a deliberate design choice, not just removing details. We’ll compare abstraction with simplification, explore interfaces and abstract classes, and explain why programming to an interface is one of the most important habits of professional developers.",
  readingTime: "10 min",
  publishedDate: null,
  sections: [
    {
      header: "What Abstraction Really Is",
      type: SectionType.SECTION,
      content: [
        "Abstraction is about defining *what* a component does without committing to *how* it does it.",
        "A good abstraction exposes intent and hides mechanisms. It allows you to reason about a system at a higher level.",
        "Without abstraction, every part of the system leaks low-level details, forcing you to keep too much information in your head at once.",
      ],
    },
    {
      header: "Abstraction vs Simplification",
      type: SectionType.SECTION,
      content: [
        "Abstraction is often described as simplification, but this is misleading.",
        "Simplification removes details. Abstraction *organizes* details behind a stable boundary.",
        "You can have a simplified system that is still poorly abstracted — and therefore fragile.",
        "Good abstraction may actually hide very complex logic behind a simple, meaningful interface.",
      ],
    },
    {
      header: "A Practical Analogy",
      type: SectionType.SECTION,
      content: [
        "Consider driving a car. The steering wheel, pedals, and indicators form an abstraction.",
        "You don’t know how the engine works internally — and you don’t need to.",
        "The abstraction allows millions of people to drive different cars using the same mental model.",
      ],
    },
    {
      header: "Abstraction in Code",
      type: SectionType.SECTION,
      content: [
        "In code, abstraction appears as interfaces, abstract classes, and well-defined public APIs.",
        "These constructs allow multiple implementations to exist behind a shared contract.",
        "The consumer depends on the contract, not on a concrete implementation.",
      ],
    },
    {
      header: "Interfaces: Pure Contracts",
      type: SectionType.CODE_BLOCK,
      content: [
        "interface PaymentProcessor {",
        "  pay(amount: number): void;",
        "}",
      ],
    },
    {
      header: "What an Interface Represents",
      type: SectionType.SECTION,
      content: [
        "An interface defines *capabilities*, not behavior.",
        "It answers the question: “What can this thing do?”",
        "Interfaces are ideal when you want to enforce consistency across unrelated implementations.",
      ],
    },
    {
      header: "Abstract Classes: Shared Structure and Rules",
      type: SectionType.CODE_BLOCK,
      content: [
        "abstract class Logger {",
        "  abstract log(message: string): void;",
        "",
        "  protected format(message: string): string {",
        "    return `[LOG] ${message}`;",
        "  }",
        "}",
      ],
    },
    {
      header: "Interfaces vs Abstract Classes",
      type: SectionType.BULLET_LIST,
      content: [
        "Use interfaces to define *what* must be done",
        "Use abstract classes when implementations share logic",
        "Interfaces favor flexibility and composition",
        "Abstract classes favor controlled extension",
      ],
    },
    {
      header: "Programming to an Interface",
      type: SectionType.SECTION,
      content: [
        "Programming to an interface means that your high-level code depends on abstractions, not concrete classes.",
        "This principle dramatically reduces coupling and makes systems easier to test and extend.",
        "It also allows you to swap implementations without changing the code that uses them.",
      ],
    },
    {
      header: "Example: Depending on an Abstraction",
      type: SectionType.CODE_BLOCK,
      content: [
        "class CheckoutService {",
        "  constructor(private paymentProcessor: PaymentProcessor) {}",
        "",
        "  checkout(amount: number): void {",
        "    this.paymentProcessor.pay(amount);",
        "  }",
        "}",
      ],
    },
    {
      header: "Why This Matters",
      type: SectionType.SECTION,
      content: [
        "CheckoutService does not care whether payment is processed via card, PayPal, or crypto.",
        "This is not accidental — it is the direct result of programming to an interface.",
        "Testing becomes easier, changes become safer, and complexity stays localized.",
      ],
    },
    {
      header: "Common Abstraction Mistakes",
      type: SectionType.BULLET_LIST,
      content: [
        "Creating abstractions too early",
        "Abstracting implementation details instead of intent",
        "Designing abstractions around current use cases only",
        "Leaking low-level details through the interface",
      ],
    },
    {
      header: "Core Takeaways",
      type: SectionType.BULLET_LIST,
      content: [
        "Abstraction exposes intent, not mechanics.",
        "Abstraction is not the same as simplification.",
        "Interfaces define contracts; abstract classes define shared behavior.",
        "Programming to an interface reduces coupling.",
        "Good abstractions make change easier, not harder.",
      ],
    },
    {
      header: "What Comes Next",
      type: SectionType.SECTION,
      content: [
        "With encapsulation and abstraction in place, we can now talk about inheritance and composition.",
        "Next, we’ll examine when inheritance helps — and when it silently harms your design.",
      ],
    },
  ],
  categoryIds: [],
};
