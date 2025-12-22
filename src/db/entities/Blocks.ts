import "reflect-metadata";
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

export enum BlockType {
  BULLET_LIST = "bullet_list",
  SECTION = "section",
  IMAGE_BLOCK = "image_block",
  CODE_BLOCK = "code_block",
  QUOTE = "quote",
}

@Entity()
export class Blocks extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  header!: string;

  @Column()
  position!: number;

  @Column({ type: "enum", enum: BlockType })
  type!: BlockType;

  @Column({ type: "simple-json" })
  content!: any;

  constructor(init?: Partial<Blocks>) {
    super();
    if (init) {
      Object.assign(this, init);
    }
  }
}
