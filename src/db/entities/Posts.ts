import "reflect-metadata";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
  JoinTable,
  ManyToMany,
  Relation,
} from "typeorm";
import { Sections } from "./Sections";
import { Categories } from "./Categories";

@Entity()
export class Posts extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 255 })
  slug!: string;

  @Column({ type: "varchar", length: 255 })
  headline!: string;

  @Column({ type: "varchar", length: 255 })
  subheadline!: string;

  @Column({ type: "timestamp", nullable: true })
  published_date!: Date | null;

  @Column({ type: "int", default: 0 })
  views!: number;

  @Column({ type: "varchar", length: 50 })
  reading_time!: string;

  @Column({ type: "text" })
  intro!: string;

  @Column({ type: "text" })
  summary!: string;

  @OneToMany(() => Sections, (section) => section.post, { cascade: true })
  sections!: Relation<Sections>[];

  @ManyToMany(() => Categories, (category) => category.post)
  @JoinTable()
  categories!: Relation<Categories>[];

  @ManyToMany(() => Posts)
  @JoinTable({
    name: "post_related_posts",
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
