import "reflect-metadata";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { Posts } from "./Posts";

@Entity()
export class Sections extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  header!: string;

  @Column()
  position!: number;

  @ManyToOne(() => Posts, (post) => post.sections)
  post!: Posts;

  constructor(init?: Partial<Sections>) {
    super();
    if (init) {
      Object.assign(this, init);
    }
  }
}
