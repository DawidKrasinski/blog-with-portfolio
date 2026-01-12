import "reflect-metadata";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import type { Relation } from "typeorm";
import { Posts } from "./Posts";

export enum SectionType {
  BULLET_LIST = "bullet_list", // a list with different elements
  SECTION = "section", // a section with text
  IMAGE_BLOCK = "image_block", // a section with image
  CODE_BLOCK = "code_block", // a section with code
  QUOTE = "quote", // a section with quote
}
@Entity()
export class Sections extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  header!: string;

  @Column()
  position!: number;

  @Column({ type: "enum", enum: SectionType })
  type!: SectionType;

  @Column({ type: "json" })
  content!: string[];

  @ManyToOne(() => Posts, (post) => post.sections)
  post!: Relation<Posts>;
}
