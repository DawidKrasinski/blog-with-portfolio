import { SectionType } from "../entities/Sections";
import { getDataSource } from "../data-source";
import { Posts } from "../entities/Posts";
import { Sections } from "../entities/Sections";

type SeedPostInput = {
  slug: string;
  headline: string;
  subheadline: string;
  intro: string;
  summary: string;
  reading_time: string;
  published_date?: Date | null;
  sections: {
    header: string;
    type: SectionType;
    content: string[]; // Every element in array is different paragraph or code line
  }[];
};

export async function seedPost(data: SeedPostInput) {
  const dataSource = await getDataSource();

  await dataSource.transaction(async (manager) => {
    const postRepo = manager.getRepository(Posts);
    const sectionRepo = manager.getRepository(Sections);

    // ===== UPSERT POST =====
    let post = await postRepo.findOne({
      where: { slug: data.slug },
      relations: ["sections"],
    });

    if (!post) {
      post = postRepo.create({
        slug: data.slug,
        headline: data.headline,
        subheadline: data.subheadline,
        intro: data.intro,
        summary: data.summary,
        reading_time: data.reading_time,
        published_date: data.published_date ?? null,
      });
    } else {
      Object.assign(post, {
        headline: data.headline,
        subheadline: data.subheadline,
        intro: data.intro,
        summary: data.summary,
        reading_time: data.reading_time,
        published_date: data.published_date ?? null,
      });
    }

    post = await postRepo.save(post);

    // ===== DELETE OLD SECTIONS =====
    await sectionRepo.delete({ post: { id: post.id } });

    // ===== CREATE SECTIONS =====
    for (const [index, section] of data.sections.entries()) {
      const dbSection = sectionRepo.create({
        post,
        header: section.header,
        type: section.type,
        content: section.content,
        position: index,
      });

      await sectionRepo.save(dbSection);
    }
  });
}
