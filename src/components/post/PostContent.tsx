import Intro from "./content/Intro";
import Section from "./content/Section";
import CodeBlock from "./content/CodeBlock";
import Quote from "./content/Quote";
import BulletList from "./content/BulletList";
// import ImageBlock from "./content/ImageBlock";
import Summary from "./content/Summary";
import PostNavigation from "./PostNavigation";
import RelatedPosts from "./RelatedPosts";
import { Posts } from "@/db/entities/Posts";
import { ReactNode } from "react";
import { Sections } from "@/db/entities/Sections";

type Renderer = (section: Sections, index: number) => ReactNode;

const SECTION_COLORS = ["cyan", "purple", "pink"] as const;

const sectionRenderers = {
  section: (section: Sections, index: number) => (
    <Section
      key={index}
      variant={SECTION_COLORS[index % SECTION_COLORS.length]}
      header={section.header}
      content={section.content}
    />
  ),

  code_block: (section: Sections, index: number) => (
    <CodeBlock key={index} content={section.content} />
  ),

  quote: (section: Sections, index: number) => (
    <Quote key={index} content={section.content} />
  ),

  bullet_list: (section: Sections, index: number) => (
    <BulletList key={index} content={section.content} />
  ),

  image_block: (section: Sections, index: number) => (
    <></>
    // <ImageBlock key={index} {...section.content} />
  ),
} satisfies Record<Sections["type"], Renderer>;
export default function PostContent({ post }: { post: Posts }) {
  return (
    <article className="max-w-4xl">
      <div className="prose prose-invert max-w-none space-y-8">
        <Intro intro={post.intro} />

        {post.sections.map(
          (section, index) =>
            sectionRenderers[section.type]?.(section, index) ?? null
        )}

        <Summary summary={post.summary} />
      </div>

      <PostNavigation />
      <RelatedPosts />
    </article>
  );
}
