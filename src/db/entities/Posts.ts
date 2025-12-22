import "reflect-metadata";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { Sections } from "./Sections";

@Entity()
export class Posts extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  slug: string;

  @Column()
  headline: string;

  @Column()
  subheadline: string;

  @Column()
  published_date: Date | false;

  @Column()
  reading_time: string;

  @Column()
  intro: string;

  @Column()
  reading_time: string;

  @Column()
  summary: string;

  @OneToMany()
  sections: Sections;

  // ADD COLUMN RELATED ARTICLES

  constructor(slug?: string) {
    super();
    this.slug = slug ?? "";
  }
}
