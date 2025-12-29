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
  sections!: Sections[];

  // TODO: Add column for related articles

  // constructor(init?: Partial<Posts>) {
  //   super();
  //   if (init) {
  //     Object.assign(this, init);
  //   }
  // }
}
