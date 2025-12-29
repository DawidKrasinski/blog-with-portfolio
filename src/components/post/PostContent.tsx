import Intro from "./content/Intro";
import Section from "./content/Section";
import CodeBlock from "./content/CodeBlock";
import Quote from "./content/Quote";
import BulletList from "./content/BulletList";
import ImageBlock from "./content/ImageBlock";
import Summary from "./content/Summary";
import PostNavigation from "./PostNavigation";
import RelatedPosts from "./RelatedPosts";
import { Posts } from "@/db/entities/Posts";

export default function PostContent({ post }: { post: Posts }) {
  return (
    <article className="max-w-4xl">
      <div className="prose prose-invert max-w-none space-y-8">
        <Intro intro={post.intro} />
        {/* {post.sections.map((section, index) => {
          switch (section.type) {
            case "section":
              return (
                <Section
                  key={index}
                  header={section.header}
                  content={section.content}
                />
              );
            case "code_block":
              return <CodeBlock key={index} content={section.content} />;
            case "quote":
              return <Quote key={index} content={section.content} />;
            // case "bullet_list":
            //   return <BulletList key={index} content={section.content.items} />;
            case "image_block":
              return <ImageBlock key={index} {...section.content} />;
            default:
              return null;
          }
        })} */}

        <Summary summary={post.summary} />
      </div>

      <PostNavigation />
      <RelatedPosts />
    </article>
  );
}
