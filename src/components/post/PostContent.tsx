import Intro from "./content/Intro";
import Section from "./content/Section";
import CodeBlock from "./content/CodeBlock";
import Quote from "./content/Quote";
import BulletList from "./content/BulletList";
import ImageBlock from "./content/ImageBlock";
import Summary from "./content/Summary";
import PostNavigation from "./PostNavigation";
import RelatedPosts from "./RelatedPosts";

export default function PostContent() {
  return (
    <article className="max-w-4xl">
      <div className="prose prose-invert max-w-none space-y-8">
        <Intro />
        <Section />
        <CodeBlock />
        <Quote />
        <Section variant="purple" />
        <BulletList />
        <ImageBlock />
        <Summary />
      </div>

      <PostNavigation />
      <RelatedPosts />
    </article>
  );
}
