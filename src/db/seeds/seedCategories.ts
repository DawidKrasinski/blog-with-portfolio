import "reflect-metadata";
import { DataSource } from "typeorm";
import { Categories, Color } from "../entities/Categories";
import { getDataSource } from "../data-source";

const tags = [
  { name: "Beginner", color: Color.Cyan },
  { name: "Intermediate", color: Color.Purple },
  { name: "Advanced", color: Color.Pink },
  { name: "Object-Oriented Programming", color: Color.Cyan },
  { name: "Newest", color: Color.Cyan },
  { name: "Most Popular", color: Color.Purple },
  { name: "Highlighted", color: Color.Pink },
];

export async function seedCategories() {
  await getDataSource();

  console.log("🌱 Seeding categories...");

  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i];

    const exists = await Categories.findOne({
      where: { name: tag.name },
    });

    if (exists) {
      console.log(`⏭️  Skipping ${tag.name}`);
      continue;
    }

    const category = Categories.create({
      name: tag.name,
      color: tag.color,
      position: i + 1,
    });

    await category.save();
    console.log(`✅ Created ${tag.name}`);
  }

  console.log("🌱 Categories seeded");
}
