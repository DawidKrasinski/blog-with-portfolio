import "reflect-metadata";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToMany,
} from "typeorm";
import type { Relation } from "typeorm";
import { Posts } from "./Posts";

export enum Color {
  Cyan = "cyan",
  Purple = "purple",
  Pink = "pink",
}

@Entity()
export class Categories extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  position!: number;

  @Column({ type: "enum", enum: Color })
  color!: Color;

  @ManyToMany(() => Posts, (post) => post.categories)
  post!: Relation<Posts>[];
}
