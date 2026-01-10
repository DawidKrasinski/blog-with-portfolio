import "reflect-metadata";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from "typeorm";
import type { Relation } from "typeorm";
import { Sections } from "./Sections";
import { Categories } from "./Categories";

@Entity()
export class Posts extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  slug!: string;

  @Column()
  headline!: string;

  @Column()
  subheadline!: string;

  @Column({ type: "timestamp", nullable: true })
  published_date!: Date | null;

  @Column()
  reading_time!: string;

  @Column()
  intro!: string;

  @Column()
  summary!: string;

  @OneToMany(() => Sections, (section) => section.post, { cascade: true })
  sections!: Relation<Sections>[];

  @ManyToMany(() => Categories, (category) => category.post)
  @JoinTable()
  categories!: Relation<Categories>[];

  @ManyToMany(() => Posts)
  @JoinTable({
    name: "related_posts",
    joinColumn: {
      name: "post_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "related_post_id",
      referencedColumnName: "id",
    },
  })
  relatedPosts!: Posts[];
}
