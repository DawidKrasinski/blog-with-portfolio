import { SectionType } from "../../entities/Sections";

export const testArticle = {
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
      content: {
        text: `
Building a portfolio website is a milestone for every developer.
I wanted something minimal, fast, and easy to extend with a blog.
This article explains how I approached the problem.
        `,
      },
    },

    {
      header: "Why I Chose This Stack",
      type: SectionType.BULLET_LIST,
      content: {
        items: [
          "Next.js for routing and performance",
          "TypeScript for safety and refactoring",
          "TypeORM for a clear domain model",
          "PostgreSQL for structured content",
        ],
      },
    },

    {
      header: "Project Structure",
      type: SectionType.CODE_BLOCK,
      content: {
        language: "bash",
        code: `
src/
 ├─ app/
 ├─ components/
 ├─ db/
 │   ├─ entities/
 │   ├─ seeds/
 │   └─ data/
 └─ styles/
        `,
      },
    },

    {
      header: "An Image From Early Design",
      type: SectionType.IMAGE_BLOCK,
      content: {
        src: "/images/portfolio-wireframe.png",
        alt: "Early wireframe of the portfolio website",
        caption: "First wireframe created in Figma",
      },
    },

    {
      header: "Lessons Learned",
      type: SectionType.QUOTE,
      content: {
        quote: "Simplicity scales better than premature abstractions.",
        author: "Personal note",
      },
    },

    {
      header: "Conclusion",
      type: SectionType.SECTION,
      content: {
        text: `
This project taught me a lot about backend design, content modeling,
and making decisions that balance flexibility with simplicity.
The architecture is ready to grow with new features in the future.
        `,
      },
    },
  ],
};
