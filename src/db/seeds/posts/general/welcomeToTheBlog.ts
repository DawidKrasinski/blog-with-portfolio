import { SectionType } from "../../../../db/entities/Sections";
import { SeedPostInput } from "../../seedPost";

export const welcomeToTheBlog: SeedPostInput = {
  slug: "welcome-to-the-blog",
  headline: "Welcome to My Learning Blog",
  subheadline: "Exploring advanced concepts in a beginner-friendly way",
  intro:
    "This blog is my personal space to explore programming, computer science, and technology. I write not just to record what I learn, but to explain it in a way that beginners can follow while giving advanced learners a concise, high-level refresher.",
  relatedPostSlugs: ["introduction-to-oop"],
  summary:
    "A friendly introduction to the blog: what it’s about, how to use it, and what to expect. This post explains the approach, the topics, and the structure, so readers can navigate effectively whether they’re just starting or looking for advanced insights.",
  readingTime: "5 min",
  publishedDate: null,
  sections: [
    {
      header: "Why This Blog Exists",
      type: SectionType.SECTION,
      content: [
        "I learn best by teaching. Writing about what I’m exploring forces me to understand it deeply and clearly.",
        "This blog is a way to document my learning journey while making it accessible to others. I focus on translating advanced concepts into plain English and practical examples.",
        "For beginners: the goal is to make complicated ideas digestible. For advanced readers: think of this as a fast, structured review of core principles before diving into harder topics.",
      ],
    },
    {
      header: "Topics You’ll Find Here",
      type: SectionType.SECTION,
      content: [
        "Currently, I’ve started with Object-Oriented Programming — covering everything from basic concepts to advanced design principles.",
        "But the blog will evolve as my interests evolve. Future topics may include:",
      ],
    },
    {
      header: "Possible Topics Ahead",
      type: SectionType.BULLET_LIST,
      content: [
        "Deep explorations of software design and architecture, including advanced patterns and Domain-Driven Design",
        "High-level, rigorous approaches to algorithms, data structures, and performance optimization",
        "Professional testing strategies and ensuring system correctness at scale",
        "Advanced applications of artificial intelligence and machine learning concepts",
        "Complex systems in web and backend development, including architecture, scalability, and maintainability",
        "Any other technical or programming challenges I find fascinating and want to understand thoroughly",
      ],
    },
    {
      header: "How the Blog Is Organized",
      type: SectionType.SECTION,
      content: [
        "Each topic is organized into posts, and posts are tagged with categories. You can use these categories to filter and explore related posts.",
        "Courses or series of posts (like the OOP series) are grouped in categories for easier navigation and learning.",
        "I may edit posts later if I discover better explanations, add new insights, or clarify mistakes.",
      ],
    },
    {
      header: "Engage and Contribute",
      type: SectionType.SECTION,
      content: [
        'If something is unclear, you notice an error, or you have ideas for new posts, you can reach me via the footer "Contact" section or using the social buttons on the right (LinkedIn, GitHub, portfolio).',
        "Your feedback helps me improve the blog and ensures the content stays accurate and useful.",
      ],
    },
    {
      header: "Navigation and Related Content",
      type: SectionType.SECTION,
      content: [
        "At the bottom of each post, you’ll find:",
        "- Previous / Next post navigation",
        "- Related posts recommendations",
        "This makes it easy to follow a learning path or jump between connected topics.",
      ],
    },
    {
      header: "What to Expect",
      type: SectionType.SECTION,
      content: [
        "The blog will always focus on understanding concepts deeply, not just memorizing syntax.",
        "I aim for high knowledge density while keeping explanations approachable, with examples, analogies, and code.",
        "Topics may get complex quickly, but the goal is always clarity and practical understanding.",
      ],
    },
    {
      header: "Core Takeaways",
      type: SectionType.BULLET_LIST,
      content: [
        "This is a learning blog: exploring, explaining, and documenting knowledge.",
        "Beginners get clear, step-by-step explanations; advanced readers get concise, high-level reviews.",
        "Topics evolve based on my learning journey — from OOP to AI, algorithms, testing, and beyond.",
        "Posts are organized by categories, with navigation and related content for easy exploration.",
        "Feedback and ideas are welcome via the contact section or social links.",
      ],
    },
  ],
  categoryNames: ["Highlighted"],
};
