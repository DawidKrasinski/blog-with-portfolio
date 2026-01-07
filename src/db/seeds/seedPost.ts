import { SectionType, Sections } from "../entities/Sections";
import { Posts } from "../entities/Posts";
import { Categories } from "../entities/Categories";
import { getDataSource } from "../data-source";

export type SeedPostInput = {
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
    content: string[];
  }[];
  categoryIds?: number[]; // ID istniejących kategorii
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
      relations: ["sections", "categories"],
    });

    const postData = {
      slug: data.slug,
      headline: data.headline,
      subheadline: data.subheadline,
      intro: data.intro,
      summary: data.summary,
      reading_time: data.reading_time,
      published_date: data.published_date ?? null,
    };

    if (post) {
      post = postRepo.merge(post, postData);
    } else {
      post = postRepo.create(postData);
    }

    post = await postRepo.save(post);

    // ===== RECREATE SECTIONS =====
    if (post.sections.length > 0) {
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

    // ===== RELACJE Z ISTNIEJĄCYMI KATEGORIAMI =====
    if (data.categoryIds && data.categoryIds.length > 0) {
      const categories = await categoryRepo.findByIds(data.categoryIds);
      post.categories = categories;
      await postRepo.save(post);
    }
  });
}
