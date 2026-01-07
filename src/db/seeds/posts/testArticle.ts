import { SectionType } from "../../entities/Sections";
import { SeedPostInput } from "../seedPost";

export const testArticle: SeedPostInput = {
  slug: "how-i-built-my-portfolio",
  headline: "How I Built My Portfolio Website",
  subheadline: "From idea to production in a few weeks",
  intro:
    "In this article, I describe the process of building my personal portfolio website with a blog, focusing on architecture, design decisions, and mistakes I made along the way.",
  summary:
    "A practical breakdown of how a developer portfolio was designed and implemented using modern web technologies.",
  reading_time: "6 min",
  published_date: new Date(),

  sections: [
    {
      header: "Introduction",
      type: SectionType.SECTION,
      content: [
        `
Building a portfolio website is a milestone for every developer.
I wanted something minimal, fast, and easy to extend with a blog.
This article explains how I approached the problem.
        `,
        `
Building a portfolio website is a milestone for every developer.
I wanted something minimal, fast, and easy to extend with a blog.
This article explains how I approached the problem.
        `,
      ],
    },
    {
      header: "Why I Chose This Stack",
      type: SectionType.BULLET_LIST,
      content: [
        "Next.js for routing and performance",
        "TypeScript for safety and refactoring",
        "TypeORM for a clear domain model",
        "PostgreSQL for structured content",
      ],
    },
    {
      header: "Project Structure",
      type: SectionType.CODE_BLOCK,
      content: [
        "import { Sections } from '@/db/entities/Sections';",
        "",
        "type Renderer = (section: Sections, index: number) => ReactNode",
        "",
        `const SECTION_COLORS = ["cyan", "purple", "pink"] as const;`,
        "",
        `const sectionRenderers = {`,
        `   section: (section: Sections, index: number) => (`,
        `     <Section key={index}`,
        `       variant={SECTION_COLORS[index % SECTION_COLORS.length]}`,
        `       header={section.header}`,
        `       content={section.content}`,
        `     />`,
        `   ),`,
      ],
    },
    {
      header: "Lessons Learned",
      type: SectionType.QUOTE,
      content: ["Simplicity scales better than premature abstractions."],
    },
    {
      header: "Conclusion",
      type: SectionType.SECTION,
      content: [
        `
This project taught me a lot about backend design, content modeling,
and making decisions that balance flexibility with simplicity.
The architecture is ready to grow with new features in the future.
        `,
      ],
    },
  ],

  categoryIds: [1, 2, 3], // dodane kategorie
};
