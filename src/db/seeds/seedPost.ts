import { SectionType, Sections } from "../entities/Sections";
import { Posts } from "../entities/Posts";
import { Categories } from "../entities/Categories";
import { getDataSource } from "../data-source";
import { In } from "typeorm";

export type SeedPostInput = {
  slug: string;
  headline: string;
  subheadline: string;
  intro: string;
  relatedPostSlugs: string[];
  summary: string;
  readingTime: string;
  publishedDate?: Date | null;
  sections: {
    header: string;
    type: SectionType;
    content: string[];
  }[];
  categoryNames?: string[];
};

export async function seedPost(data: SeedPostInput) {
  const dataSource = await getDataSource();

  await dataSource.transaction(async (manager) => {
    const postRepo = manager.getRepository(Posts);
    const sectionRepo = manager.getRepository(Sections);
    const categoryRepo = manager.getRepository(Categories);

    // ===== UPSERT POST =====
    let post = await postRepo.findOne({
      where: { slug: data.slug },
      relations: ["sections", "categories", "relatedPosts"],
    });

    const postData = {
      slug: data.slug,
      headline: data.headline,
      subheadline: data.subheadline,
      intro: data.intro,
      summary: data.summary,
      reading_time: data.readingTime,
      published_date: data.publishedDate ?? null,
    };

    if (post) {
      postRepo.merge(post, postData);
    } else {
      post = postRepo.create(postData);
    }

    post = await postRepo.save(post);

    // ===== RECREATE SECTIONS =====
    if (post.sections?.length) {
      await sectionRepo.delete({ post: { id: post.id } });
    }

    const sectionsToInsert = data.sections.map((section, index) =>
      sectionRepo.create({
        post,
        header: section.header,
        type: section.type,
        content: section.content,
        position: index,
      })
    );

    await sectionRepo.save(sectionsToInsert);

    // ===== CATEGORIES =====
    if (data.categoryNames?.length) {
      post.categories = await categoryRepo.findBy({
        name: In(data.categoryNames),
      });
      await postRepo.save(post);
    }

    // ===== RELATED POSTS =====
    if (data.relatedPostSlugs?.length) {
      const relatedPosts = await postRepo.findBy({
        slug: In(data.relatedPostSlugs),
      });
      post.relatedPosts = relatedPosts;
    } else {
      post.relatedPosts = [];
    }

    await postRepo.save(post);
  });
}
