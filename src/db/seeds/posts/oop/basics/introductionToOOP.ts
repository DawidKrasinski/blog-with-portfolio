import { SectionType } from "../../../../entities/Sections";
import { SeedPostInput } from "../../../seedPost";

export const introductionToOOP: SeedPostInput = {
  slug: "introduction-to-oop",
  headline: "Introduction to Object-Oriented Programming",
  subheadline: "OOP as a mindset, not a syntax feature",
  intro:
    "Object-Oriented Programming is often introduced as a set of keywords: class, object, inheritance, polymorphism. That’s technically correct, but deeply misleading. OOP is not about syntax — it’s about how you think about problems, how you model reality in code, and how you protect yourself from your own future mistakes.",
  relatedPostSlugs: [
    "abstraction",
    "encapsulation",
    "inheritance-powerful-and-dangerous",
    "polymorphism",
  ],
  summary:
    "This post introduces Object-Oriented Programming as a way of thinking rather than a collection of language features. We’ll compare OOP with procedural programming, define core concepts like objects and classes in a precise way, and explain why exposing raw data is one of the most common design mistakes beginners make.",
  readingTime: "9 min",
  publishedDate: null,
  sections: [
    {
      header: "OOP as a Way of Thinking",
      type: SectionType.SECTION,
      content: [
        "When beginners learn OOP, they often focus on *how* to write classes instead of *why* they exist. This leads to code that technically uses OOP syntax but still thinks procedurally.",
        'OOP is fundamentally about modeling *responsibility*. Instead of asking "what should this function do?", you start asking "who should be responsible for this behavior?". This small shift has massive consequences for code structure.',
        "In well-designed OOP code, logic is not scattered across unrelated functions. It lives close to the data it operates on. This is not accidental — it’s the core idea.",
        "Thinking in OOP means accepting that your code is a living system. It will grow, change, and be used in ways you didn’t predict. OOP gives you tools to control that chaos.",
      ],
    },
    {
      header: "Procedural Programming vs Object-Oriented Programming",
      type: SectionType.SECTION,
      content: [
        "Procedural programming organizes code around *actions*. You have data structures, and you have functions that operate on them. This works well for small problems, scripts, and linear flows.",
        "The problem starts when the system grows. Data becomes shared, functions depend on internal structure, and small changes ripple through the entire codebase.",
        'OOP organizes code around *entities*. An entity owns its data and exposes behavior through a controlled interface. This drastically reduces the number of places that "know too much".',
        "OOP is not automatically better. It is better specifically when the problem domain has long-lived entities with evolving behavior — which describes most real applications.",
      ],
    },
    {
      header: "Object, Class, State, and Behavior",
      type: SectionType.SECTION,
      content: [
        "These terms are often explained in a very shallow way, so let’s be precise.",
        "A **class** is a blueprint that defines what data exists and what operations are allowed on that data. More importantly, it defines *rules*.",
        "An **object** is a concrete instance that represents a specific entity in your system. Objects are not just data holders — they are decision makers.",
        "**State** is the internal data of an object at a given moment in time. State should almost always be private.",
        "**Behavior** is what an object can do. Behavior is the only legitimate way to affect or observe state.",
      ],
    },
    {
      header: "A Simple but Meaningful Example",
      type: SectionType.SECTION,
      content: [
        "Let’s look at a minimal example that already demonstrates correct OOP thinking.",
        "Notice that we are not exposing data directly. The object controls how it changes.",
      ],
    },
    {
      header: "Account Example",
      type: SectionType.CODE_BLOCK,
      content: [
        "class BankAccount {",
        "  private balance: number;",
        "",
        "  constructor(initialBalance: number) {",
        "    this.balance = initialBalance;",
        "  }",
        "",
        "  deposit(amount: number): void {",
        "    if (amount <= 0) {",
        '      throw new Error("Deposit amount must be positive");',
        "    }",
        "    this.balance += amount;",
        "  }",
        "",
        "  withdraw(amount: number): void {",
        "    if (amount > this.balance) {",
        '      throw new Error("Insufficient funds");',
        "    }",
        "    this.balance -= amount;",
        "  }",
        "",
        "  getBalance(): number {",
        "    return this.balance;",
        "  }",
        "}",
      ],
    },
    {
      header: "Why This Matters",
      type: SectionType.SECTION,
      content: [
        "At first glance this may look like unnecessary ceremony compared to a simple object literal.",
        "But this class enforces *invariants*. A negative balance cannot exist unless the class itself allows it.",
        "This means that the correctness of the system is localized. You don’t need to inspect the entire codebase to know how balance changes.",
        "This is one of the most underestimated benefits of OOP.",
      ],
    },
    {
      header: "Why Data Should Not Be Naked",
      type: SectionType.SECTION,
      content: [
        "One of the most common beginner mistakes is exposing raw data structures and letting the rest of the system manipulate them freely.",
        "This leads to what is sometimes called *anemic models* — objects that have state but no behavior.",
        "Naked data creates implicit contracts. Every place that touches the data assumes something about its structure and validity.",
        "Once those assumptions spread, refactoring becomes dangerous and expensive.",
      ],
    },
    {
      header: "What Naked Data Looks Like",
      type: SectionType.CODE_BLOCK,
      content: [
        "type Account = {",
        "  balance: number;",
        "};",
        "",
        "function withdraw(account: Account, amount: number) {",
        "  account.balance -= amount;",
        "}",
      ],
    },
    {
      header: "The Problem",
      type: SectionType.SECTION,
      content: [
        "There is nothing stopping this function from producing invalid state.",
        "Worse, *every* function that touches `Account` must now implement its own rules.",
        "This is not flexibility. This is loss of control.",
      ],
    },
    {
      header: "Core Takeaways",
      type: SectionType.BULLET_LIST,
      content: [
        "OOP is about responsibility, not syntax.",
        "Behavior should live next to the data it operates on.",
        "Classes exist to protect invariants.",
        "Objects should control their own state.",
        "Naked data leads to fragile systems.",
      ],
    },
    {
      header: "Looking Ahead",
      type: SectionType.SECTION,
      content: [
        "In the next posts, we’ll break down the individual pillars of OOP — starting with encapsulation.",
        "Each concept will be treated not as a definition to memorize, but as a tool to solve concrete design problems.",
        "If you understand *why* these ideas exist, the syntax becomes trivial.",
      ],
    },
  ],
  categoryNames: ["Beginner", "Object-Oriented Programming"],
};
