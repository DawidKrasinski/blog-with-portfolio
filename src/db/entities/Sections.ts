import "reflect-metadata";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
  Relation,
} from "typeorm";
import { Posts } from "./Posts";

export enum SectionType {
  BULLET_LIST = "bullet_list",
  SECTION = "section",
  IMAGE_BLOCK = "image_block",
  CODE_BLOCK = "code_block",
  QUOTE = "quote",
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
  post!: Relation<Posts>[]; // Dziwne rzeczy
}
