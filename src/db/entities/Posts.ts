import "reflect-metadata";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
  JoinTable,
  ManyToMany,
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

  //TO DO: Column with related articles
}
